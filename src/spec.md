# Specification

## Summary
**Goal:** Make the homepage Final CTA section match the site’s white section styling and simplify its content by removing secondary elements.

**Planned changes:**
- Update `frontend/src/components/home/FinalCtaSection.tsx` so the `<section id="contact">` renders on a white background (remove primary/navy background styling) while keeping text readable on white.
- Remove the secondary "Contact Us Today" button from `FinalCtaSection`, including any now-unused handler logic/imports used only for that button.
- Remove the consultation availability text block ("Available for consultations across South Africa...") and ensure spacing/layout remains clean with no leftover divider/border artifacts.

**User-visible outcome:** The homepage CTA section appears on a white background consistent with the rest of the homepage, shows only the remaining primary CTA button (still functioning as before), and no longer displays the secondary button or consultation availability text.
