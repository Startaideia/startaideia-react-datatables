import { useCallback, useContext, useEffect } from 'react'
import { DataSourceProviderContext } from '../../providers'

export default function () {
  const params = useContext(DataSourceProviderContext)

  /* destruct the params */
  const { setTotalRecords } = params
  const { setCurrentPage } = params
  const { setDataSource } = params
  const { setTotalPages } = params
  const { currentPage } = params
  const { totalPages } = params
  const { perPage } = params
  const { driver } = params
  const { query } = params

  /* handle open next page */
  const handleNextPage = useCallback(
    function () {
      setCurrentPage(function (currentPage) {
        if (currentPage === totalPages) {
          return currentPage
        }
        return currentPage + 1
      })
    },
    [setCurrentPage, totalPages]
  )

  /* handle open previous page */
  const handlePreviousPage = useCallback(
    function () {
      setCurrentPage(function (currentPage) {
        if (currentPage === 1) {
          return currentPage
        }
        return currentPage - 1
      })
    },
    [setCurrentPage]
  )

  /* handle data render */
  useEffect(
    function () {
      driver.getData(params).then(function (dataTransferObject) {
        const { totalRecords, totalPages, dataSource } = dataTransferObject
        setTotalRecords(totalRecords)
        setDataSource(dataSource)
        setTotalPages(totalPages)
      })
    },
    [driver, query, perPage, currentPage, setTotalPages, setDataSource]
  )

  /* handle last page */
  useEffect(
    function () {
      if (currentPage > totalPages) {
        setTotalPages(1)
      }
    },
    [totalPages]
  )

  return {
    handlePreviousPage,
    handleNextPage,
    ...params
  }
}
