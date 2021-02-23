import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import {Container,Row,Col} from 'react-bootstrap'
const { SearchBar } = Search;

const columns = [
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
    dataField: "payrollID",
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
                <Col md={12}>
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
                            noDataIndication="No Data Right Nownpm"
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
