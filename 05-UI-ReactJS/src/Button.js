import './Button.scss';
import React from 'react';

const Button = React.createClass({

  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
  },

  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
});

export default Button;
