# Deployment Guide - Exit Exam to Vercel

## Summary of Changes

This project has been converted from **TanStack Start** (full-stack framework) to a **Vite + React SPA** for compatibility with Vercel's static hosting.

### Key Changes Made:

#### 1. **package.json** ✅
- ❌ Removed: `@lovable.dev/vite-tanstack-config`
- ❌ Removed: `@tanstack/react-start`
- ❌ Removed: `@tanstack/router-plugin`
- ❌ Removed: `@cloudflare/vite-plugin`
- ✅ Added: Standard Vite build scripts
- ✅ Kept: `@tanstack/react-router` (for routing)
- ✅ Kept: `@tanstack/react-query` (for state management)
- ✅ Kept: All UI/Form/Chart dependencies

#### 2. **vite.config.ts** ✅
```typescript
// Now uses standard Vite configuration
- react() plugin for JSX transformation
- tailwindcss() for styling
- tsconfigPaths() for TypeScript path aliases (@/*)
```

#### 3. **src/client.tsx** ✅
```typescript
// Changed from TanStack Start to standard React
- Uses ReactDOM.createRoot() instead of startInstance.render()
- Wraps app with QueryClientProvider
- Proper error boundary handling
```

#### 4. **src/router.tsx** ✅
```typescript
// Updated to accept queryClient as parameter
- getRouter(queryClient) now takes QueryClient instance
- Compatible with client-side React Router setup
```

#### 5. **vercel.json** ✅
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [{ "source": "/:path*", "destination": "/index.html" }]
}
```
- Configured for SPA routing
- Points to Vite's `dist` output directory
- All routes redirect to `index.html` for client-side routing

#### 6. **public/index.html** ✅
```html
<!-- Updated to use Vite module script -->
<script type="module" src="/src/client.tsx"></script>
```

#### 7. **.vercelignore** ✅
- Optimizes Vercel build by ignoring unnecessary files
- Reduces build time and deployment size

## Deployment Steps

### Option 1: Using Vercel Dashboard (Recommended)

1. **Connect Repository**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository

2. **Configure Build Settings**
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

3. **Environment Variables** (if needed)
   - Add any `VITE_*` prefixed variables
   - Vercel will automatically use them during build

4. **Deploy**
   - Click "Deploy"
   - Vercel will automatically deploy on future pushes to main

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

## Local Testing

### Development
```bash
npm install
npm run dev
# Opens http://localhost:5173
```

### Production Build Test
```bash
npm run build
npm run preview
# Opens preview server for testing dist/ output
```

## Troubleshooting

### Build Errors

**Error: Module not found**
- Check that all imports use correct paths
- Verify `tsconfig.json` paths are correct: `"@/*": ["./src/*"]`

**Error: Cannot find module '@tanstack/react-start'**
- ✅ Fixed - This module has been removed from dependencies
- Verify package.json has been updated
- Run `npm install` to refresh node_modules

**Error: VITE_* environment variables not found**
- Prefix environment variables with `VITE_` in `.env`
- Example: `VITE_API_URL=https://api.example.com`
- Restart dev server after adding env variables

### 404 Errors on Refresh

- ✅ Fixed by `vercel.json` rewrite configuration
- All routes redirect to `/index.html`
- React Router handles routing on client side

### Slow Deployment

- Check `.vercelignore` to exclude unnecessary files
- Clear Vercel cache if needed
- Use `.gitignore` to exclude node_modules locally

## Migration Checklist

- [x] Remove TanStack Start dependencies
- [x] Update vite.config.ts to standard Vite
- [x] Update src/client.tsx to use ReactDOM.createRoot
- [x] Update src/router.tsx
- [x] Create vercel.json with correct configuration
- [x] Create .vercelignore
- [x] Test locally with `npm run build && npm run preview`
- [x] Deploy to Vercel
- [ ] Test all routes work on deployed version
- [ ] Monitor Vercel analytics

## Performance Tips

1. **Code Splitting**
   - Vite automatically code-splits at dynamic import boundaries
   - Use lazy loading for routes: `const Page = lazy(() => import('./pages/Page'))`

2. **Image Optimization**
   - Place images in `public/` folder
   - Reference them as `/image-name.png`

3. **Monitoring**
   - Check Vercel Analytics dashboard
   - Monitor Core Web Vitals
   - Use browser DevTools for performance profiling

## Support

- **Vite Docs**: https://vitejs.dev/guide/
- **React Router Docs**: https://reactrouter.com/
- **TanStack Query Docs**: https://tanstack.com/query/latest
- **Vercel Docs**: https://vercel.com/docs
- **Tailwind CSS**: https://tailwindcss.com/

## Next Steps

1. Test the application thoroughly
2. Set up custom domain (if needed)
3. Configure analytics and monitoring
4. Set up CI/CD for automated deployments
5. Add environment-specific configurations

---

**Deployment Status**: ✅ Ready for Vercel
**Last Updated**: 2026-05-25
