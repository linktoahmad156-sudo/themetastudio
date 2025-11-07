# Logo Setup Instructions

## 📍 Logo Placement

To enable the logo on all OG (Open Graph) images across the website, follow these steps:

### 1. Prepare Your Logo

- **Format**: PNG format recommended (supports transparency)
- **Size**: Recommended 500x500px minimum for best quality
- **Name**: Exactly `logo.png`
- **Background**: Transparent or white background works best

### 2. Add Logo to Project

Place your logo file in the following location:

```
d:\projects\themetastudio\public\logo.png
```

### 3. How It Works

The dynamic OG image component (`lib/og-image.tsx`) automatically:
- Checks for the logo file at `public/logo.png`
- Displays it on all OG images if present
- Falls back to text-only design if logo is missing
- Maintains consistent branding across all pages

### 4. Where Logo Appears

Your logo will automatically appear on OG images for:
- ✅ Homepage (`/opengraph-image.png` & `/twitter-image.png`)
- ✅ All Service Pages (SEO, Google Ads, Social Media, etc.)
- ✅ Any future pages using the `generateOGImage` function

### 5. Verify Logo Display

After adding your logo:

1. Restart the development server:
   ```bash
   npm run dev
   ```

2. Check OG images in your browser:
   - Homepage: `http://localhost:3000/opengraph-image`
   - Service pages: `http://localhost:3000/services/[service-name]/opengraph-image`

3. Verify in social media preview tools:
   - [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)

### 6. Customizing Logo Appearance

To modify logo size or styling, edit `lib/og-image.tsx`:

```tsx
{logoData && (
  <img
    src={logoData}
    alt="Logo"
    style={{
      width: '120px',        // Adjust width
      height: '120px',       // Adjust height
      marginBottom: '40px',  // Adjust spacing
      objectFit: 'contain',  // Keep aspect ratio
    }}
  />
)}
```

### 7. Alternative: Disable Logo

To disable the logo on specific pages, modify the OG image file:

```tsx
export default async function Image() {
  return generateOGImage({
    title: 'Your Title',
    description: 'Your Description',
    logo: false,  // Set to false to hide logo
  })
}
```

## 🎨 Design Guidelines

For best results:
- **Logo Visibility**: Use high contrast colors
- **File Size**: Keep under 1MB for faster loading
- **Aspect Ratio**: Square (1:1) works best
- **Color Mode**: Ensure logo is visible on purple gradient background

## ⚡ Quick Start

1. Place `logo.png` in `public/` folder
2. Restart dev server
3. Check `http://localhost:3000/opengraph-image`
4. Done! Logo appears on all OG images automatically

---

**Need Help?** The dynamic OG image component is located at `lib/og-image.tsx` and can be customized to your specific needs.
