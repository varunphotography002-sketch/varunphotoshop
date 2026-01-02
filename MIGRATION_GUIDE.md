# Migration Guide: Vite to Next.js

## Current Status

This project is currently using **Vite + React**, but the performance optimizations have been prepared for **Next.js**. To use the new optimized components, you have two options:

## Option 1: Migrate to Next.js (Recommended)

### Steps to Migrate

1. **Install Next.js dependencies:**
   ```bash
   npm install next@latest react@latest react-dom@latest
   npm install -D @types/node @types/react @types/react-dom typescript
   ```

2. **Update package.json scripts:**
   ```json
   {
     "scripts": {
       "dev": "next dev",
       "build": "next build",
       "start": "next start",
       "lint": "next lint"
     }
   }
   ```

3. **Create Next.js app structure:**
   - Move `src/pages/*` to `app/*` (App Router) or keep in `pages/*` (Pages Router)
   - Update imports to use Next.js Image component
   - Replace `react-router-dom` with Next.js routing

4. **Update components:**
   - Replace `<Link>` from `react-router-dom` with Next.js `<Link>`
   - Replace `<img>` tags with Next.js `<Image>` component
   - Update routing logic

5. **Configure TypeScript:**
   - Create/update `tsconfig.json` for Next.js
   - Update path aliases if needed

## Option 2: Adapt Components for Vite (Alternative)

If you want to keep using Vite, you can adapt the components:

### For HeroImage Component

Instead of Next.js Image, use a regular img with loading optimization:

```tsx
// components/HeroImage.tsx (Vite version)
export default function HeroImage() {
  return (
    <img
      src="/optimized/hero-1600.webp"
      alt="Hero photo"
      loading="eager"
      decoding="async"
      style={{ width: '100%', height: 'auto' }}
    />
  );
}
```

### For GalleryGrid Component

```tsx
// components/GalleryGrid.tsx (Vite version)
export default function GalleryGrid({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '12px' }}>
      {items.map(baseName => (
        <img
          key={baseName}
          src={`/optimized/${baseName}-1200.webp`}
          alt={baseName}
          loading="lazy"
          decoding="async"
          style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        />
      ))}
    </div>
  );
}
```

### Image Optimization in Vite

For Vite, you can use:
- `vite-imagetools` plugin for image optimization
- Manual image conversion (already set up with Sharp script)
- Lazy loading with `loading="lazy"` attribute

## Next Steps

1. **Choose your migration path** (Next.js or adapt for Vite)
2. **Run image conversion:**
   ```bash
   # First, copy images to public/raw/
   # Then run:
   npm run images:convert
   ```
3. **Update image paths** in your components to use optimized versions
4. **Test performance** with Lighthouse

## Files Created for Next.js

These files are ready for Next.js migration:
- ✅ `scripts/convert-images.js` - Works with any setup
- ✅ `components/HeroImage.tsx` - Next.js Image component
- ✅ `components/GalleryGrid.tsx` - Next.js Image component
- ✅ `app/gallery/page.tsx` - Next.js App Router page
- ✅ `next.config.js` - Next.js configuration
- ✅ `middleware.ts` - Next.js middleware (can be adapted for Vite)

## Files Updated for Accessibility

These files have been updated with accessibility improvements (work with both Vite and Next.js):
- ✅ `src/pages/Home.tsx` - Added aria-labels, semantic HTML
- ✅ `src/pages/Portfolio.tsx` - Added keyboard navigation, aria-labels
- ✅ `src/components/Navbar.tsx` - Added aria-labels
- ✅ `src/components/Footer.tsx` - Added aria-labels

## Recommendation

For best performance and to use all the optimizations:
- **Migrate to Next.js** - You'll get automatic image optimization, better SEO, and server-side rendering
- The image conversion script works with both setups
- Accessibility improvements work with both setups

