import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchSinglePost} from '../actions/index';

class PostsShow extends Component {
  componentWillMount() {
    this.props.fetchSinglePost(this.props.params.id);
  }

  render() {
    return (
      <div>Text...{this.props.params.id}</div>
    );
  }
}

export default connect(null, {fetchSinglePost})(PostsShow);
