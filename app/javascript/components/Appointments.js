import React from "react";
import PropTypes from "prop-types";
import Appointment from "components/appointment";
import AppointmentForm from "components/appointmentform";
import AppointmentList from "components/appointmentlist";
import update from 'immutability-helper';

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: ' '
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
  }
  handleUserInput(obj) {
    if (obj.target.name === 'Title') {
      this.setState({title: obj.target.value});
  } else {
    this.setState({appt_time: obj.target.value});
  }
}
  handleFormSubmit() {
    let appointment = {title: this.state.title, appt_time: this.state.appt_time }

    // $.post('/appointments',
    // { appointment: appointment } ).done((data) => {
    //   this.addNewAppointment(data);
    //   console.log(data);
    // });

    axios({
    method: 'post',
    url: '/appointments',
    data: {
      appointment
    }
  }).then((data) => {
    this.addNewAppointment(data);
  });

  }

  addNewAppointment(appointment) {
    let appointments = update(this.state.appointments, { $push: [appointment] })
    this.setState({appointments: appointments});
  }

  render () {
    return (
      <div>
        <AppointmentForm title={this.state.title} appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}
          onFormSubmit={this.handleFormSubmit}
          />
        <AppointmentList appointments={this.props.appointments} />
      </div>
    );
  }
}

export default Appointments
