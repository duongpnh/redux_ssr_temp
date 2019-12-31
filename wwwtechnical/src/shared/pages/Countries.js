import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from "../actions/posts";

// const m = ({ countries }) => ({ countries });


// @connect(m, { fetchCountries })
class Countries extends Component {

  static fetching ({ dispatch }) {
    return [dispatch(fetchPosts())];
  }

  componentDidMount() {
    this.props.fetchCountries();
  }


  render() {
    const { countries: { isFetching, data } } = this.props;

    return(
      <div className="container">
        <div className="countries-container">
          {/* {data.map((item, i) => <CountriesItem key={i} {...item} />)} */}
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => ({
    countries: state.posts
});

const mapDispatchToProps = dispatch => ({
    getCountries: () => dispatch(fetchPosts())
})
export default connect(mapStateToProps, mapDispatchToProps)(Countries)
