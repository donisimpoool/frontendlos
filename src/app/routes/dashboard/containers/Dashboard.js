/**
 * Created by griga on 11/30/15.
 */

import React from 'react'
import {connect} from 'react-redux'

import Stats from '../../../components/common/Stats' 
import {apiFetch} from '../../auth/actions/authAction'

import MorrisCharts from "../../graphs/containers/MorrisCharts"
import ChartJs from "../../graphs/containers/ChartJs"
import NormalTables from "../../tables/containers/NormalTables"
import LoanRangeTables from "../../tables/containers/LoanRangeTables";
import Msg from "../../../components/i18n/Msg"
import {suburllistgraph, suburllisttopfive, suburllistrangesize, keyset, auth} from "../../../config/baseUrl";
import {headers} from "../../../config/ConfigParam";

export var bulan="";
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listitemstopfive:[],
      listreangeamount:[],
      listallitems:[],
      listallitemsrejected:[],
      listallitemsapproved:[],
      listgraph:[],
      datagraphdonuts:{
          jmlapplied:3,
          jmlpending:9,
          jmlapprove:12
      },
        datagraph:{
            listgraph:[],
            datagraphdonuts:{}
        }
    }
  }


  getStats() {
    return {
      time: '1 Month'
      }
  }

    componentWillMount() {

    }
  componentDidMount() {
      // const session = localStorage.getItem(keyset);
      // if(session){
      //     var params = {
      //         loanProductId: "",
      //         loanDescription: "", loanName: ""
      //     };
      //     this.setState({listitemstopfive: params});
      //     params = {
      //         loanID: "",
      //         loanname: "", loandesc: "", amount: 0, appall: 0, appapprove: 0, appunderwriting: 0
      //     };
      //     this.setState({listreangeamount: params});

      //     var url = suburllistgraph;
      //     const otherPram = {
      //         method: "GET",
      //         headers: headers
      //     }

      //     fetch(url, otherPram)
      //         .then(response => response.json())
      //         .then(json => {
      //             var value = this.state.datagraph;
      //             value.datagraphdonuts = json.data.donuts
      //             value.listgraph = json.data.graph;
      //             // value.jmlapplied = json.data.donuts.jmlapplied
      //             // value.jmlapprove = json.data.donuts.jmlapprove
      //             // value.jmlpending = json.data.donuts.jmlpending
      //             this.setState(value);
      //             // alert("json.data.donuts.jmlapplied : "+json.data.donuts.jmlapplied)
      //             // console.log("json.data.donuts : "+JSON.stringify(json.data.graph))
      //             // this.setState({listgraph: json.data.graph}) //, {datagraphdonuts: json.data.donuts})
      //             // alert("json.data.donuts.jmlapplied : "+json.data.donuts.jmlapplied)
                  
      //             // this.setState({datagraphdonuts: json.data.donuts})
      //         })

      //     // this.props.fetchToken();
      // }else{
      //     window.location.href = "/#/login";
      // }
  }
  onChangeTimespan = (e) => {
    var str = e.target.value;
    bulan = str;
    if(str == "0"){
      var params = { loanProductId:"",
        loanDescription:"",loanName:""};
      this.setState({listitemstopfive: params});
      params = { loanID:"",
        loanname:"",loandesc:"",amount:0,appall:0,appapprove:0,appunderwriting:0};
      this.setState({listreangeamount: params});
    }else {
      var params =
          {
            "bulan": str,
          }
      var url = suburllisttopfive;
      var otherPram = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(params)
      }
      fetch(url, otherPram)
          .then(response => response.json())
          .then(json =>
              this.setState({listitemstopfive: json.data}),
          )
      url = suburllistrangesize;
      fetch(url, otherPram)
          .then(response => response.json())
          .then(json =>
              this.setState({listreangeamount: json.data}),
          )
    }
  }
  render() {
    // const time = this.getStats()
    // var doughnutchart = {"labels":["Red","Blue","Yellow"],"datasets":[{"data":[this.state.datagraphdonuts.jmlapplied,this.state.datagraphdonuts.jmlapprove,this.state.datagraphdonuts.jmlpending],"backgroundColor":["#FF6384","#36A2EB","#FFCE56"],"hoverBackgroundColor":["#FF6384","#36A2EB","#FFCE56"]}]}
    return (
      <div id="content">
        
        <div className="row">
          <div className="well well-sm bg-color-darken txt-color-white text-center">
            {/* <BigBreadcrumbs items={['Dashboard']}
            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>  */}
            <h1>
              <Msg phrase="Dashboard"
              className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/> 
            </h1> 
          </div> 
        </div>

        {/* <WidgetGrid> */}
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-3">
              <div className="well well-sm bg-color-darken txt-color-white text-center">
                <h5>
                  <Msg phrase="Timespan"/>
                </h5> 
                <select className="form-control" onChange={this.onChangeTimespan.bind(this)} name="Time">
                  <option value="0"><Msg phrase="Select Month"/></option>
                  <option value="1"><Msg phrase="1 Month"/></option>
                  <option value="2"><Msg phrase="2 Month"/></option>
                  <option value="3"><Msg phrase="3 Month"/></option>
                  <option value="6"><Msg phrase="6 Month"/></option>
                  <option value="12"><Msg phrase="12 Month"/></option>
                  <option value="24"><Msg phrase="24 Month"/></option>
                </select>
              </div>
          </div>
          <Stats
              list={this.state.listreangeamount}
          />
        </div>

          <div className="row">
             <article className="col-xs-12 col-sm-12 col-md-12 col-lg-9">
              <h4><Msg phrase="Bot Progress"/></h4>  
              {/* <LiveFeeds /> */}
              <MorrisCharts
                  listgraph={this.state.datagraph.listgraph}
              />

            </article>
            <article className="col-xs-12 col-sm-12 col-md-12 col-lg-3">
              <h4><Msg phrase="Channel Usage"/></h4> 
              <ChartJs
                  datagraphdonuts={this.state.datagraph.datagraphdonuts}
              />
              {/* <BirdEyeWidget /> */}
            </article>
          </div>


          <div className="row"> 

            <article className="col-sm-12 col-md-6 col-lg-6">
              {/* <ChatWidget />
              <FullCalendarWidget />  */}
              <NormalTables
                  list={this.state.listitemstopfive}
                title="Top 5 Loan Product"
              />

            </article>

            <article className="col-sm-12 col-md-12 col-lg-6"> 
               {/* <BirdEyeWidget />  
              <TodoWidget /> */}
              <LoanRangeTables
                  list={this.state.listreangeamount}
                title="Top Loan Range Size"
              />
            </article>
          </div>

        {/* </WidgetGrid> */}

      </div>
    )
  }
 
}

const mapStateToProps = state => ({
  auth: state.auth
})

const mapActionToDispatch = {
  fetchToken: apiFetch
}

export default connect(mapStateToProps, mapActionToDispatch)(Dashboard)