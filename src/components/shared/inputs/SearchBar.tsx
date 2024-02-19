import { useState, type ChangeEvent } from 'react'
import './SearchBar.css'
import searchSvg from '@assets/images/icons/search.svg'
import { type Search } from '@interfaces/searchBar.interface'
import closeSvg from '@assets/images/icons/close.svg'

export const SearchBar = ({ placeholder, onSearch }: Search) => {
  const [isActive, setIsActive] = useState(false)
  const [query, setQuery] = useState('')

  const toggleSearch = () => {
    setIsActive(!isActive)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value)
    onSearch(event.target.value)
  }

  const handleClear = () => {
    setQuery('')
    onSearch('')
  }

  return (
    <div className={`search-container ${isActive ? 'active' : ''}`}>
      <button
        className="search-button"
        onClick={toggleSearch}
      >
        <img src={searchSvg} alt="" />
      </button>
      <input
        type="text"
        className={`search-input ${isActive ? 'active' : ''}`}
        value={query}
        placeholder={placeholder}
        onChange={handleChange}
      />
       {query !== '' && (
        <button className="clear-button" onClick={handleClear}>
          <img src={closeSvg} alt="Clear" />
        </button>
       )}
    </div>
  )
}
