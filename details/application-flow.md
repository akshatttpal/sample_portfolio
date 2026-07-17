# Application Flow

## High-Level Flow Diagram

```mermaid
flowchart TD
    A[main.tsx] --> B[App.tsx]
    B --> C[LoadingProvider]
    C --> D[MainContainer]
    D --> E[Loading Screen]
    E -->|100% loaded| F[initialFX animations]
    F --> G[Page Sections]
    D --> H[Character 3D Model]

    G --> G1[Landing]
    G --> G2[About]
    G --> G3[What I Do]
    G --> G4[Career]
    G --> G5[Work]
    G --> G6[TechStack - desktop only]
    G --> G7[Contact]
```

## Boot Sequence

```mermaid
sequenceDiagram
    participant User
    participant Loading
    participant Character
    participant initialFX
    participant ScrollSmoother

    User->>Loading: Page loads
    Loading->>Character: Start loading encrypted model
    Character->>Character: Decrypt character.enc
    Character->>Character: Load GLB, compile shaders
    Character->>Loading: setProgress → 100%
    Loading->>initialFX: Trigger intro animations
    initialFX->>ScrollSmoother: paused(false)
    initialFX->>User: Fade in landing text, navbar, icons
    Loading->>User: Hide loading overlay
```

### Step-by-step

1. **`LoadingProvider`** wraps the app and shows a loading screen until the 3D model is ready.
2. **`Loading.tsx`** simulates progress via `setProgress()`, then completes when the model loads.
3. On 100%, **`initialFX()`** runs intro animations (SplitText, looping titles, navbar fade-in).
4. **ScrollSmoother** is unpaused and smooth scrolling becomes active.

## Layout Logic (`MainContainer.tsx`)

```mermaid
flowchart LR
    subgraph Desktop["Desktop (>1024px)"]
        D1[Character beside page]
        D2[TechStack visible]
        D3[Landing without character child]
    end

    subgraph Mobile["Mobile (≤1024px)"]
        M1[Character inside Landing]
        M2[TechStack hidden]
        M3[Touch-based WhatIDo cards]
    end
```

| Viewport | Character position | TechStack | WhatIDo interaction |
|----------|-------------------|-----------|---------------------|
| > 1024px | Side panel (sibling of scroll content) | Shown | Hover (desktop) |
| ≤ 1024px | Inside `Landing` as children | Hidden | Tap to expand cards |

## Scroll System (`Navbar.tsx`)

- Uses GSAP **ScrollSmoother** on `#smooth-wrapper` / `#smooth-content`.
- Smooth factor: `1.7`
- Starts **paused** until loading completes.
- Nav links use `data-href` and `smoother.scrollTo()` on desktop.
- Targets: `#about`, `#work`, `#contact`.

## Responsive Breakpoints

| Breakpoint | Behavior |
|------------|----------|
| > 1600px | Section container: 1200px |
| > 1400px | Section container: 900px |
| > 1024px | Desktop layout (character side panel, TechStack) |
| > 900px | SplitText scroll animations enabled |
| ≤ 900px | SplitText disabled; smaller TechStack heading |
| ≤ 900px (mobile) | Section container: 500px / `--cWidth` |
