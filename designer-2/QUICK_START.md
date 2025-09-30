# Quick Start Guide
## OGT! 人才 Landing Page - Designer 2

---

## Get Started in 3 Steps

### Step 1: View the Page
Open the `index.html` file in your web browser:

**Option A - Double Click:**
1. Navigate to: `/Users/newgate/vibe-coding/ogt-jinzai-candidate-lp/design3/designer-2/`
2. Double-click `index.html`
3. Page opens in your default browser

**Option B - Via Browser:**
1. Open your web browser
2. Press `Cmd+O` (Mac) or `Ctrl+O` (Windows)
3. Navigate to the file and open

**Option C - Via Terminal:**
```bash
cd /Users/newgate/vibe-coding/ogt-jinzai-candidate-lp/design3/designer-2
open index.html
```

### Step 2: Explore the Design
Scroll through the page to see:
- Bold hero section with large typography
- Mission and vision cards with hover effects
- Focus areas with 3D card interactions
- Commitment points with animated borders
- Process flow with connecting elements
- Final CTA section
- Professional footer

**Try These Interactions:**
- Hover over cards to see animations
- Click navigation links for smooth scroll
- Resize browser to test responsive design
- Use keyboard Tab to test accessibility

### Step 3: Customize (Optional)
Want to make changes? See sections below.

---

## Quick Customization Guide

### Change Text Content

**Edit:** `index.html`

**Find sections by comments:**
```html
<!-- Section 1: Hero -->
<!-- Section 2: Mission & Vision -->
<!-- Section 3: Our Focus -->
etc.
```

**Example - Change Hero Title:**
```html
<h1 class="hero-title">
    <span class="hero-title-line">Your New Title Here</span>
    <span class="hero-title-line hero-title-emphasis">Your Emphasis</span>
    <span class="hero-title-line">Final Line</span>
</h1>
```

### Change Colors

**Edit:** `styles.css`

**Find the `:root` section at the top:**
```css
:root {
    --color-navy-dark: #0A1628;  /* Change primary color */
    --color-accent: #C9A872;      /* Change accent color */
    --color-white: #FFFFFF;       /* Change text color */
}
```

**Save and refresh browser to see changes.**

### Change Fonts

**Edit:** `styles.css`

**Find the `:root` section:**
```css
:root {
    --font-serif: 'Your Font Name', serif;
    --font-sans: 'Your Font Name', sans-serif;
}
```

**Don't forget to update the Google Fonts link in `index.html` `<head>`:**
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font+Name..." rel="stylesheet">
```

### Add Images

**See:** `assets/IMAGE_GUIDE.md` for detailed instructions

**Quick version:**
1. Download images from https://o-dan.net/ja/
2. Save to `assets/images/` folder
3. Add to CSS:
```css
.hero {
    background-image: url('assets/images/your-image.jpg');
}
```

---

## File Structure Overview

```
designer-2/
├── index.html              ← Main page (edit content here)
├── styles.css              ← All styling (edit colors/fonts here)
├── script.js               ← Interactions (usually don't need to edit)
├── README.md               ← Full documentation
├── DESIGN_SPECS.md         ← Detailed specifications
├── PROJECT_SUMMARY.md      ← Project overview
├── QUICK_START.md          ← This file
└── assets/
    ├── IMAGE_GUIDE.md      ← Image instructions
    └── images/             ← Put images here
```

---

## Common Customizations

### 1. Change Button Text

**File:** `index.html`

**Find:**
```html
<button class="btn btn-primary">Start with career consultation (free)</button>
```

**Change to:**
```html
<button class="btn btn-primary">Your New Button Text</button>
```

### 2. Change Section Background Color

**File:** `styles.css`

**Find the section** (e.g., `.mission`):
```css
.mission {
    background-color: var(--color-white); /* Change this */
}
```

**Change to:**
```css
.mission {
    background-color: #F8F9FA; /* Your color */
}
```

### 3. Adjust Spacing

**File:** `styles.css`

**Find `:root` and modify spacing variables:**
```css
:root {
    --spacing-lg: 4rem;  /* Make larger or smaller */
    --spacing-xl: 6rem;
}
```

### 4. Change Animation Speed

**File:** `styles.css`

**Find `:root` and modify transition:**
```css
:root {
    --transition-smooth: all 0.4s ease;  /* Change 0.4s */
}
```

### 5. Update Company Name/Footer

**File:** `index.html`

**Find the footer section:**
```html
<div class="footer-company">
    <h3 class="footer-title">OGT! 人才 Co., Ltd.</h3>
    <p class="footer-text">Your new description</p>
</div>
```

---

## Testing Checklist

After making changes:

- [ ] Save all files
- [ ] Refresh browser (Cmd+R or Ctrl+R)
- [ ] Check on mobile size (resize browser window)
- [ ] Test hover effects still work
- [ ] Test smooth scroll navigation
- [ ] Check text is readable
- [ ] Verify colors have sufficient contrast

---

## Responsive Testing

**Desktop View:**
- Resize browser to ~1400px width
- Should see multi-column layouts
- All features fully visible

**Tablet View:**
- Resize browser to ~768px width
- Some grids become 2 columns
- Navigation still horizontal

**Mobile View:**
- Resize browser to ~375px width
- All grids become single column
- Text remains readable
- Touch targets are large enough

**Quick Test:**
- Open browser developer tools (F12 or Cmd+Option+I)
- Click device toolbar icon
- Select different devices to preview

---

## Troubleshooting

### Problem: Styles not applying
**Solution:**
1. Clear browser cache (Cmd+Shift+R or Ctrl+Shift+R)
2. Check `styles.css` is in same folder as `index.html`
3. Look for syntax errors in CSS

### Problem: Animations not working
**Solution:**
1. Check `script.js` is in same folder
2. Open browser console (F12) to see errors
3. Ensure JavaScript is enabled in browser

### Problem: Fonts look different
**Solution:**
1. Check internet connection (fonts load from Google)
2. Verify Google Fonts link in `<head>` of HTML
3. Check font names match exactly

### Problem: Layout broken on mobile
**Solution:**
1. Check browser zoom is at 100%
2. Test in actual mobile browser if possible
3. Verify viewport meta tag is present in HTML

### Problem: Images not showing
**Solution:**
1. Check image file path is correct
2. Verify image files are in `assets/images/` folder
3. Check image file names match CSS exactly (case-sensitive)

---

## Resources

### Documentation Files
- **README.md** - Complete guide to the design
- **DESIGN_SPECS.md** - Detailed visual specifications
- **PROJECT_SUMMARY.md** - Project overview and decisions
- **IMAGE_GUIDE.md** - Instructions for adding images

### External Resources
- **Google Fonts:** https://fonts.google.com
- **O-DAN (Images):** https://o-dan.net/ja/
- **W3C HTML Validator:** https://validator.w3.org
- **W3C CSS Validator:** https://jigsaw.w3.org/css-validator/

### Browser DevTools
- **Chrome DevTools:** Cmd+Option+I (Mac) or F12 (Windows)
- **Firefox DevTools:** Cmd+Option+I (Mac) or F12 (Windows)
- **Safari DevTools:** Cmd+Option+I (Enable in Safari Preferences first)

---

## Need Help?

### For Design Questions
- Review **README.md** for design philosophy
- Check **DESIGN_SPECS.md** for exact measurements
- See **PROJECT_SUMMARY.md** for design decisions

### For Technical Issues
- Check browser console for errors (F12)
- Validate HTML: https://validator.w3.org
- Validate CSS: https://jigsaw.w3.org/css-validator/

### For Content Updates
- All text is in **index.html**
- Use Find/Replace for bulk changes
- Preserve HTML tags when editing

---

## Next Steps

### Phase 1: Initial Setup ✓
- [x] Design created
- [x] Code complete
- [x] Documentation ready

### Phase 2: Customization (You are here)
- [ ] Update text content for your needs
- [ ] Adjust colors to brand
- [ ] Add images (optional)
- [ ] Customize CTAs

### Phase 3: Testing
- [ ] Test on multiple browsers
- [ ] Test on real mobile devices
- [ ] Check loading speed
- [ ] Verify all links work

### Phase 4: Deployment
- [ ] Choose hosting service
- [ ] Upload files
- [ ] Configure domain
- [ ] Set up analytics
- [ ] Launch!

---

## Pro Tips

1. **Always keep a backup** before making major changes
2. **Test changes immediately** in browser after saving
3. **Use browser DevTools** to experiment before editing files
4. **Start small** - change one thing at a time
5. **Check responsive** - test mobile view after every change
6. **Comment your code** - add notes for future reference
7. **Validate regularly** - check HTML/CSS validation
8. **Optimize images** - compress before uploading

---

## Quick Reference: CSS Variables

```css
/* Colors */
--color-navy-dark: #0A1628;
--color-navy: #1A2845;
--color-accent: #C9A872;
--color-white: #FFFFFF;

/* Fonts */
--font-serif: 'Noto Serif JP', serif;
--font-sans: 'Noto Sans JP', sans-serif;

/* Spacing */
--spacing-sm: 1rem;
--spacing-md: 2rem;
--spacing-lg: 4rem;
--spacing-xl: 6rem;
--spacing-xxl: 8rem;

/* Animation */
--transition-smooth: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
```

Change these in `styles.css` `:root` section for site-wide updates!

---

## That's It!

You're ready to use and customize your OGT! 人才 landing page.

For detailed information, see the other documentation files.

**Happy customizing!**

---

**Last Updated:** 2025-09-30
**Version:** 2.0