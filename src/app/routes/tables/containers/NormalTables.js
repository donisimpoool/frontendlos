import React from 'react'

import {Alert} from 'react-bootstrap'

import {Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget}  from '../../../components'
import Msg from '../../../components/i18n/Msg';

export default class NormalTables extends React.Component {
  render() {
    console.log("this.props.list : "+this.props.list.length)
    return (
      <div id="content">
        {/* <div className="row">
          <BigBreadcrumbs items={['Tables', 'Normal Tables']} icon="fa fa-fw fa-table"
                          className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
          <Stats />
        </div> */} 
          <div className="row">
            <article className="col-sm-12">

              <JarvisWidget editbutton={false} color="blueDark">
                <header>
                  <span className="widget-icon"> <i className="fa fa-table"/> </span>

                  <h2><Msg phrase={this.props.title}/></h2>
                </header>
                <div>
                  <div className="widget-body">

                    <div className="table-responsive">

                      <table className="table table-bordered">
                        <thead>
                        <tr>
                          <th><Msg phrase="Loan Name"/></th>
                          <th><Msg phrase="Loan Description"/></th>
                          <th><Msg phrase="Amount Loan"/></th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                          this.props.list.map(function (item) {
                            return (
                                <tr key={item.loanid}>
                                  <td >{item.loanname}</td>
                                  <td>{item.loandescription}</td>
                                  <td>{item.jumlahloan}</td>
                                </tr>
                            )
                          })}
                        </tbody>
                      </table>

                    </div>

                  </div>
                </div>
              </JarvisWidget>
 

            </article> 
          </div> 
      </div>
    )
  }
}