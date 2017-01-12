import React from 'react';

const ListItem = React.createClass({

  render() {
    return (
      <div className="ListItem-item">
        <label className="ListItem-label">{this.props.label}</label>
        <p className="ListItem-data">{this.props.data}</p>
      </div>
    )
  }
})

export default ListItem;
