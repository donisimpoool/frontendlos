import React, {Component} from 'react';
import './MenuTabs.css';

import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'
import Datatable from '../../../components/tables/Datatable'

class Filter extends Component{
    render(){
        return(
            <div id="content">      
                <div className="row">
                  <article className="col-sm-12">
      
                    <JarvisWidget editbutton={false} color="blue">
                    <header><span className="widget-icon"> <i className="fa fa-table"/> </span> <h2>Filter </h2></header>
                    <div>
                      <div className="widget-body no-padding"><Datatable
                        options={{
                          ajax: 'assets/api/tables/datatables.filters.json',
                          columns: [{data: "name"}, {data: "position"}, {data: "office"}, {data: "age"}, {data: "date"}, {data: "salary"}]
                        }}
                        filter={true} className="table table-striped table-bordered" width="100%">
                        <thead>
                        <tr>
                          <th className="hasinput" style={{width: "17%"}}><input type="text"
                                                                                 className="form-control"
                                                                                 placeholder="Filter Name"/>
                          </th>
                          <th className="hasinput" style={{width: "18%"}}><input type="text"
                                                                                 className="form-control"
                                                                                 placeholder="Filter Position"/>
                          </th>
                          <th className="hasinput" style={{width: '16%'}}><input type="text"
                                                                                 className="form-control"
                                                                                 placeholder="Filter Office"/>
                          </th>
                          <th className="hasinput" style={{width: '17%'}}><input type="text"
                                                                                 className="form-control"
                                                                                 placeholder="Filter Age"/>
                          </th>
                          <th className="hasinput icon-addon"><input id="dateselect_filter" type="text"
                                                                     placeholder="Filter Date"
                                                                     className="form-control datepicker"
                                                                     data-dateformat="yy/mm/dd"/> <label
                            htmlFor="dateselect_filter"
                            className="glyphicon glyphicon-calendar no-margin padding-top-15"
                            rel="tooltip" title="" data-original-title="Filter Date"/>
                          </th>
                          <th className="hasinput" style={{width: '16%'}}>
                            <input type="text" className="form-control"
                                   placeholder="Filter Salary"/>
                          </th>
                        </tr>
                        <tr>
                          <th data-class="expand">Name</th>
                          <th>Position</th>
                          <th data-hide="phone">Office</th>
                          <th data-hide="phone">Age</th>
                          <th data-hide="phone,tablet">Start date</th>
                          <th data-hide="phone,tablet">Salary</th>
                        </tr>
                        </thead>
                      </Datatable>
                      </div>
                    </div>
                  </JarvisWidget>
                  
                  </article>
                  
                  <h2>Filter</h2>
                  
                  <JarvisWidget editbutton={false} color="blue">
                  </JarvisWidget>
      
      
                </div>
            </div>
        )
    }
}

export default Filter;