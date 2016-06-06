import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchArticles } from '../actions/articles'

export default class Articles extends Component {
  static propsTypes = {
    articles: PropTypes.array,
    fetchArticles: PropTypes.func.isRequired
  }

  componentWillMount = () => {
    this.props.fetchArticles();
  }

  render() {
    return (
      <div>
        {this._displayArticles()}
      </div>
    );
  }

  _displayArticles = () => {
    return (
      this.props.articles.all.map((article) => {
        return(
          <div>
            {article.title}
            {article.id}
            {article.content}
            {article.author}
          </div>
        )
      })
    )
  }
}

export default connect(
   (state) => {
     return state;
   }, { fetchArticles })(Articles);
