---
applyTo: "src/components/*.tsx,src/App.tsx"
---

# Landing section guidance

These files define the user-facing marketing experience for Hot Buns Gym & Bakery.

- Keep copy tone energetic, playful, and premium, consistent with `PRD.md`.
- Favor section-level composition; extract shared view logic only when duplicated in multiple sections.
- Preserve section IDs and anchor-based navigation behavior (for example, hero CTA scrolling to signup).
- Keep animation behavior smooth and intentional; use existing `framer-motion` patterns before introducing alternatives.
- Reuse existing UI primitives from `src/components/ui` and avoid duplicating button/input/card implementations.
