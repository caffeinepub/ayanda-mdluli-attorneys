# Specification

## Summary
**Goal:** Use the uploaded legal still-life image as the Services page hero section background while preserving existing hero copy and layout.

**Planned changes:**
- Add the uploaded image `ChatGPT Image Feb 16, 2026, 11_49_14 AM.png` to `frontend/public/assets/generated/` as a static asset for the Services page to reference.
- Update only the Services page Hero Section (`frontend/src/pages/ServicesPage.tsx`, first `<section>`) to render the image as a full-bleed background (cover + centered).
- Add a dark dimmed overlay layer behind the hero text to maintain readability without changing any hero text content.

**User-visible outcome:** The Services page hero displays the uploaded image as a responsive background with a dark overlay, keeping the existing hero heading and text unchanged.
