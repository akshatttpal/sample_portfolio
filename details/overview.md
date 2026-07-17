# Project Overview

This is a **single-page animated portfolio** for **Akshat Pal**, built with **React 18 + TypeScript + Vite**. It uses **GSAP** for scroll and text animations and **Three.js** for a 3D character and a physics-based tech stack visualization.

The project is forked/customized from an open-source portfolio template (package name is still `Akshat-portfolio`; some UI text still references the original author).

## Purpose

- Showcase skills, projects, and experience in an interactive, visually rich format
- Desktop: 3D animated character alongside scroll-driven content
- Mobile: Character embedded in the landing hero; simplified layout

## Entry Points

| File | Role |
|------|------|
| `index.html` | HTML shell; title: "Akshat Pal - Software Engineer & Developer" |
| `src/main.tsx` | React root mount |
| `src/App.tsx` | App shell with lazy-loaded `MainContainer` and `CharacterModel` |
| `src/components/MainContainer.tsx` | Layout orchestrator for all page sections |

## Architecture Summary

```
index.html
  └── main.tsx
        └── App.tsx
              └── LoadingProvider
                    ├── Loading screen (until 3D model ready)
                    └── MainContainer
                          ├── Cursor, Navbar, SocialIcons
                          ├── Character (desktop: side panel)
                          └── Scrollable sections
                                Landing → About → WhatIDo → Career → Work → TechStack → Contact
```
