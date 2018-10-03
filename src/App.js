import React, { Component, Fragment } from 'react';
import { addData } from './store/actions/testActions';
import { connect } from 'react-redux';
class App extends Component {
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
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddData: data => dispatch(addData(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
