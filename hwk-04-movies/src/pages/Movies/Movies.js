import React, { Component } from "react";
import { Link } from "react-router-dom";

import movieApi from "../../services/movieApi";
import getQueryParams from "../../utils/getQueryParams";
import styles from "./Movies.module.css";
import Searchbox from "../../Components/Searchbox/Searchbox";

export default class Movies extends Component {
  state = {
    movies: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: false });
    const { query } = getQueryParams(this.props.location.search);
    if (query) {
      // movieApi
      //   .fetchMovieWithQuery(query)
      //   .then((movies) => this.setState({ movies }));
      this.fetchMovies(query);
    }
  }
  componentDidUpdate(prevProps, prevState) {
    const { query: prevQuery } = getQueryParams(prevProps.location.search);
    const { query: nextQuery } = getQueryParams(this.props.location.search);
    if (prevQuery !== nextQuery) {
      this.fetchMovies(nextQuery);
      // movieApi
      // .fetchMovieWithQuery(nextQuery)
      //   .then((movies) => this.setState({ movies }));
      // return;
    }
  }

  fetchMovies = (query) => {
    this.setState({ loading: true });
    this.setState({ query: query });
    movieApi
      .fetchMovieWithQuery(query)
      .then((movies) => this.setState({ movies }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };
  fetchPopularMovies = () => {
    movieApi.fetchPopularMovies().then((movies) => this.setState({ movies }));
  };

  handleChangeQuery = (query) => {
    this.props.history.push({
      ...this.props.location,
      search: `query=${query}`,
    });
  };

  render() {
    const { movies } = this.state;
    const { match } = this.props;

    return (
      <div className={styles.movies}>
        <Searchbox
          fetchPopular={this.fetchPopularMovies}
          clearQuery={this.clearQuery}
          onSubmit={this.handleChangeQuery}
        />
        {movies.length > 0 && (
          <ul className={styles.moviesList}>
            {movies.map((movie) => (
              <li className={styles.moviesItem} key={movie.id}>
                <Link
                  to={{
                    pathname: `${match.url}/${movie.id}`,
                    state: { from: this.props.location },
                  }}
                >
                  {movie.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
