# Giraffe Premium UI

I want to redesign my website with 3d elements and premium looks and apple award winning website 
# Giraffe – Advertising & Marketing

## Mission

Create implementation-ready, token-driven UI guidance for Giraffe – Advertising & Marketing that is optimized for consistency, accessibility, and fast delivery across dashboard web app.

## Brand

- Product/brand: Giraffe – Advertising & Marketing

- URL: https://giraffe.co.in/

- Audience: authenticated users and operators

- Product surface: dashboard web app

## Style Foundations

- Visual style: clean, functional, implementation-oriented

- Main font style: `font.family.primary=Poppins`, `font.family.stack=Poppins, sans-serif`, `font.size.base=14px`, `font.weight.base=400`, `font.lineHeight.base=18.2px`

- Typography scale: `font.size.xs=12px`, `font.size.sm=13px`, `font.size.md=14px`, `font.size.lg=15px`, `font.size.xl=17px`, `font.size.2xl=18px`, `font.size.3xl=22px`, `font.size.4xl=24px`

- Color palette: `color.surface.base=#000000`, `color.border.muted=#ffffff`, `color.text.tertiary=#212529`, `color.text.inverse=#888888`, `color.surface.raised=#f28c4e`, `color.surface.strong=#060606`

- Spacing scale: `space.1=5px`, `space.2=10px`, `space.3=12px`, `space.4=14px`, `space.5=20px`, `space.6=30px`, `space.7=35px`, `space.8=40px`

- Radius/shadow/motion tokens: `radius.xs=50px` | `motion.duration.instant=300ms`, `motion.duration.fast=500ms`, `motion.duration.normal=700ms`

## Accessibility

- Target: WCAG 2.2 AA

- Keyboard-first interactions required.

- Focus-visible rules required.

- Contrast constraints required.

## Writing Tone

Concise, confident, implementation-focused.

## Rules: Do

- Use semantic tokens, not raw hex values, in component guidance.

- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.

- Component behavior should specify responsive and edge-case handling.

- Interactive components must document keyboard, pointer, and touch behavior.

- Accessibility acceptance criteria must be testable in implementation.

## Rules: Don't

- Do not allow low-contrast text or hidden focus indicators.

- Do not introduce one-off spacing or typography exceptions.

- Do not use ambiguous labels or non-descriptive actions.

- Do not ship component guidance without explicit state rules.

## Guideline Authoring Workflow

1. Restate design intent in one sentence.

2. Define foundations and semantic tokens.

3. Define component anatomy, variants, interactions, and state behavior.

4. Add accessibility acceptance criteria with pass/fail checks.

5. Add anti-patterns, migration notes, and edge-case handling.

6. End with a QA checklist.

## Required Output Structure

- Context and goals.

- Design tokens and foundations.

- Component-level rules (anatomy, variants, states, responsive behavior).

- Accessibility requirements and testable acceptance criteria.

- Content and tone standards with examples.

- Anti-patterns and prohibited implementations.

- QA checklist.

## Component Rule Expectations

- Include keyboard, pointer, and touch behavior.

- Include spacing and typography token requirements.

- Include long-content, overflow, and empty-state handling.

- Include known page component density: links (75), buttons (10), inputs (8), lists (2).

- Extraction diagnostics: Audience and product surface inference confidence is low; verify generated brand context.

## Quality Gates

- Every non-negotiable rule must use "must".

- Every recommendation should use "should".

- Every accessibility rule must be testable in implementation.

- Teams should prefer system consistency over local visual exceptions.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/7cf871ca-cf7b-42cc-ae7d-5cab57a02b4d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
