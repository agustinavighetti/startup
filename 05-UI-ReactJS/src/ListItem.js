import './ListItem.scss';
import React from 'react';

const ListItem = React.createClass({

  propTypes: {
    data: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div className="ListItem">
        <label className="ListItem--label">{this.props.label}</label>
        <p className="ListItem--data">{this.props.data}</p>
      </div>
    )
  }
})

export default ListItem;
