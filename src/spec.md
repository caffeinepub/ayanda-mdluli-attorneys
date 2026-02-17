# Specification

## Summary
**Goal:** Replace the navbar logo image with a text brand label.

**Planned changes:**
- In `frontend/src/components/home/HomeNavbar.tsx`, remove the existing navbar logo `<img>` element and replace it with a text node that reads exactly `Ayanda Mdluli Atttorneys`.
- Keep the text within the existing logo container to preserve navbar height and alignment across breakpoints.

**User-visible outcome:** The navbar shows the text `Ayanda Mdluli Atttorneys` in the logo area (with no broken image icon), while the rest of the navbar remains unchanged.
