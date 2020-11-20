import React, { useContext } from 'react'
import { DataSourceProviderContext } from '../../providers'

function Table() {
  const { dataSchema, dataSource } = useContext(DataSourceProviderContext)

  return (
    <table className='std-table' cellSpacing='0'>
      <thead>
        <tr>
          {dataSchema.map(function (field) {
            return <th key={field.field}>{field.label}</th>
          })}
        </tr>
      </thead>
      <tbody>
        {dataSource.map(function (row, key) {
          return (
            <tr key={key}>
              {dataSchema.map(function ({ field, render }, key) {
                if (render) {
                  return <td key={key}>{render(row)}</td>
                }

                return <td key={key}>{row?.[field]}</td>
              })}
            </tr>
          )
        })}
      </tbody>
      <tfoot>
        <tr>
          {dataSchema.map(function (field) {
            return <th key={field.field}>{field.label}</th>
          })}
        </tr>
      </tfoot>
    </table>
  )
}

export default Table as any
