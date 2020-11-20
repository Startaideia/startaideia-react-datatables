export default {
  /**
   * Datasource
   *
   */
  dataSource: null,

  /**
   * initialize the data source
   *
   */
  load(dataSource) {
    this.dataSource = dataSource
  },

  /**
   * Called every time the data changes
   *
   */
  async getData({ query, perPage, currentPage }) {
    /* Filter data source */
    const dataSource = this.dataSource.filter(function (row) {
      for (const i in row) {
        const line = row[i]
        if (line.toString().indexOf(query) !== -1) {
          return true
        }
      }
      return false
    })

    /* Initialize variables */
    const start = (currentPage - 1) * perPage
    const totalRecords = dataSource.length
    const end = start + perPage
    const totalPages = Math.ceil(totalRecords / perPage)

    /* return data */
    return {
      dataSource: dataSource.slice(start, end),
      totalRecords,
      totalPages
    }
  }
}
