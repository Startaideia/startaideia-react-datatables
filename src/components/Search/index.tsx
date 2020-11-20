import React from 'react'
import { BiSearch } from 'react-icons/bi'

function Search() {
  return (
    <div className='std-search'>
      <div>
        <input type='text' placeholder='Pesquisar...' />
        <button>
          <BiSearch />
        </button>
      </div>
    </div>
  )
}

export default Search as any
