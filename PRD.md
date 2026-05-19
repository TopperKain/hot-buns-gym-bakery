# Planning Guide

A promotional teaser website for Hot Buns Gym & Bakery—a brick-and-mortar business combining cross-training/weight-lifting with an artisan bakery and coffee bar that rewards workouts with complimentary pastries.

**Experience Qualities**:
1. **Energetic** - The site should pulse with vitality through bold colors, dynamic animations, and action-oriented copy that makes visitors want to jump off the couch
2. **Playful** - Cheeky puns, witty microcopy, and a lighthearted tone that doesn't take itself too seriously while celebrating the delicious irony of burning and earning calories
3. **Premium** - Despite the playfulness, the design must feel upscale and polished with refined typography, sophisticated color relationships, and quality photography treatment

**Complexity Level**: Content Showcase (information-focused) - This is a promotional landing page designed to generate interest and email signups for an upcoming business launch, featuring multiple content sections but minimal interactivity.

## Essential Features

**Hero Section with Call-to-Action**
- Functionality: Full-width hero with headline, tagline, and CTA button
- Purpose: Immediately communicate the brand concept and capture attention
- Trigger: Page load
- Progression: Page loads → Hero fades in with animated elements → User reads headline → User clicks "Get Updates" CTA → Scrolls to email signup
- Success criteria: Headline is immediately legible, CTA button is prominently positioned, background image creates atmosphere without obscuring text

**Email Signup Form**
- Functionality: Simple form to collect email addresses for launch notifications
- Purpose: Convert interest into actionable leads for pre-launch marketing
- Trigger: User clicks CTA or scrolls to signup section
- Progression: User enters email → Clicks "Notify Me" → Toast notification confirms signup → Email stored in KV
- Success criteria: Form is easy to find, validation prevents invalid emails, success state is clear

**Feature Showcase Grid**
- Functionality: Three-column grid highlighting key differentiators (Strength Training, Artisan Bakery, Reward Loop)
- Purpose: Clearly explain the unique value proposition
- Trigger: User scrolls into viewport
- Progression: Section enters viewport → Cards fade/slide in sequentially → User reads content
- Success criteria: Icons are visually distinct, copy is scannable, mobile layout stacks gracefully

**Menu Teaser Grid**
- Functionality: Grid of menu items with hover effects
- Purpose: Make the food offerings tangible and appetizing
- Trigger: User scrolls to section
- Progression: Cards visible → User hovers → Card scales/highlights → User sees menu item details
- Success criteria: Hover effects are smooth, images are appetizing, names are memorable

**Class Schedule Teaser**
- Functionality: Display signature class offerings with "Coming Soon" badges
- Purpose: Generate excitement for specific program offerings
- Trigger: User scrolls to section
- Progression: Section visible → User reads class names → Anticipation builds for launch
- Success criteria: Class names are punny and memorable, "Coming Soon" creates urgency

## Edge Case Handling

- **Empty Email Input**: Form validation prevents submission and shows inline error message
- **Duplicate Email Signup**: Toast notification indicates email already registered (checks KV store)
- **Mobile Navigation**: Header remains accessible on small screens with proper spacing
- **Slow Image Loading**: Skeleton states or colored backgrounds provide visual placeholder
- **Rapid Scrolling**: Intersection observer animations trigger only once to prevent repeated animations

## Design Direction

The design should evoke the delicious contrast between two seemingly opposite worlds—the gritty intensity of a serious gym and the warm indulgence of an artisan bakery. Think exposed brick meeting rustic wood, iron weights beside steaming pastries, chalk dust and flour. The aesthetic should feel bold and unapologetic, with a wink and a smile. It's premium without being pretentious, strong without being aggressive, sweet without being saccharine.

## Color Selection

A warm, high-contrast palette that bridges bakery coziness with gym energy.

- **Primary Color**: Deep Charcoal (#2B2826 / oklch(0.20 0.01 60)) - Represents strength, iron, weight equipment; grounds the design with serious gym credibility
- **Secondary Colors**: 
  - Warm Amber (#D97742 / oklch(0.64 0.12 45)) - The "hot" in Hot Buns; energetic, appetizing, bridges both worlds
  - Cream (#F5EFE7 / oklch(0.95 0.01 75)) - Bakery warmth, parchment, flour; creates breathing room and sophistication
- **Accent Color**: Bold Crimson (#C94032 / oklch(0.55 0.18 25)) - High-energy accent for CTAs, "hot" elements, and important actions that demand attention
- **Foreground/Background Pairings**:
  - Background Cream (#F5EFE7): Charcoal text (#2B2826) - Ratio 11.2:1 ✓ (primary body)
  - Primary Charcoal (#2B2826): Cream text (#F5EFE7) - Ratio 11.2:1 ✓ (hero, footer)
  - Accent Crimson (#C94032): White text (#FFFFFF) - Ratio 4.9:1 ✓ (CTA buttons)
  - Secondary Amber (#D97742): Charcoal text (#2B2826) - Ratio 4.6:1 ✓ (highlights, borders)

## Font Selection

Typography should balance strength with approachability—bold enough for gym attitude, warm enough for bakery hospitality.

- **Primary Display**: Montserrat (Bold/ExtraBold) - Strong, geometric, confident; perfect for headlines that need to punch
- **Body Text**: Inter - Clean, highly readable, modern without being cold; excellent for descriptions and microcopy
- **Typographic Hierarchy**:
  - Hero Headline: Montserrat ExtraBold / 64px / -0.02em letter spacing / 1.1 line height
  - Section Headers: Montserrat Bold / 42px / -0.01em letter spacing / 1.2 line height
  - Feature Titles: Montserrat SemiBold / 24px / normal spacing / 1.3 line height
  - Body Copy: Inter Regular / 18px / normal spacing / 1.6 line height
  - Microcopy/Captions: Inter Medium / 14px / 0.01em spacing / 1.4 line height
  - CTA Buttons: Montserrat Bold / 18px / 0.02em spacing / uppercase

## Animations

Animations should feel energetic but not chaotic—quick, purposeful movements that enhance the experience without delaying content consumption. Hero elements fade in with a slight upward drift (800ms) on page load. Section content uses intersection observers to trigger staggered fade-ins as users scroll (400ms per element, 100ms stagger). Hover effects on menu items and buttons are snappy (200ms) with subtle scale transforms. The email signup success state celebrates with a bounce animation.

## Component Selection

- **Components**: 
  - Hero: Full-bleed background with overlay gradient, centered content, Button (Shadcn) with custom styling
  - Features: Three-card grid using Card (Shadcn) with custom icons from Phosphor
  - Menu Grid: Custom card components with hover transforms, images, and descriptive text
  - Class Teaser: Card components with Badge (Shadcn) for "Coming Soon" labels
  - Email Form: Input (Shadcn) with Label, Button, and Sonner toast for feedback
  - Footer: Simple flex layout with social icons from Phosphor
  
- **Customizations**: 
  - Cards will have custom gradient borders on hover using Amber accent
  - Buttons will use bold Crimson background with white text and subtle shadow
  - Hero section needs custom overlay gradient (charcoal to transparent) for text legibility
  - Menu items require custom transform animations (scale + subtle lift)
  
- **States**: 
  - Buttons: Rest (crimson bg), Hover (darkened crimson + lift), Active (pressed inset), Disabled (muted)
  - Inputs: Rest (cream with charcoal border), Focus (amber ring), Error (crimson border), Success (green checkmark)
  - Cards: Rest (cream bg, subtle shadow), Hover (lift + amber accent border)
  
- **Icon Selection**: 
  - Barbell (strength training)
  - Coffee (bakery/cafe)
  - Trophy (reward loop)
  - Instagram, Twitter/X, Facebook (social links)
  - Envelope (email signup)
  
- **Spacing**: 
  - Page sections: py-24 (96px vertical padding)
  - Card internal padding: p-8 (32px)
  - Element gaps: gap-8 (32px for major elements), gap-4 (16px for related items)
  - Container max-width: max-w-7xl with px-6 horizontal padding
  
- **Mobile**: 
  - Hero text scales down to 36px, maintains hierarchy
  - Feature grid: 3 columns → 1 column stack on mobile
  - Menu grid: 2 columns → 1 column on mobile
  - Nav: Single column, larger touch targets (min 44px)
  - Spacing reduces proportionally (py-16 on mobile vs py-24 on desktop)
