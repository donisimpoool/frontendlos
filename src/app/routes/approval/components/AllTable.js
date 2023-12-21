import React, {Component} from 'react';
import './MenuTabs.css'

import {WidgetGrid, JarvisWidget}  from '../../../components'
import Datatable from '../../../components/tables/Datatable'


class AllTable extends Component{

    render(){
        return(
            <div id="content"> 

                    <WidgetGrid><JarvisWidget editbutton={false} color="blue">
                    <header><span className="widget-icon"> <i className="fa fa-table"/> </span><h2>All</h2></header>
                    <div>
                      <div className="widget-body no-padding">
                    <Datatable
                        options={{
                          ajax: 'assets/api/tables/datatables.datdata.json',
                          columns: [{data: "id"}, {data: "fullName"}, {data: "loanAmount"}, {data: null}, {data: null}, {data: null}]
                        }}
                        filter={true} className="table table-striped table-bordered" width="100%">
                        <thead>
                        <tr>
                          <th className="hasinput" style={{width: "17%"}}>
                            <input type="text" className="form-control" placeholder="Filter ID"/>
                          </th>
                          <th className="hasinput" style={{width: "18%"}}>
                            <input type="text" className="form-control" placeholder="Filter Name"/>
                          </th>
                          <th className="hasinput" style={{width: '16%'}}>
                            <input type="text" className="form-control" placeholder="Filter Loan"/>
                          </th>
                          <th className="hasinput" style={{width: '16%'}}>
                            <input type="text" className="form-control" placeholder="Filter Date"/>
                          </th>
                          <th className="hasinput" style={{width: '16%'}}>
                            <input type="text" className="form-control" placeholder="Filter Waiting Time"/>
                          </th>
                          <th className="hasinput" style={{width: '16%'}}>
                            <input type="text" className="form-control" placeholder="Filter Status"/>
                          </th>
                        </tr>
                        <tr>
                          <th>Loan IDD</th>
                          <th>Customer</th>
                          <th>Loan</th>
                          <th>Loan Created Date</th>
                          <th>Waiting Time</th>
                          <th>Status</th>
                        </tr>
                        </thead>
                      </Datatable>
                      </div>
                    </div>
                  </JarvisWidget></WidgetGrid>
      
            </div>
        )
    }
}

export default AllTable;