import React from 'react';

const MovieItem = React.createClass({

  getInitialState() {
    return {
      value: ''
    }
  },

  handleChange: function(event) {
      this.setState({value: event.target.value});

      if (this.props.onChange) {
        this.props.onChange(event);
      }
  },

  render() {
    return (
      <div className="Movie-item">
        <label className="item-label">{this.props.item}</label>
        <input className="item-input" value={this.props.value} type={this.props.type} onChange={this.handleChange} required />
      </div>
    )
  }

});

export default MovieItem;
