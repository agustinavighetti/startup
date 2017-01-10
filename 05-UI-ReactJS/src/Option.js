import React from 'react';
import arrow from './arrow.png';

const Option = React.createClass({

  getInitialState: function() {
    return {
      formVisible: false
    };
  },

  onClick: function() {
    this.setState({formVisible: !this.state.formVisible});
  },

  render() {
    return (

      <div className="App-option">
        <button onClick={this.onClick} className="option">
          <h2 className="option-title">{this.props.title}</h2>
          <img className="option-arrow" src={arrow} alt="arrow" />
        </button>
        {this.renderContent()}
      </div>

    )
  },

  renderContent: function () {
    return (this.state.formVisible) ? this.props.option : null;
  }
})

export default Option;
