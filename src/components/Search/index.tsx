import React, { useContext } from 'react'

import { DataSourceProviderContext } from 'providers'
import Dropdown from '../Dropdown'

function Search() {
  const { query, setQuery } = useContext(DataSourceProviderContext)

  return (
    <div className='std-search'>
      <Dropdown />
      <div>
        <input
          onChange={(e) => setQuery(e.target.value)}
          placeholder='Pesquisar...'
          value={query}
          type='text'
        />
      </div>
    </div>
  )
}

export default Search as any
