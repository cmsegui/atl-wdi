import React, { Component } from 'react';

// Update the forms to utilize methods being passed down from App.js
class Search extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleIdChange = this.handleIdChange.bind(this);
    this.state = {
      title: '',
      id: ''
    };
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
      id:''
    });
  }
  handleIdChange(event) {
    this.setState({
      title: '',
      id: event.target.value
    });
  }

  handleSubmit(event) {
    this.props.onSearchSubmit(this.state)
    event.preventDefault();
  }
  render() {


    return (
      <section id="movie-search">
        <strong>Search by:</strong> Title <em>or</em> ID

      <div className="search">
          <form onSubmit={this.handleSubmit} id="title-search-form" method="get">
            <input onChange={this.handleTitleChange}
              type="text" value={this.state.title}
              name="title" placeholder="Enter movie title" />
            <input type="submit" value="Search for this title" />
          </form>
        </div>

        <div className="search">
          <form onSubmit={this.handleSubmit} id="id-search-form" method="get">
            <input onChange={this.handleIdChange}
              type="text" value={this.state.id}
              name="id" placeholder="Enter omdb movie ID" />
            <input type="submit" value="Search by ID" />
          </form>
        </div>

      </section>
    );
  }
};

export default Search;