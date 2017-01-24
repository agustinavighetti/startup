import './Button.scss';
import Button from './Button';
import classNames from 'classnames';
import FormItem from './FormItem.js';
import React from 'react';

const MovieForm = React.createClass({

  propTypes: {
    className: React.PropTypes.string,
    movies: React.PropTypes.arrayOf(React.PropTypes.shape({
      duration: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired,
      watched: React.PropTypes.bool.isRequired,
      year: React.PropTypes.string.isRequired
    }).isRequired).isRequired,
    onMovieAdd: React.PropTypes.func
  },

  getInitialState: function() {
    return {
      duration: '',
      id: this.props.movies.length,
      name:'',
      watched: '',
      year: ''
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
        duration: '',
        name: '',
        watched: '',
        year: ''
      });
    }
  },

  getFormItemProps: function (movieData, durationExplication) {
    let duration = durationExplication;

    if (duration) {
      return {
        value: this.state[movieData],
        onChange: this.handleInputChange.bind(this, movieData),
        item: "Movie's "+movieData+durationExplication+": "
      }
    } else {
      return {
        value: this.state[movieData],
        onChange: this.handleInputChange.bind(this, movieData),
        item: "Movie's "+movieData+": "
      }
    }
  },

  render() {
    return (
      <div>
        <FormItem {...this.getFormItemProps("name")} type="text" />
        <FormItem {...this.getFormItemProps("year")} type="number" />
        <FormItem {...this.getFormItemProps("duration", " (in minutes)")} type="number" />
{/*        <Button {...this.getButtonProps(this.watched, true)}>Watched</Button>
        <Button {...this.getButtonProps(this.notWatched,false)}>Not watched</Button>
        <Button {...this.getButtonProps(this.click)} className="Button" type="submit">Submit</Button>
*/}        <Button {...this.getButtonProps(true)}>Watched</Button>
        <Button {...this.getButtonProps(false)}>Not watched</Button>
        <Button onClick={this.click} className="Button" type="submit">Submit</Button>

      </div>
    );
  },

  getButtonProps: function (watchedButton) {
    return {
      className: this.getButtonClass(watchedButton),
      onClick: this.wasWatched.bind(this, watchedButton)
    };
  },

  getButtonClass: function (watchedButton) {

    return classNames(
      {
        'Button_MovieForm': true,
        'Button_green': (watchedButton),
        'Button_red': (!watchedButton),
        'Button_green-selected': (watchedButton && this.state.watched),
        'Button_red-selected': (!watchedButton && this.state.watched === false)
      }
    );
  },


  handleInputChange: function (field, event) {

    var newState = this.state;

    newState[field] = event.target.value;

    this.setState(newState);
  },


  wasWatched: function (wasWatched) {
    this.setState({watched: wasWatched})
  }
});

export default MovieForm;
