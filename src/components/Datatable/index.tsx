import React from 'react'

import { DataSourceProvider } from '../../providers'
import { Pagination, Search, Table } from '..'

function Datatable({ source, schema }) {
  return (
    <DataSourceProvider source={source} schema={schema}>
      <div className='std-card'>
        <Search />
        <Table />
        <Pagination />
      </div>
    </DataSourceProvider>
  )
}

export default Datatable as any
