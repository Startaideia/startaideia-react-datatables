import React, { useState } from 'react'

import DataSourceProviderContext from '../DataSourceProviderContext'

function DataSourceProvider({ driver, schema, children }) {
  const [dataSchema, setDataSchema] = useState<any>(schema || [])
  const [totalRecords, setTotalRecords] = useState<any>(0)
  const [currentPage, setCurrentPage] = useState<any>(1)
  const [dataSource, setDataSource] = useState<any>([])
  const [totalPages, setTotalPages] = useState<any>(0)
  const [perPage, setPerPage] = useState<any>(10)
  const [query, setQuery] = useState<string>('')

  return (
    <DataSourceProviderContext.Provider
      value={{
        setTotalRecords,
        setCurrentPage,
        setDataSource,
        setDataSchema,
        dataSource,
        setTotalPages,
        totalPages,
        setPerPage,
        currentPage,
        totalRecords,
        perPage,
        dataSchema,
        driver,
        query,
        setQuery
      }}
    >
      <div className='std-datatable'>{children}</div>
    </DataSourceProviderContext.Provider>
  )
}

export default DataSourceProvider
