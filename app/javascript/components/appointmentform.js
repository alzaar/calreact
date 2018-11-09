import React from 'react';
import PropTypes from 'prop-types';

class AppointmentForm extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    let name = e.target.name;
    let obj = {};
    obj[name] = e.target.value;
    console.log(obj['Title']);
    this.props.onUserInput(obj);
  }
  render() {
    return(
      <form>
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
