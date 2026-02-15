# Specification

## Summary
**Goal:** Set the uploaded `Law-firms1.jpeg` as the existing homepage hero section background and apply a dark tint overlay for readability.

**Planned changes:**
- Add `Law-firms1.jpeg` to a public static assets path (e.g., `frontend/public/assets/`) so it can be served at runtime.
- Update `frontend/src/components/home/HeroSection.tsx` to render `Law-firms1.jpeg` as a full-cover hero background (centered, `background-size: cover`).
- Add a semi-transparent dark overlay over the background image and beneath the hero content, ensuring the CTA remains clickable and text stays readable without layout changes.

**User-visible outcome:** The homepage hero displays the uploaded law-themed image as its background with a dark tint, while the existing hero text and CTA remain readable and usable on mobile and desktop.
