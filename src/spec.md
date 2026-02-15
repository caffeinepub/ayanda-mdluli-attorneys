# Specification

## Summary
**Goal:** Update the Contact page hero section to use the provided photo as a full-bleed background with a dark dimmed overlay for readable, theme-consistent text.

**Planned changes:**
- Add `pexels-sora-shimazaki-5668882.jpg` to the frontend as a static asset and set it as the background image for the Contact page hero section (the first `<section>` in `frontend/src/pages/ContactPage.tsx`).
- Style the hero section background to be full-bleed and responsive (centered, cover behavior) with no tiling/stretch artifacts.
- Add a dark overlay layer above the background image but behind the hero content so the existing “Book Now” heading, divider, and description remain readable and unchanged.
- Ensure only the selected hero section is affected; other Contact page sections remain visually unchanged, and the other duplicate uploaded images are not used.

**User-visible outcome:** The Contact page hero displays a full-width background image with a dark dimming overlay, preserving the existing hero text content and overall site styling while improving readability.
