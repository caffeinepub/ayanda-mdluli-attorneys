# Specification

## Summary
**Goal:** Fix the navbar logo to use the provided logo filename and ensure the file is served from the expected public assets path.

**Planned changes:**
- Update the selected logo `<img>` in `frontend/src/components/home/HomeNavbar.tsx` to use `src="/assets/generated/Tshabalala-1080-x-1080-px-1-e1745416117212-r66kph3gxuhfsp0hg1525ae50su5inwh0amb0wdpkg.png"` (no `-1` suffix).
- Ensure `Tshabalala-1080-x-1080-px-1-e1745416117212-r66kph3gxuhfsp0hg1525ae50su5inwh0amb0wdpkg.png` exists at `frontend/public/assets/generated/` so it is available at the matching `/assets/generated/...` URL.

**User-visible outcome:** The navbar logo displays correctly (no broken image), and the logo image loads successfully from `/assets/generated/Tshabalala-1080-x-1080-px-1-e1745416117212-r66kph3gxuhfsp0hg1525ae50su5inwh0amb0wdpkg.png`.
