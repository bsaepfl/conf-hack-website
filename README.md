# The Hackathon - BSA EPFL

Event website for the Blockchain Student Association at EPFL.

## Current event

- **Date:** 10-11 October 2026, Saturday 9:00 AM to Sunday 3:00 PM (30 hours)
- **Venue:** BC Building, EPFL, Lausanne
- **Prize pool:** $5,700
- **Sponsors shown in the supplied poster:** Belem Capital and Swissquote
- **Participant food:** Free
- **Schedule:** Program adapted from the previous event and updated by the event team. Sunday lunch is omitted.

Registration is on the [Luma event page](https://luma.com/d5gqew38). The program above reflects the event team's latest timing updates.

## Local development

```bash
pnpm install
pnpm dev
```

The site is a statically exported Next.js app. All existing public routes render the current event site, so links to older event paths no longer show outdated conference content.

## Where to edit

- [Event content](src/app/components/EventSite.tsx)
- [Visual styles](src/app/globals.css)
- [Countdown and event times](src/app/components/EventCountdown.tsx)
- [Exact poster title artwork](public/images/hackathon-title-reference.png)
- [Page metadata](src/app/layout.tsx)
- [Supplied BSA character assets](public/)
- [Official sponsor logos](public/sponsors/)

All registration buttons open the [Luma event page](https://luma.com/d5gqew38).
The main title uses the lettering from the supplied poster artwork. Its typeface is Fontworks’ ドット明朝16. A licensed webfont file is needed to render new, editable text in that typeface elsewhere on the site.

## Production deployment

GitHub Actions deploys each push to `main` to the existing Vercel production project. The workflow can also be started manually from the Actions tab for a deployment test. Vercel's Git-triggered deployments are disabled in `vercel.json` so the same push does not create a second deployment.

Configure these repository Actions settings before merging or pushing the workflow:

- Secret `VERCEL_TOKEN`: a valid Vercel access token from an account with deployment access to the project.
- Variable `VERCEL_ORG_ID`: the project's Vercel team or account ID.
- Variable `VERCEL_PROJECT_ID`: the existing Vercel project ID.

The IDs are available in the Vercel project settings or from `.vercel/project.json` after linking the existing project. Keep the token in GitHub Actions secrets, never in the repository. The workflow pulls the production environment, builds on the GitHub runner, uploads the prebuilt output, and checks that `hackathon.bsaepfl.com` shows the updated program.
