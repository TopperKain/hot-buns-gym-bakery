---
applyTo: "src/components/ui/**/*.tsx"
---

# UI primitives guidance

These files are shared design-system primitives. Keep them generic and reusable.

- Preserve existing public APIs (`variant`, `size`, exported component names) unless the task explicitly requires an API change.
- Keep component props strongly typed and derived from native element props / existing helper types.
- Continue using `cn` from `@/lib/utils` for class merging.
- For variant-based styling, follow existing `cva` + `VariantProps` patterns.
- Maintain accessibility-focused behavior already present (focus-visible states, keyboard support, valid control semantics).
- Do not add business copy, section-specific content, or page logic to UI primitives.
