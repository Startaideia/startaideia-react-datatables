import React, { useState } from 'react'
import { DataSourceProviderContext } from '..'

function DataSourceProvider({ source, schema, children }) {
  const [dataSource, setDataSource] = useState<any>(source || [])
  const [dataSchema, setDataSchema] = useState<any>(schema || [])

  return (
    <DataSourceProviderContext.Provider
      value={{
        setDataSource,
        setDataSchema,
        dataSource,
        dataSchema
      }}
    >
      <div className='std-datatable'>{children}</div>
    </DataSourceProviderContext.Provider>
  )
}

export default DataSourceProvider
