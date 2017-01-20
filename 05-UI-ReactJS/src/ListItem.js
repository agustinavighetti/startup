import React from 'react';
import './ListItem.scss';

const ListItem = React.createClass({

  propTypes: {
    label: React.PropTypes.string.isRequired,
    data: React.PropTypes.string.isRequired
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
