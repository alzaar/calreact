import React from "react";
import PropTypes from "prop-types";
import Appointment from "components/appointment";
import AppointmentForm from "components/appointmentform";
import AppointmentList from "components/appointmentlist";
import update from 'immutability-helper';
import Moment from 'react-moment';

class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: '',
      appt_time: new Date()
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addNewAppointment = this.addNewAppointment.bind(this);
    this.handleDateTime = this.handleDateTime.bind(this);
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

  }).catch(error => {
    console.log(error);
  });

  }

  handleDateTime(e) {
    console.log(e);
    this.setState({appt_time: e});
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
          onDateTimeInput={this.handleDateTime}
          />
        <AppointmentList appointments={this.props.appointments} />
      </div>
    );
  }
}

export default Appointments
