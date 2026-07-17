# Running and Deployment

## Prerequisites

- Node.js and npm installed
- Dependencies installed: `npm install`

## Development

```bash
cd d:\Portfolio\Portfolio_main
npm install
npm run dev
```

| Command | Result |
|---------|--------|
| `npm run dev` | Vite dev server with `--host` (default port 5173) |
| `npm run dev -- --host 0.0.0.0 --port 4173` | Custom host/port (as used locally) |

Local URL used in setup notes: `http://localhost:4173/`

## Production Build

```bash
npm run build
npm run preview
```

| Step | Action |
|------|--------|
| `tsc -b` | TypeScript project references build |
| `vite build` | Output to `dist/` |
| `npm run preview` | Serve production build locally |

## Project Setup Notes

From `PORTFOLIO_MAIN_details.txt`:

| Item | Detail |
|------|--------|
| Decrypted model | `public/models/character.glb` |
| Encrypted source | `public/models/character.enc` |
| Decrypt password | `MyCharacter12` |
| Python venv | `.venv` (used for initial decrypt) |
| Node modules | `node_modules/` |

### Re-decrypt model (if needed)

The app loads `character.enc` at runtime via `decrypt.ts`. The decrypted `.glb` is a local fallback; production uses the encrypted flow.

## Deployment Considerations

| Topic | Notes |
|-------|-------|
| Static hosting | Suitable for Vercel, Netlify, GitHub Pages (with SPA config) |
| GSAP Club plugins | ScrollSmoother and SplitText are **trial** plugins — hosting may be restricted without a Club license |
| Encrypted model | `character.enc` must be served from `/models/` |
| HDR environment | `char_enviorment.hdr` required for character lighting |
| DRACO decoder | Expected at `/draco/` for compressed GLB (if used) |
| Missing images | Add `public/images/` assets before deploy or Work/TechStack will show broken images |

## Environment

No `.env` file required. No backend — fully static frontend.
