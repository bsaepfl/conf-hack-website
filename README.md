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
