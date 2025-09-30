# OGT! 人才 Landing Page - Designer-1

## Design Approach: Classic & Elegant

This landing page embodies **timeless sophistication** with a classic design approach emphasizing generous white space, refined typography, and subtle interactions.

---

## Design Concept

### Visual Identity
- **Aesthetic**: Classic and elegant with timeless appeal
- **Typography**: Sophisticated serif fonts (Noto Serif JP, Cinzel)
- **Color Palette**: Dark navy and charcoal gray base with gold accents
- **Layout**: Traditional with modern touches, emphasizing hierarchy
- **Interactions**: Subtle, smooth animations with elegant transitions

### Target Impression
- Professional and trustworthy (like high-end consulting firms)
- Sophisticated and prestigious
- Timeless rather than trendy
- Accessible yet exclusive

---

## Key Design Decisions

### 1. Typography System
**Primary Font**: Noto Serif JP (明朝体)
- Used for body text, headings, and main content
- Provides traditional Japanese elegance
- Excellent readability at all sizes

**Display Font**: Cinzel
- Used for logo and decorative elements
- Adds classic, timeless sophistication
- Complements Japanese serif fonts

**Font Scale**:
- Hero Headline: 56px (3.5rem)
- Section Titles: 40px (2.5rem)
- Subsections: 28px (1.75rem)
- Body Text: 18px (1.125rem)
- Small Text: 16px/14px

### 2. Color Philosophy
**Primary Palette**:
- Dark Navy (`#1a2332`): Main brand color, trustworthiness
- Charcoal Gray (`#3d4850`): Secondary text, depth
- Gold Accent (`#c9a961`): Calls-to-action, highlights
- Bronze (`#8b7355`): Subtle accents, dividers

**Neutral Palette**:
- Off-white (`#f8f7f5`): Background, warmth
- Light Gray (`#e5e3df`): Borders, subtle divisions
- White (`#ffffff`): Content areas, contrast

**Color Strategy**:
- Dark colors create gravitas and trust
- Gold accents suggest premium quality
- Generous use of white space for elegance
- Subtle gradients for depth

### 3. Layout & Spacing
**Spacing System**:
- Base unit: 16px
- Scale: 0.5rem, 1rem, 2rem, 4rem, 6rem, 8rem
- Generous whitespace between sections (6-8rem)
- Consistent internal spacing (1-2rem)

**Container Width**:
- Standard: 1200px max-width
- Narrow (text content): 900px max-width
- Full-width for hero and CTAs

### 4. Interactive Elements

**Navigation**:
- Fixed position with blur backdrop
- Subtle elevation on scroll
- Smooth underline animation on hover
- Compact CTA button with gold border

**Buttons**:
- Two styles: Primary (gold) and Secondary (outlined)
- Subtle hover effects with transform
- Ripple effect on click
- Larger size for CTAs

**Cards & Sections**:
- Subtle elevation on hover
- Smooth transform animations (translateY)
- Border treatments with accent colors
- 3D hover effect on focus cards

### 5. Section-Specific Design

#### Hero Section
- Full viewport height (min 700px)
- Background image with gradient overlay (85% opacity)
- Centered content with clear hierarchy
- Dual CTA buttons
- Scroll indicator with animation

#### Mission Section
- Clean white background
- Centered content with ornamental divider
- Two-column vision cards with icons
- Hover elevation effects

#### Focus Section
- Off-white background for contrast
- Four-column grid (responsive)
- Image cards with badges
- 3D tilt effect on hover

#### Commitment Section
- White background
- Two-column grid of six items
- Left border accent with hover transition
- Numbered items with descriptive text

#### Process Section
- Off-white background
- Timeline layout with circular step markers
- Connected with gradient lines
- Expandable content with features list

#### Final CTA
- Dark navy background (brand color)
- White text for maximum contrast
- Large, centered content
- Dual CTAs with high visibility

---

## Technical Implementation

### HTML Structure
- Semantic HTML5 elements
- Proper heading hierarchy (h1 → h6)
- Accessible navigation with ARIA where needed
- SEO-optimized meta tags
- Clean, readable markup

### CSS Architecture
- CSS Custom Properties (variables) for maintainability
- Mobile-first responsive approach
- Modular section-based organization
- BEM-like naming conventions
- Print stylesheet included

### JavaScript Features
1. **Navigation Controller**: Scroll-based styling changes
2. **Scroll Reveal**: Intersection Observer-based animations
3. **Parallax Effect**: Hero image subtle movement
4. **Ripple Effect**: Interactive button feedback
5. **Lazy Loading**: Performance optimization for images
6. **Focus Card Effects**: 3D tilt on hover
7. **Smooth Scrolling**: Enhanced navigation experience

---

## Responsive Breakpoints

- **Desktop**: 1024px+ (full layout)
- **Tablet**: 768px - 1023px (adjusted spacing, 2-column grids)
- **Mobile**: 480px - 767px (single column, simplified nav)
- **Small Mobile**: < 480px (optimized for small screens)

---

## Performance Optimizations

- Lazy loading for images below the fold
- Optimized CSS with minimal redundancy
- Efficient JavaScript with requestAnimationFrame
- Reduced animation complexity on mobile
- Compressed image guidelines provided

---

## Accessibility Features

- Semantic HTML structure
- Sufficient color contrast (WCAG AA compliant)
- Focus states on all interactive elements
- Keyboard navigation support
- Screen reader friendly markup
- Proper heading hierarchy
- Alt text placeholders for images

---

## Browser Support

- **Modern Browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Graceful Degradation**: Core content accessible without JS
- **CSS Features**: CSS Grid, Flexbox, Custom Properties
- **JavaScript**: ES6+ with fallbacks where needed

---

## Files Included

1. **index.html** (13.8 KB)
   - Complete semantic structure
   - All 6 sections fully implemented
   - Proper meta tags and SEO setup

2. **styles.css** (23.5 KB)
   - Comprehensive styling system
   - Responsive design
   - Print styles
   - Animation keyframes

3. **script.js** (11.2 KB)
   - All interactive features
   - Performance optimized
   - Well-commented code

4. **assets/IMAGE_GUIDE.md**
   - Detailed image sourcing instructions
   - O-dan.net search terms
   - Image specifications
   - Processing guidelines

---

## Setup Instructions

1. **Download Images**:
   - Visit https://o-dan.net/ja/
   - Search using terms in `IMAGE_GUIDE.md`
   - Download 5 images (hero + 4 focus cards)
   - Save to `/assets/` directory with correct filenames

2. **Optimize Images**:
   - Resize to specified dimensions
   - Compress for web (target sizes in guide)
   - Verify filenames match HTML references

3. **Deploy**:
   - Upload all files to web server
   - Ensure proper file structure maintained
   - Test across devices and browsers

4. **Optional Customizations**:
   - Update company address in footer
   - Add actual contact form functionality
   - Integrate with backend systems
   - Add analytics tracking

---

## Design Inspiration

Based on high-end executive search firms:
- Korn Ferry (https://www.kornferry.com/ja)
- Spencer Stuart (https://jp.spencerstuart.com/)
- Heidrick & Struggles (https://www.heidrick.com/ja)
- Egon Zehnder (https://www.egonzehnder.com/jp)
- Russell Reynolds (https://www.russellreynolds.com/ja-jp/)

---

## Future Enhancement Ideas

- Multi-language support (EN/JP toggle)
- Contact form with validation
- Case studies/testimonials section
- Job listing integration
- Blog/news section
- Video testimonials
- Live chat integration
- Progressive Web App features

---

## Design Philosophy

> "True elegance is timeless. This design prioritizes clarity, hierarchy, and sophistication over trends. Every element serves a purpose, every interaction feels natural, and every detail contributes to building trust with senior professionals seeking their next career opportunity."

---

## Contact & Credits

**Design Approach**: Classic & Elegant
**Designer**: Designer-1
**Project**: OGT! 人才 Landing Page
**Date**: 2025
**Fonts**: Google Fonts (Noto Serif JP, Cinzel)
**Images**: Commercial-use-allowed from o-dan.net

---

**Note**: This is a complete, production-ready landing page. All code is optimized, accessible, and follows best practices for modern web development.