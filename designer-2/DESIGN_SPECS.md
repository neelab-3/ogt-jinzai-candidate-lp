# Design Specifications - OGT! 人才 Landing Page
## Designer 2: Modern Minimalist Approach

---

## Visual Identity

### Brand Colors

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| Navy Dark | `#0A1628` | rgb(10, 22, 40) | Primary background, headlines, buttons |
| Navy | `#1A2845` | rgb(26, 40, 69) | Supporting backgrounds, hover states |
| Navy Light | `#2A3A5A` | rgb(42, 58, 90) | Borders, subtle backgrounds |
| Charcoal | `#2C3E50` | rgb(44, 62, 80) | Body text, descriptions |
| White | `#FFFFFF` | rgb(255, 255, 255) | Primary text on dark, clean backgrounds |
| Off-White | `#F8F9FA` | rgb(248, 249, 250) | Alternate section backgrounds |
| Gray Light | `#E8EAED` | rgb(232, 234, 237) | Borders, dividers |
| Gray | `#95A5B8` | rgb(149, 165, 184) | Secondary text, labels |
| Gold Accent | `#C9A872` | rgb(201, 168, 114) | Premium accents, emphasis |

### Typography

**Font Families:**
- **Serif:** Noto Serif JP (Google Fonts)
- **Sans-Serif:** Noto Sans JP (Google Fonts)

**Font Weights:**
- Light: 300
- Regular: 400
- Medium: 500
- Semi-Bold: 600
- Bold: 700
- Black: 900

**Type Scale:**

| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---------|-------------|------|--------|-------------|----------------|
| Hero Title | Noto Serif JP | 5.5rem (88px) | 900 | 1.2 | -0.02em |
| Section Title | Noto Serif JP | 4rem (64px) | 900 | 1.3 | 0 |
| Card Title | Noto Serif JP | 1.5-1.75rem | 700 | 1.3 | 0 |
| Body Large | Noto Serif JP | 1.25rem | 400 | 1.8 | 0 |
| Body Regular | Noto Serif JP | 1rem | 400 | 1.8 | 0 |
| Body Small | Noto Sans JP | 0.95rem | 400 | 1.7 | 0 |
| Labels | Noto Sans JP | 0.75rem | 500 | 1.4 | 0.2em |
| Buttons | Noto Sans JP | 0.95-1rem | 500 | 1.4 | 0.05em |

**Responsive Typography:**
- Uses `clamp()` for fluid scaling
- Maintains readability at all breakpoints
- Minimum size: 16px for body text

---

## Spacing System

### Grid System
- **Base Unit:** 8px
- **Container Max-Width:** 1200px
- **Container Padding:** 32px (desktop), 16px (mobile)
- **Grid Columns:** 12-column system (implied)

### Spacing Scale

| Token | Value | Pixels | Usage |
|-------|-------|--------|-------|
| xs | 0.5rem | 8px | Tight spacing, inline elements |
| sm | 1rem | 16px | Related elements, small gaps |
| md | 2rem | 32px | Section internal padding, card padding |
| lg | 4rem | 64px | Between major sections, large cards |
| xl | 6rem | 96px | Section top/bottom padding |
| xxl | 8rem | 128px | Major section divisions |

---

## Component Specifications

### Buttons

**Primary Button:**
- Background: `#0A1628`
- Color: `#FFFFFF`
- Padding: `16px 40px`
- Border: `2px solid #0A1628`
- Font: Noto Sans JP, 500 weight
- Transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1)
- Hover: Lifts 2px, slightly darker background

**Secondary Button:**
- Background: `transparent`
- Color: `#0A1628`
- Border: `2px solid #0A1628`
- Padding: `16px 40px`
- Hover: Inverts colors, lifts 2px

**Large Button:**
- Padding: `20px 48px`
- Font-size: `1rem`

**States:**
- Default: As specified
- Hover: Transform translateY(-2px), shadow appears
- Active: Transform scale(0.95)
- Focus: Outline visible for keyboard navigation

### Cards

**Mission Card:**
- Padding: `64px`
- Border: `2px solid #E8EAED`
- Background: `#FFFFFF`
- Hover: Border becomes `#0A1628`, background inverts to `#0A1628`
- Transition: Width animation on ::before pseudo-element (0.5s)

**Focus Card:**
- Padding: `64px`
- Background: `#FFFFFF`
- Border: `1px solid transparent`
- Top Border Accent: `4px solid #0A1628` (appears on hover)
- Hover: Lifts 8px, subtle shadow
- 3D tilt effect on mouse move

**Commitment Item:**
- Padding-left: `64px`
- Left Border: `3px solid #0A1628` (animated height on hover)
- Staggered reveal animation: 100ms delay between items

**Process Step:**
- Padding: `64px`
- Background: `rgba(255, 255, 255, 0.05)`
- Border: `1px solid rgba(255, 255, 255, 0.1)`
- Hover: Lift 4px, border becomes gold accent

---

## Layout Specifications

### Navigation Bar
- Position: Fixed
- Height: Auto (padding determines)
- Padding: `24px 32px`
- Background: `rgba(255, 255, 255, 0.95)` with backdrop-blur
- Border-bottom: `1px solid #E8EAED`
- Z-index: 1000

### Hero Section
- Min-height: `100vh`
- Background: Dark navy gradient
- Content max-width: `900px`
- Padding: `0 32px`
- Text align: Left
- Color: White

### Content Sections
- Padding: `128px 0` (top/bottom)
- Container max-width: `1200px`
- Container padding: `0 32px`

### Footer
- Padding: `96px 0 32px`
- Background: `#0A1628`
- Color: White

---

## Grid Layouts

### Mission Grid
- Columns: `repeat(auto-fit, minmax(400px, 1fr))`
- Gap: `64px`
- Responsive: Stacks to 1 column on mobile

### Focus Grid
- Columns: `repeat(auto-fit, minmax(260px, 1fr))`
- Gap: `32px`
- Responsive: 4 columns → 2 columns → 1 column

### Commitment Grid
- Columns: `repeat(auto-fit, minmax(300px, 1fr))`
- Gap: `64px 32px` (row/column)
- Responsive: 3 columns → 2 columns → 1 column

### Process Flow
- Columns: `repeat(4, 1fr)` on desktop
- Gap: `64px`
- Responsive: Vertical stack on mobile with connecting lines

---

## Animation Specifications

### Timing Functions
- **Smooth:** `cubic-bezier(0.4, 0, 0.2, 1)` - 400ms
- **Fast:** `ease` - 200ms

### Scroll Animations
- **Fade In Up:**
  - Initial: opacity 0, translateY(30px)
  - Final: opacity 1, translateY(0)
  - Duration: 800ms
  - Easing: ease forwards

- **Reveal:**
  - Initial: opacity 0, translateY(50px)
  - Final: opacity 1, translateY(0)
  - Duration: 800ms
  - Trigger: Intersection Observer at 10% visibility

### Hover Animations
- **Card Lift:** translateY(-4px to -8px)
- **Button:** translateY(-2px) + scale(1.02)
- **Border Expand:** scaleX(0) → scaleX(1)
- **3D Tilt:** perspective(1000px) rotateX/Y based on mouse position

### Micro-interactions
- **Ripple Effect:** Expanding circle on button click
- **Scroll Progress:** Width animation 0-100%
- **Parallax:** Hero background at 0.5x scroll speed

---

## Responsive Breakpoints

### Mobile (Base)
- **Range:** 320px - 767px
- **Container Padding:** 16px
- **Typography Scale:** 0.8x
- **Grid:** Single column for most layouts
- **Spacing:** Reduced by ~25%
- **Navigation:** Hamburger menu

### Tablet
- **Range:** 768px - 1023px
- **Container Padding:** 24px
- **Typography Scale:** 0.9x
- **Grid:** 2 columns where appropriate
- **Spacing:** Slightly reduced

### Desktop
- **Range:** 1024px+
- **Container Padding:** 32px
- **Typography Scale:** Full size
- **Grid:** Full multi-column layouts
- **Spacing:** Full spacing scale

### Large Desktop
- **Range:** 1440px+
- **Container Max-Width:** 1200px (centered)
- **All other specs:** Same as desktop

---

## Accessibility Specifications

### Color Contrast Ratios
- **Body Text on White:** 10.7:1 (WCAG AAA)
- **Body Text on Navy:** 16.6:1 (WCAG AAA)
- **Large Text:** Minimum 4.5:1 (WCAG AA)
- **UI Elements:** Minimum 3:1 (WCAG AA)

### Focus States
- **Visible Outline:** 2px solid currentColor
- **Offset:** 2px
- **Only visible on keyboard navigation**

### Interactive Element Sizes
- **Minimum Touch Target:** 44x44px
- **Button Padding:** Ensures adequate size
- **Link Spacing:** Minimum 8px between elements

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic elements (nav, section, article, footer)
- ARIA labels where necessary
- Skip links for keyboard navigation

---

## Icon Specifications

### SVG Icons (Focus Section)
- **Size:** 64x64px
- **Stroke Width:** 2px
- **Color:** Inherits from parent (currentColor)
- **Hover Color:** `#C9A872` (gold accent)
- **Style:** Line icons, geometric, minimal

### Icon Categories
1. **Senior Soul:** Clock/Time icon
2. **Leading Ladies:** House/Foundation icon
3. **Top Guns:** Star icon
4. **Language Lions:** Globe icon

---

## Image Specifications (When Used)

### Hero Background
- **Size:** 1920x1080px minimum
- **Format:** JPEG, quality 80-85%
- **File Size:** < 300KB
- **Overlay:** Linear gradient rgba(10, 22, 40, 0.9)
- **Position:** Center center
- **Attachment:** Fixed (parallax)

### Section Images
- **Size:** 1600x900px
- **Format:** JPEG, quality 80%
- **File Size:** < 200KB
- **Usage:** Background images with overlay

### Profile/Category Images
- **Size:** 800x800px (1:1 ratio)
- **Format:** JPEG, quality 85%
- **File Size:** < 100KB
- **Usage:** Focus section cards

---

## Loading & Performance

### Target Metrics
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 3.5s
- **Cumulative Layout Shift:** < 0.1
- **Largest Contentful Paint:** < 2.5s

### Optimization Techniques
- CSS minification in production
- JavaScript minification in production
- Image lazy loading
- Font preloading
- Inline critical CSS (recommended)
- Throttled scroll events
- CSS transforms for animations
- Will-change hints for heavy animations

---

## Print Specifications

### Print Styles Included
- Removes navigation, buttons, footer
- Converts dark sections to white background
- Black text for all content
- Expands content to full width
- Removes shadows and animations

---

## Browser Support Matrix

| Browser | Version | Support Level |
|---------|---------|---------------|
| Chrome | 90+ | Full |
| Firefox | 88+ | Full |
| Safari | 14+ | Full |
| Edge | 90+ | Full |
| iOS Safari | 14+ | Full |
| Chrome Android | 90+ | Full |

### Fallbacks Provided
- CSS Grid → Flexbox
- backdrop-filter → Solid background
- CSS Variables → Static values
- Intersection Observer → Scroll events

---

## File Size Budget

| Resource | Budget | Actual |
|----------|--------|--------|
| HTML | < 50KB | ~14KB |
| CSS | < 100KB | ~17KB |
| JavaScript | < 100KB | ~15KB |
| Fonts | < 200KB | Varies (CDN) |
| Images | < 1MB | Depends on implementation |
| **Total** | **< 1.5MB** | **~46KB + fonts + images** |

---

## Quality Assurance Checklist

### Visual Design
- [ ] Typography renders correctly on all devices
- [ ] Colors match specification exactly
- [ ] Spacing is consistent throughout
- [ ] Alignment is precise
- [ ] Images load and display properly
- [ ] Icons are sharp and scalable

### Functionality
- [ ] All links work correctly
- [ ] Smooth scroll navigation functions
- [ ] Animations play smoothly (60fps)
- [ ] Hover states work on all interactive elements
- [ ] Buttons trigger appropriate actions
- [ ] Mobile menu toggles correctly

### Responsive Design
- [ ] Layout adapts properly at all breakpoints
- [ ] Text remains readable on small screens
- [ ] Touch targets are adequate (44x44px)
- [ ] No horizontal scroll on any device
- [ ] Images scale appropriately
- [ ] Grid layouts stack correctly

### Performance
- [ ] Page loads in under 3 seconds
- [ ] No layout shift on load
- [ ] Animations don't cause jank
- [ ] Images are optimized
- [ ] CSS/JS are minified for production
- [ ] Fonts load efficiently

### Accessibility
- [ ] Passes WAVE accessibility checker
- [ ] Keyboard navigation works throughout
- [ ] Screen readers can navigate content
- [ ] Color contrast meets WCAG AA
- [ ] Focus states are visible
- [ ] Skip links function correctly

### Cross-Browser
- [ ] Tested in Chrome
- [ ] Tested in Firefox
- [ ] Tested in Safari
- [ ] Tested in Edge
- [ ] Tested on iOS
- [ ] Tested on Android

---

## Maintenance & Updates

### Version Control
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Document all changes in comments
- Keep backup of production version

### Content Updates
- Text can be changed directly in HTML
- Maintain HTML structure when editing
- Test after any content changes

### Design Updates
- Modify CSS variables for theme changes
- Test across all breakpoints after changes
- Update this specification document

---

**Specification Version:** 2.0
**Last Updated:** 2025-09-30
**Design System:** OGT Jinzai Modern Minimalist
**Designer:** UI/UX Designer #2