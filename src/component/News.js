import React, { Component } from 'react'
import Newsitem from "./Newsitem"
import Spinner from './spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 10,
    category: "health",
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async updatenews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27be1b6556294cb1a888897fdbf10ba8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27be1b6556294cb1a888897fdbf10ba8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  PrevClick = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27be1b6556294cb1a888897fdbf10ba8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // this.setState({
    //   articles: parsedData.articles,
    //   page: this.state.page - 1,
    //   loading: false
    // });

    this.setState({page:this.state.page-1})
    this.updatenews();
  }

  NextClick = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //   this.setState({ loading: true });
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=27be1b6556294cb1a888897fdbf10ba8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   this.setState({
    //     articles: parsedData.articles,
    //     page: this.state.page + 1,
    //     loading: false
    //   });
    // }

    // Another  method  to  handling  next  and prev  clicks
    this.setState({ page: this.state.page + 1 })
      this.updatenews(); 
   
  }

  render() {
    return (
      <div className="container py-4">
        <h1 className="text-center fw-bold mb-4" style={{ fontSize: '2rem' }}>Voxify - Top Headlines</h1>

        {this.state.loading && <Spinner />}

        <div className="row g-4">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <div className="card h-100 shadow-sm rounded-3">
                <Newsitem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 87) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="container d-flex justify-content-between mt-4">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.PrevClick}>
            &larr; Previous
          </button>
          <button disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.NextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    )
  }
}

export default News
