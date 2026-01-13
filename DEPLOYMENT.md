# Deployment Guide

This guide will walk you through running the project locally and deploying it to Netlify via GitHub.

## Part 1: Running Locally

### Step 1: Install Dependencies

First, make sure you have Node.js installed (version 18 or higher). Then install the project dependencies:

```bash
cd /home/trex/Desktop/cleaning
npm install
```

### Step 2: Run Development Server

Start the development server:

```bash
npm run dev
```

The site will be available at **http://localhost:3000**

### Step 3: Build for Production (Optional)

To test the production build locally:

```bash
npm run build
npm run start
```

This will build and serve the production version at **http://localhost:3000**

---

## Part 2: Connect to GitHub

### Step 1: Initialize Git Repository

If you haven't already initialized git:

```bash
cd /home/trex/Desktop/cleaning
git init
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Name your repository (e.g., `goldfields-pro-clean`)
4. Choose **Public** or **Private**
5. **DO NOT** initialize with README, .gitignore, or license (we already have these)
6. Click "Create repository"

### Step 3: Connect Local Repository to GitHub

GitHub will show you commands. Use these (replace `YOUR_USERNAME` and `YOUR_REPO_NAME`):

```bash
# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Goldfields Pro Clean website"

# Rename branch to main (if needed)
git branch -M main

# Add GitHub remote (replace with your repository URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Note:** If you're using SSH instead of HTTPS, use:
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
```

### Step 4: Verify on GitHub

Go to your GitHub repository page and verify all files are uploaded.

---

## Part 3: Deploy to Netlify

### Step 1: Sign Up for Netlify

1. Go to [Netlify](https://www.netlify.com/)
2. Sign up (you can use your GitHub account for easier integration)
3. Complete the signup process

### Step 2: Connect Repository

1. In Netlify dashboard, click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"** (or GitLab/Bitbucket if you prefer)
3. Authorize Netlify to access your GitHub account if prompted
4. Select your repository (`goldfields-pro-clean` or whatever you named it)

### Step 3: Configure Build Settings

Netlify should auto-detect Next.js settings. Verify these:

- **Build command:** `npm run build`
- **Publish directory:** `.next` (or leave empty - the Next.js plugin handles this)
- **Node version:** 18 (or higher)

**Important:** The project includes a `netlify.toml` file that configures these settings automatically. Netlify will use these settings.

### Step 4: Deploy

1. Click **"Deploy site"**
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, Netlify will provide you with a URL like: `https://random-name-123456.netlify.app`

### Step 5: Custom Domain (Optional)

1. In your Netlify site dashboard, go to **"Domain settings"**
2. Click **"Add custom domain"**
3. Enter your domain name (e.g., `goldfieldsproclean.com`)
4. Follow Netlify's instructions to update your DNS records

---

## Part 4: Updating Your Site

After making changes to your code:

### Local Testing

```bash
npm run dev
# Test your changes at http://localhost:3000
```

### Push Updates to GitHub

```bash
git add .
git commit -m "Description of your changes"
git push
```

### Automatic Deployment

Netlify will automatically rebuild and redeploy your site whenever you push to the `main` branch on GitHub. You can see the deployment status in your Netlify dashboard.

---

## Troubleshooting

### Build Fails on Netlify

1. Check the build logs in Netlify dashboard
2. Common issues:
   - Missing dependencies: Make sure `package.json` includes all dependencies
   - Node version: Ensure Node 18+ is specified in `netlify.toml`
   - Build errors: Run `npm run build` locally to catch errors before pushing

### Images Not Loading

- Make sure all images are in `public/images/` directory
- Check that image paths in components match actual file names
- Verify images are committed to git (not in `.gitignore`)

### Form Not Working

- The quote form uses `mailto:` links which require an email client
- Test locally to ensure form data is being collected correctly
- The "Copy details" button uses the Clipboard API (requires HTTPS in production)

---

## Quick Reference

### Local Development
```bash
npm install          # Install dependencies
npm run dev         # Start dev server (http://localhost:3000)
npm run build       # Build for production
npm run start       # Start production server
npm run lint        # Check for linting errors
```

### Git Commands
```bash
git add .                                    # Stage changes
git commit -m "Your message"                 # Commit changes
git push                                     # Push to GitHub
git status                                   # Check status
```

### Netlify
- Dashboard: https://app.netlify.com
- Builds happen automatically on git push
- Check build logs in Netlify dashboard if issues occur

---

## Support

If you encounter issues:
1. Check Netlify build logs
2. Test locally with `npm run build`
3. Verify all dependencies are in `package.json`
4. Check that `netlify.toml` is correctly configured
