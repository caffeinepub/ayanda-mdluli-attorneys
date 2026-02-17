# Specification

## Summary
**Goal:** Remove the grey flash on the Contact Us page hero background during reload by preloading the existing hero image so it appears immediately.

**Planned changes:**
- Preload the existing Contact Us hero background image (`/assets/pexels-sora-shimazaki-5668882.jpg`) using the same approach already used elsewhere in the project (e.g., existing preload hook/pattern), applied to the Contact Us hero section content.
- Add a `<link rel="preload" as="image" href="/assets/pexels-sora-shimazaki-5668882.jpg" />` hint in `frontend/index.html` alongside other critical hero image preloads (without removing any existing hints).

**User-visible outcome:** Hard-refreshing or directly loading `/contact` no longer shows an initial grey hero background; the hero image is visible immediately (or as close as technically possible) without changing its positioning, sizing, or layout.
