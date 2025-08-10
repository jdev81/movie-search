import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import MovieList from './components/MovieList'
import Favorites from './components/Favorites'
import DarkModeToggle from './components/DarkModeToggle'
import { demoMovies, isDemoMode } from './utils/apiDemo'

const OMDB_API_KEY = import.meta.env.VITE_OMDB_API_KEY || 'YOUR_API_KEY'

function App() {
  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [darkMode, setDarkMode] = useState(false)
  const [activeTab, setActiveTab] = useState('search') // 'search' or 'favorites'

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem('movieFavorites')
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }

    // Check for saved dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode')
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode))
    }
  }, [])

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem('movieFavorites', JSON.stringify(favorites))
  }, [favorites])

  const searchMovies = async (query) => {
    if (!query.trim()) {
      setError('Please enter a movie title')
      return
    }

    setLoading(true)
    setError('')
    setSearchTerm(query)

    // Demo mode - use local data
    if (isDemoMode()) {
      setTimeout(() => {
        const filteredMovies = demoMovies.filter(movie =>
          movie.Title.toLowerCase().includes(query.toLowerCase())
        )
        setMovies(filteredMovies)
        if (filteredMovies.length === 0) {
          setError('No movies found in demo data. Try searching for "Matrix", "Inception", "Avatar", "Dark Knight", or "Interstellar"')
        }
        setLoading(false)
      }, 1000) // Simulate API delay
      return
    }

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}&type=movie`
      )
      const data = await response.json()

      if (data.Response === 'True') {
        setMovies(data.Search || [])
      } else {
        setMovies([])
        setError(data.Error || 'No movies found')
      }
    } catch (err) {
      setError('Failed to fetch movies. Please try again.')
      setMovies([])
    } finally {
      setLoading(false)
    }
  }

  const addToFavorites = (movie) => {
    if (!favorites.find(fav => fav.imdbID === movie.imdbID)) {
      setFavorites([...favorites, movie])
    }
  }

  const removeFromFavorites = (movieId) => {
    setFavorites(favorites.filter(fav => fav.imdbID !== movieId))
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
              🎬 Movie Search App
            </h1>
            <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
          <p className="text-gray-600 dark:text-gray-300">
            Search for your favorite movies using the OMDB database
          </p>
          {isDemoMode() && (
            <div className="mt-4 bg-yellow-100 dark:bg-yellow-900 border border-yellow-400 dark:border-yellow-600 text-yellow-700 dark:text-yellow-300 px-4 py-2 rounded-lg inline-block">
              🚀 Demo Mode: Try searching for "Matrix", "Inception", "Avatar", "Dark Knight", or "Interstellar"
            </div>
          )}
        </header>

        {/* Navigation Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            <button
              onClick={() => setActiveTab('search')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'search'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Search Movies
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-200 ${
                activeTab === 'favorites'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
              }`}
            >
              Favorites ({favorites.length})
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'search' ? (
          <>
            <SearchBar onSearch={searchMovies} />
            
            {loading && (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-3 text-gray-600 dark:text-gray-300">Searching movies...</span>
              </div>
            )}

            {error && (
              <div className="bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 px-4 py-3 rounded-lg mb-6 text-center">
                {error}
              </div>
            )}

            {!loading && !error && movies.length > 0 && (
              <div className="mb-4">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  Search Results for "{searchTerm}" ({movies.length} movies found)
                </h2>
                <MovieList 
                  movies={movies} 
                  favorites={favorites}
                  onAddToFavorites={addToFavorites}
                  onRemoveFromFavorites={removeFromFavorites}
                />
              </div>
            )}
          </>
        ) : (
          <Favorites 
            favorites={favorites}
            onRemoveFromFavorites={removeFromFavorites}
          />
        )}
      </div>
    </div>
  )
}

export default App