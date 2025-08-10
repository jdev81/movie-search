const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-200"
      title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-xl">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  )
}

export default DarkModeToggle