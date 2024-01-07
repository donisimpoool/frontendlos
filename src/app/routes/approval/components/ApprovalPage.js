import React, {Component} from 'react' 

import BigBreadcrumbs from '../../../components/navigation/components/BigBreadcrumbs'  

import UiTabs from '../../../components/ui/UiTabs'
import All from './All'
import Filter from './Filter'
import Underwriting from './Underwriting'
import Rejected from './Rejected'
import Approved from './Approved'
import Msg from "../../../components/i18n/Msg";
import {getListApproval, keyset} from "../../../config/baseUrl";
import {suburllistappv2,suburllistunderwriting,suburllistrejected,suburllistapprove,suburllistfilter,suburllistsend} from "../../../config/baseUrl";
import Send from "./Send";
import {header, headers} from "../../../config/ConfigParam";

export default class ApprovalPage extends React.Component {
        constructor(props) {
          super(props);
          this.state = {
            listitems:[],
            listallitems:[],
            listallitemsrejected:[],
            listallitemsapproved:[],
            listallitemsfilter:[],
              listallitemssend:[],
          }
        }

        setEntity(data) {
          let listApp = data;
          let listAppReject = data.filter(output => output.status == "R");
          let listAppUnderWriting = data.filter(output => output.status == "U");
          let listAppApprove = data.filter(output => output.status == "A");
          let listAppSend = data.filter(output => output.status == "S");
          this.setState({listallitems:listApp,listitems:listAppUnderWriting,listallitemsrejected:listAppReject,listallitemsapproved:listAppApprove,listallitemssend:listAppSend});
        } 

        componentDidMount() {
            const session = localStorage.getItem(keyset);
            if(session) {
              var url = getListApproval;
                var otherPram = {
                    method: "GET",
                    headers: header
                }
                fetch(url, otherPram)
                    .then(response => response.json())
                    .then(json =>
                        // console.log(json.data)
                        // paramloanrender = json.data
                        // this.setState({listallitems: json.data}),
                        this.setEntity(json.data)
                    )

                // var url = suburllistappv2;
                // var otherPram = {
                //     method: "GET",
                //     headers: headers
                // }
                // fetch(url, otherPram)
                //     .then(response => response.json())
                //     .then(json =>
                //         // console.log(json.data)
                //         // paramloanrender = json.data
                //         this.setState({listallitems: json.data}),
                //     )

                // url = suburllistunderwriting;
                // fetch(url, otherPram)
                //     .then(response => response.json())
                //     .then(json =>
                //         // console.log(json.data)
                //         // paramloanrender = json.data
                //         this.setState({listitems: json.data})
                //     )

                // url = suburllistrejected;
                // fetch(url, otherPram)
                //     .then(response => response.json())
                //     .then(json =>
                //         // console.log(json.data)
                //         // paramloanrender = json.data
                //         this.setState({listallitemsrejected: json.data})
                //     )
                // url = suburllistapprove;
                // fetch(url, otherPram)
                //     .then(response => response.json())
                //     .then(json =>
                //         // console.log(json.data)
                //         // paramloanrender = json.data
                //         this.setState({listallitemsapproved: json.data})
                //     )
                // url = suburllistfilter;
                // fetch(url, otherPram)
                //     .then(response => response.json())
                //     .then(json =>
                //         // console.log(json.data)
                //         // paramloanrender = json.data
                //         this.setState({listallitemsfilter: json.data})
                //     )
                // url = suburllistsend;
                // fetch(url, otherPram)
                //     .then(response => response.json())
                //     .then(json =>
                //         // console.log(json.data)
                //         // paramloanrender = json.data
                //         this.setState({listallitemssend: json.data})
                //     )
            }else{
                window.location.href = "/#/login";
            }
        }


  render() {
    console.log("")
    return (

        <div id="content">
        <BigBreadcrumbs items={['Approval Page']}
                        className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
            <header>
              <div>
                <div className="widget-body">
                  <ul id="myTab1" className="nav nav-tabs bordered">
                    <li className="active, center">
                      <a className="center" href="#all" data-toggle="tab"><i className="fa fa-users"></i><span className="badge bg-color-blue txt-color-white">{this.state.listallitems.length}</span><br/><Msg phrase={'All Applicants'}/></a>
                    </li>
                    {/*<li>*/}
                      {/*<a className="center"  href="#filter" data-toggle="tab"><i className="fa fa-users"></i><span className="badge bg-color-blue txt-color-white">{this.state.listallitemsfilter.length}</span><br/>Filter</a>*/}
                    {/*</li>*/}
                    <li>
                      <a className="center"  href="#underwriting" data-toggle="tab"><i className="fa fa-users"></i><span className="badge bg-color-blue txt-color-white">{this.state.listitems.length}</span><br/><Msg phrase={'Underwriting'}/></a>
                    </li>
                    <li>
                      <a className="center"  href="#rejected" data-toggle="tab"><i className="fa fa-users"></i><span className="badge bg-color-blue txt-color-white">{this.state.listallitemsrejected.length}</span><br/><Msg phrase={'Rejected'}/></a>
                    </li>
                    <li>
                      <a className="center"  href="#approved" data-toggle="tab"><i className="fa fa-users"></i><span className="badge bg-color-blue txt-color-white">{this.state.listallitemsapproved.length}</span><br/><Msg phrase={'Approved'}/></a>
                    </li>
                      <li>
                          <a className="center"  href="#send" data-toggle="tab"><i className="fa fa-users"></i><span className="badge bg-color-blue txt-color-white">{this.state.listallitemssend.length}</span><br/><Msg phrase={'Send'}/></a>
                      </li>

                  </ul>
                  <div id="myTabContent1" className="tab-content padding-0">
                    <div className="tab-pane in active" id="all">
                      <p>
                        {/* appentity kalo udah beres backend, appentity di hilangkan */}
                        <All
                            listallitem={this.state.listallitems}
                        />
                      </p>
                    </div>
                    {/*<div className="tab-pane fade" id="filter">*/}
                      {/*<p>*/}
                        {/*<Filter*/}
                        {/*listfilter={this.state.listallitemsfilter}*/}
                        {/*/>*/}
                      {/*</p>*/}
                    {/*</div>*/}
                    <div className="tab-pane fade" id="underwriting">
                      <p>
                        <Underwriting
                        listunderwriting={this.state.listitems}
                        />
                      </p>
                    </div>
                    <div className="tab-pane fade" id="rejected">
                      <p>
                        <Rejected
                            listallitemsrejected={this.state.listallitemsrejected}
                        />
                      </p>
                    </div>
                    <div className="tab-pane fade" id="approved">
                      <p>
                        <Approved
                            listallitemsapproved={this.state.listallitemsapproved}
                        />
                      </p>
                    </div>
                      <div className="tab-pane fade" id="send">
                          <p>
                              <Send
                                  listallitemsapproved={this.state.listallitemssend}
                              />
                          </p>
                      </div>
                  </div>
                </div>
              </div>
            </header>
          

      </div>
    )
  }
}