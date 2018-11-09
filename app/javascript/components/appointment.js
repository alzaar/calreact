import React from 'react'
import PropTypes from "prop-types"

class Appointment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h3>{this.props.appointment.title}</h3>
        <p>{this.props.appointment.appt_time}</p>
      </div>
    );
  }
}


export default Appointment;
