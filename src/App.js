import React, { Component } from 'react';

import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import Notification from './components/Notification';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Button from './components/Button';

import getFromApi from './api/imagesApi';
import './styles.css';

export default class App extends Component {
  state = {
    images: [],
    loading: false,
    page: 1,
    searchQuery: '',
    error: null,
    largeImgUrl: null,
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    this.setState({ loading: true });
    getFromApi
      .fetchImagesFromApi(searchQuery, page)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  handleSearchFormSubmit = query => {
    this.setState({ searchQuery: query, page: 1, images: [] });
  };

  handleLargeImg = url => {
    this.setState({ largeImgUrl: url });
  };

  handleCloseModal = () => this.setState({ largeImgUrl: null });

  componentDidUpdate(prevProps, prevState) {
    const { images, searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }

    if (prevState.images.length !== images.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  render() {
    const { images, loading, error, largeImgUrl } = this.state;

    return (
      <>
        <div className="App">
          {error && (
            <Notification
              message={`Whoops, something went wrong: ${error.message}`}
            />
          )}
          <SearchBar onSubmit={this.handleSearchFormSubmit} />
          {images.length > 0 && (
            <ImageGallery
              images={images}
              onUpdateImages={this.handleLargeImg}
            />
          )}
          {largeImgUrl && (
            <Modal onCloseModal={this.handleCloseModal}>
              <img className="Modal-img" src={largeImgUrl} alt="largeImage" />
            </Modal>
          )}
        </div>
        <div className="Button-box">
          {loading && <Loader />}
          {images.length > 0 && !loading && (
            <Button onUpdateButton={this.fetchImages} />
          )}
        </div>
      </>
    );
  }
}
