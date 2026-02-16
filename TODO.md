# Project TODO List

This document tracks missing features, placeholder data, and required updates.

## Schedule & Agenda
- [ ] Update Schedule Data: The ScheduleView component contains hardcoded data for September 2025.
  - File: src/app/components/Agenda/ScheduleView.tsx
- [ ] Timeline Feature: Missing timeline in the Hackathon page.
  - File: src/app/hackathon/page.tsx

## Speakers
- [ ] Update Speaker Data: Update the list of hardcoded speakers with confirmed ones. (TODO UPDATE AS SOON AS SPEAKERS CONFIRM)
  - File: src/app/components/SpeakersComponent/SpeakersComponent.tsx
- [X] "Apply as Speaker" Button: Link this button to an application form.
  - File: src/app/components/SpeakersComponent/SpeakersComponent.tsx

## Sponsors
- [ ] Update Sponsor Data: Replace placeholder "???" text and generic logos.
  - File: src/app/components/Hackathon/ThankView.tsx

## Discover / Resources
- [ ] Update Resource Links & Text: Replace "???" placeholders for documentation titles and descriptions.
  - File: src/app/components/Hackathon/DiscoverSuiView.tsx

## General / Cleanup
- [ ] Placeholder Images: Replace placeholder images/logos where applicable.
  - src/app/components/Agenda/AgendaTable.tsx
  - src/app/components/Hackathon/DiscoverSuiView.tsx
  - src/app/components/Hackathon/ThankView.tsx

## Ticketing / Registration
- [ ] Verify Registration Links: Ensure all "Register" or "Apply" buttons point to the correct active forms.

## Sections in each page
- [ ] Only keep relevant sections to each page (e.g hackathon related sections only in the hackathon page)
- [ ] Update with correct hackathon application in /hackathon
