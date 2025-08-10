# 🚀 Quick Setup Guide

## Option 1: Demo Mode (No API Key Required)
The app works out of the box in demo mode with sample movie data.

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the app:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   - Go to `http://localhost:5173`
   - Try searching for: "Matrix", "Inception", "Avatar", "Dark Knight", or "Interstellar"

## Option 2: Full OMDB API Integration

1. **Get your free API key:**
   - Visit: [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free account
   - Copy your API key

2. **Configure the API key:**
   - Copy `.env.example` to `.env`
   - Replace `YOUR_API_KEY` with your actual API key:
   ```
   VITE_OMDB_API_KEY=your_actual_api_key_here
   ```

3. **Start the app:**
   ```bash
   npm run dev
   ```

4. **Search for any movie!**
   - The app will now search the full OMDB database
   - Try searching for any movie title

## Features to Test

✅ **Search Movies**: Enter any movie title and press search  
✅ **Add to Favorites**: Click the heart icon on any movie  
✅ **View Favorites**: Switch to the "Favorites" tab  
✅ **Dark Mode**: Toggle the moon/sun icon in the top-right  
✅ **Responsive Design**: Resize your browser or test on mobile  
✅ **Error Handling**: Try searching for "xyz123" to see error handling  

## Troubleshooting

**Problem**: "No movies found" error  
**Solution**: Make sure your API key is correctly set in the `.env` file

**Problem**: Images not loading  
**Solution**: Some movies don't have poster images - this is normal

**Problem**: Favorites not saving  
**Solution**: Make sure localStorage is enabled in your browser

---

**Happy movie searching! 🍿**