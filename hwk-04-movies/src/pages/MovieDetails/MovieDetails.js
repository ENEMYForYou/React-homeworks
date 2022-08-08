import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import styles from "./MovieDetails.module.css";

import routes from "../../routes";
import movieApi from "../../services/movieApi";

import NotFound from "../../pages/NotFound";
import Spinner from "../../Components/Spinner/Spinner";
import Cast from "../../pages/Cast/Cast";
import Reviews from "../../pages/Reviews/Reviews";

export default class MovieDetails extends Component {
  state = {
    movie: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchMovieDetails(this.props.match.params.movieId)
      // .then(console.log)
      .then((movie) => this.setState({ movie }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  hadleGoBack = () => {
    const { state } = this.props.location;

    if (state && state.from) {
      return this.props.history.push(state.from);
    }
    this.props.history.push(routes.movies);
  };

  render() {
    const imageBaseUrl = "https://image.tmdb.org/t/p/w300";
    const { movie, loading, error } = this.state;
    const { match, location } = this.props;

    return (
      <>
        {loading && <Spinner />}
        {!loading && error && <NotFound />}
        {!loading && !error && (
          <>
            <button
              type="submit"
              className={styles.backBtn}
              onClick={this.hadleGoBack}
            >
              <i className={styles.arrowLeft}></i>
              Go back
            </button>
            {movie && (
              <div className={styles.container}>
                <h1 className={styles.movieTitle}>{movie.title}</h1>
                {movie.tagline && (
                  <p className={styles.tagline}>{movie.tagline}</p>
                )}
                <div className={styles.movieContainer}>
                  {movie.poster_path && movie.homepage && (
                    <div className={styles.baseInfo}>
                      {movie.poster_path && (
                        <img
                          src={`${imageBaseUrl}${movie.poster_path}`}
                          alt="Poster poster"
                        />
                      )}
                      {movie.homepage && (
                        <div>
                          <span className={styles.linkTitle}>
                            Official site: (clickable){" "}
                          </span>
                          <a
                            className={styles.originalLink}
                            href={movie.homepage}
                            rel="noreferrer"
                            target="_blank"
                          >
                            {movie.homepage}
                          </a>
                        </div>
                      )}
                    </div>
                  )}

                  <div className={styles.secondaryInfo}>
                    <span className={styles.subtitle}>Genres: </span>
                    <ul className={styles.genresList}>
                      {movie.genres.map((genre) => (
                        <li key={genre.id} className={styles.genreItem}>
                          {genre.name}
                        </li>
                      ))}
                    </ul>
                    <p className={styles.stats}>
                      <span className={styles.subtitle}>Rating: </span>
                      {movie.vote_average.toFixed(2)}
                    </p>
                    <p className={styles.stats}>
                      <span className={styles.subtitle}>Number of votes: </span>
                      {movie.vote_count}
                    </p>
                    <div>
                      <span className={styles.subtitle}>Overview</span>
                      <p className={styles.overview}>{movie.overview}</p>
                    </div>
                    <span className={styles.subtitle}>Production Country:</span>
                    <ul>
                      {movie.production_countries.map((country) => (
                        <li key={uuidv4()} className={styles.countryItem}>
                          {country.name}
                        </li>
                      ))}
                    </ul>
                    {movie.adult && (
                      <h1 className={styles.attention}>
                        ATTENTION THIS MOVIE 18+
                      </h1>
                    )}
                    <p className={styles.releaseDate}>
                      <span className={styles.subtitle}>Release date: </span>
                      {movie.release_date}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
        {/* {!loading && !error && ( */}
        <>
          <div className={styles.additionalOptions}>
            <ul className={styles.optionsList}>
              <li key="cast" className={styles.optionsItem}>
                <NavLink
                  className={styles.optionLink}
                  activeClassName={styles.activeOptionLink}
                  to={{
                    pathname: `${match.url}/cast`,
                    state: { from: location.state && location.state.from },
                  }}
                  exact
                >
                  Cast
                </NavLink>
              </li>

              <li key="review" className={styles.optionsItem}>
                <NavLink
                  className={styles.optionLink}
                  activeClassName={styles.activeOptionLink}
                  to={{
                    pathname: `${match.url}/reviews`,
                    state: { from: location.state && location.state.from },
                  }}
                  exact
                >
                  Reviews
                </NavLink>
              </li>
            </ul>
            <Route path={routes.cast} component={Cast} />
            <Route path={routes.reviews} component={Reviews} />
          </div>
        </>
      </>
    );
  }
}
