import MovieCard from './MovieCard'

const Favorites = ({ favorites, onRemoveFromFavorites }) => {
  if (!favorites || favorites.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">❤️</div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          No Favorite Movies Yet
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-md mx-auto">
          Start searching for movies and add them to your favorites by clicking the heart icon!
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center">
        ❤️ Your Favorite Movies ({favorites.length})
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {favorites.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            isFavorite={true}
            onAddToFavorites={() => {}} // Not needed for favorites view
            onRemoveFromFavorites={onRemoveFromFavorites}
          />
        ))}
      </div>
    </div>
  )
}

export default Favorites