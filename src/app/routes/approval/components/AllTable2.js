import React, {Component} from 'react';
import './MenuTabs.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import { Tabs, Tab } from 'react-bootstrap';
import {listprodloan} from "../../forms/components/wizards/step/Loan";
//belum sempet dipake jadi ga ngaruh
import Riskscoring from './Minitab/riskscoring'
import Loan from './Minitab/loan'
import Personal from './Minitab/personal'
import Mainaddress from './Minitab/mainaddress'
import Additionaladdress from './Minitab/additionaladdress'
import Family from './Minitab/family'
import Business from './Minitab/business'
import Financial from './Minitab/financial'
import Bank from './Minitab/bank'
import Collateral from './Minitab/collateral'
import Document from './Minitab/document'

import {WidgetGrid, JarvisWidget}  from '../../../components'
import ReactSpeedometer from "react-d3-speedometer"
import {listpurposeofloan} from "../../forms/components/wizards/step/Loan";
import {ownershipstatus,variabelownershipstatus,listlocation} from "../../forms/components/wizards/step/Address";
import {listposition,listbusinessline} from "../../forms/components/wizards/step/Business";
import division from "../../../components/forms/commons/division";
import {listtypeincome} from "../../forms/components/wizards/step/Financial";
import {listacctype} from "../../forms/components/wizards/step/Bank";
import {listtypecollateral} from "../../../components/forms/commons/FieldCollateral";
import {listtypeofestate} from "../../forms/components/wizards/CollateralRealEstate";
import {vehicle,listmodelvehichle} from "../../forms/components/wizards/ListData/ListModelVehicle";
import Msg from "../../../components/i18n/Msg";
import LanguageStore from "../../../components/i18n/LanguageStore";

var datdata = require('../../../../assets/api/tables/datatables.datdata.json');
const status = [ 'On Process', 'Underwriting', 'temp' ];
function priceFormatter(cell, row) {
    var price = cell;
    price = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return "Rp "+price;
}
export function donwloadfile(path,filename) {
    console.log("filename : "+filename)
    console.log("path : "+path)
    var params ={
        'path':path
    }
    var url = `http://localhost:8080/file/v1/download`;
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.responseType = "blob";
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.onload = function (e) {
        if (this.status === 200) {
            // `blob` response
            // console.log(this.response);
            // create `objectURL` of `this.response` : `.pdf` as `Blob`
            var file = window.URL.createObjectURL(this.response);
            var a = document.createElement("a");
            a.href = file;
            a.download = this.response.name || filename;
            document.body.appendChild(a);
            a.click();
            // remove `a` following `Save As` dialog,
            // `window` regains `focus`
            window.onfocus = function () {
                document.body.removeChild(a)
            }
        };
    };
    request.send(JSON.stringify(params));
}
class AllTable extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listitems:[]
        }
    }

    componentDidMount() {
        this.httprequest()
        // var url = `http://localhost:8080/loan/application/v1/getlistapplication`;
        // const otherPram={
        //     method:"GET",
        //     headers:{
        //         'content-type': 'application/json'
        //     }
        // }
        //
        // fetch(url,otherPram)
        //     .then(response => response.json())
        //     .then(json =>
        //         // console.log(json.data)
        //         // paramloanrender = json.data
        //         this.setState({listitems: json.data})
        //     )
    }
    isExpandableRow(row) {
        return true;
        // if (row.id < 1000) return true;
        // else return true;
    }
    httprequest(){
        var xhr = new XMLHttpRequest();
        xhr.open('GET', '/path/to/image.png', true);
        xhr.responseType = 'blob';
        xhr.onload = function(e) {
            console.log("this.status : "+this.status)
            if (this.status == 200) {
                // Note: .response instead of .responseText
                var blob = new Blob([this.response], {type: 'image/png'});
            // ...
            }
        };

        xhr.send();
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
        var Gender = LanguageStore.translate('Female');
        if(row.apppersonelentity.gender == "M"){
            Gender = LanguageStore.translate('Male');
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
        var usedforcollateral = LanguageStore.translate('No');
        var usedforcollateralsecond = LanguageStore.translate('No');
        if(row.appaddressentity.usedforcollateral == 'Y'){
            usedforcollateral = LanguageStore.translate('Yes');
        }
        if(row.appaddressentity.secondusedforcollateral == 'Y'){
            usedforcollateralsecond = LanguageStore.translate('Yes');
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
        if(row.appcollateralentity != null && row.appcollateralentity.collateral !== "") {
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
        var rowflag = false
        var description = '';
        if (typeof row.appentity.documentapp !== "undefined" && row.appentity.documentapp != null){
            description = row.appentity.documentapp.description
        }
        var listappdoc = row.listdoc.filter( (item) => {
            return item.documentfor == 'appdocument'
        })

        return (
            <div>
                {/* cara memanggil menggunakan {row.namadata} misal row.id / row.fullName */}
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
                            </div>
                            {/* <div> &nbsp;  &nbsp;  &nbsp; </div> */}
                            <div className="a51">
                                <ReactSpeedometer
                                    needleHeightRatio={0.7}
                                    maxSegmentLabels={5} //label penomoran angka
                                    segments={10} //label warna
                                    segmentColors={["red", "red", "red", "yellow", "yellow", "green", "blue", "blue", "blue", "blue"]}
                                    value={row.appentity.score}
                                    needleTransitionDuration={4000}
                                    needleTransition="easeElastic"
                                    width={250} height={250}
                                />
                            </div>

                        </div>
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
                            <tr><td>{LanguageStore.translate('Gender')}</td><td>{Gender}</td></tr>
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
                            <tr><td>{LanguageStore.translate('Has been used as collateral elsewhere')} ?</td><td>{usedforcollateral}</td></tr>
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
                            <tr><td>{LanguageStore.translate('Has been used as collateral elsewhere')} ?</td><td>{usedforcollateralsecond}</td></tr>
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
                                    }
                                    // else{
                                    //     return (
                                    //         <tr>
                                    //             <td>{item.field}</td>
                                    //             <td>{
                                    //                 value[item.index].map(function (item) {
                                    //                     return (
                                    //                         <tr><td > <div onClick={donwloadfile.bind(this,item.path,item.namefile)}>{item.namefile}</div></td></tr>
                                    //                     )
                                    //                 })
                                    //             }</td>
                                    //         </tr>
                                    //     )
                                    // }
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
        var paramloanrender = [];

        const options = {
            expandBy: 'column' //dan tiap kolom di expandable={false} maka supaya hanya (+) biar bisa expand
            //expandRowBgColor: 'rgb(255,255,255)'
        };
        const cellEdit = {
            mode: 'click',
            blurToSave: false
        };
        return(
            <div id="content">
                {/*<WidgetGrid>*/}
                    {/* row */}
                    

                    <div className="row">
                        <article className="col-xs-14 col-sm-14 col-md-14 col-lg-14">
                            {/* Widget ID (each widget will need unique ID)*/}
                            <JarvisWidget editbutton={false} fullscreenbutton={true} deletebutton={false} color="orange">

                                <header>
                                    <span className="widget-icon"> <i className="fa fa-table"/> </span>

                                    <h2><Msg phrase={'All Applicants'}/> </h2>
                                </header>

                                {/* widget div*/}
                                <div>
                                    {/* widget content */}
                                    <div className="widget-body no-padding">

                                        <BootstrapTable data={ this.props.listallitem } pagination={true} striped={true} hover={true} condensed= {true} search={false}
                                                        options={ options } headerStyle={ { background: '#aaaadd' } }  cellEdit={ cellEdit }
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
                                    {/* end widget content */}
                                </div>
                                {/* end widget div */}
                            </JarvisWidget>
                        </article>
                    </div>
                    {/* end row */}
                {/*</WidgetGrid>*/}
            </div>
        )
    }
}

export default AllTable;

