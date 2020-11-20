import React from 'react'

import { Datatable, memory } from '@startaideia/react-datatables'
import '@startaideia/react-datatables/dist/index.css'
import dataSource from './data.json'

const dataSchema = [
  {
    field: 'id',
    label: 'Código'
  },
  {
    field: 'name',
    label: 'Nome'
  },
  {
    field: 'email',
    label: 'E-mail'
  }
]

memory.load(dataSource)

const App = () => {
  return <Datatable driver={memory} schema={dataSchema} />
}

export default App
