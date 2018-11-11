import React from 'react'
import PropTypes from "prop-types"
import Moment from "react-moment"
class Appointment extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <table className="table table-dark">
          <tbody>
            <tr>
              <td>{this.props.appointment.title}</td>
              <td><Moment format="MMMM Do YYYY, h:mm:ss a" >{this.props.appointment.appt_time}</Moment></td>
            </tr>
          </tbody>
        </table>
      </div>

    );
  }
}


export default Appointment;
