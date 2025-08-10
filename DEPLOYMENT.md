# 🚀 Deployment Guide

## Build for Production

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   - Copy `.env.example` to `.env`
   - Add your OMDB API key:
   ```
   VITE_OMDB_API_KEY=your_actual_api_key_here
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

4. **Test the build locally:**
   ```bash
   npm run preview
   ```

## Deployment Options

### 1. Netlify (Recommended)

1. **Connect your repository:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub/GitLab repository

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

3. **Add environment variables:**
   - Go to Site settings → Environment variables
   - Add: `VITE_OMDB_API_KEY` with your API key

4. **Deploy:**
   - Click "Deploy site"
   - Your app will be live at `https://your-site-name.netlify.app`

### 2. Vercel

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Add environment variables:**
   - Go to your Vercel dashboard
   - Project settings → Environment Variables
   - Add: `VITE_OMDB_API_KEY`

### 3. GitHub Pages

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json:**
   ```json
   {
     "homepage": "https://yourusername.github.io/movie-search-app",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

### 4. Any Static Hosting

After running `npm run build`, upload the `dist` folder to any static hosting service:
- AWS S3 + CloudFront
- Firebase Hosting
- Surge.sh
- DigitalOcean App Platform

## Environment Variables for Production

Make sure to set these environment variables in your hosting platform:

- `VITE_OMDB_API_KEY`: Your OMDB API key

## Performance Tips

1. **Enable gzip compression** on your hosting platform
2. **Use a CDN** for faster global delivery
3. **Set proper cache headers** for static assets
4. **Monitor your API usage** to stay within OMDB limits

## Security Notes

- Never commit your `.env` file to version control
- Use environment variables for all sensitive data
- The OMDB API key is exposed in the client-side code (this is normal for frontend apps)
- Consider implementing rate limiting if you expect high traffic

---

**Your movie search app is ready for the world! 🌍**