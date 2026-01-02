# Next.js Mobile Performance Optimization Guide

This document outlines the mobile performance optimizations implemented for the Varun Photography website.

## 📋 Implementation Checklist

### ✅ Completed Items

1. **Image Conversion Script** (`scripts/convert-images.js`)
   - Converts images to WebP and AVIF formats
   - Generates multiple sizes (480, 800, 1200, 1600, 2560px)
   - Creates blur placeholders for lazy loading
   - Run with: `npm run images:convert`

2. **Hero Image Component** (`components/HeroImage.tsx`)
   - Uses Next.js Image component with priority loading
   - Includes blur placeholder
   - Optimized for above-the-fold content

3. **Gallery Grid Component** (`components/GalleryGrid.tsx`)
   - Lazy loading for below-the-fold images
   - Responsive sizes attribute
   - Blur placeholders for smooth loading

4. **Paginated Gallery Page** (`app/gallery/page.tsx`)
   - Progressive loading (20 items at a time)
   - Reduces initial payload
   - "Load more" button with accessibility labels

5. **Next.js Configuration** (`next.config.js`)
   - Image optimization (WebP/AVIF)
   - Long-term caching headers
   - Compression enabled

6. **Security Headers** (`middleware.ts`)
   - HSTS, CSP, X-Frame-Options
   - X-Content-Type-Options
   - Referrer-Policy

7. **Accessibility Improvements**
   - Added aria-labels to all interactive elements
   - Semantic HTML (main, section, article)
   - Proper heading hierarchy (h1 → h2 → h3)
   - Keyboard navigation support

## 🚀 Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install Sharp for image processing.

### 2. Prepare Images

1. Place your raw images in `public/raw/` directory
2. Run the conversion script:
   ```bash
   npm run images:convert
   ```
3. Optimized images will be generated in:
   - `public/optimized/` - WebP and AVIF formats
   - `public/placeholders/` - Blur placeholders

### 3. Build and Test

```bash
npm run build
npm run start
```

### 4. Performance Testing

Run Lighthouse mobile test and verify:
- **LCP ≤ 2.5s** (Largest Contentful Paint)
- **FCP ≤ 2s** (First Contentful Paint)
- **TBT ≤ 200ms** (Total Blocking Time)
- **Payload ≤ 3 MB** (Total page size)

## 📁 Directory Structure

```
varunphotoshop-main/
├── scripts/
│   └── convert-images.js      # Image conversion script
├── components/
│   ├── HeroImage.tsx          # Optimized hero image component
│   └── GalleryGrid.tsx        # Lazy-loaded gallery grid
├── app/
│   └── gallery/
│       └── page.tsx           # Paginated gallery page
├── middleware.ts              # Security headers middleware
├── next.config.js            # Next.js configuration
└── public/
    ├── raw/                   # Place raw images here
    ├── optimized/             # Generated optimized images
    └── placeholders/          # Generated blur placeholders
```

## 🎯 Best Practices Implemented

1. **Image Optimization**
   - Modern formats (WebP, AVIF)
   - Responsive image sizes
   - Blur placeholders for better UX

2. **Performance**
   - Lazy loading for below-the-fold content
   - Progressive loading (pagination)
   - Long-term caching headers

3. **Accessibility**
   - ARIA labels on all interactive elements
   - Semantic HTML structure
   - Keyboard navigation support

4. **Security**
   - Content Security Policy
   - HSTS headers
   - X-Frame-Options protection

## 🔧 Usage Examples

### Using HeroImage Component

```tsx
import HeroImage from '@/components/HeroImage';

export default function HomePage() {
  return (
    <main>
      <HeroImage />
    </main>
  );
}
```

### Using GalleryGrid Component

```tsx
import GalleryGrid from '@/components/GalleryGrid';

export default function GalleryPage() {
  const items = ['gallery-1', 'gallery-2', 'gallery-3'];
  return <GalleryGrid items={items} />;
}
```

## 📝 Notes

- Ensure all images in `public/raw/` are properly named (no spaces, use hyphens)
- The conversion script processes JPG, JPEG, and PNG files
- Blur placeholders are 32px wide for fast loading
- Gallery pagination loads 20 items at a time (configurable in `app/gallery/page.tsx`)

## 🐛 Troubleshooting

**Issue**: Images not converting
- Check that images are in `public/raw/` directory
- Verify file extensions are .jpg, .jpeg, or .png
- Ensure Sharp is installed: `npm install sharp`

**Issue**: Next.js Image component errors
- Verify images exist in `public/optimized/` and `public/placeholders/`
- Check image paths match the component src attributes
- Ensure Next.js is properly configured

## 📊 Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| LCP | ≤ 2.5s | ⏳ To be verified |
| FCP | ≤ 2s | ⏳ To be verified |
| TBT | ≤ 200ms | ⏳ To be verified |
| Payload | ≤ 3 MB | ⏳ To be verified |

Run Lighthouse after deployment to verify these targets are met.

