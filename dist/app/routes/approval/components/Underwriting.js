import React, {Component} from 'react';
import './MenuTabs.css';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {suburllistrules, suburlupdatestatus, suburllistunderwritingpage, keyset} from "../../../config/baseUrl";
import {
    sizefont,
    Speedometerwidth,
    Speedometerheight,
    ColumnSpeedometerwidth,
    ColumnSpeedometerheight,
    headers
} from "../../../config/ConfigParam";

const datdata = require('../../../../assets/api/tables/datatables.datdata.json');

//install speedometer -> npm install --save react-d3-speedometer

import {WidgetGrid, JarvisWidget}  from '../../../components'
import ReactSpeedometer from "react-d3-speedometer"
import {Tab, Tabs} from "react-bootstrap";
import {listpurposeofloan} from "../../forms/components/wizards/step/Loan";
import {listlocation, variabelownershipstatus} from "../../forms/components/wizards/step/Address";
import division from "../../../components/forms/commons/division";
import {listbusinessline, listposition} from "../../forms/components/wizards/step/Business";
import {listtypeincome} from "../../forms/components/wizards/step/Financial";
import {listacctype} from "../../forms/components/wizards/step/Bank";
import {listtypecollateral} from "../../../components/forms/commons/FieldCollateral";
import {listtypeofestate} from "../../forms/components/wizards/CollateralRealEstate";
import {listmodelvehichle, vehicle} from "../../forms/components/wizards/ListData/ListModelVehicle";
import {donwloadfile} from "./AllTable2";
import LanguageStore from "../../../components/i18n/LanguageStore";
import Msg from "../../../components/i18n/Msg";
import {info} from "../../auth/containers/Login";
import {DecrypsCode} from "../../../config/Encrypt";

var applicationid = '';
function handleclickApprove(){
    if(window.confirm('do you want to approve it ?')) {
        var params = {
            appid: applicationid,
            status: "A",
            userid:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
        }
        var url = suburlupdatestatus;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            })
            .then(response => response.json())
            .then(respon => {
                if(respon.message == ""){
                    location.reload();
                }else {
                    alert(respon.message)
                }

                // window.location.href = "#/approval-process/";
            })
        var value = this.state.listitems;
    }
    // location.reload();
}
function handleclickRejected(){
    if(window.confirm('do you want to reject it ?')) {
        var params = {
            appid: applicationid,
            status: "R",
            userid:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
        }
        var url = suburlupdatestatus;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            })
            .then(response => response.json())
            .then(respon => {
                if(respon.message == ""){
                    location.reload();
                }else {
                    alert(respon.message)
                }
            })
        var value = this.state.listitems;
    }
    // location.reload();
}
function priceFormatter(cell, row) {
    var price = cell;
    price = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return "Rp "+price;
}
class Underwriting extends Component{
    constructor(props) {
      super(props);
        this.state = {
            listitems:[],
            page:{
                atpage:1,
                sizePerPage:10
            }
        }
    }

    componentDidMount() {
        this.setState({
            listitems: this.props.listunderwriting
        })
    }

    isExpandableRow(row) {
      // if (row.id < 225) return true;
      // else
          return true;
    }

    onRowClick(row) {
        // ...
        // applicationid = row.id;
        // console.log("Aprove "+row.id);
    }

    onRowMouseOver(row) {
        // ...
        applicationid = row.id;
        console.log("onRowMouseOver "+row.id);
    }
    expandColumnComponent({ isExpandableRow, isExpanded }) {
        let content = '';

        if (isExpandableRow) {
            content = (isExpanded ? '(-)' : '(+)' );
        } else {
            content = ' ';
        }
        return (
            <div> { content } </div>
        );
    }
    onPageChange = (page, sizePerPage) => {

        var url = suburllistunderwritingpage+`?page=`+page+`&sizeperpage=`+sizePerPage+` `;
        fetch(url,
            {
                method: 'GET',
                headers: {
                    // Authorization: 'Bearer '+localStorage.getItem('token')
                    'content-type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listitems: appList.data
                })
            })
        var valuepage = this.state.page
        valuepage.atpage = page;
        valuepage.sizePerPage = sizePerPage;
        this.setState(valuepage);
    }
    expandComponent(row) {
        var loanproductname = '';
        if(row.apploanentity.loanproduct != null){
            loanproductname = row.apploanentity.loanproduct.loanName;
        }
        var namepurposeofloan = '';
        var filterpurpose = listpurposeofloan.filter( (item) => {
            return item.id == row.apploanentity.purposeofloan
        })
        filterpurpose.map(function (item) {
            namepurposeofloan = item.name;
        })
        var Gender = 'Female';
        if(row.apppersonelentity.gender == "M"){
            Gender = 'Male';
        }
        //row.appaddressentity.secondownershipstatus
        var nameownershipstatus = '';
        var nameownershipstatussecond = '';
        var filtervariabelownershipstatus = variabelownershipstatus.filter( (item) => {
            return item.id == row.appaddressentity.ownershipstatus
        })
        filtervariabelownershipstatus.map(function (item) {
            nameownershipstatus = item.name;
        })
        var filtervariabelownershipstatussec = variabelownershipstatus.filter( (item) => {
            return item.id == row.appaddressentity.secondownershipstatus
        })
        filtervariabelownershipstatussec.map(function (item) {
            nameownershipstatussecond = item.name;
        })
        var usedforcollateral = 'No'
        var usedforcollateralsecond = 'No'
        if(row.appaddressentity.usedforcollateral == 'Y'){
            usedforcollateral = 'Yes'
        }
        if(row.appaddressentity.secondusedforcollateral == 'Y'){
            usedforcollateralsecond = 'Yes'
        }
        var addressmainprovincename = '';
        var addressmainvillagesname = '';
        var addressmaincityname = '';
        var addressmainkecamatanname = '';
        var addresssecondprovincename = '';
        var addresssecondcityname = '';
        var addresssecondkecamatanname = '';

        if(row.appaddressentity.subdistrictmain != null){
            addressmainvillagesname = row.appaddressentity.subdistrictmain.namesubdistrict;
        }
        if(row.appaddressentity.provincemain != null){
            addressmainprovincename = row.appaddressentity.provincemain.locationName;
        }
        if(row.appaddressentity.regenciesmain != null){
            addressmaincityname = row.appaddressentity.regenciesmain.nameregencies;
        }
        if(row.appaddressentity.districtmain != null){
            addressmainkecamatanname = row.appaddressentity.districtmain.namedistrict;
        }
        if(row.appaddressentity.provincesecond != null){
            addresssecondprovincename = row.appaddressentity.provincesecond.locationName;
        }
        if(row.appaddressentity.regenciessecond != null){
            addresssecondcityname = row.appaddressentity.regenciessecond.nameregencies;
        }
        if(row.appaddressentity.districtsecond != null){
            addresssecondkecamatanname = row.appaddressentity.districtsecond.namedistrict;
        }
        var businessprovincename = '';
        var businesscityname = '';
        var businessdistrictname = '';
        var businesslinename = '';
        var businesspositionname = '';
        var divisionname = '';
        var filterdivision = division.filter( (item) => {
            return item.key == row.appbusinessentity.division
        })
        filterdivision.map(function (item) {
            divisionname = item.value;
        })

        var filterlistbusinessline = listbusinessline.filter( (item) => {
            return item.id == row.appbusinessentity.businessline
        })
        filterlistbusinessline.map(function (item) {
            businesslinename = item.name;
        })
        var filterlistposition = listposition.filter( (item) => {
            return item.id == row.appbusinessentity.position
        })
        filterlistposition.map(function (item) {
            businesspositionname = item.name;
        })
        if(row.appbusinessentity.province != null){
            businessprovincename = row.appbusinessentity.province.locationName;
        }
        if(row.appbusinessentity.regencies != null){
            businesscityname = row.appbusinessentity.regencies.nameregencies;
        }
        if(row.appbusinessentity.regencies != null){
            businessdistrictname = row.appbusinessentity.district.namedistrict;
        }

        var typeincomename = '';
        var filterlisttypeincome = listtypeincome.filter( (item) => {
            return item.id == row.appfinancialentity.typeincome
        })
        filterlisttypeincome.map(function (item) {
            typeincomename = item.name;
        })
        var bankname = '';
        var acctypename = '';
        if(row.appbankentity.bank != null){
            bankname = row.appbankentity.bank.bankName;
        }
        var filterlistacctype = listacctype.filter( (item) => {
            return item.id == row.appbankentity.accounttype
        })
        filterlistacctype.map(function (item) {
            acctypename = item.name;
        })
        var listcollateral = [];
        var value = ['','','','','','','','','','',''];
        var collateralname = '';
        if(row.appcollateralentity != null) {
            collateralname = row.appcollateralentity.collateral;
            if (row.appcollateralentity.collateral == 'RealEstate') {
                listcollateral = listtypecollateral[0];
                var listcolrealestate = row.listdoc.filter( (item) => {
                    return item.documentfor == 'colrealestate'
                })
                if(row.appcollateralreentity != null){
                    value = [];
                    var typerealestatename = '';
                    var reprovincename = '';
                    var recityname = '';
                    var redistrictname = '';
                    if(row.appcollateralreentity.province != null){
                        reprovincename = row.appcollateralreentity.province.locationName;
                    }
                    if(row.appcollateralreentity.regencies != null){
                        recityname = row.appcollateralreentity.regencies.nameregencies;
                    }
                    if(row.appcollateralreentity.district != null){
                        redistrictname = row.appcollateralreentity.district.namedistrict;
                    }
                    var filterlisttypeofestate = listtypeofestate.filter( (item) => {
                        return item.id == row.appcollateralreentity.typerealestate
                    })
                    filterlisttypeofestate.map(function (item) {
                        typerealestatename = item.name;
                    })
                    value[0] = typerealestatename;
                    value[1] = row.appcollateralreentity.condition;
                    value[2] = row.appcollateralreentity.year;
                    value[3] = row.appcollateralreentity.rooms;
                    value[4] = row.appcollateralreentity.address;
                    value[5] = reprovincename;
                    value[6] = recityname;
                    value[7] = redistrictname;
                    value[8] = row.appcollateralreentity.size;
                    value[9] = row.appcollateralreentity.proofofownership;
                    value[10] = listcolrealestate;
                }
            } else if (row.appcollateralentity.collateral == 'Vehicle') {
                listcollateral = listtypecollateral[1];
                var listcolvehicle = row.listdoc.filter( (item) => {
                    return item.documentfor == 'colvehicle'
                })
                if(row.appcollateralvehicleentity != null){
                    var brandname = '';
                    var modelname = '';
                    var filtervehicle = vehicle.filter( (item) => {
                        return item.jenis == row.appcollateralvehicleentity.typevehicle && item.value == row.appcollateralvehicleentity.brand
                    })
                    filtervehicle.map(function (item) {
                        brandname = item.brand;
                    })
                    var filterlistmodelvehichle = listmodelvehichle.filter( (item) => {
                        return item.value == row.appcollateralvehicleentity.model
                    })
                    filterlistmodelvehichle.map(function (item) {
                        modelname = item.name;
                    })
                    var typetrasnmision = 'Auto Transmision';
                    if(row.appcollateralvehicleentity.typetransmision == 'MT'){
                        typetrasnmision = 'Manual Transmision';
                    }
                    value = [];
                    value[0] = row.appcollateralvehicleentity.typevehicle;
                    value[1] = brandname;
                    value[2] = modelname;
                    value[3] = typetrasnmision;
                    value[4] = row.appcollateralvehicleentity.year;
                    value[5] = row.appcollateralvehicleentity.mileage;
                    value[6] =listcolvehicle;
                }
            } else if (row.appcollateralentity.collateral == 'Deposit') {
                listcollateral = listtypecollateral[2];
                var listcolbank = row.listdoc.filter( (item) => {
                    return item.documentfor == 'colbank'
                })
                if(row.appcollateraldepositentity != null){
                    value = [];
                    var bankname = '';
                    if(row.appcollateraldepositentity.bank != null){
                        bankname = row.appcollateraldepositentity.bank.bankName;
                    }
                    value[0] = bankname;
                    value[1] = "Rp "+row.appcollateraldepositentity.amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
                    value[2] = row.appcollateraldepositentity.currency;
                    value[3] = row.appcollateraldepositentity.accountnumber;
                    value[4] = row.appcollateraldepositentity.duedate;
                    value[5] = listcolbank;
                }
            }
        }
        var sytemdecision = "";
        if(row.appentity.risklevel.status == "A"){
            sytemdecision = "Approved";
        }else if(row.appentity.risklevel.status == "R"){
            sytemdecision = "Reject";
        }else if(row.appentity.risklevel.status == "U"){
            sytemdecision = "UnderWriting";
        }
        var location = "";
        var filterlistlocation = listlocation.filter( (item) => {
            return item.id == row.appaddressentity.location
        })
        filterlistlocation.map(function (item) {
            location = item.name;
        })
        var description = '';
        if (typeof row.appentity.documentapp !== "undefined" && row.appentity.documentapp != null){
            description = row.appentity.documentapp.description
        }
        var listappdoc = row.listdoc.filter( (item) => {
            return item.documentfor == 'appdocument'
        })
        var scoregender = 0;
        var maxscoregender = 0;
        var scoreage = 0;
        var maxage = 0;
        var scorecompanysize = 0;
        var maxcompanysize = 0;
        var scorecreditcardowner = 0;
        var maxcreditcardowner = 0;
        var scoredebtincomeratio = 0;
        var maxdebtincomeratio = 0;
        var scoredurationwork = 0;
        var maxdurationwork = 0;
        var scoreeducation = 0;
        var maxeducation = 0;
        var scoreincometype = 0;
        var maxincometype = 0;
        var scoreindustrysector = 0;
        var maxindustrysector = 0;
        var scorejobtittle = 0;
        var maxjobtittle = 0;
        var scoreliveownershipstatus = 0;
        var maxliveownershipstatus = 0;
        var scorelocation = 0;
        var maxlocation = 0;
        var scoremaritalstatus = 0;
        var maxmaritalstatus = 0;
        var scorenumberofdependant = 0;
        var maxnumberofdependant = 0;
        var scorepositions = 0;
        var maxpositions = 0;
        var scorepropertypossession = 0;
        var maxpropertypossession = 0;
        var scorevehicleowner = 0;
        var maxvehicleowner = 0;
        if(row.appscore !== null){
            scoregender = row.appscore.gender;
            scoreage = row.appscore.age;
            scorecompanysize = row.appscore.companysize;
            scorecreditcardowner = row.appscore.creditcardowner;
            scoredebtincomeratio = row.appscore.debtincomeratio;
            scoredurationwork = row.appscore.durationwork;
            scoreeducation = row.appscore.education;
            scoreincometype = row.appscore.incometype;
            scoreindustrysector = row.appscore.industrysector;
            scorejobtittle = row.appscore.jobtittle;
            scoreliveownershipstatus = row.appscore.liveownershipstatus;
            scorelocation = row.appscore.location;
            scoremaritalstatus = row.appscore.maritalstatus;
            scorenumberofdependant = row.appscore.numberofdependant;
            scorepositions = row.appscore.position;
            scorepropertypossession = row.appscore.propertypossession;
            scorevehicleowner = row.appscore.vehicleowner;
            //vehicleowner
            var filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'gender'
            })
            filterscore.map(function (item) {
                maxscoregender = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'vehicleowner'
            })
            filterscore.map(function (item) {
                maxvehicleowner = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'propertypossession'
            })
            filterscore.map(function (item) {
                maxpropertypossession = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'positions'
            })
            filterscore.map(function (item) {
                maxpositions = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'numberofdependant'
            })
            filterscore.map(function (item) {
                maxnumberofdependant = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'maritalstatus'
            })
            filterscore.map(function (item) {
                maxmaritalstatus = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'location'
            })
            filterscore.map(function (item) {
                maxlocation = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'liveownershipstatus'
            })
            filterscore.map(function (item) {
                maxliveownershipstatus = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'jobtittle'
            })
            filterscore.map(function (item) {
                maxjobtittle = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'industrysector'
            })
            filterscore.map(function (item) {
                maxindustrysector = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'age'
            })
            filterscore.map(function (item) {
                maxage = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'companysize'
            })
            filterscore.map(function (item) {
                maxcompanysize = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'creditcardowner'
            })
            filterscore.map(function (item) {
                maxcreditcardowner = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'debtincomeratio'
            })
            filterscore.map(function (item) {
                maxdebtincomeratio = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'durationwork'
            })
            filterscore.map(function (item) {
                maxdurationwork = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'education'
            })
            filterscore.map(function (item) {
                maxeducation = item.maxscore;
            })
            filterscore = row.listscoremax.filter( (item) => {
                return item.groups == 'incometype'
            })
            filterscore.map(function (item) {
                maxincometype = item.maxscore;
            })
        }

      return (

          <div>
              <Tabs defaultActiveKey="riskscoring" id="uncontrolled-tab-example"  className="lineblu">
                  <Tab eventKey="riskscoring" title={LanguageStore.translate('Risk Scoring')}>
                    <div className="sameline">
                     <div className="a50">
                         <h1><b>{LanguageStore.translate('Scoring Results')}</b></h1>
                         {/*<b>Score:</b> {row.speedscore}<br/>*/}
                         <b>{LanguageStore.translate('Score')}:</b> {row.appentity.score}<br/>
                         <b>{LanguageStore.translate('Risk Level')}:</b> {row.appentity.risklevel.namerisk}   <br/>
                         <b>{LanguageStore.translate('System Decision')}:</b> {sytemdecision}   <br/>
                         <b>{LanguageStore.translate('Odds')}:</b> {row.appentity.risklevel.odds}   <br/>
                         <b>{LanguageStore.translate('Probability of Default')}:</b> {row.appentity.risklevel.probabilityofdefault}%   <br/>
                         <h1><b>{LanguageStore.translate('Decision Comments')}</b></h1>
                         <b>{LanguageStore.translate('Scorecard Comments')}:</b> {row.appentity.scorecardcomments}    <br/>
                         <b>{LanguageStore.translate('Rule Engine Comments')}:</b> {row.appentity.ruleenginecomments}    <br/>
                         <div hidden={JSON.parse(DecrypsCode(localStorage.getItem(keyset))).isapproval == 'N'}>
                            <button type="button" className="btn btn-labeled btn-success" onClick={handleclickApprove}> <span className="btn-label"><i className="glyphicon glyphicon-ok"></i></span>{LanguageStore.translate('Approved')} </button>
                             &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                             <button type="button" className="btn btn-labeled btn-danger" onClick={handleclickRejected}>   <span className="btn-label"><i className="glyphicon glyphicon-remove"></i></span>{LanguageStore.translate('Reject')}</button>
                         </div>
                     </div>
                     {/* <div> &nbsp;  &nbsp;  &nbsp; </div> */}
                     {/*<div className="a51">*/}
                        {/*<ReactSpeedometer*/}
                            {/*needleHeightRatio={0.7}*/}
                            {/*maxSegmentLabels={5} //label penomoran angka*/}
                            {/*segments={10} //label warna*/}
                            {/*segmentColors={["red", "red", "red", "yellow", "yellow", "green", "blue", "blue", "blue", "blue"]}*/}
                            {/*value={row.appentity.score}*/}
                            {/*needleTransitionDuration={4000}*/}
                            {/*needleTransition="easeElastic"*/}
                            {/*width={250} height={250}*/}
                        {/*/>*/}
                    {/*</div>*/}

                 </div>
                  </Tab>
                  <Tab eventKey="detailscoring" title={LanguageStore.translate('Detail Scoring')}>
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td style={{ fontSize:sizefont}}>{LanguageStore.translate('Summary')}</td><td>
                              <div>
                                  <ReactSpeedometer
                                      needleHeightRatio={0.7}
                                      maxSegmentLabels={5} //label penomoran angka
                                      segments={10} //label warna
                                      segmentColors={["red", "red", "red", "yellow", "yellow", "green", "blue", "blue", "blue", "blue"]}
                                      value={row.appentity.score}
                                      needleTransitionDuration={4000}
                                      needleTransition="easeElastic"
                                      width={Speedometerwidth} height={Speedometerheight}
                                  />
                              </div>
                          </td></tr>
                          <tr>
                              <td style={{ fontSize:sizefont}}>{LanguageStore.translate('Personal')}</td>
                              <td>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Age')} </td> <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                      <div>
                                          <ReactSpeedometer
                                              needleHeightRatio={0.8}
                                              maxSegmentLabels={3} //label penomoran angka
                                              segments={10} //label warna
                                              segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                              value={scoreage}
                                              needleTransitionDuration={4000}
                                              needleTransition="easeElastic"
                                              width={Speedometerwidth} height={Speedometerheight}
                                              minValue={0} maxValue={maxage}
                                          />
                                      </div>
                                  </td></tr>
                                  <tr> <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>{LanguageStore.translate('Education')}</td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoreeducation}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxeducation}
                                              />
                                          </div>

                                      </td>
                                  </tr>
                                  <tr> <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>{LanguageStore.translate('Gender')}</td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoregender}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxscoregender}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr> <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>{LanguageStore.translate('Marital Status')}</td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoremaritalstatus}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxmaritalstatus}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr> <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>{LanguageStore.translate('Number Of Dependant')}</td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorenumberofdependant}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxnumberofdependant}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                              </td>
                          </tr>


                          <tr>
                              <td style={{ fontSize:sizefont}}>{LanguageStore.translate('Address')}</td>
                              <td>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Location')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorelocation}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxlocation}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Live Ownership Status')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoreliveownershipstatus}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxliveownershipstatus}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Property Of Posession')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorepropertypossession}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxpropertypossession}
                                              />
                                          </div>
                                      </td>
                                  </tr>

                              </td>
                          </tr>

                          <tr>
                              <td style={{ fontSize:sizefont}}>{LanguageStore.translate('Business')}</td>
                              <td>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Duration Work')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoredurationwork}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxdurationwork}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Industry Sector')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoreindustrysector}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxindustrysector}
                                              />
                                          </div>
                                      </td>
                                  </tr>

                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Job Title')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorejobtittle}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxjobtittle}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Position')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorepositions}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxpositions}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Company Size')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorecompanysize}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxcompanysize}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                              </td>
                          </tr>


                          <tr>
                              <td style={{ fontSize:sizefont}}>{LanguageStore.translate('Financial')}</td>
                              <td>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Debt Income Ratio')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoredebtincomeratio}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxdebtincomeratio}
                                              />
                                          </div>
                                      </td>
                                  </tr>

                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Income Type')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scoreincometype}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxincometype}
                                              />
                                          </div>
                                      </td>
                                  </tr>

                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Vehicle Owner')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorevehicleowner}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxvehicleowner}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                              </td>
                          </tr>

                          <tr>
                              <td style={{ fontSize:sizefont}}>{LanguageStore.translate('Bank')}</td>
                              <td>
                                  <tr > <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}> {LanguageStore.translate('Card Credit Owner')} </td>
                                      <td style={{ backgroundColor:"#a9a9a963",fontSize:sizefont}}>
                                          <div>
                                              <ReactSpeedometer
                                                  needleHeightRatio={0.7}
                                                  maxSegmentLabels={3} //label penomoran angka
                                                  segments={10} //label warna
                                                  segmentColors={["red", "red", "yellow", "yellow", "green", "green","blue","blue"]}
                                                  value={scorecreditcardowner}
                                                  needleTransitionDuration={4000}
                                                  needleTransition="easeElastic"
                                                  width={Speedometerwidth} height={Speedometerheight}
                                                  minValue={0} maxValue={maxcreditcardowner}
                                              />
                                          </div>
                                      </td>
                                  </tr>
                              </td>
                          </tr>
                      </table>
                  </Tab>
                  <Tab eventKey="loan" title={LanguageStore.translate('Loan')}>
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>

                          <tr><td>{LanguageStore.translate('Loan Product')}</td><td>{loanproductname}</td></tr>
                          <tr><td>{LanguageStore.translate('Loan Amount')}</td><td>Rp {row.apploanentity.amount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</td></tr>
                          <tr><td>{LanguageStore.translate('Purpose of Loan')}</td><td>{LanguageStore.translate(namepurposeofloan)}</td></tr>
                          <tr><td>{LanguageStore.translate('Tenor')}</td><td>{row.apploanentity.tenor}</td></tr>
                      </table>
                  </Tab>
                  <Tab eventKey="personal" title={LanguageStore.translate('Personal')}>
                      {/* <Personal /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Complete Name')}</td><td>{row.apppersonelentity.name}</td></tr>
                          <tr><td>{LanguageStore.translate('Mobile Phone')}</td><td>{row.apppersonelentity.mobilephone}</td></tr>
                          <tr><td>{LanguageStore.translate('Landline')}</td><td>{row.apppersonelentity.landlinephone}</td></tr>
                          <tr><td>{LanguageStore.translate('ID Type')}</td><td>{row.apppersonelentity.typeid}</td></tr>
                          <tr><td>{LanguageStore.translate('ID Number')}</td><td>{row.apppersonelentity.idnumber}</td></tr>
                          <tr><td>{LanguageStore.translate('Place of Birth')}</td><td>{row.apppersonelentity.idnumber}</td></tr>
                          <tr><td>{LanguageStore.translate('Date of Birth')}</td><td>{row.apppersonelentity.datebirth}</td></tr>
                          <tr><td>{LanguageStore.translate('Gender')}</td><td>{LanguageStore.translate(Gender)}</td></tr>
                          <tr><td>{LanguageStore.translate('Education')}</td><td>{row.apppersonelentity.education}</td></tr>
                          <tr><td>{LanguageStore.translate('Marital Status')}</td><td>{LanguageStore.translate(row.apppersonelentity.maritalstatus)}</td></tr>
                          <tr><td>{LanguageStore.translate('Email Address')}</td><td>{row.apppersonelentity.email}</td></tr>
                      </table>
                  </Tab>
                  <Tab eventKey="mainaddress" title={LanguageStore.translate('Main Address')}>
                      {/* <Mainaddress /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Current Address')}</td><td>{row.appaddressentity.mainaddress}</td></tr>
                          <tr><td>{LanguageStore.translate('Province')}</td><td>{addressmainprovincename}</td></tr>
                          <tr><td>{LanguageStore.translate('City')}</td><td>{addressmaincityname}</td></tr>
                          <tr><td>{LanguageStore.translate('District')}</td><td>{addressmainkecamatanname}</td></tr>
                          <tr><td>{LanguageStore.translate('Villages')}</td><td>{addressmainvillagesname}</td></tr>
                          <tr><td>{LanguageStore.translate('RT')}</td><td>{row.appaddressentity.rt}</td></tr>
                          <tr><td>{LanguageStore.translate('RW')}</td><td>{row.appaddressentity.rw}</td></tr>
                          <tr><td>{LanguageStore.translate('Postal')}</td><td>{row.appaddressentity.postalcode}</td></tr>
                          <tr><td>{LanguageStore.translate('Ownership Status')}</td><td>{LanguageStore.translate(nameownershipstatus)}</td></tr>
                          <tr><td>{LanguageStore.translate('Location')}</td><td>{location}</td></tr>
                          <tr><td>{LanguageStore.translate('Has been used as collateral elsewhere')} ?</td><td>{LanguageStore.translate(usedforcollateral)}</td></tr>
                          {/*<tr><td>Until</td><td>{'temp'}</td></tr>*/}
                          <tr><td>{LanguageStore.translate('Has lived in address since year')}</td><td>{row.appaddressentity.liveinaddress}</td></tr>
                      </table>
                  </Tab>
                  <Tab eventKey="additionaladdress" title={LanguageStore.translate('Additional Address')}>
                      {/* <Additionaladdress /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Address')}</td><td>{row.appaddressentity.secondaddress}</td></tr>
                          <tr><td>{LanguageStore.translate('Province')}</td><td>{addresssecondprovincename}</td></tr>
                          <tr><td>{LanguageStore.translate('City')}</td><td>{addresssecondcityname}</td></tr>
                          <tr><td>{LanguageStore.translate('District')}</td><td>{addresssecondkecamatanname}</td></tr>
                          <tr><td>{LanguageStore.translate('Postal')}</td><td>{row.appaddressentity.secondpostalcode}</td></tr>
                          <tr><td>{LanguageStore.translate('Ownership Status')}</td><td>{LanguageStore.translate(nameownershipstatussecond)}</td></tr>
                          <tr><td>{LanguageStore.translate('Has been used as collateral elsewhere')} ?</td><td>{LanguageStore.translate(usedforcollateralsecond)}</td></tr>
                          {/*<tr><td>Until</td><td>{'temp'}</td></tr>*/}
                          {/*<tr><td>Has lived in address since year</td><td>{row.appaddressentity.secondusedforcollateral}</td></tr>*/}
                      </table>
                  </Tab>
                  <Tab eventKey="family" title="Family">
                      {/* <Family /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Emergency Contact Name')}</td><td>{row.appfamilyentity.contactemergency}</td></tr>
                          <tr><td>{LanguageStore.translate('Address')}</td><td>{row.appfamilyentity.addressemergencycontact}</td></tr>
                          <tr><td>{LanguageStore.translate('Mobile Phone')}</td><td>{row.appfamilyentity.mobileemergency}</td></tr>
                          {/*<tr><td>Place of Birth</td><td>{'temp'}</td></tr>*/}
                          {/*<tr><td>Date of Birth</td><td>{'temp'}</td></tr>*/}
                          {/*<tr><td>ID (KTP)</td><td>{'temp'}</td></tr>*/}
                          {/*<tr><td>Number of Children</td><td>{'temp'}</td></tr>*/}
                          {/*<tr><td>Spouse Name</td><td>{'temp'}</td></tr>*/}

                      </table>
                  </Tab>
                  <Tab eventKey="business" title={LanguageStore.translate('Business')}>
                      {/* <Business /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Company')}</td><td>{row.appbusinessentity.companyname}</td></tr>
                          <tr><td>{LanguageStore.translate('Address')}</td><td>{row.appbusinessentity.companyaddress}</td></tr>
                          <tr><td>{LanguageStore.translate('Province')}</td><td>{businessprovincename}</td></tr>
                          <tr><td>{LanguageStore.translate('City')}</td><td>{businesscityname}</td></tr>
                          <tr><td>{LanguageStore.translate('District')}</td><td>{businessdistrictname}</td></tr>
                          <tr><td>{LanguageStore.translate('Division')}</td><td>{divisionname}</td></tr>
                          <tr><td>{LanguageStore.translate('Duration')}</td><td>{row.appbusinessentity.duration}</td></tr>
                          <tr><td>{LanguageStore.translate('Number Of Employee')}</td><td>{row.appbusinessentity.numberofemployees}</td></tr>
                      </table>
                  </Tab>
                  <Tab eventKey="financial" title={LanguageStore.translate('Financial')}>
                      {/* <Financial /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Income Type')}</td><td>{typeincomename}</td></tr>
                          <tr><td>{LanguageStore.translate('Main Income')}</td><td>Rp {row.appfinancialentity.mainincome.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</td></tr>
                          <tr><td>{LanguageStore.translate('Side Income')}</td><td>Rp {row.appfinancialentity.sideincome.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</td></tr>
                          <tr><td>{LanguageStore.translate('Expense')}</td><td>Rp {row.appfinancialentity.expense.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</td></tr>
                          <tr><td>{LanguageStore.translate('Additional Expense')}</td><td>Rp {row.appfinancialentity.additionalexpense.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")}</td></tr>
                          <tr><td>{LanguageStore.translate('Vehicle Owner')}</td><td>{row.appfinancialentity.vehicleowner=='Y'?LanguageStore.translate('Yes'):LanguageStore.translate('No')}</td></tr>
                          <tr><td>{LanguageStore.translate('Type Vehicle')}</td><td>{LanguageStore.translate(row.appfinancialentity.typevehicle)}</td></tr>
                      </table>
                  </Tab>
                  <Tab eventKey="bank" title="Bank">
                      {/* <Bank /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>Bank</td><td>{bankname}</td></tr>
                          <tr><td>{LanguageStore.translate('Account Type')}</td><td>{acctypename}</td></tr>
                          <tr><td>{LanguageStore.translate('Account Number')}</td><td>{row.appbankentity.accountnumber}</td></tr>
                          <tr><td>{LanguageStore.translate('Credit Card')} ?</td><td>{row.appbankentity.iscreditcard == 'Y' ?'Yes':'No'}</td></tr>
                          <tr><td>Bank {LanguageStore.translate('Credit Card')} </td><td>{row.appbankentity.bankcc}</td></tr>
                          <tr><td>{LanguageStore.translate('Credit Card Number')}</td><td>{row.appbankentity.numbercc}</td></tr>
                      </table>
                  </Tab>
                  <Tab eventKey="collateral" title={LanguageStore.translate('Collateral')}>
                      {/* <Collateral /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Collateral Type')}</td><td>{collateralname}</td></tr>
                          {
                              listcollateral.map(function (item) {
                                  if(item.field !== 'List File') {
                                      return (
                                          <tr>
                                              <td>{item.field}</td>
                                              <td>{value[item.index]}</td>
                                          </tr>
                                      )
                                  }else{
                                      return (
                                          <tr>
                                              <td>{item.field}</td>
                                              <td>{
                                                  value[item.index].map(function (item) {
                                                      return (
                                                          <tr><td > <div onClick={donwloadfile.bind(this,item.path,item.namefile)}>{item.namefile}</div></td></tr>
                                                      )
                                                  })
                                              }</td>
                                          </tr>
                                      )
                                  }
                              })}

                      </table>
                  </Tab>
                  <Tab eventKey="document" title="Document">
                      {/* <Document /> */}
                      <table className="sumsum">
                          <col width="50"/>
                          <col width="200"/>
                          <tr>
                              <th>Field</th><th>Value</th>
                          </tr>
                          <tr><td>{LanguageStore.translate('Description')}</td><td>{description}</td></tr>
                          <tr>
                              <td>List File</td>
                              <td>
                                  {
                                      listappdoc.map(function (item) {
                                          return (
                                              <tr><td > <div onClick={donwloadfile.bind(this,item.path,item.namefile)}>{item.namefile}</div></td></tr>
                                          )
                                      })
                                  }
                              </td>
                          </tr>
                      </table>
                  </Tab>

              </Tabs>
          </div>
      );
    }
    render(){
        const options = {
            onRowClick: this.onRowClick,
            onRowMouseOver: this.onRowMouseOver,
            expandBy: 'column' //dan tiap kolom di expandable={false} maka supaya hanya (+) biar bisa expand
          //expandRowBgColor: 'rgb(255,255,255)'
        };
        const cellEdit = {
            mode: 'click',
            blurToSave: true
        };
        return(
            <div id="content">

{/*<WidgetGrid>*/}
                    {/* row */}
                    <div className="row">
                        <article className="col-xs-14 col-sm-14 col-md-14 col-lg-14">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget className="well" editbutton={false} fullscreenbutton={false} deletebutton={false} color="yellow">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-comments"/> </span>

                                    <h2>UnderWriting </h2>
                                </header>
                                <div>
                                    <div className="widget-body no-padding">

                                    <BootstrapTable data={ this.props.listunderwriting } pagination={true} striped={true} hover={true} condensed= {true} search={true}
                                        options={ options } headerStyle={ { background: '#aaaadd' } } cellEdit={ cellEdit }
                                        expandableRow={ this.isExpandableRow } containerStyle={ { background: '#FFFFFF' } }
                                        expandComponent={ this.expandComponent }  searchPlaceholder='Search from any columns...'
                                        expandColumnOptions={ { expandColumnVisible: true } }>
                                        <TableHeaderColumn dataField='id' dataSort={true}  width='15%' dataAlign='center'  headerAlign='center' isKey={ true }
                                                           editable={ false } expandable={ false } filter={ { type: 'TextFilter', placeholder: 'Please enter a value', delay: 10 } }
                                        ><Msg phrase={'Application ID'}/></TableHeaderColumn>
                                        <TableHeaderColumn dataField='loannameproduct' dataSort={true}  width='15%' dataAlign='center'  headerAlign='center'
                                                           editable={ false } expandable={ false } filter={ { type: 'TextFilter',placeholder: 'Please enter a value', delay: 10, } }
                                        ><Msg phrase={'Loan Name'}/></TableHeaderColumn>
                                        <TableHeaderColumn dataField='fullname' dataSort={true}  width='20%' dataAlign='center'  headerAlign='center'
                                                           editable={ false } expandable={ false } filter={ { type: 'TextFilter', placeholder: 'Please enter a value', delay: 10 } }
                                        ><Msg phrase={'Customer'}/></TableHeaderColumn>
                                        <TableHeaderColumn dataField='amountloan'  dataFormat={ priceFormatter } dataSort={true} width='15%' dataAlign='right'  headerAlign='center'
                                                           editable={ false } expandable={ false } filter={ { type: 'NumberFilter', delay: 10 } }
                                        ><Msg phrase={'Loan'}/></TableHeaderColumn>
                                        <TableHeaderColumn dataField='createdateapplicationmonth' dataAlign='center'  width='19%' headerAlign='center'
                                                           editable={ false } expandable={ false } filter={ { type: 'TextFilter',placeholder: 'Please enter a value', delay: 10, } } ><Msg phrase={'Loan Created Date'}/></TableHeaderColumn>
                                        {/*<TableHeaderColumn dataField='id' dataAlign='center'  width='18%' headerAlign='center' editable={ false } expandable={ false }>Waiting Time</TableHeaderColumn>*/}
                                        <TableHeaderColumn dataField='status' dataAlign='center'  width='13%' headerAlign='center' expandable={ false }  editable={ false } /*editable={ { type: 'select', options: { values: status } } }*/>Status</TableHeaderColumn>
                                    </BootstrapTable>



                                    </div>
                                </div>
                            </JarvisWidget>
                        </article>
                    </div>
                {/*</WidgetGrid>*/}
            </div>
        );
    }
}

export default Underwriting;