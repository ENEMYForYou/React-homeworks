import React, { Component } from "react";

import Spinner from "./Spinner/Spinner";
import Notification from "./Notification";
import GalleryList from "./GalleryList";
import Searchbar from "./Searchbar";
import Button from "./Button";

import imagesApi from "./Tools/imagesApi";
import Modal from "./Modal/Modal";

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    error: null,
    searchQuery: "",
    page: 1,
    largeImageUrl: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    const prevArrOfImages = prevState.images.length;
    const nextArrOfImages = this.state.images.length;
    if (prevArrOfImages !== nextArrOfImages) {
      this.pageScroll();
    }

    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ loading: true });
    imagesApi
      .fetchImagesWithQuery(searchQuery, page)
      .then((images) =>
        this.setState((prevState) => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        }))
      )
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchSubmit = (query) => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  openLargeImage = url => {
    this.setState({
      largeImageUrl: url
    });
  };
  closeLargeImage = () => {
    this.setState({
      largeImageUrl: ""
    });
  };
  pageScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth"
    });
  };

  render() {
    const { images, loading, error, largeImageUrl } = this.state;
    return (
      <>
        {error && (
          <Notification
            message={`Whoops, something went wrong: ${error.message}`}
          />
        )}
        <Searchbar onSubmit={this.handleSearchSubmit} />
        {images.length > 0 && (
          <GalleryList images={images} openImage={this.openLargeImage}/>
        )}
        {loading && <Spinner />}
        {images.length > 0 && !loading && (
          <Button onFetchImages={this.fetchImages} />
        )}
        {largeImageUrl && (
          <Modal onCloseLargeImage={this.closeLargeImage}>
            {/* eslint-disable-next-line */}
            <img src={largeImageUrl} alt="Large image from API" />
          </Modal>
        )}
      </>
    );
  }
}
