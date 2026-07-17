# Tech Stack

## Core Stack

| Layer | Technologies |
|-------|-------------|
| Framework | React 18, TypeScript, Vite |
| Animation | GSAP (ScrollSmoother, ScrollTrigger, SplitText — trial plugins) |
| 3D | Three.js, @react-three/fiber, @react-three/drei, @react-three/rapier |
| UI | Custom CSS, react-icons, react-fast-marquee |
| Analytics | @vercel/analytics |

## Key Dependencies (`package.json`)

| Package | Version | Purpose |
|---------|---------|---------|
| `react` / `react-dom` | ^18.3.1 | UI framework |
| `vite` | ^5.4.1 | Build tool and dev server |
| `typescript` | ^5.5.3 | Type checking |
| `gsap` | ^3.12.7 | Animations |
| `@gsap/react` | ^2.1.1 | React GSAP integration |
| `three` | ^0.168.0 | 3D rendering |
| `@react-three/fiber` | ^8.17.10 | React renderer for Three.js |
| `@react-three/drei` | ^9.120.4 | Three.js helpers |
| `@react-three/rapier` | ^1.5.0 | Physics engine |
| `@react-three/postprocessing` | ^2.16.3 | Post-processing effects |
| `three-stdlib` | ^2.33.0 | Loaders (GLTF, DRACO, RGBE) |
| `react-icons` | ^5.3.0 | Icon set |
| `react-fast-marquee` | ^1.6.5 | Loading screen marquee |

## Scripts

| Command | Action |
|---------|--------|
| `npm run dev` | Start Vite dev server (`--host`) |
| `npm run build` | `tsc -b && vite build` |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## Design Tokens (`src/index.css`)

| Token | Value | Usage |
|-------|-------|-------|
| `--accentColor` | `#5eead4` | Links, highlights |
| `--backgroundColor` | `#0a0e17` | Main background |
| Font | Geist (Google Fonts) | All typography |
