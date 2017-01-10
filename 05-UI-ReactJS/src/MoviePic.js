import React from 'react';

const MoviePic = React.createClass({
  render() {
    return (
      <div className="Movie-pic">
        <label>{this.props.item}</label>
        <img alt="img" />
      </div>
    )
  }

});

export default MoviePic;
