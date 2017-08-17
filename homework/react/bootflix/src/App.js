import React, { Component } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json';
const apikey = '';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: '',
      title: '',
      movie: example
    }
  }

  _childChanged = (search) => {
    if (search.title !== '') {
      this._searchByTitle(search.title);
    }
    else {
      this._searchById(search.id);
    }
  }


  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = (title) => {
    let url = 'http://www.omdbapi.com/?apikey=' + apikey + '&t=' + title;

    axios.get(url)
      .then((res) => {
        console.log(res.data);
        this.setState({
          movie: res.data
        });
      })
  }

  _searchById = () => {

    console.log("Search by ID");
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search onSearchSubmit={this._childChanged} />
        <Movie movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
