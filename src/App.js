import React,   { Component } from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import Table1 from './Tablecomp.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  // state = { compares: [], columns : []};

  // componentDidMount() {
  //   this.getItems();
  // }

  // getItems = () => {
  //   const that = this;
  //   const request = new XMLHttpRequest();
  //   request.open("GET", "http://localhost:5000/compares", true);
  //   request.onload = function get() {
  //     const data = JSON.parse(this.response);

  //     if (request.status >= 200 && request.status < 400) {
  //       that.setState({ compares: data });
  //       console.log(data);
  //     } else {
  //       console.log("error");
  //     }
  //   };

  //   request.send();
  // };

  // listItems = () =>
  // this.setState({ columns : [
  //   {
  //     dataField: "payrollID",
  //     text: "ID"
  //   },
  //   {
  //     dataField: "employeeName",
  //     text: "Name"
  //   },
  //   {
  //     dataField: "DepartmentName",
  //     text: "DepartmentName"
  //   }
  // ]});
  //   // this.state.compares.map(comp => (
  //   //   <tr className="card">
  //   //     <td>{comp.payrollID}</td>
  //   //     <td>{comp.DepartmentName}</td>
  //   //     <td>{comp.employeeName}</td>

  //   //   </tr>
  //   // ));

  render() {
    return (
      <div className="App">
        <Container fluid expand = "lg">
              {/* <BootstrapTable keyField="payrollID" data={this.state.compares} columns={this.state.columns} />

        <div className="container">{this.listItems()}</div> */}
        <Table1/>
        </Container>
      </div>
    );
  }
}
export default App;