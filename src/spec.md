# Specification

## Summary
**Goal:** Add a new Phase 2 About / Firm Overview + Approach section to the homepage directly after the existing Trust / Intro section.

**Planned changes:**
- Create a dedicated homepage React component for the Phase 2 (About / Firm Overview + Approach) section under `frontend/src/components/home/`.
- Render the new Phase 2 component in `frontend/src/pages/HomePage.tsx` immediately after `<TrustIntroSection />`.
- Implement the section using the exact Phase 2 content provided by the user in their original prompt, matching the existing Phase 1 premium, spacious styling and maintaining semantic heading hierarchy (no new H1; use H2/H3).

**User-visible outcome:** The homepage shows a new About / Firm Overview + Approach section directly beneath the Trust / Intro section, styled consistently with the rest of the site and displaying the user-provided Phase 2 text.
