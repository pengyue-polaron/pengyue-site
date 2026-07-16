# Yue Peng - Personal Website

Personal website for Yue Peng, a Computer Science undergraduate at NYU Shanghai. The site brings together research, long-running communities, robotics teams, and software systems.

The site is a custom React and TypeScript application built with Vite.

## Local development

```bash
npm ci
npm run dev
```

The local site runs at `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Main content

- `src/data/site.ts` - publications, stories, and research content
- `src/App.tsx` - Home, Research, Stories, and individual story routes
- `src/styles.css` - visual system, dark mode, and responsive layout
- `public/media/publications/` - figures extracted from the public papers

## Deployment

`main` is the production branch. Every push and pull request is type-checked and built in GitHub Actions, and pushes to `main` deploy to GitHub Pages. The production hostname is `www.pengyue.space`.

## Privacy

The public site intentionally omits phone numbers, street addresses, certificate QR codes, and unredacted certificate scans.

## License

Site source is available under the MIT License.
