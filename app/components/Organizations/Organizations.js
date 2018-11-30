import React, { Component } from 'react'
import { Pagination, Filters, OrganizationsItem, Message } from '../'
import { getOrganizations } from '../../api'
import styles from './styles.css'

class Organizations extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
      results: [],
      page: 1,
      filters: {}
    }

    this.onFiltersChange = this.onFiltersChange.bind(this)
    this.onPageChange = this.onPageChange.bind(this)

    this.fetchData = this.fetchData.bind(this)
    this.onFetchData = this.onFetchData.bind(this)
  }

  onFiltersChange(filters) {
    this.setState({filters, page: 1}, this.fetchData)
  }

  onPageChange(page) {
    this.setState({ page }, this.fetchData)
  }

  fetchData() {
    this.setState({ isLoading: true }, () => {
      const { page, filters } = this.state
      getOrganizations(page, filters).then(this.onFetchData)
    })
  }

  onFetchData({results, count}) {
    this.scrollToTop()
    this.setState({
      isLoading: false,
      results,
      pages: Math.ceil(count / 50)
    })
  }

  scrollToTop() {
    window.scrollTo(0, 0)
  }

  render() {
    const { isLoading, results, pages, page } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.filtersContainer}>
          <Filters onChange={this.onFiltersChange}>
            <div className={styles.filters}>
              <div className={styles.filtersLayout}>
                <div className={styles.search}>
                  <Filters.Search />
                </div>
                <div className={styles.categories}>
                  <Filters.Categories />
                </div>
              </div>
              <Filters.Tags />
            </div>
          </Filters>
        </div>
        <div className={styles.results}>
          {
            isLoading
              ? <Message text={'Ładowanie…'} alt={true} />
              : <ul className={styles.resultsList}>
                {
                  (results && results.length > 0)
                    ? results.map(value => <OrganizationsItem key={value.id} value={value} />)
                    : <Message text={'Nic nie znaleziono… 😞'} alt={true} />
                }
              </ul>
          }
        </div>
        {isLoading ? null : <Pagination pages={pages} currentPage={page} onClick={this.onPageChange} />}
      </div>
    )
  }
}

export default Organizations
