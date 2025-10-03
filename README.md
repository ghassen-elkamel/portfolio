# Ghassen Elkamel - Portfolio

A visually stunning, design-forward portfolio website showcasing strategic mobile development expertise.

## 🎨 Design Philosophy

- **80% Visual, 20% Text** - Let design and animations tell the story
- **Neumorphic Earth Tones** - Warm, sophisticated, tactile design
- **Strategic & Premium** - Every interaction feels intentional

## 🚀 Tech Stack

### Core
- **React 19** - Latest features
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling

### UI & Animations
- **Framer Motion** - Smooth animations
- **Custom Neumorphic Components** - Unique design system
- **Lucide React** - Beautiful icons

### Forms & Validation
- **React Hook Form** - Performant form management
- **Zod** - Schema validation

## 🎯 Features

### Sections
- **Hero** - Minimal text, maximum impact with floating tech badges
- **About** - Visual stat cards and achievement badges
- **Skills** - Interactive tech stack grid with proficiency rings
- **Experience** - Expandable timeline with achievements
- **Projects** - Bento grid with modal details
- **Certifications** - Badge wall showcase
- **Contact** - Form with social links
- **Theme Toggle** - Light/Dark mode with persistence

### Design System
- Custom neumorphic shadows (light & dark themes)
- Earth tone color palette
- Accessible components (WCAG 2.1 AA)
- Responsive design (mobile-first)
- Smooth animations (60fps)

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # Neumorphic UI components
│   │   ├── neuro-card.tsx
│   │   ├── neuro-button.tsx
│   │   └── theme-toggle.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Certifications.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── data/               # Content data
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   └── certifications.ts
├── lib/
│   └── utils.ts        # Utility functions
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles & theme
```

## 🎨 Customization

### Update Content

Edit the data files in `src/data/`:
- `projects.ts` - Your projects and case studies
- `experience.ts` - Work history and achievements
- `skills.ts` - Technical skills and proficiencies
- `certifications.ts` - Certifications and credentials

### Modify Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --background: 40 40% 92%;
  --primary: 148 25% 35%;
  --accent: 30 40% 50%;
  /* ... more colors */
}
```

### Add Images

Place project images in `public/projects/`
Place company logos in `public/logos/`
Place certification logos in `public/certs/`

## 📱 Responsive Design

- **Mobile** (< 768px): Single column, optimized interactions
- **Tablet** (768px - 1024px): Two columns, full neumorphic effects
- **Desktop** (> 1024px): Full experience with animations

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader friendly
- Proper ARIA labels
- Color contrast ratios met

## 📄 License

© 2025 Ghassen Elkamel. All rights reserved.

---

Built with ❤️ using React 19, Tailwind CSS, and Framer Motion
