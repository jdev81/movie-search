import { useState } from 'react'

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(query)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title (e.g., The Matrix, Inception, Avatar...)"
          className="input-field flex-1"
        />
        <button
          type="submit"
          className="btn-primary px-6 whitespace-nowrap"
        >
          🔍 Search
        </button>
      </div>
    </form>
  )
}

export default SearchBar