import React from 'react'

import { Datatable } from '@startaideia/react-datatables'
import '@startaideia/react-datatables/dist/index.css'

const dataSource = [
  {
    id: 1,
    name: 'Gustavo Vilas boas',
    email: 'gu.boas13@gmail.com'
  },
  {
    id: 2,
    name: 'Agatha Ellen Magalhães',
    email: 'agathaemm@gmail.com'
  }
]

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

const App = () => {
  return <Datatable source={dataSource} schema={dataSchema} />
}

export default App
