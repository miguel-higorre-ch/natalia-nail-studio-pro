# Deploying to Cloudflare Pages

This project builds to a fully static site (`dist/`), which makes **Cloudflare Pages** a natural fit. This guide covers the recommended Git-based deployment, an optional direct upload with Wrangler, and the configuration required for Supabase.

## Prerequisites

- A [Cloudflare account](https://dash.cloudflare.com/sign-up).
- The repository pushed to GitHub or GitLab (for Git-based deployments).
- A Supabase project with the schema applied (see the main [README](../README.md#database-setup)).
- Node.js `>= 22.22.0` available for local builds.

## 1. Prepare the project

1. Update the production URL in `astro.config.mjs`:

   ```js
   export default defineConfig({
     // ...
     site: "https://your-domain.com",
   });
   ```

2. Verify the production build locally:

   ```sh
   npm run build
   ```

   The output is written to `dist/`.

3. Commit and push your changes.

## 2. Deploy with Git integration (recommended)

1. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select the repository and the branch to deploy (for example, `main`).
3. Configure the build:

   | Setting | Value |
   | --- | --- |
   | Framework preset | `Astro` |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Root directory | `/` (or the directory containing `package.json`) |

4. Add the following **environment variables** under *Settings → Environment variables*:

   | Variable | Value | Environments |
   | --- | --- | --- |
   | `PUBLIC_SUPABASE_URL` | Your Supabase project URL | Production and Preview |
   | `PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon key | Production and Preview |
   | `NODE_VERSION` | `22` | Production and Preview |

   Astro inlines `PUBLIC_` variables at build time, so they must be present for the **build** step. They are not read at runtime for this static site.

5. Save and deploy. Cloudflare installs dependencies, runs the build, and publishes `dist/`.

Every push to the configured branch triggers a new deployment. Pull requests receive preview deployments automatically.

## 3. Deploy with Wrangler (optional)

Use this approach for manual or CI-driven uploads.

1. Authenticate Wrangler:

   ```sh
   npx wrangler login
   ```

2. Create the Pages project once:

   ```sh
   npx wrangler pages project create nails-by-natalia --production-branch main
   ```

3. Build with the required environment variables present:

   ```sh
   npm run build
   ```

   Astro reads `.env` locally during the build. In CI, provide `PUBLIC_SUPABASE_URL` and `PUBLIC_SUPABASE_ANON_KEY` as environment variables.

4. Upload the build:

   ```sh
   npx wrangler pages deploy dist --project-name nails-by-natalia
   ```

For non-interactive CI, set `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` in the environment instead of running `wrangler login`.

Example GitHub Actions job:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm
      - run: npm ci
      - run: npm run build
        env:
          PUBLIC_SUPABASE_URL: ${{ secrets.PUBLIC_SUPABASE_URL }}
          PUBLIC_SUPABASE_ANON_KEY: ${{ secrets.PUBLIC_SUPABASE_ANON_KEY }}
      - run: npx wrangler pages deploy dist --project-name nails-by-natalia
        env:
          CLOUDFLARE_API_TOKEN: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          CLOUDFLARE_ACCOUNT_ID: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
```

## 4. Connect a custom domain

1. Open the Pages project in the Cloudflare dashboard.
2. Go to **Custom domains → Set up a custom domain**.
3. Enter the domain and follow the DNS instructions.
4. Ensure the domain matches the `site` value configured in `astro.config.mjs`.

Cloudflare provisions TLS certificates automatically.

## 5. Post-deployment checks

- Load the homepage and confirm images and fonts render correctly.
- Navigate to each route: `/servicios`, `/portafolio`, `/sobre-natalia`, `/contacto`, `/reservar`.
- Test the responsive layout and mobile navigation at narrow widths.
- Confirm the browser console shows no Supabase configuration errors.
- Verify the footer social links open the correct profiles.

## Troubleshooting

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| Build fails with an unsupported Node version | Build image uses an older Node release | Set `NODE_VERSION=22` in the Pages environment variables |
| Supabase requests fail with an invalid URL | `PUBLIC_SUPABASE_*` variables missing during the build | Add the variables to the Pages project and redeploy |
| Routes return 404 | Output directory misconfigured | Set the build output directory to `dist` |
| Assets point to an old domain | `site` not updated | Update `site` in `astro.config.mjs` and redeploy |

## Notes on SSR

This project currently uses Astro's default static output. If server-side rendering or Cloudflare-specific bindings are introduced later, add the [`@astrojs/cloudflare`](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) adapter and switch the Cloudflare project to Workers.

## References

- [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)
- [Deploy an Astro site to Cloudflare Pages](https://docs.astro.build/en/guides/deploy/cloudflare/)
- [Wrangler commands](https://developers.cloudflare.com/workers/wrangler/commands/)
