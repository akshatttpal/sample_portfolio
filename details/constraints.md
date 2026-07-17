# Constraints and Known Limitations

## GSAP Licensing

| Plugin | Status | Impact |
|--------|--------|--------|
| ScrollSmoother | Trial | May not be used in production/hosted sites without Club membership |
| SplitText | Trial | Same restriction |
| ScrollTrigger | Standard | Included with GSAP npm package |
| Core GSAP | Standard | No restriction |

The README notes that trial plugins cannot be hosted. For production, either:
- Purchase GSAP Club membership and use official plugins, or
- Replace ScrollSmoother/SplitText with alternative implementations

Type declarations for trial plugins live in `src/types/gsap-trial.d.ts`.

## 3D Model Protection

| Constraint | Detail |
|------------|--------|
| Runtime decryption | Model password (`MyCharacter12`) is in client-side code |
| Security | Obfuscation only — not true protection against determined users |
| Encrypted file | Must be present at `/models/character.enc` |
| HDR file | `char_enviorment.hdr` required for environment lighting |

## Responsive Limitations

| Feature | Desktop (>1024px) | Mobile (≤1024px) |
|---------|-------------------|------------------|
| 3D Character side panel | Yes | No — embedded in landing |
| TechStack section | Yes | Hidden |
| ScrollSmoother nav scroll | Yes | Native anchor scroll |
| SplitText animations | Yes (>900px) | Disabled |
| WhatIDo cards | Hover | Tap to expand |

## Missing Assets

The following are referenced in code but not present in `public/`:

- Work carousel images (`/images/*.png`)
- Tech stack textures (`/images/react2.webp`, etc.)
- Preview image for README

Deploying without these will result in broken images in Work and TechStack sections.

## Performance

| Area | Consideration |
|------|---------------|
| 3D character | WebGL renderer runs continuously via `requestAnimationFrame` |
| TechStack physics | 30 Rapier rigid bodies + post-processing |
| Lazy loading | `CharacterModel`, `MainContainer`, `TechStack` are code-split |
| ScrollTrigger | Multiple timelines recreated on resize |

## Browser Requirements

- WebGL support (for character and TechStack)
- Web Crypto API (for model decryption)
- Modern ES modules support

## Template Remnants

Some content and branding still reflect the original portfolio template. See [customization-status.md](./customization-status.md) for the full list.
