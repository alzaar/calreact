import React from 'react';
import PropTypes from 'prop-types';
import Appointment from "components/appointment";
class AppointmentList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      {this.props.appointments.map((appointment) => {
        return(
          <div key={appointment.id} >
            <Appointment appointment={appointment} />
          </div>
        );
    })}
    </div>
    );
  }
}

export default AppointmentList;
