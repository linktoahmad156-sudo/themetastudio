# The Meta Studio - Creative Digital Agency Website

A modern, production-grade agency website built with Next.js 16, featuring exceptional design, SEO optimization, and automatic OG image generation.

## 🚀 Features

- **Next.js 16 App Router** - Latest routing and rendering capabilities
- **SEO Optimized** - Comprehensive metadata with OpenGraph and Twitter cards
- **Auto OG Images** - Automatically generated social media preview images
- **Responsive Design** - Mobile-first approach with Tailwind CSS v4
- **Modern UI** - Built with shadcn/ui components
- **Mega Menu Navigation** - Interactive dropdown menus for services and company info
- **Performance Optimized** - Fast loading and smooth animations
- **TypeScript** - Full type safety throughout the application
- **Dark Mode Support** - CSS variables for theming

## 📦 Tech Stack

- **Framework:** Next.js 16.0.1
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Geist Sans & Geist Mono

## 🏗️ Project Structure

```
themetastudio/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & CSS variables
│   ├── opengraph-image.tsx # OG image generation
│   └── twitter-image.tsx   # Twitter card image
├── components/
│   ├── header.tsx          # Main navigation header
│   ├── footer.tsx          # Footer component
│   ├── ui/                 # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── navigation-menu.tsx
│   └── sections/           # Page sections
│       ├── hero.tsx
│       ├── about.tsx
│       ├── services.tsx
│       ├── testimonials.tsx
│       └── cta.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## 🎨 Design Features

- **Modern Gradient Branding** - Purple to indigo gradient theme
- **Responsive Grid Layouts** - Mobile, tablet, and desktop optimized
- **Interactive Animations** - Smooth transitions and hover effects
- **Accessibility** - ARIA labels and semantic HTML
- **Consistent Spacing** - Proper padding and margins throughout
- **Max-Width Containers** - Content constrained to 7xl for readability

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd themetastudio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Metadata

Edit the metadata in `app/layout.tsx` to customize:
- Site title and description
- OpenGraph images
- Twitter card settings
- Robots configuration
- Keywords and authors

### OG Images

Customize OG images in:
- `app/opengraph-image.tsx` - OpenGraph preview
- `app/twitter-image.tsx` - Twitter card preview

### Styling

Modify CSS variables in `app/globals.css` to change:
- Color scheme
- Typography
- Spacing
- Border radius

## 📱 Sections

### Homepage Includes:
1. **Hero Section** - Main headline with CTA buttons and stats
2. **About Section** - Company values and mission statement
3. **Services Section** - 6 service offerings with detailed cards
4. **Testimonials Section** - Client reviews and ratings
5. **CTA Section** - Call-to-action with gradient background

## 🎯 SEO Best Practices

- ✅ Comprehensive metadata configuration
- ✅ Automatic OG image generation
- ✅ Semantic HTML structure
- ✅ Mobile-responsive design
- ✅ Fast page load times
- ✅ Proper heading hierarchy
- ✅ Alt text for images
- ✅ Robots.txt configuration

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Build Locally

```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, contact: info@themetastudio.com

---

Built with ❤️ by The Meta Studio
