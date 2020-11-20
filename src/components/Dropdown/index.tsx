import React from 'react'
import { useDriver } from 'hooks'

function Dropdown() {
  const { perPage, setCurrentPage, setPerPage } = useDriver()

  /* Handle per page change */
  function handleChange(e) {
    setPerPage(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className='std-dropdown'>
      <select onChange={handleChange} value={perPage}>
        <option>10</option>
        <option>20</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  )
}

export default Dropdown
