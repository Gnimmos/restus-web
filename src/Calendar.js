import React, { Component } from 'react';
import Calendar from 'react-calendar';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';


export default class Cal extends Component {
    constructor(props){
      super(props);
      this.state = {
        startdate: new Date(),
  }
  
}
onChange = startdate => {this.setState({ startdate })
console.log( this.state.startdate)
var startd = this.state.startdate.getDate();
startd =  this.state.startdate.getFullYear() + '-' + ("0" + (this.state.startdate.getMonth() + 1)).slice(-2) + '-' +  this.state.startdate.getDate()+' '+("0" + (this.state.startdate.getHours() + 1)).slice(-2) + ':' + +("0" + (this.state.startdate.getMinutes() + 1)).slice(-2) + ':' +("0" + (this.state.startdate.getSeconds() + 1)).slice(-2);
var data ={ startd}
axios
.post('https://restus-api.herokuapp.com/changedate', data)
.then(() => console.log( data))
.catch(err => {
  console.error(err);
});
}
  render() {
    return (
      <div {...this.onChange}>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}        />
      </div>
    );
  }
}
