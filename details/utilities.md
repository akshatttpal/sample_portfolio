# Utilities

## GSAP Utilities

### `initialFX.ts`

Post-loading intro animations. Called when the loading screen completes.

| Animation target | Effect |
|-----------------|--------|
| `body` | Background color → `#0a0e17` |
| `.landing-info h3`, `.landing-intro h2/h1` | SplitText char reveal (blur + y) |
| `.landing-h2-info`, `.landing-h2-1/2` | Looping title text swap |
| `.header`, `.icons-section`, `.nav-fade` | Fade in |
| ScrollSmoother | `paused(false)` — enables smooth scroll |

### `splitText.ts`

Scroll-triggered text reveals for content sections.

| Target | Split type | Trigger |
|--------|-----------|---------|
| `.para` | lines, words | Parent section enters viewport |
| `.title` | chars, lines | Parent section enters viewport |

- Disabled below 900px viewport width
- Re-runs on `ScrollTrigger.refresh`

### `GsapScroll.ts`

Scroll-driven timelines for the 3D character and sections.

| Function | Scope |
|----------|-------|
| `setCharTimeline()` | Landing, About, WhatIDo scroll animations for character + camera |
| `setAllTimeline()` | Career section timeline (dot, boxes, timeline height) |

Exported and called from:
- `character.ts` (on model load)
- `resizeUtils.ts` (on window resize)

## Character Utilities

### `decrypt.ts`

```text
Input:  encrypted ArrayBuffer (IV + ciphertext)
Output: decrypted ArrayBuffer (GLB binary)
Method: Web Crypto API — AES-CBC, SHA-256 key derivation
```

### `mouseUtils.ts`

| Function | Purpose |
|----------|---------|
| `handleMouseMove` | Normalize mouse to -1..1 range |
| `handleTouchMove` | Same for touch events |
| `handleTouchEnd` | Reset head position after touch ends |
| `handleHeadRotation` | Lerp head bone toward mouse; disabled after scroll |

### `resizeUtils.ts`

On window resize:
1. Update renderer size and camera aspect
2. Kill all ScrollTriggers except Work section
3. Rebuild character and career timelines

### `animationUtils.ts`

| Export | Purpose |
|--------|---------|
| `mixer` | THREE.AnimationMixer instance |
| `startIntro()` | Replay intro + start blink |
| `hover()` | Eyebrow raise on face hover |

### `lighting.ts`

| Export | Purpose |
|--------|---------|
| `turnOnLights()` | Fade in environment + directional light + rim effect |
| `setPointLight()` | Sync point light to monitor screen emissive |

## Loading Progress (`Loading.tsx`)

`setProgress()` simulates and completes loading percentage:

| Phase | Behavior |
|-------|----------|
| 0–50% | Fast random increments every 100ms |
| 50–91% | Slow random increments every 2s |
| Model loaded | `loaded()` increments to 100% at 2ms intervals |

## Data

### `boneData.ts`

| Export | Used for |
|--------|----------|
| `typingBoneNames` | Filtered typing animation tracks (arms, hands, fingers, legs) |
| `eyebrowBoneNames` | `eyebrow_L`, `eyebrow_R` for hover animation |
