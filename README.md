# 🎬 Movie Search React App

A modern, responsive React application for searching movies using the OMDB API. Built with React, Vite, and Tailwind CSS.

## ✨ Features

- **Movie Search**: Search for movies by title using the OMDB API
- **Responsive Design**: Mobile-first design that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Favorites System**: Add/remove movies to/from favorites with localStorage persistence
- **Loading States**: Beautiful loading indicators during API calls
- **Error Handling**: User-friendly error messages for failed requests
- **Modern UI**: Clean, modern interface with smooth animations

## 🚀 Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **OMDB API** - Movie database API
- **LocalStorage** - For persisting favorites and dark mode preference

## 📦 Installation

1. **Clone or download the project**
   ```bash
   cd "Movie Search React App"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OMDB API Key**
   - Visit [http://www.omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx)
   - Sign up for a free API key
   - Copy your API key

4. **Configure API Key**
   - Open `src/App.jsx`
   - Replace `'YOUR_API_KEY'` with your actual OMDB API key:
   ```javascript
   const OMDB_API_KEY = 'your-actual-api-key-here'
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   - Navigate to `http://localhost:5173`
   - Start searching for movies!

## 🎯 Usage

### Searching for Movies
1. Enter a movie title in the search bar
2. Click the "🔍 Search" button or press Enter
3. Browse through the search results

### Managing Favorites
1. Click the heart icon (🤍) on any movie card to add it to favorites
2. Switch to the "Favorites" tab to view your saved movies
3. Click the red heart (❤️) to remove movies from favorites

### Dark Mode
- Click the moon/sun icon in the top-right corner to toggle dark mode
- Your preference is automatically saved

## 📁 Project Structure

```
src/
├── components/
│   ├── DarkModeToggle.jsx    # Dark mode toggle button
│   ├── Favorites.jsx         # Favorites page component
│   ├── MovieCard.jsx         # Individual movie card
│   ├── MovieList.jsx         # Grid of movie cards
│   └── SearchBar.jsx         # Search input component
├── App.jsx                   # Main application component
├── index.css                 # Global styles and Tailwind imports
└── main.jsx                  # React app entry point
```

## 🎨 Styling

The app uses Tailwind CSS with custom component classes defined in `src/index.css`:

- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling
- `.card` - Card component styling
- `.input-field` - Input field styling

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌟 Features in Detail

### Responsive Grid Layout
- 1 column on mobile
- 2 columns on small tablets
- 3 columns on tablets
- 4 columns on laptops
- 5 columns on large screens

### Error Handling
- Network errors
- API errors
- No results found
- Invalid API key

### Loading States
- Animated spinner during searches
- Smooth transitions between states

### Accessibility
- Proper ARIA labels
- Keyboard navigation support
- High contrast colors
- Screen reader friendly

## 🔑 API Key Setup

**Important**: You need a valid OMDB API key for the app to work. The free tier includes:
- 1,000 daily requests
- No commercial use
- Basic movie information

For higher limits, consider upgrading to a paid plan.

## 🐛 Troubleshooting

### Common Issues

1. **"Movie not found" error**
   - Check your API key is correctly set
   - Verify the API key is valid
   - Try a different search term

2. **Images not loading**
   - Some movies may not have poster images
   - The app shows a placeholder for missing images

3. **Favorites not persisting**
   - Check if localStorage is enabled in your browser
   - Clear browser cache and try again

## 🚀 Deployment

To deploy the app:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service:
   - Netlify
   - Vercel
   - GitHub Pages
   - Any static hosting service

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests

---

**Happy movie searching! 🍿**