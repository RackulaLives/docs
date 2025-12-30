# Rackula Documentation (docs.racku.la)

Documentation site for Rackula — a FOSS rack layout designer for homelabbers.

## Quick Links

- **Live docs**: https://docs.racku.la
- **Live app**: https://count.racku.la
- **Marketing site**: https://www.racku.la
- **GitHub**: https://github.com/RackulaLives/Rackula
- **Brand guide**: `/Users/gvns/notes/gVault/01-PROJECTS/rackula/brand-guide.md`

## Stack

- Astro 5.x with Starlight
- Custom CSS for Dracula/Alucard theming
- Pagefind for search

## Project Structure

```
src/
  content/docs/     # Documentation pages (MDX)
    getting-started/
    guides/
    reference/
    self-hosting/
  assets/           # Logo SVGs for Starlight
  styles/           # Custom theme CSS (dracula.css)
public/             # Static assets (favicon)
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Content Guidelines

### Writing Style

- Direct, technical, assume competence
- Dry wit, vampire puns encouraged
- Focus on practical how-to content

### Spelling

Use **Canadian/British spelling** throughout:
- colour (not color)
- visualise (not visualize)
- organise (not organize)
- centre (not center)
- behaviour (not behavior)

### MDX Components

Starlight provides built-in components:

```mdx
import { Card, CardGrid, Steps, Tabs, TabItem, Aside } from '@astrojs/starlight/components';

<Steps>
1. First step
2. Second step
</Steps>

<Aside type="tip">
  Helpful tip here.
</Aside>

<Tabs>
  <TabItem label="Option A">Content A</TabItem>
  <TabItem label="Option B">Content B</TabItem>
</Tabs>
```

## Theming

Custom theme in `src/styles/dracula.css` overrides Starlight CSS variables:

### Dracula (Dark — default)

| Token | Hex | Use |
|-------|-----|-----|
| `--sl-color-bg` | `#282A36` | Page background |
| `--sl-color-text` | `#F8F8F2` | Body text |
| `--sl-color-accent` | `#BD93F9` | Links, highlights |

### Alucard (Light)

| Token | Hex | Use |
|-------|-----|-----|
| `--sl-color-bg` | `#FFFBEB` | Page background |
| `--sl-color-text` | `#1F1F1F` | Body text |
| `--sl-color-accent` | `#644AC9` | Links, highlights |

### Typography

- **Headings**: JetBrains Mono, semibold
- **Body**: Inter, regular
- **Code**: JetBrains Mono

## Adding New Pages

1. Create MDX file in appropriate directory under `src/content/docs/`
2. Add frontmatter with `title` and `description`
3. Sidebar auto-generates from directory structure

Example:

```mdx
---
title: Page Title
description: Brief description for SEO and previews.
---

Content here...
```

## Deployment

GitHub Actions workflow (`.github/workflows/deploy.yml`) deploys to self-hosted runner on push to main:

```
npm ci → npm run build → rsync to /var/www/docs.racku.la/
```
