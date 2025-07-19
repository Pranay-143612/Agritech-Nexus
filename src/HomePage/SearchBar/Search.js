import React, { useState } from 'react'
import './search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function Search({ isOpen, setIsOpen, toggle}) {

  const [search, setSearch] = useState();

  const toggleOpen = () => {
    if(!isOpen) {
      setIsOpen(true)
    }
  }

  return (
    <>
      <div className='header'>
        <div className='search-bar' onDoubleClick={toggleOpen}>
          <div className='icon' >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
          <div style={{ display: isOpen ? "block" : "none" }} className='input-box'>
            <input
              type='text'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for a Query'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Search
