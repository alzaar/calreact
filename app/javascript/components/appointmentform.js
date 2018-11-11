import React from 'react';
import PropTypes from 'prop-types';
import DateTime from 'react-datetime'

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateTime = this.handleDateTime.bind(this);
  }

  handleDateTime(e) {
    this.props.onDateTimeInput(e);
  }

  handleChange(e) {
    this.props.onUserInput(e);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.onFormSubmit();
  }
  render() {
    return(
      <form onSubmit={this.handleSubmit} className="d-flex flex-column">
        <label>Title</label>
        <input type="text" placeholder="Title" value={this.props.title}
          onChange={this.handleChange} name="Title"/>
        <label className="p-2">Appt Time</label>
        <DateTime input={false} onChange={this.handleDateTime} />
        <input type="submit" value="Make it!" className="btn btn-block btn-sm btn-dark" />
      </form>
    );
  }
}

export default AppointmentForm;
