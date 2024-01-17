import React from "react";
import {JarvisWidget} from "../../../components";
import Msg from "../../../components/i18n/Msg";

export default class LoanRangeTables extends React.Component {
    render() {
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
                                                <th><Msg phrase="Loan Total Amount"/></th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.props.list != undefined && this.props.list != null?
                                                this.props.list.map(function (item) {
                                                    var num = item.amount;
                                                    num = "Rp "+num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                                                    if(item.loanID != "0"){
                                                    return (
                                                        <tr key={item.loanID}>
                                                            <td >{item.loanname}</td>
                                                            <td>{item.loandesc}</td>
                                                            <td style={{textAlign:"right"}}>{num}</td>
                                                        </tr>
                                                    )
                                                    }
                                                })
                                            :""
                                            }
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