import MovieCard from './MovieCard'

const MovieList = ({ movies, favorites, onAddToFavorites, onRemoveFromFavorites }) => {
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🎬</div>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          No movies to display. Try searching for a movie!
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          isFavorite={favorites.some(fav => fav.imdbID === movie.imdbID)}
          onAddToFavorites={onAddToFavorites}
          onRemoveFromFavorites={onRemoveFromFavorites}
        />
      ))}
    </div>
  )
}

export default MovieList