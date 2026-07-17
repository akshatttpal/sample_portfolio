# Directory Structure

```
Portfolio_main/
├── index.html                 # Entry HTML (title: Akshat Pal)
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tsconfig.json              # TypeScript config
├── eslint.config.js           # ESLint config
├── README.md                  # Project readme
├── PORTFOLIO_MAIN_details.txt # Local setup notes (decrypt, run commands)
│
├── details/                   # This documentation folder
│
├── public/
│   └── models/
│       ├── character.glb      # Decrypted 3D character model
│       ├── character.enc      # Encrypted model (loaded at runtime)
│       ├── char_enviorment.hdr  # HDR environment map
│       └── encrypt.cjs        # Encryption utility script
│
└── src/
    ├── main.tsx               # React root
    ├── App.tsx                # App shell + lazy loading
    ├── App.css                # Section container responsive widths
    ├── index.css              # Global styles and CSS variables
    ├── vite-env.d.ts
    │
    ├── context/
    │   └── LoadingProvider.tsx  # Loading state context
    │
    ├── data/
    │   └── boneData.ts        # 3D animation bone names
    │
    ├── types/
    │   └── gsap-trial.d.ts    # GSAP trial plugin type declarations
    │
    └── components/
        ├── MainContainer.tsx  # Layout orchestrator
        ├── Landing.tsx        # Hero section
        ├── About.tsx
        ├── WhatIDo.tsx        # Skills cards
        ├── Career.tsx         # Experience timeline
        ├── Work.tsx           # Project carousel
        ├── WorkImage.tsx      # Project image/video component
        ├── TechStack.tsx      # 3D physics tech spheres
        ├── Contact.tsx
        ├── Navbar.tsx         # Nav + ScrollSmoother
        ├── SocialIcons.tsx
        ├── HoverLinks.tsx     # Animated nav link text
        ├── Cursor.tsx         # Custom cursor
        ├── Loading.tsx        # Loading screen + progress
        │
        ├── Character/         # 3D character system
        │   ├── index.tsx      # CharacterModel export
        │   ├── Scene.tsx      # Three.js scene setup
        │   └── utils/
        │       ├── character.ts    # Model load + decrypt
        │       ├── animationUtils.ts
        │       ├── lighting.ts
        │       ├── mouseUtils.ts
        │       ├── resizeUtils.ts
        │       └── decrypt.ts
        │
        ├── styles/            # Per-component CSS
        │   ├── Landing.css
        │   ├── About.css
        │   ├── WhatIDo.css
        │   ├── Career.css
        │   ├── Work.css
        │   ├── Contact.css
        │   ├── Navbar.css
        │   ├── SocialIcons.css
        │   ├── Cursor.css
        │   ├── Loading.css
        │   └── style.css
        │
        └── utils/
            ├── initialFX.ts   # Post-loading intro animations
            ├── GsapScroll.ts  # Scroll-driven character timelines
            └── splitText.ts   # Scroll-triggered text reveals
```

## File Roles (Key Files)

| Path | Responsibility |
|------|----------------|
| `src/App.tsx` | Wraps app in `LoadingProvider`; lazy-loads `MainContainer` and `CharacterModel` |
| `src/components/MainContainer.tsx` | Renders all sections; handles desktop vs. mobile layout |
| `src/context/LoadingProvider.tsx` | Global loading state; shows `Loading` overlay until ready |
| `src/components/Navbar.tsx` | Header nav; initializes GSAP ScrollSmoother |
| `src/components/Character/Scene.tsx` | Full Three.js setup: renderer, camera, lights, animations |
| `src/components/Character/utils/character.ts` | Decrypts and loads GLB; sets up scroll timelines |
| `src/components/utils/initialFX.ts` | Landing text animations after loading completes |
| `src/components/utils/GsapScroll.ts` | Character position/rotation tied to scroll sections |
