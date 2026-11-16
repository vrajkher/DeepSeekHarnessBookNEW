#!/usr/bin/env python3
"""Integrate/verify the 66 story-to-technical scene pictures without rewriting prose.

Usage: python tools/scene-images.py [--write]
No network access or image generation is performed by this script.
"""
import argparse
import hashlib
import json
import re
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFEST = ROOT / 'book/images/scenes/manifest.json'
BLOCK = re.compile(r'\n<!-- scene-image:\d+:\d+:begin -->\n.*?<!-- scene-image:\d+:\d+:end -->\n', re.S)
EXPECTED = [6, 9, 8, 14, 5, 9, 8, 7]


def blob_sha(text):
    data = text.encode('utf-8')
    return hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()


def block(scene):
    c, n = scene['chapter'], scene['scene']
    alt = f"પ્રકરણ {c}, દૃશ્ય {n}: {scene['title']} — {scene['technical']}"
    alt = re.sub(r'[\[\]`]', '', alt)
    image = Path(scene['image']).relative_to('book').as_posix()
    return (f'\n<!-- scene-image:{c}:{n}:begin -->\n'
            f'<a id="scene-{c}-{n}"></a>\n\n'
            f'![{alt}]({image})\n\n'
            f'> **ચિત્ર {c}.{n} — વાર્તા ↔ ટેકનિક:** {scene["caption"]}\n'
            f'<!-- scene-image:{c}:{n}:end -->\n')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--write', action='store_true', help='Insert/update only marked image blocks')
    args = parser.parse_args()
    manifest = json.loads(MANIFEST.read_text(encoding='utf-8'))
    readme = (ROOT / 'README.md').read_text(encoding='utf-8')
    readme_original = re.sub(r'\n<!-- scene-image-index:begin -->\n.*?<!-- scene-image-index:end -->\n', '', readme, flags=re.S)
    assert blob_sha(readme_original) == manifest['originalReadmeBlobSha'], 'Original README text changed'
    scenes = manifest['scenes']
    assert len(scenes) == 66, 'Expected 66 scenes'
    assert [Counter(s['chapter'] for s in scenes)[i] for i in range(8)] == EXPECTED
    assert len({s['image'] for s in scenes}) == 66, 'Duplicate image paths'
    assert len({(s['chapter'], s['scene']) for s in scenes}) == 66
    failures = []
    for file in sorted({s['file'] for s in scenes}):
        path = ROOT / file
        text = path.read_text(encoding='utf-8')
        original = BLOCK.sub('', text)
        group = [s for s in scenes if s['file'] == file]
        assert blob_sha(original) == group[0]['originalBlobSha'], f'Original text changed: {file}'
        headings = re.findall(r'^## દૃશ્ય \d+ — .*$', original, re.M)
        assert headings == [s['heading'] for s in group], f'Scene coverage mismatch: {file}'
        intended = original
        for scene in group:
            assert original.count(scene['heading'] + '\n') == 1
            intended = intended.replace(scene['heading'] + '\n', scene['heading'] + '\n' + block(scene), 1)
        if args.write:
            path.write_text(intended, encoding='utf-8')
            text = intended
        if text != intended:
            failures.append(f'Missing/stale image blocks: {file}; run --write')
        assert blob_sha(BLOCK.sub('', text)) == group[0]['originalBlobSha']
        for scene in group:
            image = ROOT / scene['image']
            if not image.is_file():
                failures.append(f'Missing image: {scene["image"]}')
                continue
            data = image.read_bytes()
            if not (data[:4] == b'RIFF' and data[8:12] == b'WEBP'):
                failures.append(f'Invalid WebP: {image}')
            # Pillow is optional: signature/coverage/prose checks work with stdlib alone.
            try:
                from PIL import Image
            except ImportError:
                pass
            else:
                with Image.open(image) as im:
                    if im.width < 1000 or im.height < 600:
                        failures.append(f'Image too small: {image}')
                    im.load()
    assert not list((ROOT / 'book/images/scenes').rglob('*.png')), 'Remove working PNG copies from repository'
    print('scene-images: 8 chapters; 66 scene blocks; original chapter text matches source Git blobs')
    if failures:
        for failure in failures:
            print('ERROR:', failure)
        raise SystemExit(1)
    print('scene-images: all 66 WebP files valid; coverage complete')


if __name__ == '__main__':
    main()
