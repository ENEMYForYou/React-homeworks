import React, { Component } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import movieApi from "../../services/movieApi";

import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    actors: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchMovieCast(this.props.match.params.movieId)
      // .then(console.log)
      .then((actors) => this.setState({ actors }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { actors, loading } = this.state;
    const imageBaseUrl = "https://image.tmdb.org/t/p/w300";

    return (
      <>
        {loading && <Spinner />}
        {!loading && actors.length > 0 && (
          <ul>
            {actors.map((actor) => (
              <li key={actor.cast_id}>
                <p className={styles.authorItem}>
                  {actor.profile_path && (
                    <img
                      src={`${imageBaseUrl}${actor.profile_path}`}
                      alt="actor img"
                      className={styles.actorImage}
                    />
                  )}
                  <span className={styles.subtitle}>Сharacter: </span>{" "}
                  {actor.character} - {actor.name}
                </p>
              </li>
            ))}
          </ul>
        )}
        {actors.length === 0 && (
          <p>Oops, we don`t have any information about actors in this movie</p>
        )}
      </>
    );
  }
}
