import React from 'react'
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronRight
} from 'react-icons/fi'

import { useDriver } from 'hooks'
import Dropdown from '../Dropdown'

function Pagination() {
  const {
    handlePreviousPage,
    setCurrentPage,
    handleNextPage,
    totalRecords,
    currentPage,
    totalPages
  } = useDriver()

  return (
    <div className='std-pagination'>
      <Dropdown />

      <div>
        <div className='std-total'>{totalRecords} items</div>
        <button onClick={() => setCurrentPage(1)}>
          <FiChevronsLeft />
        </button>
        <button>
          <FiChevronLeft onClick={handlePreviousPage} />
        </button>
        <input type='text' value={currentPage} readOnly />
        of {totalPages}
        <button onClick={handleNextPage}>
          <FiChevronRight />
        </button>
        <button onClick={() => setCurrentPage(totalPages)}>
          <FiChevronsRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination as any
