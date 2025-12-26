---
description: Deploy portfolio to Vercel
---

# Deploy Portfolio to Vercel

This workflow guides you through deploying your portfolio to Vercel.

## Prerequisites

- A Vercel account (sign up at https://vercel.com)
- Vercel CLI installed globally (optional, for CLI deployment)

## Deployment Options

You have two options to deploy to Vercel:

### Option 1: Deploy via Vercel Dashboard (Recommended for first-time deployment)

1. **Push your code to GitHub**
   - Make sure your portfolio code is pushed to a GitHub repository
   - If you haven't already, initialize git and push:
     ```bash
     git init
     git add .
     git commit -m "Ready for deployment"
     git branch -M main
     git remote add origin <your-github-repo-url>
     git push -u origin main
     ```

2. **Import project to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel will auto-detect the Vite framework

3. **Configure build settings** (should be auto-detected)
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI globally**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy to Vercel**
   ```bash
   vercel
   ```
   - Follow the prompts
   - For first deployment, answer the setup questions
   - Vercel will build and deploy your project

4. **Deploy to production**
   ```bash
   vercel --prod
   ```

## Post-Deployment

- **Custom Domain**: You can add a custom domain in Vercel dashboard under Project Settings → Domains
- **Environment Variables**: If needed, add them in Project Settings → Environment Variables
- **Automatic Deployments**: Every push to your main branch will trigger a new deployment

## Troubleshooting

- If build fails, check the build logs in Vercel dashboard
- Ensure all dependencies are listed in `package.json`
- Verify that `npm run build` works locally before deploying

## Useful Commands

- `vercel` - Deploy to preview
- `vercel --prod` - Deploy to production
- `vercel ls` - List all deployments
- `vercel logs` - View deployment logs
