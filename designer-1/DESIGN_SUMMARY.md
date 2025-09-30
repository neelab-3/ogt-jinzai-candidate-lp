# OGT! 人才 Landing Page - Design Summary

## Project Overview
A sophisticated landing page for OGT! 人才 recruitment company, targeting senior professionals with a **classic and elegant** design approach emphasizing timeless aesthetics, generous white space, and refined typography.

---

## Design System

### Color Palette

```
PRIMARY COLORS
├─ Dark Navy     #1a2332  ████  Main brand color
├─ Navy Dark     #0f1721  ████  Depth & shadows
└─ Navy Light    #2a3d54  ████  Hover states

SECONDARY COLORS
├─ Charcoal      #3d4850  ████  Secondary text
├─ Bronze        #8b7355  ████  Accents
└─ Gold          #c9a961  ████  CTAs & highlights

NEUTRALS
├─ White         #ffffff  ████  Pure white
├─ Off-White     #f8f7f5  ████  Backgrounds
├─ Light Gray    #e5e3df  ████  Borders
├─ Medium Gray   #9a9590  ████  Secondary text
└─ Dark Gray     #4a4540  ████  Dark text
```

### Typography

**Font Families**:
- **Primary**: Noto Serif JP (明朝体) - Body text, headings
- **Display**: Cinzel - Logo, decorative elements

**Font Scale**:
```
Hero Headline      56px / 3.5rem   font-weight: 600
Section Title      40px / 2.5rem   font-weight: 600
Subsection         28px / 1.75rem  font-weight: 600
Body Large         18px / 1.125rem font-weight: 400
Body Regular       16px / 1.0rem   font-weight: 400
Small Text         14px / 0.875rem font-weight: 400
```

**Line Heights**:
- Headings: 1.4
- Body text: 1.8
- Hero subheadline: 1.9

### Spacing System

```
XS:   0.5rem    8px
SM:   1.0rem   16px
MD:   2.0rem   32px
LG:   4.0rem   64px
XL:   6.0rem   96px
XXL:  8.0rem  128px
```

**Application**:
- Section padding top: XXL (128px)
- Section padding bottom: XXL (128px)
- Element margins: SM-MD (16-32px)
- Content padding: MD-LG (32-64px)

---

## Page Structure

### Section 1: Hero
**Purpose**: Capture attention and motivate continued reading

**Elements**:
- Full viewport height background image with overlay
- Two-tiered headline (small gold + large white)
- Subheadline with value proposition
- Dual CTA buttons (primary gold + secondary outlined)
- Animated scroll indicator

**Key Styling**:
- Background overlay: 85% opacity dark gradient
- Fade-in animation on load
- Parallax effect on scroll
- Fixed navigation above

---

### Section 2: Mission & Vision
**Purpose**: Communicate company mission and values

**Elements**:
- Centered section title with ornamental divider
- Large mission statement headline
- Supporting description text
- Two vision cards in grid layout
- Custom SVG icons

**Key Styling**:
- White background for clarity
- Ornamental gold divider line
- Hover elevation on cards
- Icon accent color transitions

---

### Section 3: Our Focus (4 Talent Categories)
**Purpose**: Showcase target candidate types

**Elements**:
- Four cards in responsive grid
- Each card: image, badge, title, description
- Categories: Senior Soul, Leading Ladies, Top Guns, Language Lions

**Key Styling**:
- Off-white section background
- Image placeholders with aspect ratio
- Colored badges (navy + gold)
- 3D tilt hover effect
- Smooth elevation transitions

---

### Section 4: Our Commitment (6 Support Points)
**Purpose**: Detail candidate support services

**Elements**:
- Six commitment items in 2-column grid
- Each item: number, title, description
- Left border accent indicator

**Key Styling**:
- White background
- Sequential numbering (01-06)
- Border color transition on hover
- Horizontal slide animation

---

### Section 5: Process (4 Steps)
**Purpose**: Explain recruitment to retention process

**Elements**:
- Timeline layout with connected steps
- Circular step markers (STEP 1-4)
- Content boxes with features lists
- Connecting gradient lines

**Key Styling**:
- Off-white background
- Circular markers with borders
- Gradient connector lines
- Hover scale and color change
- Feature bullets with custom markers

---

### Section 6: Final CTA
**Purpose**: Convert visitors to consultations

**Elements**:
- Centered headline emphasizing value
- Supporting subheadline copy
- Dual large CTA buttons
- High contrast design

**Key Styling**:
- Dark navy background (brand color)
- White text for maximum contrast
- Extra-large button sizes
- Prominent placement

---

### Footer
**Elements**:
- Company branding (logo + tagline)
- Company information with address
- Navigation links
- Privacy policy & contact links
- Copyright notice

**Key Styling**:
- Dark background (#0f1721)
- Three-column grid layout
- Gold accent headings
- Subtle link hover effects

---

## Interactive Features

### 1. Navigation Behavior
- Fixed position with blur backdrop
- Shrinks on scroll (padding reduction)
- Smooth scroll to anchor links
- Gold underline animation on hover
- CTA button with border

### 2. Scroll Animations
- Fade-in + slide-up on viewport entry
- Staggered delays for sequential items
- Intersection Observer for performance
- Applied to cards, items, and steps

### 3. Hero Parallax
- Background image moves slower than scroll
- Subtle effect (0.5x scroll speed)
- Enhances depth perception
- Disabled on mobile for performance

### 4. Button Interactions
- Ripple effect on click
- Color inversion on hover
- Vertical lift transformation
- Smooth transitions (0.4s)

### 5. Card Hover Effects
- **Vision Cards**: Elevation shadow
- **Focus Cards**: 3D tilt based on mouse position
- **Commitment Items**: Horizontal slide
- **Process Steps**: Marker color change + scale

### 6. Performance Optimizations
- Lazy loading for images
- RequestAnimationFrame for smooth animations
- Debounced scroll handlers
- Reduced motion on mobile

---

## Responsive Design

### Desktop (1024px+)
- Full 4-column layouts
- All animations enabled
- Large font sizes
- Generous spacing

### Tablet (768px - 1023px)
- 2-column layouts
- Slightly reduced font sizes
- Maintained spacing
- Simplified navigation

### Mobile (< 768px)
- Single column layouts
- Stacked navigation (hidden menu)
- Reduced font scale
- Optimized touch targets
- Simplified animations

---

## Accessibility Compliance

✓ Semantic HTML5 structure
✓ Proper heading hierarchy (h1-h6)
✓ WCAG AA color contrast ratios
✓ Keyboard navigation support
✓ Focus visible states
✓ Screen reader friendly
✓ Alt text for images
✓ Accessible form labels
✓ Skip navigation links possible
✓ Reduced motion support ready

---

## Technical Specifications

**HTML**:
- 13.8 KB (uncompressed)
- Semantic markup
- SEO optimized
- Social meta tags ready

**CSS**:
- 23.5 KB (uncompressed)
- CSS Grid & Flexbox
- Custom properties (CSS variables)
- Mobile-first approach
- Print styles included

**JavaScript**:
- 11.2 KB (uncompressed)
- Vanilla JS (no dependencies)
- ES6+ features
- Progressive enhancement
- 7 interactive modules

**Images Required**:
- 5 images total (1 hero + 4 focus cards)
- Source: o-dan.net (commercial-use-allowed)
- Detailed sourcing guide provided
- Optimization targets specified

---

## Design Principles Applied

1. **Timeless Over Trendy**
   - Classic typography choices
   - Traditional layout patterns
   - Neutral color palette with subtle accents

2. **Hierarchy & Clarity**
   - Clear visual hierarchy in every section
   - Consistent sizing scale
   - Generous whitespace for breathing room

3. **Sophistication Through Restraint**
   - Limited color palette
   - Subtle animations
   - Refined interactions
   - Quality over quantity

4. **Trust & Professionalism**
   - Dark, trustworthy colors
   - High-quality imagery expected
   - Professional typography
   - Consistent branding

5. **User-Centered Design**
   - Clear CTAs throughout
   - Logical information flow
   - Easy navigation
   - Accessible to all users

---

## Deliverables Checklist

✅ **index.html** - Complete HTML structure with all 6 sections
✅ **styles.css** - Comprehensive CSS with responsive design
✅ **script.js** - All interactive features implemented
✅ **assets/IMAGE_GUIDE.md** - Detailed image sourcing instructions
✅ **README.md** - Complete documentation and setup guide
✅ **DESIGN_SUMMARY.md** - This design system overview

---

## Next Steps for Implementation

1. **Image Acquisition**:
   - Visit o-dan.net
   - Search using provided terms
   - Download 5 high-quality images
   - Process and optimize per guidelines

2. **Content Finalization**:
   - Review all copy for accuracy
   - Update company information
   - Add real contact details
   - Verify all links

3. **Testing**:
   - Cross-browser testing
   - Mobile device testing
   - Accessibility audit
   - Performance optimization
   - SEO validation

4. **Deployment**:
   - Upload to hosting
   - Configure domain
   - Set up analytics
   - Monitor performance

---

## Success Metrics

**Design Goals**:
- Professional, trustworthy first impression
- Clear value proposition communication
- High engagement with CTAs
- Smooth, elegant user experience
- Fast load times (< 3 seconds)

**Target Audience Resonance**:
- Senior professionals feel valued
- Executive-level aesthetic appeal
- Clear differentiation from competitors
- Trust-building through design quality

---

## Competitive Positioning

This design draws inspiration from high-end executive search firms while maintaining a unique identity:

- **Korn Ferry**: Borrowed sophisticated color palette approach
- **Spencer Stuart**: Inspired timeline/process visualization
- **Heidrick & Struggles**: Emulated generous white space usage
- **Egon Zehnder**: Referenced elegant typography system
- **Russell Reynolds**: Adapted professional imagery style

**Unique Differentiators**:
- Japanese market-specific optimization
- Bilingual design considerations
- Focus on diverse talent categories
- Comprehensive support process visualization

---

## Design Philosophy Statement

> "This landing page embodies the essence of classic elegance—where every element serves a purpose, every transition feels natural, and every detail contributes to building trust. We've created a timeless design that speaks to accomplished professionals seeking their next great opportunity, conveying both the gravitas of their experience and the promise of their future."

---

**End of Design Summary**