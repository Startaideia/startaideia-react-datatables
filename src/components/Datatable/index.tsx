import React from 'react'

import { DataSourceProvider } from 'providers'
import Pagination from '../Pagination'
import Search from '../Search'
import Table from '../Table'

function Datatable({ driver, schema }) {
  return (
    <DataSourceProvider driver={driver} schema={schema}>
      <div className='std-card'>
        <Search />
        <Table />
        <Pagination />
      </div>
    </DataSourceProvider>
  )
}

export default Datatable as any
