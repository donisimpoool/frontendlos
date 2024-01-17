import React from 'react'
import {baseUrlApp, keyset, url} from '../../../config/baseUrl'

import BigBreadcrumbs from '../../../components/navigation/components/BigBreadcrumbs'
import Datatable from '../../../components/tables/Datatable'
import JarvisWidget from '../../../components/widgets/JarvisWidget'
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'

import NewApplication from "./NewApplication";
import {listposition} from "../../forms/components/wizards/step/Business";
import {Alert} from "react-bootstrap";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {suburllistappv1} from "../../../config/baseUrl";
import {header, headers} from "../../../config/ConfigParam";

const pageNumb = 2;
const pageSize = 100;
var loans = '';
function handleclick(e){
    console.log("tes click ")
    e.map(function (item) {
        console.log("items : "+item)
    })
}
function priceFormatter(cell, row) {
    var price = cell;
    price = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return "Rp "+price;
}
export var tempData = {
    loan:{}
}
export default class ListApplication extends React.Component {
    constructor(){
        super();
        this.state ={
            data: [],
            list:[],
            redirect:false,
            appid:''
        };
    }

    onRowClick = (row) =>{
        this.setState({
            redirect: true
        })
        this.setState({
            appid: row.id
        })
    }
    backHandle = () =>{
        this.setState({
            redirect: false
        })
    }
    componentDidMount(){
        console.log("")
        // const session = localStorage.getItem(keyset);
        if(true){
        this.setState({
            data: []
        })
        var url = baseUrlApp;//suburllistappv1;
        // fetch(`${url}/loan/application/v1/applicant-list/?pageSize=${pageSize}`,
        fetch(url,
            {
                method: 'GET',
                headers: header()
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    data: appList.data
                })
            })
        }
        else{
            // window.location.href = "/#/login";
        }
    }

    render() {

        if (this.state.redirect == true) {
            var filterappid = this.state.data.filter( (item) => {
                return item.applicationID == this.state.appid
            })
            var dataloan={
                "loanProductId": "",
                "loanDescription": "",
                "loanName": "",
                "hasCollateral": false,
                "loanamount":0
            }
            var datapersonel={
                "applicationID": "",
                "name": "",
                "mobilephone": "",
                "landlinephone": "",
                "placeofbirth": "",
                "dateofbirth": "",
                "gender": "M",
                "typeid": "KTP",
                "education": "",
                "maritalstatus": "",
                "email": "",
                "idnumber": "",
                "numberofdependant": 0
            }

            var dataaddress = {};
            var datafamily = {};
            var databusiness = {};
            var databank = {};
            var datafinancial = {};
            var datacollateral = {}
            var detailcollateral = {};
            filterappid.map(function (item) {
                dataloan={
                    "loanProductId": item.loanapp.loanproduct.loanProductId,
                    "purposeofloan": item.loanapp.purposeofloan,
                    "tenor": item.loanapp.tenor,
                    "loanamount":item.loanapp.amount,
                    "loanname":item.loanapp.loanproduct.loanName,
                    "mintenor":item.loanapp.loanproduct.mintenor,
                    "maxtenor":item.loanapp.loanproduct.maxtenor,
                    "minamount":item.loanapp.loanproduct.minamount,
                    "maxamount":item.loanapp.loanproduct.maxamount,
                    "filterid":item.loanapp.loanproduct.filterid_h,
                    "defaulttenor":item.loanapp.loanproduct.defaulttenor,
                    "defaultamount":item.loanapp.loanproduct.defaultamount
                }
                var dateofbirth = item.personelapp.dateofbirth.substring(0, 10);
                var myDatedateofbirth = new Date(dateofbirth);
                datapersonel={
                    "name": item.personelapp.name,
                    "mobilephone": item.personelapp.mobilephone,
                    "landlinephone": item.personelapp.landlinephone,
                    "placeofbirth": item.personelapp.placeofbirth,
                    "dateofbirth": myDatedateofbirth.getTime(),
                    "gender": item.personelapp.gender,
                    "typeid": item.personelapp.typeid,
                    "education": item.personelapp.education,
                    "maritalstatus": item.personelapp.maritalstatus,
                    "email": item.personelapp.email,
                    "idnumber": item.personelapp.idnumber,
                    "numberofdependant": item.personelapp.numberofdependant
                }
                dataaddress = item.addressapp;
                datafamily = item.familyapp
                databusiness = item.businessapp
                databank = item.bankapp
                datafinancial = item.financialapp
                datacollateral = item.collateralapp
                if(datacollateral.collateral == "RealEstate"){
                    detailcollateral = item.collateralreapp
                }else if(datacollateral.collateral == "Vehicle"){
                    detailcollateral = item.collateralvehicleapp
                }else if(datacollateral.collateral == "Deposit"){
                    detailcollateral = item.collateraldepositapp
                }
            })
            return (
                <NewApplication
                    appid={this.state.appid}
                    isedit='Y'
                    listloan={dataloan}
                    datapersonel={datapersonel}
                    dataaddress={dataaddress}
                    datafamily={datafamily}
                    databusiness={databusiness}
                    databank={databank}
                    datafinancial={datafinancial}
                    datacollateral={datacollateral}
                    detailcollateral={detailcollateral}
                />
            )
        } else {
            var listdata = [];
            for (let i = 0; i < this.state.data.length; i++) {
                var item = this.state.data[i];
                // var itemdate = item.date;
                // itemdate = itemdate.substring(0, 10);
                var status = item.status;
                if(status == 'U'){
                    status = "Underwriting"
                }else if(status == 'R'){
                    status = "Rejected"
                }else{
                    status = "Approved"
                }
                var temp = {
                    id: item.id,
                    custname: item.personalName,
                    loanid: item.loanName,
                    amountloan: item.loanAmount,
                    date: item.date,
                    status:status
                }
                listdata.push(temp);
            }
            const options = {
                onRowClick: this.onRowClick,
                expandBy: 'column' //dan tiap kolom di expandable={false} maka supaya hanya (+) biar bisa expand
                //expandRowBgColor: 'rgb(255,255,255)'
            };
            const cellEdit = {
                mode: 'click',
                blurToSave: true
            };
            return (

                <div id="content">
                    {/*<Alert color="primary" >*/}
                        {/*This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.*/}
                    {/*</Alert>*/}
                    <div className="row">
                        <BigBreadcrumbs items={[LanguageStore.translate('Application')]}
                                        className="col-xs-6 col-sm-7 col-md-7 col-lg-8"/>
                        <div className="col-xs-4 col-sm-4 col-md-4 col-log-4">
                            <a href="#/new-app" className="btn btn-info btn-lg ">{LanguageStore.translate('New Application')}</a>
                        </div>
                        {/* {console.log("State.data",this.state.data)} */}

                    </div>

                    <div className="row">
                        <article className="col-sm-12">

                            <JarvisWidget editbutton={false} color="darken">
                                <header><span className="widget-icon"> <i className="fa fa-table"/> </span>
                                    <h2>Data</h2></header>
                                <div>
                                    <div className="widget-body no-padding">

                                        <BootstrapTable data={listdata} pagination={true} striped={true}
                                                        hover={true} condensed={true} search={true}
                                                        options={options}
                                                        headerStyle={{background: '#aaaadd'}}  /*cellEdit={ cellEdit }*/
                                                        expandableRow={this.isExpandableRow}
                                                        containerStyle={{background: '#FFFFFF'}}
                                                        expandComponent={this.expandComponent}
                                                        searchPlaceholder='Search from any columns...'
                                                        expandColumnOptions={{expandColumnVisible: true}}>
                                            <TableHeaderColumn dataField='id' dataSort={true} width='15%'
                                                               dataAlign='center' headerAlign='center' isKey={true}
                                                               editable={false} expandable={false} filter={{
                                                type: 'TextFilter',
                                                placeholder: 'Please enter a value',
                                                delay: 10
                                            }}
                                            >{LanguageStore.translate('Application ID')}</TableHeaderColumn>
                                            <TableHeaderColumn dataField='loanid' dataSort={true} width='15%'
                                                               dataAlign='center' headerAlign='center'
                                                               editable={false} expandable={false} filter={{
                                                type: 'TextFilter',
                                                placeholder: 'Please enter a value',
                                                delay: 10
                                            }}
                                            >{LanguageStore.translate('Loan Name')}</TableHeaderColumn>
                                            <TableHeaderColumn dataField='custname' dataSort={true} width='20%'
                                                               dataAlign='center' headerAlign='center'
                                                               editable={false} expandable={false} filter={{
                                                type: 'TextFilter',
                                                placeholder: 'Please enter a value',
                                                delay: 10
                                            }}
                                            >Customer</TableHeaderColumn>
                                            {/*<TableHeaderColumn dataField='fullname' dataSort={true}  width='20%' dataAlign='center'  headerAlign='center'*/}
                                            {/*                   editable={ false } expandable={ false } filter={ { type: 'TextFilter', placeholder: 'Please enter a value', delay: 10 } }*/}
                                            {/*>Loan Amount</TableHeaderColumn>*/}
                                            <TableHeaderColumn dataField='amountloan' dataFormat={priceFormatter}
                                                               dataSort={true} width='15%' dataAlign='right'
                                                               headerAlign='center'
                                                               editable={false} expandable={false}
                                                               filter={{type: 'NumberFilter', delay: 10}}
                                            >{LanguageStore.translate('Loan')}</TableHeaderColumn>
                                            <TableHeaderColumn dataField='date' dataAlign='center' width='20%'
                                                               headerAlign='center'
                                                               editable={false} expandable={false}
                                                               filter={{type: 'DateFilter', delay: 10,}}>
                                                {LanguageStore.translate('Loan Created Date')}</TableHeaderColumn>
                                            <TableHeaderColumn dataField='status' dataSort={true} width='15%'
                                                               dataAlign='center' headerAlign='center'
                                                               editable={false} expandable={false} filter={{
                                                type: 'TextFilter',
                                                placeholder: 'Please enter a value',
                                                delay: 10
                                            }}
                                            >Status</TableHeaderColumn>
                                        </BootstrapTable>

                                    </div>
                                </div>
                            </JarvisWidget>
                        </article>
                    </div>

                </div>
            )
        }
    }
}