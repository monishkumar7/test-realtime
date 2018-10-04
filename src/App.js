import React, { Component, Fragment } from 'react';
import { addData, listenChanges, newPage } from './store/actions/testActions';
import { connect } from 'react-redux';
class App extends Component {
  componentDidMount = () => {
    this.props.onListenChanges();
  };

  state = {
    title: '',
    content: ''
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onAddData(this.state);
  };

  handleShare = () => {
    this.props.onNewPage();
  };

  render() {
    return (
      <Fragment>
        <div style={{ padding: '20%' }}>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
            <label htmlFor="content">Content</label>
            <input type="text" id="content" onChange={this.handleChange} />
            <button className="btn">Submit</button>
          </form>
        </div>
        <button onClick={this.handleShare}>Hello</button>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    newPageId: state.myObject
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddData: data => dispatch(addData(data)),
    onListenChanges: () => dispatch(listenChanges()),
    onNewPage: () => dispatch(newPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
