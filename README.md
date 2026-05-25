# Exit Exam

A TypeScript-based exam application built with Vite, React 19, TanStack Router, and Tailwind CSS.

## 🚀 Live Deployment

**[Visit the App](https://yeni-exams.vercel.app/)**

## 📦 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite (Ultra-fast build tool)
- **Routing**: TanStack React Router
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI + Tailwind CSS
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Language**: TypeScript
- **Hosting**: Vercel (Static SPA deployment)

## 🎯 Key Features

✅ Modern UI with Radix UI components  
✅ Type-safe forms with validation  
✅ Responsive design with Tailwind CSS  
✅ Client-side state management with TanStack Query  
✅ Fast routing with TanStack Router  
✅ Command palette for navigation  
✅ Zero-config build and deployment  
✅ SEO-friendly SPA setup  

## 🛠️ Development

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Starts the development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Creates optimized production build in `dist/` folder

### Preview Production Build

```bash
npm run preview
```

Previews the production build locally

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality

### Code Formatting

```bash
npm run format
```

Formats code with Prettier

## 📁 Project Structure

```
project-root/
├── src/
│   ├── client.tsx           # React app entry point
│   ├── router.tsx           # TanStack Router setup
│   ├── routes/              # Route components
│   ├── components/          # Reusable components
│   ├── hooks/               # Custom hooks
│   ├── lib/                 # Utilities and helpers
│   └── styles.css           # Global styles
├── public/                  # Static assets
├── index.html               # HTML entry point (Vite)
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── vercel.json              # Vercel deployment config
└── package.json             # Dependencies
```

## 🌐 Deployment on Vercel

### Recent Migration

This project was successfully migrated from **TanStack Start** (full-stack framework) to **Vite + React SPA** for optimal Vercel static hosting.

### What Was Changed

#### Dependencies Updated
- ✅ Removed: `@lovable.dev/vite-tanstack-config`
- ✅ Removed: `@tanstack/react-start`
- ✅ Removed: `@tanstack/router-plugin`
- ✅ Removed: `@cloudflare/vite-plugin`
- ✅ Kept: `@tanstack/react-router` (for client-side routing)
- ✅ Kept: `@tanstack/react-query` (for state management)
- ✅ Kept: All UI/Form/Chart dependencies (Radix UI, Recharts, etc.)

#### Configuration Files

**vite.config.ts** - Standard Vite configuration
```typescript
- React plugin for JSX
- Tailwind CSS plugin
- TypeScript path aliases
- Optimized build settings
```

**vercel.json** - SPA routing configuration
```json
{
  "buildCommand": "npm install && npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
}
```

**src/client.tsx** - Updated React entry point
```typescript
- ReactDOM.createRoot() for React 19
- QueryClientProvider for TanStack Query
- RouterProvider for TanStack Router
```

### Deploy to Vercel

#### Option 1: Automatic (Recommended)
1. Push to GitHub
2. Connect repo to Vercel dashboard
3. Vercel auto-deploys on every push to main

#### Option 2: Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

#### Vercel Dashboard Setup
1. **Framework Preset**: Vite
2. **Build Command**: `npm run build`
3. **Output Directory**: `dist`
4. **Install Command**: `npm install`

## 📊 Language Composition

- **TypeScript**: 96.6%
- **CSS**: 2.8%
- **JavaScript**: 0.6%

## 🔧 Environment Variables

Create a `.env.local` file for development:

```env
# Prefix with VITE_ to expose to client
VITE_API_URL=https://api.example.com
VITE_APP_NAME=Exit Exam
```

For production, add environment variables in Vercel dashboard:
1. Go to Project Settings > Environment Variables
2. Add `VITE_*` prefixed variables
3. Redeploy

## 🚨 Troubleshooting

### Build Errors

**"Module not found" error**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
# Check tsconfig.json paths
# Ensure @/* alias is correctly mapped
```

### 404 Errors on Refresh
✅ Fixed by vercel.json rewrite configuration
- All routes redirect to `/index.html`
- React Router handles routing on client

### Slow Deployments
- Check `.vercelignore` excludes unnecessary files
- Verify `package.json` scripts are optimized
- Use `npm ci` instead of `npm install` in CI/CD

## 📚 Documentation

- **Vite Docs**: https://vitejs.dev/
- **React Docs**: https://react.dev/
- **TanStack Router**: https://tanstack.com/router/latest
- **TanStack Query**: https://tanstack.com/query/latest
- **Radix UI**: https://www.radix-ui.com/
- **Tailwind CSS**: https://tailwindcss.com/
- **Vercel Docs**: https://vercel.com/docs

## 📋 Deployment Checklist

- [x] Remove TanStack Start dependencies
- [x] Update vite.config.ts
- [x] Update src/client.tsx
- [x] Create vercel.json
- [x] Create index.html at root
- [x] Test locally: `npm run build && npm run preview`
- [x] Push to GitHub
- [ ] Connect to Vercel
- [ ] Test deployed routes
- [ ] Monitor Vercel analytics

## 🎨 Customization

### Change App Title
Edit `index.html` and `src/lib/error-page.ts`

### Modify Tailwind Theme
Edit `tailwind.config.js` (if exists)

### Add Environment-Specific Config
Create `.env.production` and `.env.development` files

## 📈 Performance Tips

1. **Code Splitting**: Vite automatically splits at dynamic imports
   ```typescript
   const Page = lazy(() => import('./pages/Page'));
   ```

2. **Image Optimization**: Place images in `public/` folder

3. **Bundle Analysis**: Use Vite plugins to analyze bundle size

4. **Caching**: vercel.json headers configure 1-year cache for assets

## 🐛 Known Issues & Solutions

### React Router Warnings
- Ensure all route files are in `src/routes/`
- Use proper route naming conventions

### TanStack Query Stale Data
- Adjust `defaultPreloadStaleTime` in `src/router.tsx`
- Set appropriate `staleTime` in query configurations

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

Open source project

---

## 📞 Support

For deployment issues, check:
1. `DEPLOYMENT_GUIDE.md` - Comprehensive deployment guide
2. Vercel documentation: https://vercel.com/docs
3. GitHub Issues for troubleshooting

**Last Updated**: May 25, 2026  
**Deployment Status**: ✅ Ready for Production
