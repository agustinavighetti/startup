import classNames from 'classnames';
import React from 'react';
import FormItem from './FormItem.js';
import Button from './Button';
import './Button.scss';

const MovieForm = React.createClass({

  getInitialState: function() {
    return {
      name:'',
      year: '',
      duration: '',
      watched: '',
      id: this.props.movies.length
    }
  },

  click: function() {

    if ((this.state.name === '') || (this.state.year === '') || (this.state.duration === '')) {
      alert('You have to fill in all the items!');
    } else if (this.state.watched === '') {
      alert('You have to indicate if you have seen this movie!')
    } else {
      this.setState({
        id: (this.props.movies.length + 1)
      });
      this.props.onMovieAdd(this.state);

      this.setState({
        name: '',
        year: '',
        duration: '',
        watched: ''
      });
    }
  },

  render() {
    return (
      <div>
        <FormItem value={this.state.name} onChange={this.handleInputChange.bind(this, 'name')} item="Movie's name: " type="text" />
        <FormItem value={this.state.year} onChange={this.handleInputChange.bind(this, 'year')} item="Movie's year: " type="number" />
        <FormItem value={this.state.duration} onChange={this.handleInputChange.bind(this, 'duration')} item="Movie's duration (in minutes): " type="number" />
        <Button {...this.getButtonProps(this.watched, true)}>Watched</Button>
        <Button {...this.getButtonProps(this.notWatched,false)}>Not watched</Button>
        <Button {...this.getButtonProps(this.click)} className="Button" type="submit">Submit</Button>
      </div>

    );
  },

  getButtonProps: function (onClick, watchedButton) {
    return {
      className: this.getButtonClass(watchedButton),
      onClick: onClick
    };
  },

  getButtonClass: function (watchedButton) {
    if (watchedButton) {
      return classNames(
        'Button--MovieForm',
        'Button_green',
          {
          'Button_red': false,
          'Button_green-selected': (this.state.watched === watchedButton)
        }
      );
    } else {
      return classNames(
        'Button--MovieForm',
        'Button_red',
          {
          'Button_green': false,
          'Button_red-selected': (this.state.watched === watchedButton)
        }
      );
    }
  },

  handleInputChange: function (field, event) {

    var newState = this.state;

    newState[field] = event.target.value;

    this.setState(newState);
  },

  watched: function() {
    this.setState({watched: true});
  },

  notWatched: function() {
    this.setState({watched: false});
  }
});

export default MovieForm;
