import React from 'react';
import './Button.scss';

const Button = React.createClass({

  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
});

export default Button;
