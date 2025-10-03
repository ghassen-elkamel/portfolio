# Customization Guide

## 📝 Content Updates

### 1. Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Name',
  company: 'Company Name',
  client: 'Client Name', // Optional
  year: 2025,
  image: '/projects/image.png', // Place in public/projects/
  tags: ['Flutter', 'React'], // Tech stack
  category: 'mobile', // mobile | backend | enterprise | personal
  metrics: {
    label: 'Efficiency Gain',
    value: '35%'
  },
  description: 'Brief project description',
  features: [
    'Feature 1',
    'Feature 2'
  ],
  links: { // Optional
    live: 'https://...',
    github: 'https://github.com/...'
  }
}
```

### 2. Experience

Edit `src/data/experience.ts`:

```typescript
{
  company: 'Company Name',
  role: 'Your Role',
  location: 'Location 🌍',
  period: '2024 - Present',
  logo: '/logos/company.svg', // Place in public/logos/
  notable: 'One-line highlight',
  tech: ['Tech1', 'Tech2'],
  achievements: [
    'Achievement 1',
    'Achievement 2'
  ]
}
```

### 3. Skills

Edit `src/data/skills.ts`:

```typescript
{
  name: 'Technology',
  category: 'mobile', // mobile | backend | tools
  icon: 'icon-name', // Currently displays first 2 letters
  proficiency: 95, // 0-100
  color: '#HexColor' // Brand color
}
```

### 4. Certifications

Edit `src/data/certifications.ts`:

```typescript
{
  id: 'cert-id',
  name: 'Certification Name',
  issuer: 'Issuer',
  date: '2024',
  logo: '/certs/logo.svg', // Place in public/certs/
  credential: 'URL' // Optional
}
```

## 🎨 Design Customization

### Colors

Edit `src/index.css` CSS variables:

```css
:root {
  /* Light theme */
  --background: 40 40% 92%;       /* Main background */
  --foreground: 30 60% 15%;       /* Text color */
  --primary: 148 25% 35%;         /* Primary color (green) */
  --secondary: 25 30% 70%;        /* Secondary background */
  --accent: 30 40% 50%;           /* Accent color (brown) */
  --muted: 35 25% 80%;            /* Muted elements */
  
  /* Shadows - customize for different depth */
  --shadow-neuro: 8px 8px 16px rgba(163, 144, 119, 0.15), 
                  -8px -8px 16px rgba(255, 255, 255, 0.7);
  --shadow-neuro-inset: inset 4px 4px 8px rgba(163, 144, 119, 0.2), 
                        inset -4px -4px 8px rgba(255, 255, 255, 0.5);
}

.dark {
  /* Dark theme - same variables, different values */
  --background: 25 20% 12%;
  --foreground: 40 40% 92%;
  /* ... etc */
}
```

**Color format:** HSL (Hue Saturation Lightness) without `hsl()` wrapper

### Typography

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      heading: ['Poppins', 'sans-serif'],
    }
  }
}
```

Then add fonts in `index.html`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@700;900&display=swap" rel="stylesheet">
```

### Neumorphic Shadows

Adjust shadow intensity in `src/index.css`:

```css
/* Softer shadows */
--shadow-neuro: 6px 6px 12px rgba(163, 144, 119, 0.1), 
                -6px -6px 12px rgba(255, 255, 255, 0.8);

/* Deeper shadows */
--shadow-neuro: 12px 12px 24px rgba(163, 144, 119, 0.2), 
                -12px -12px 24px rgba(255, 255, 255, 0.6);
```

## 🖼️ Images

### Adding Project Images

1. Place images in `public/projects/`
2. Recommended specs:
   - Format: WebP or PNG
   - Size: 1200x800px (3:2 ratio)
   - Max file size: 200KB
3. Update `image` field in `projects.ts`

### Adding Logos

1. Place SVG logos in `public/logos/`
2. Recommended: SVG format for scalability
3. Update `logo` field in `experience.ts` or `certifications.ts`

### Profile Image (Optional)

Replace the "GE" placeholder in `src/components/sections/Hero.tsx`:

```tsx
<motion.div className="w-40 h-40 rounded-full shadow-neuro-inset overflow-hidden">
  <img 
    src="/profile.jpg" 
    alt="Ghassen Elkamel"
    className="w-full h-full object-cover"
  />
</motion.div>
```

## ⚙️ Component Customization

### Hero Section

Edit `src/components/sections/Hero.tsx`:

```tsx
// Change tech badges
const techBadges = [
  { name: 'Your Tech', color: '#Color' },
  // Add or remove badges
]

// Update tagline
<p className="...">
  Your Custom Tagline • With Bullets • Like This
</p>
```

### About Section

Edit `src/components/sections/About.tsx`:

```tsx
// Update stats
const stats = [
  { icon: YourIcon, label: 'Your Label', value: 'Your Value' },
  // ...
]

// Update description
<p className="...">
  Your custom description here.
</p>
```

### Contact Information

Edit `src/components/sections/Contact.tsx`:

```tsx
const contactLinks = [
  {
    icon: Mail,
    href: 'mailto:your-email@example.com', // Update
    label: 'Email',
    color: 'text-primary'
  },
  {
    icon: Linkedin,
    href: 'https://linkedin.com/in/your-profile', // Update
    // ...
  },
  // Update all links
]
```

## 🎭 Animations

### Adjust Animation Speed

Edit animation `duration` values in component files:

```tsx
// Slower animation
transition={{ duration: 1.2 }}

// Faster animation
transition={{ duration: 0.3 }}
```

### Disable Specific Animations

Remove or comment out `motion` wrappers:

```tsx
// Before
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>

// After (no animation)
<div>
```

### Add New Animations

Use Framer Motion variants:

```tsx
<motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📱 Layout Adjustments

### Grid Columns

Edit grid classes in section components:

```tsx
// 2 columns on mobile, 3 on tablet, 4 on desktop
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

// Adjust to your preference
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

### Section Spacing

Edit padding classes:

```tsx
// Current: 20 mobile, 32 desktop
<section className="py-20 md:py-32">

// More compact
<section className="py-12 md:py-20">

// More spacious
<section className="py-24 md:py-40">
```

### Container Width

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px', // Custom max width
        '2xl': '1200px', // Keep same on larger screens
      }
    }
  }
}
```

## 🔧 Advanced Customization

### Add New Section

1. Create `src/components/sections/YourSection.tsx`:

```tsx
import { motion } from 'framer-motion'
import { NeuroCard } from '../ui/neuro-card'

export function YourSection() {
  return (
    <section id="your-section" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Your Section</h2>
        {/* Your content */}
      </div>
    </section>
  )
}
```

2. Import and add to `src/App.tsx`:

```tsx
import { YourSection } from './components/sections/YourSection'

function App() {
  return (
    <div>
      {/* ... other sections */}
      <YourSection />
    </div>
  )
}
```

### Custom Neumorphic Component

Create in `src/components/ui/`:

```tsx
import { cn } from '@/lib/utils'
import { HTMLAttributes } from 'react'

export function YourComponent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-xl shadow-neuro hover:shadow-neuro-inset',
        'transition-all duration-300',
        className
      )}
      {...props}
    />
  )
}
```

## 📊 Analytics & SEO

### Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your custom description" />
<meta property="og:title" content="Your Name | Portfolio" />
<meta property="og:image" content="https://your-site.com/og-image.png" />
```

### Add Structured Data

Add to `index.html` before `</head>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://your-site.com",
  "sameAs": [
    "https://linkedin.com/in/yourprofile",
    "https://github.com/yourusername"
  ]
}
</script>
```

## 🐛 Troubleshooting

**Issue:** Colors not applying
- Solution: Ensure HSL values are correct (no `hsl()` wrapper)

**Issue:** Animations choppy
- Solution: Reduce number of animated elements or simplify animations

**Issue:** Images not loading
- Solution: Check paths are relative to `public/` directory

---

Need more help? Check the [README.md](./README.md) or open an issue!

