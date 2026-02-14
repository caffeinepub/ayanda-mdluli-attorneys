# Specification

## Summary
**Goal:** Remove the specific Team section header H2 element from the About page.

**Planned changes:**
- In `frontend/src/pages/AboutPage.tsx`, delete the Team section header block’s `<h2>` element identified by XPath `/html[1]/body[1]/div[1]/div[1]/main[1]/section[3]/div[1]/div[1]/div[1]/div[1]/h2[1]` (remove the JSX element entirely, not just its text).

**User-visible outcome:** The Team section no longer shows the “Meet Our Team” (or any) H2 heading, while the rest of the Team section content remains unchanged and still renders.
