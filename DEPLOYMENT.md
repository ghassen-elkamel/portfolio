# Deployment Guide

## Prerequisites

Before deploying, ensure you've:
- [ ] Updated all content in `src/data/` files
- [ ] Added your project images to `public/projects/`
- [ ] Added company logos to `public/logos/`
- [ ] Updated contact information in Contact section
- [ ] Created a CV PDF file at `public/cv.pdf`
- [ ] Tested locally with `npm run dev`
- [ ] Built successfully with `npm run build`

## Recommended Platform: Vercel

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- What's your project name? **portfolio** (or your choice)
- In which directory is your code? **./**
- Override settings? **N**

### Step 4: Production Deployment

```bash
vercel --prod
```

Your portfolio will be live at `https://your-project.vercel.app`

## Alternative: Netlify

### Via Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

### Via Git (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Click "Deploy site"

## Alternative: GitHub Pages

### Step 1: Update vite.config.ts

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Your GitHub repo name
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
```

### Step 2: Install gh-pages

```bash
npm install -D gh-pages
```

### Step 3: Update package.json

Add deploy scripts:

```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

### Step 4: Deploy

```bash
npm run deploy
```

Your site will be at `https://yourusername.github.io/repository-name/`

## Custom Domain Setup

### Vercel

1. Go to your project dashboard
2. Settings → Domains
3. Add your custom domain
4. Update DNS records:
   ```
   Type: CNAME
   Name: www (or @)
   Value: cname.vercel-dns.com
   ```

### Netlify

1. Go to Site settings → Domain management
2. Add custom domain
3. Update DNS records as instructed

## Environment Variables

If you add any environment variables:

### Vercel
```bash
vercel env add VITE_API_KEY
```

### Netlify
Site settings → Build & deploy → Environment → Environment variables

## Performance Optimization

Before deploying:

1. **Optimize Images**
   - Use WebP format
   - Compress images (max 200KB per image)
   - Consider using a CDN

2. **Check Bundle Size**
   ```bash
   npm run build
   npx vite-bundle-visualizer
   ```

3. **Test Lighthouse Score**
   - Open in Chrome
   - DevTools → Lighthouse
   - Run audit
   - Target: 95+ for all metrics

## Post-Deployment Checklist

- [ ] Test all links work
- [ ] Verify contact form (if backend connected)
- [ ] Check theme toggle persists
- [ ] Test on mobile devices
- [ ] Verify all images load
- [ ] Test keyboard navigation
- [ ] Check cross-browser compatibility
- [ ] Submit to search engines
- [ ] Add analytics (Google Analytics, Plausible, etc.)

## Analytics Setup (Optional)

### Google Analytics

1. Create GA4 property
2. Get tracking ID
3. Add to `index.html`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Plausible (Privacy-friendly)

1. Sign up at [plausible.io](https://plausible.io)
2. Add tracking script to `index.html`

## Continuous Deployment

Both Vercel and Netlify support automatic deployments:

1. Push your code to Git
2. Connect your repository
3. Every push to main branch = automatic deployment

## Troubleshooting

### Build fails on deployment

- Check Node.js version (use 18+)
- Ensure all dependencies are in `package.json`
- Test `npm run build` locally first

### Images not loading

- Verify images are in `public/` directory
- Check image paths (case-sensitive)
- Ensure images are committed to Git

### 404 on refresh

For SPAs on Netlify, create `public/_redirects`:
```
/*    /index.html   200
```

For Vercel, create `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

**Need help?** Check the platform documentation:
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

