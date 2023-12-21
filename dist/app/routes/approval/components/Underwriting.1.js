import React, {Component} from 'react';
import './MenuTabs.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'

const datdata = require('../../../../assets/api/tables/datatables.datdata.json');

//install speedometer -> npm install --save react-d3-speedometer

import {WidgetGrid, JarvisWidget}  from '../../../components'
import ReactSpeedometer from "react-d3-speedometer"


class Underwriting extends Component{
    constructor(props) {
      super(props);
    }
  
    isExpandableRow(row) {
      if (row.id < 225) return true;
      else return false;
    }
  
    expandComponent(row) {
      
      return (
            <div className="sameline">  
             <div className="a50">
                <h1><b>Scoring Results</b></h1>
                <b>Score:</b> {row.speedscore}<br/>
                <b>Risk Level:</b> {row.status}   <br/>
                <b>System Decision:</b> {row.status}   <br/>
                <b>Odds:</b> {row.status}   <br/>
                <b>Probability of Default:</b> {row.status}%   <br/><br/><br/>
                <h1><b>Decision Comments</b></h1>
                <b>Scorecard Comments:</b> {row.status}    <br/>
                <b>Rule Engine Comments:</b> {row.status}    <br/><br/>
                <a href="#/approval-process/" className="btn btn-labeled btn-success"> <span className="btn-label"><i className="glyphicon glyphicon-ok"></i></span>Approve </a>
                <a href="#/approval-process/" className="btn btn-labeled btn-danger"> <span className="btn-label"><i className="glyphicon glyphicon-remove"></i></span>Reject</a>
             
             </div>
             {/* <div> &nbsp;  &nbsp;  &nbsp; </div> */}
             <div className="a51">
                <ReactSpeedometer
                    needleHeightRatio={0.7}
                    maxSegmentLabels={5} //label penomoran angka
                    segments={10} //label warna
                    segmentColors={["red", "red", "red", "yellow", "yellow", "green", "blue", "blue", "blue", "blue"]}
                    value={row.speedscore}
                    needleTransitionDuration={4000}
                    needleTransition="easeElastic"
                    width={250} height={250}
                />  
            </div>
                       
         </div>
      );
    }
    render(){
        const options = {
          //expandRowBgColor: 'rgb(255,255,255)'
        };
        return(
            <div id="content">                

<WidgetGrid>
                    {/* row */}
                    <div className="row">
                        <article className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget className="well" editbutton={false} fullscreenbutton={false} deletebutton={false} color="red">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>

                                    <h2>All </h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">                                    

                                    <BootstrapTable data={ datdata } pagination={true} striped={true} hover={true} condensed= {true} search={true} 
                                        options={ options } headerStyle={ { background: '#aaaadd' } } 
                                        expandableRow={ this.isExpandableRow } containerStyle={ { background: '#FFFFFF' } }
                                        expandComponent={ this.expandComponent }  searchPlaceholder='Search from any columns...' 
                                        expandColumnOptions={ { expandColumnVisible: true } }>
                                        <TableHeaderColumn dataField='id' dataSort={true}  width='15%' dataAlign='center'  headerAlign='center' isKey={ true } filter={ { type: 'NumberFilter', delay: 10, } } 
                                        >Loan ID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='fullName' dataSort={true}  width='20%' dataAlign='center'  headerAlign='center' filter={ { type: 'TextFilter', placeholder: 'Please enter a value', delay: 10 } }
                                        >Customer</TableHeaderColumn>
                                        <TableHeaderColumn dataField='loanAmount'  dataSort={true} width='15%' dataAlign='center'  headerAlign='center' filter={ { type: 'NumberFilter', delay: 10 } }
                                        >Loan</TableHeaderColumn>
                                        <TableHeaderColumn dataField='loanCreatedDate' dataAlign='center'  width='20%' headerAlign='center' filter={ { type: 'DateFilter', delay: 10, } } >Loan Created Date</TableHeaderColumn>
                                        <TableHeaderColumn dataField='waitingTime' dataAlign='center'  width='20%' headerAlign='center' >Waiting Time</TableHeaderColumn>
                                        <TableHeaderColumn dataField='status' dataAlign='center'  width='10%' headerAlign='center' >Status</TableHeaderColumn>
                                    </BootstrapTable>



                                    </div>
                                </div>
                            </JarvisWidget>
                        </article>
                    </div>
                </WidgetGrid>



                {/* <div>
                    <div className="sameline">
                        <div className="circle">1 Day</div>
                        <div className="margle">Customer 1<br/>Loan 1<br/>5 Mio</div>
                        <div className="margle">                             
                            <ReactSpeedometer
                                needleHeightRatio={0.7}
                                maxSegmentLabels={5} //label penomoran angka
                                segments={10} //label warna
                                segmentColors={["red", "red", "red", "yellow", "yellow", "green", "blue", "blue", "blue", "blue"]}
                                value={333}
                                needleTransitionDuration={4000}
                                needleTransition="easeElastic"
                            />                           
                            <ReactSpeedometer
                                needleHeightRatio={0.7}
                                maxSegmentLabels={10} //label penomoran angka
                                segments={10} //label warna
                                segmentColors={["red", "red", "red", "yellow", "yellow", "green", "blue", "blue", "blue", "blue"]}
                                value={333}
                                needleTransitionDuration={4000}
                                needleTransition="easeElastic"
                            />           
                        </div>
                        <div className="margle">
                            <a href="#/approval-process/approve" className="btn btn-labeled btn-success"> <span className="btn-label"><i className="glyphicon glyphicon-ok"></i></span>Approve </a>
                        </div>
                        <div className="margle">
                            <a href="#/approval-process/reject" className="btn btn-labeled btn-danger"> <span className="btn-label"><i className="glyphicon glyphicon-remove"></i></span>Reject</a>
                        </div>
                    </div>
                </div>             */}
            </div>
        );
    }
}

export default Underwriting;