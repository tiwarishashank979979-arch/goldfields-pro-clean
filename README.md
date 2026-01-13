# Goldfields Pro Clean Website

A production-ready Next.js website for Goldfields Pro Clean, a professional cleaning service in Kalgoorlie-Boulder, WA.

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── public/
│   └── images/          # Image assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   └── components/      # React components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WhyUs.tsx
│       ├── Testimonials.tsx
│       ├── QuoteForm.tsx
│       ├── FloatingCTA.tsx
│       └── Footer.tsx
```

## Deployment

### Deploying to Netlify

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [Netlify](https://www.netlify.com/)
   - Sign up or log in
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub account
   - Select your repository
   - Netlify will auto-detect Next.js settings:
     - **Build command:** `npm run build`
     - **Publish directory:** `.next`
   - Click "Deploy site"

3. **Netlify Configuration:**
   The project includes a `netlify.toml` file with the correct settings. Netlify will automatically use these settings.

### Manual Netlify Setup (if needed)

If auto-detection doesn't work, use these settings:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18 (or higher)

### Environment Variables

No environment variables are required for this project.

## Features

- ✅ Responsive design (mobile-first)
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ SEO-friendly
- ✅ Contact form with mailto integration
- ✅ Service showcase
- ✅ Customer testimonials
- ✅ Floating CTA buttons

## Business Information

- **Phone:** 0457 335 628
- **Email:** goldfieldsproclean@gmail.com
- **Location:** Kalgoorlie-Boulder, WA

## Notes

- Service images are currently placeholder SVGs. Replace them with actual photos in `public/images/`
- The hero image (`kalgoorlie-aerial.jpg`) should be placed in `public/images/`
- The quote form uses `mailto:` links - no backend required

## License

Private project for Goldfields Pro Clean.
