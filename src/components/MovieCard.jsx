const MovieCard = ({ movie, isFavorite, onAddToFavorites, onRemoveFromFavorites }) => {
  const handleFavoriteClick = () => {
    if (isFavorite) {
      onRemoveFromFavorites(movie.imdbID)
    } else {
      onAddToFavorites(movie)
    }
  }

  return (
    <div className="card p-4 h-full flex flex-col">
      <div className="relative mb-4">
        <img
          src={movie.Poster !== 'N/A' ? movie.Poster : '/api/placeholder/300/450'}
          alt={movie.Title}
          className="w-full h-64 object-cover rounded-lg"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjQ1MCIgdmlld0JveD0iMCAwIDMwMCA0NTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iNDUwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgMTc1SDE3NVYyMjVIMTI1VjE3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPHA+CjxwYXRoIGQ9Ik0xMjUgMjc1SDE3NVYzMjVIMTI1VjI3NVoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+'
          }}
        />
        <div className="absolute top-2 right-2">
          <button
            onClick={handleFavoriteClick}
            className={`p-2 rounded-full transition-colors duration-200 ${
              isFavorite
                ? 'bg-red-500 hover:bg-red-600 text-white'
                : 'bg-white hover:bg-gray-100 text-gray-600 shadow-md'
            }`}
            title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2 line-clamp-2">
          {movie.Title}
        </h3>
        
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
          <div className="flex items-center">
            <span className="font-medium">Year:</span>
            <span className="ml-2">{movie.Year}</span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium">Type:</span>
            <span className="ml-2 capitalize">
              {movie.Type === 'movie' ? '🎬 Movie' : 
               movie.Type === 'series' ? '📺 Series' : 
               '📺 Episode'}
            </span>
          </div>
          
          <div className="flex items-center">
            <span className="font-medium">IMDB ID:</span>
            <span className="ml-2 text-xs font-mono">{movie.imdbID}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
          <button
            onClick={handleFavoriteClick}
            className={`w-full py-2 px-4 rounded-lg font-medium transition-colors duration-200 ${
              isFavorite
                ? 'bg-red-100 hover:bg-red-200 text-red-700 dark:bg-red-900 dark:hover:bg-red-800 dark:text-red-300'
                : 'bg-blue-100 hover:bg-blue-200 text-blue-700 dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-300'
            }`}
          >
            {isFavorite ? '❤️ Remove from Favorites' : '⭐ Add to Favorites'}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard