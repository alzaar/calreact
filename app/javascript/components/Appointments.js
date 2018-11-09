import React from "react";
import PropTypes from "prop-types";
import Appointment from "components/appointment";
import AppointmentForm from "components/appointmentform";
import AppointmentList from "components/appointmentlist";
class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'ali',
      appt_time: ''
    }
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(obj) {
    if (obj['Title']) {
      this.setState({title: obj['Title']});
  } else {
    this.setState({appt_time: obj['Appt_Time']});
  }

  }
  render () {
    return (
      <div>
        <AppointmentForm title={this.state.title} appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          />
        <AppointmentList appointments={this.props.appointments} />
      </div>
    );
  }
}

export default Appointments
