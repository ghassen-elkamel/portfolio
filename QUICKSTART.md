# Quick Start Guide

## ✅ Initial Setup Complete!

Your portfolio is ready to run. The development server should already be running.

If not, start it with:
```bash
npm run dev
```

Visit: `http://localhost:5173`

## 🎯 Next Steps (In Order)

### 1. Update Personal Information (5 min)

**Contact Details** - Edit `src/components/sections/Contact.tsx` (line ~35):
```tsx
const contactLinks = [
  { href: 'mailto:YOUR-EMAIL@example.com', ... },
  { href: 'https://linkedin.com/in/YOUR-PROFILE', ... },
  { href: 'https://github.com/YOUR-USERNAME', ... },
  { href: 'tel:+YOUR-PHONE', ... }
]
```

### 2. Add Your Content (30 min)

Update these files in order of importance:

1. **Projects** (`src/data/projects.ts`)
   - Update project details
   - Change company names, descriptions
   - Update tech stacks

2. **Experience** (`src/data/experience.ts`)
   - Update work history
   - Modify achievements
   - Change company names

3. **Skills** (`src/data/skills.ts`)
   - Add/remove technologies
   - Adjust proficiency percentages
   - Update colors to match tech brands

4. **Certifications** (`src/data/certifications.ts`)
   - Add your certifications
   - Update issuers and dates

### 3. Add Images (20 min)

Create these directories and add images:

```
public/
├── projects/       # Project screenshots (1200x800px recommended)
│   ├── vw.png
│   ├── kone.png
│   └── ...
├── logos/          # Company/certification logos (SVG preferred)
│   ├── smavoo.svg
│   ├── mypartner.svg
│   └── ...
└── cv.pdf          # Your CV/Resume
```

**Tips:**
- Use WebP format for smaller file sizes
- Keep images under 200KB each
- Use SVG for logos when possible

### 4. Customize Colors (Optional, 10 min)

If you want different colors, edit `src/index.css`:

```css
:root {
  --primary: 148 25% 35%;    /* Main accent color */
  --accent: 30 40% 50%;      /* Secondary accent */
  /* Adjust these HSL values */
}
```

Use [HSL Color Picker](https://hslpicker.com/) to find colors.

### 5. Test Everything (10 min)

- [ ] Click all navigation links
- [ ] Test theme toggle (sun/moon icon top-right)
- [ ] Open project modals
- [ ] Expand experience timeline items
- [ ] Submit contact form (check console)
- [ ] Test on mobile (Chrome DevTools)

### 6. Deploy (15 min)

**Easiest: Vercel** (Recommended)

```bash
npm install -g vercel
vercel login
vercel
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

---

## 📋 Common Customizations

### Change Your Name
Edit `src/components/sections/Hero.tsx` (line ~50)

### Update Hero Tagline
Edit `src/components/sections/Hero.tsx` (line ~60)

### Modify About Text
Edit `src/components/sections/About.tsx` (line ~60)

### Change Tech Badges (Hero)
Edit `src/components/sections/Hero.tsx` (line ~10)

---

## 🎨 Design Tips

**Current Design:**
- Neumorphic earth tones
- 80% visual, 20% text
- Warm, professional aesthetic

**Keep it Visual:**
- Use large metrics/numbers
- Minimal text blocks
- Let animations tell the story
- Generous whitespace

---

## 📚 Full Documentation

- [README.md](./README.md) - Full overview
- [CUSTOMIZATION.md](./CUSTOMIZATION.md) - Detailed customization guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment instructions

---

## 🐛 Issues?

**Build errors?**
```bash
npm install
npm run dev
```

**Styling issues?**
- Check Tailwind classes are valid
- Ensure `index.css` is imported in `main.tsx`

**TypeScript errors?**
- Check data types in `src/data/` files match interfaces

---

## ✨ You're Ready!

Your portfolio is a blank canvas with beautiful design. 

**Make it yours:**
1. Update content
2. Add images  
3. Test thoroughly
4. Deploy

**Time estimate:** 1-2 hours for full customization

Good luck! 🚀

