# Specification

## Summary
**Goal:** Add a “Learn more about us” call-to-action in the homepage About section that navigates to the existing About page.

**Planned changes:**
- Add a new button labeled "Learn more about us" to the About / Firm Overview block in `frontend/src/components/home/AboutApproachSection.tsx`, positioned after the overview text content.
- Wire the button to navigate client-side to the existing `/about` route using the app router’s `navigate` from `frontend/src/router/router.ts` (no full page reload).
- Match styling to existing CTA buttons and ensure basic accessibility (keyboard operable with visible focus and readable contrast in light/dark themes).

**User-visible outcome:** On the homepage, users can click (or keyboard-activate) the "Learn more about us" button in the About section to navigate to the About page at `/about` without a full page refresh.
