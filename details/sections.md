# Page Sections

## Section Map

| Section | File | DOM ID / Class | Purpose |
|---------|------|----------------|---------|
| **Landing** | `Landing.tsx` | `#landingDiv` | Hero: "Hello! I'm AKSHAT PAL" + rotating titles |
| **About** | `About.tsx` | `#about` | Bio paragraph |
| **What I Do** | `WhatIDo.tsx` | `.whatIDO` | 4 expandable skill cards |
| **Career** | `Career.tsx` | `.career-section` | Experience timeline |
| **Work** | `Work.tsx` | `#work` | 5-project carousel |
| **TechStack** | `TechStack.tsx` | `.techstack` | Physics-based tech logo spheres (desktop only) |
| **Contact** | `Contact.tsx` | `#contact` | Email, education, social links, footer |

## Global UI Components

| Component | File | Purpose |
|-----------|------|---------|
| Navbar | `Navbar.tsx` | Header, email, nav links, decorative circles |
| SocialIcons | `SocialIcons.tsx` | GitHub, LinkedIn, X, Instagram + Resume button |
| Cursor | `Cursor.tsx` | Custom GSAP-smoothed cursor |
| HoverLinks | `HoverLinks.tsx` | Duplicated-text hover effect for nav links |
| Loading | `Loading.tsx` | Full-screen loader with progress and marquee |

## Section Details

### Landing (`Landing.tsx`)

- Intro: "Hello! I'm" → **AKSHAT PAL**
- Subtitles alternate: "Developer" ↔ "Software Engineer"
- On mobile: receives `CharacterModel` as children

### About (`About.tsx`)

- Software engineering, cloud, automation, AI, robotics, cryptography
- Uses `.title` and `.para` classes for scroll-triggered SplitText animations

### What I Do (`WhatIDo.tsx`)

| Card | Title | Focus |
|------|-------|-------|
| 1 | Web Development | HTML, CSS, JS, TS, React, Next.js |
| 2 | Software Engineering | Java, Python, C++, MySQL, Git, Cryptography |
| 3 | Cloud & Automation | AWS, EC2, S3, UiPath |
| 4 | AI & Intelligent Systems | ML, Robotics, YOLOv5, IoT, NodeMCU |

- Mobile: tap to expand one card at a time (`what-content-active`)

### Career (`Career.tsx`)

| Role | Company | Period |
|------|---------|--------|
| Full Stack Developer | Ikshan | 2020 |
| Senior Full Stack Developer | Monocept (Max Life Insurance) | 2021 |
| Full Stack Developer | Logic Loop | NOW |

> **Note:** Career content is still from the original template, not yet updated for Akshat Pal.

### Work (`Work.tsx`)

| # | Project | Category |
|---|---------|----------|
| 01 | WanderNEST | Local Tourism Platform |
| 02 | Drone-Based Fire Detection System | AI-Powered Disaster Monitoring |
| 03 | Vitals-Driven Home Automation | IoT & Intelligent Automation |
| 04 | Product Price Comparison | AI & Process Automation |
| 05 | Patented Projects | Research & Innovation |

- Carousel with prev/next arrows and dot indicators
- Images expected at `/images/*.png` (may need to be added to `public/images/`)

### TechStack (`TechStack.tsx`)

- Renders only on desktop (`> 1024px`)
- 30 physics spheres with tech logo textures (React, Next, Node, etc.)
- Activates when scroll passes the Work section
- Uses Rapier physics + N8AO post-processing

### Contact (`Contact.tsx`)

| Field | Value |
|-------|-------|
| Email | akshatpal910@gmail.com |
| Education | B.Tech CSE (AI and Robotics specialisation) |
| GitHub | github.com/AkshatCipher |
| LinkedIn | linkedin.com/in/akshat-pal10 |
| Footer | Developed by Akshat Pal © 2026 |
