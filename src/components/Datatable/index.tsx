import React from 'react'

import { DataSourceProvider } from '../../providers'
import { Pagination, Search, Table } from '..'

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
