import React from 'react'
import {
  FiChevronsLeft,
  FiChevronLeft,
  FiChevronsRight,
  FiChevronRight
} from 'react-icons/fi'

function Pagination() {
  return (
    <div className='std-pagination'>
      <div>
        <div className='std-total'>70 items</div>
        <button>
          <FiChevronsLeft />
        </button>
        <button>
          <FiChevronLeft />
        </button>
        <input type='text' />
        of 12
        <button>
          <FiChevronRight />
        </button>
        <button>
          <FiChevronsRight />
        </button>
      </div>
    </div>
  )
}

export default Pagination as any
