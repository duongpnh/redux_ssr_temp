import React from 'react'
import Card from '../components/Card'
import Loading from '../components/Loading'

class Category extends React.Component {

  constructor(props) {
    super(props)
    console.log('__isBrowser__', __isBrowser__)
    let categories;
    if (__isBrowser__) {
      categories = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      categories = this.props.staticContext.data
    }
    this.state = {
      categories,
      loading: false
    }
  }

  componentDidMount() {
  console.log('did mount')
    if (!this.state.categories) {
      this.getCategories()
      console.log('categories empty')
    }
  }

  getCategories = () => {
    this.setState(() => ({loading: true}))
    this.props.fetchInitalData()
    .then(categories => {
      console.log("categories", categories)
      this.setState(() => ({
        categories,
        loading: false
      }))
    })
  }

  render() {
    const { categories, loading } = this.state
    if (loading === true) {
      return <Loading />
    }
    return (
      <div>
        {categories.map(c => (
          <Card
            key={c.id}
            data={c}
          />
        ))}
      </div>
    )
  }
}

export default Category
