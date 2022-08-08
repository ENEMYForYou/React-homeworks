import React, { Component } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import movieApi from "../../services/movieApi";
import styles from "./Reviews.module.css";

export default class Reviews extends Component {
  state = {
    reviews: [],
    loading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    movieApi
      .fetchReviews(this.props.match.params.movieId)
      //   .then(console.log)
      .then((reviews) => this.setState({ reviews }))
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const { reviews, loading } = this.state;

    return (
      <>
        {loading && <Spinner />}
        {!loading && (
          <ul className={styles.reviewList}>
            {reviews.map((review) => (
              <li key={review.id} className={styles.reviewItem}>
                <p className={styles.author}>
                  {review.author} posted at {review.created_at}
                </p>
                <p className={styles.reviewContent}>- {review.content}</p>
              </li>
            ))}
          </ul>
        )}
        {reviews.length === 0 && (
          <p>Oops, we don`t have any reviews in this movie</p>
        )}
      </>
    );
  }
}
