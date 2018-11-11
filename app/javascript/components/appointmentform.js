import React from 'react';
import PropTypes from 'prop-types';

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <form onSubmit={this.handleSubmit}>
        <label>Title</label>
        <input type="text" placeholder="Title" value={this.props.title}
          onChange={this.handleChange} name="Title"/>
        <label>Appt Time</label>
        <input type="text" placeholder="Appt_Time" value={this.props.appt_time}
        onChange={this.handleChange} name="Appt_Time"/>
        <input type="submit" value="Make it!" className="btn btn-sm btn-dark" />
      </form>
    );
  }
}

export default AppointmentForm;
