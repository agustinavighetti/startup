import './FormItem.scss';
import React from 'react';

const FormItem = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    item: React.PropTypes.string,
    onClick: React.PropTypes.func,
    onChange: React.PropTypes.func,
    type: React.PropTypes.string,
    value: React.PropTypes.string
  },

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

  getInputProps: function () {
    return {
      className: "FormItem--input",
      onChange: this.handleChange,
      type: this.props.type,
      value: this.props.value
    }
  },

  render() {
    return (
      <div className="FormItem">
        <label className="FormItem--label">{this.props.item}</label>
        <input {...this.getInputProps()} required />
      </div>
    )
  }

});

export default FormItem;
