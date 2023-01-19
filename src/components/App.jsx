import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    images: [],
    request: '',
    page: 1,
    isLoading: false,
    largeImage: null,
  };
  perPage = 12;

  async componentDidUpdate(prevProps, prevState) {
    const KEY = '30111750-62c4a73e1cd4f265a4d4cd285';
    const { page, request } = this.state;
    const prevRequest = prevProps.request;
    const newRequest = this.state.request;
    const prevPage = prevState.page;
    const newPage = this.state.page;
    if (prevRequest !== newRequest || prevPage !== newPage) {
      try {
        this.setState({ isLoading: true });
        const { hits } = await fetch(
          `https://pixabay.com/api/?q=${request}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
        ).then(response => response.json());
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
        }));
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ isLoading: false });
      }
      return;
    }
  }

  onRequest = e => {
    e.preventDefault();
    const input = e.target.elements[1].value;
    e.target.reset();
    this.setState({ request: input, images: [], page: 1 });
  };

  onImageClick = (url, tags) => {
    this.setState({ largeImage: { url, tags } });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onRequest} />
        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />
      </div>
    );
  }
}
