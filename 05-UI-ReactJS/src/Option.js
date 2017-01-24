import './Option.scss';
import arrow from './arrow.png';
import Button from './Button';
import React from 'react';

const Option = React.createClass({

  propTypes: {
    option: React.PropTypes.node,
    title: React.PropTypes.string
  },

  getInitialState: function() {
    return {
      formVisible: false
    };
  },

  onClick: function() {
    this.setState({formVisible: !this.state.formVisible});
  },

  getButtonProps: function () {
    return {
      className: "Option--item",
      onClick: this.onClick
    };
  },

  render() {
    return (
      <div className="Option">
        <Button {...this.getButtonProps()}>
          <h2 className="Option--item--title">{this.props.title}</h2>
          <img className="Option--item--arrow" src={arrow} alt="arrow" />
        </Button>
        {this.renderContent()}
      </div>
    )
  },

  renderContent: function () {
    return (this.state.formVisible) ? <div className="Option--content">{this.props.option}</div> : null;
  }
})

export default Option;
