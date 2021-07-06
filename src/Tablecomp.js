import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {Container,Row,Col} from 'react-bootstrap'
import Cal from './Calendar.js'
import Calend from './Calendar2'


const { SearchBar } = Search;

const columns = [
      {
        dataField: "idEmployee",
        text: "EmployID",
        sort: true
      },
      {
        dataField: "payrollID",
        text: "ID",
        sort: true
      },
      {
        dataField: "employeeName",
        text: "Name",
        sort: true
      },
      {
        dataField: "DepartmentName",
        text: "DepartmentName",
        sort: true
      },
];



const defaultSorted = [
  {
    dataField: "idEmployee",
    order: "desc"
  }
];

export default class Table1 extends React.Component {
    state = { compares: [], columns : []};

    componentDidMount() {
        this.getItems();
      }
    
      getItems = () => {
        const that = this;
        const request = new XMLHttpRequest();
        request.open("GET", "https://restus-api.herokuapp.com/compares", true);
        request.onload = function get() {
          const data = JSON.parse(this.response);
    
          if (request.status >= 200 && request.status < 400) {
            that.setState({ compares: data });
            console.log(data);
          } else {
            console.log("error");
          }
        };
    
        request.send();
      };
  onRadioBtnClick() {
    console.log("het");
  }
  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(`clicked on row with index: ${rowIndex}`);
      }
    };



    

    return (
        <Container>
            <Row>
                <Col lg={6}>
                  <h3>Start Date</h3>
                  <Cal></Cal>
                </Col>
                <Col lg={6}>
                <h3>End Date</h3>
                  <Calend></Calend>
                  </Col>
                  </Row>
                  <Row>
                    <Col lg={12}>
                    <ToolkitProvider
                        bootstrap4
                        defaultSorted={defaultSorted}
                        keyField="id"
                        data={this.state.compares}
                        columns={columns}
                        search
                        className="table1"
                    >
                        {props => (
                        <div>
                            <SearchBar {...props.searchProps} />
                            <hr />
                            <BootstrapTable 
                            hover
                            noDataIndication="No Data Right Nown"
                            // rowEvents={ rowEvents }
                            {...props.baseProps}
                            />
                        </div>
                        )}
                    </ToolkitProvider>
                </Col>
            </Row>
      </Container>
    );
  }
}
