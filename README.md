# First Presbyterian Church · Daytona Beach

A responsive church website built with Vite and vanilla JavaScript.

## Development

Requires Node.js 20.19+ or 22.12+.

```sh
npm ci --cache /tmp/church-npm-cache
npm run dev -- --port 5173
```

## Production

```sh
npm run build
npm run preview -- --port 4173
```

Deploy `dist/` to a static host. No credentials or backend are required.

## Editorial review before launch

The reference website was inaccessible during development. Confirm all church-specific copy, service times, ministry offerings, contact details, and branding before launch. External church links and map searches provide the next step without inventing schedules or contact information. Photography is illustrative and bundled locally from the MIT-licensed Start Bootstrap Landing Page and Clean Blog themes. Fonts (DM Sans and Manrope) are bundled from Google Fonts under the SIL Open Font License. Replace photos with approved church photography as available. Visit and volunteer dialogs direct people to the existing church website; no form submission or video playback is implied.

## GitHub Pages

In the repository's **Settings → Pages → Build and deployment**, select **GitHub Actions** as the source. The `Deploy website to GitHub Pages` workflow builds and deploys every push to `main`. You can also run it manually under **Actions** after enabling Pages.

The expected address after a successful deployment is https://chrystalpixels.github.io/beachstreetchurch/ . Relative build assets support that repository path and a future custom domain.
