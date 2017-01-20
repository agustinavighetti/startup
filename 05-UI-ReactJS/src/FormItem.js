import React from 'react';
import './FormItem.scss';

const FormItem = React.createClass({

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
      <div className="FormItem">
        <label className="FormItem--label">{this.props.item}</label>
        <input className="FormItem--input" value={this.props.value} type={this.props.type} onChange={this.handleChange} required />
      </div>
    )
  }

});

export default FormItem;
