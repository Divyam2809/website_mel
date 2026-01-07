# CSS Refactoring Guide

## ✅ Completed Files (6/31 = 19%)
1. **VRLiveStream.jsx** - Has its own `VRLiveStream.css` (275 lines → all CSS external)
2. **VRKala.jsx** - Uses shared `VRProduct.css` (506 → ~200 lines, 60% reduction)
3. **VRDefence.jsx** - Uses shared `VRProduct.css` (680 → ~150 lines, 78% reduction)
4. **VRCrimeScene.jsx** - Uses shared `VRProduct.css` (601 → ~120 lines, 80% reduction)
5. **DroneSimulator.jsx** - Uses shared `VRProduct.css` (607 → ~130 lines, 79% reduction)
6. **AircraftSimulator.jsx** - Uses shared `VRProduct.css` (677 → ~130 lines, 81% reduction)

**Total Lines Saved: ~2,800 lines of code removed!**
**Average Reduction: 75% per file**

## 📋 Files to Refactor (25 remaining)

### VR Product Pages (Use VRProduct.css)
These files follow similar patterns and can use the shared `VRProduct.css`:

- [ ] VRDefence.jsx (663 lines)
- [ ] VRCrimeScene.jsx (586 lines)
- [ ] VRExhibition.jsx (326 lines)
- [ ] VRHospitality.jsx (326 lines)
- [ ] VRRealEstate.jsx (326 lines)
- [ ] VRUdyog.jsx (320 lines)
- [ ] VRElearning.jsx (325 lines)
- [ ] VRIndustrial.jsx (305 lines)
- [ ] VRAnimalSurgery.jsx (302 lines)
- [ ] VRERP.jsx (281 lines)
- [ ] VRLab.jsx (278 lines)
- [ ] DroneSimulator.jsx
- [ ] AircraftSimulator.jsx

### Core Application Files (Need Individual CSS)
- [ ] App.jsx - Create `App.css`
- [ ] Home.jsx - Create `Home.css`
- [ ] Products.jsx - Create `Products.css`
- [ ] Industries.jsx - Create `Industries.css`
- [ ] About.jsx - Create `About.css`
- [ ] Footer.jsx - Create `Footer.css`
- [ ] BookDemo.jsx - Create `BookDemo.css`

### Other Pages
- [ ] Blog.jsx
- [ ] CaseStudies.jsx
- [ ] FAQs.jsx
- [ ] AnubhavProduct.jsx
- [ ] NineDChair.jsx
- [ ] GenericProduct.jsx
- [ ] Guidelines.jsx
- [ ] Timeline.jsx

## 🔄 Refactoring Pattern

### For VR Product Pages:

```javascript
// OLD (with inline styles)
import React, { useEffect } from 'react';

export default function VRExample({ isDarkTheme, onBookDemo }) {
    const theme = {
        background: isDarkTheme ? '#0A0A0A' : '#FFFFFF',
        // ... more theme vars
    };
    
    return (
        <div style={{ minHeight: '100vh', backgroundColor: theme.background }}>
            <section style={{ padding: '8rem 2rem 6rem', ... }}>
                // content
            </section>
        </div>
    );
}
```

```javascript
// NEW (with CSS classes)
import React, { useEffect } from 'react';
import '../VRProduct.css';

export default function VRExample({ isDarkTheme, onBookDemo }) {
    const themeClass = isDarkTheme ? 'theme-dark' : 'theme-light';
    
    return (
        <div className={`vr-product-container ${themeClass}`}>
            <section className="vr-product-hero" style={{ backgroundImage: `url(...)` }}>
                // content
            </section>
        </div>
    );
}
```

### Class Mapping Reference:

| Old Inline Style | New CSS Class |
|-----------------|---------------|
| Container div | `vr-product-container` + `theme-dark/light` |
| Hero section | `vr-product-hero` |
| Hero content wrapper | `vr-product-hero-content` |
| Badge/Tag | `vr-product-badge` |
| Primary button | `vr-product-btn-primary` |
| Secondary button | `vr-product-btn-secondary` |
| Section wrapper | `vr-product-section` |
| Alt background section | `vr-product-section alt-bg` |
| Section title | `vr-product-section-title` |
| Section subtitle | `vr-product-section-subtitle` |
| Feature grid | `vr-product-feature-grid` |
| Feature card | `vr-product-feature-card` |
| Feature icon | `vr-product-feature-icon` |
| Feature title | `vr-product-feature-title` |
| Feature description | `vr-product-feature-desc` |
| Stats grid | `vr-product-stats-grid` |
| Stat card | `vr-product-stat-card` |
| Stat value | `vr-product-stat-value` |
| Stat label | `vr-product-stat-label` |
| Benefits list | `vr-product-benefits-list` |
| Benefit item | `vr-product-benefit-item` |
| CTA section | `vr-product-cta` |

## 🎯 Benefits of This Refactoring

1. **Code Reduction**: ~60% less code per file
2. **Performance**: CSS is cached, no inline style recalculation
3. **Maintainability**: Change styles in one place
4. **Consistency**: All VR products look uniform
5. **Bundle Size**: Smaller JavaScript bundles

## ⚡ Quick Win Strategy

### Phase 1 (Immediate - High Impact)
1. Refactor all VR product pages using `VRProduct.css` (~13 files)
   - These are the most similar and benefit most from shared CSS

### Phase 2 (Core Pages)
2. Create individual CSS for:
   - `App.jsx` → `App.css`
   - `Home.jsx` → `Home.css`
   - `Products.jsx` → `Products.css`

### Phase 3 (Remaining)
3. Handle remaining pages based on complexity

## 📝 Notes

- Keep `backgroundImage` as inline style (dynamic based on theme)
- Some minor inline styles are OK for truly dynamic values
- Focus on removing repetitive inline styles
- Remove all `onMouseEnter`/`onMouseLeave` handlers - use CSS `:hover`
