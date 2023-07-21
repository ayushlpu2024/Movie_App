import React, { Component } from 'react';

export default class MovieCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: false,
      cart: false
    };
  }

  handleFav = () => {
    this.setState((prevState) => ({
      favorite: !prevState.favorite
    }));
  };

  handleCart = () => {
    this.setState((prevState) => ({
      cart: !prevState.cart
    }));
  };

  render() {
    const { favorite, cart } = this.state;
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <div className="left">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="right">
              <div className="title">{movie.title}</div>
              <div className="plot">{movie.plot}</div>
              <div className="price">{movie.price}</div>
              <div className="rating">{movie.rating}</div>
            </div>
            <div className="footer">
              {favorite ? (
                <button className="fav-btn" onClick={this.handleFav}>
                  Un-Favourite
                </button>
              ) : (
                <button className="fav-btn" onClick={this.handleFav}>
                  Favourite
                </button>
              )}
              {cart ? (
                <button className="cart" onClick={this.handleCart}>
                  Discard
                </button>
              ) : (
                <button className="cart" onClick={this.handleCart}>
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }
}


