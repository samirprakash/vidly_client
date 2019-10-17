import React, { Component } from 'react';
import { deleteMovie, getMovies } from '../services/fakeMovieService';

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  handleDelete = movie => {
    const deletedMovie = deleteMovie(movie._id);
    this.setState({
      movies: this.state.movies.filter(movie => movie._id !== deletedMovie._id)
    });
  };

  render() {
    const { length: numbeOfMovies } = this.state.movies;
    if (numbeOfMovies === 0)
      return <p>There are no more movies in the database</p>;

    return (
      <>
        <p>Showing {numbeOfMovies} movies in the database</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map(movie => (
              <tr key={movie._id}>
                <th scope="row">{movie.title}</th>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
