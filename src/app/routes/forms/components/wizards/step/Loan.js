import React from 'react'
import NumberFormat from 'react-number-format';
import {suburllistloan,suburllistloan_simpool} from "../../../../../config/baseUrl";

import { parse } from 'querystring';
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {tempData} from "../../../../new-app/components/ListApplication";
import {headers} from "../../../../../config/ConfigParam";

export var loanvalue = {loanProductId: "0",
    loanAmount:"0",
    loanPurpose:"",
    loanTenor:0,
    filterid:''};
export var loanName = '',loanAmount=0,purposeofloan='',tenor=0;
export var listprodloan = [];
export var listpurposeofloan = [
    {id:'education',name:'Education'},
    {id:'consumerpurchase',name:'Consumer Purchase'},
    {id:'debtrepayment',name:'Debt Repayment'},
    {id:'holiday',name:'Holiday'},
    {id:'venturecapital',name:'Venture Capital'},
    {id:'medicalbill',name:'Medical Bill'},
    {id:'purchasevehicle',name:'Purchase Vehicle'},
    {id:'wedding',name:'Wedding'}
]
//npm install react-number-format --save
var flag = false;
export default class Loan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            listloansimpool:[],
            loan: {},
            value:{
                loanProductId: "0",
                loanAmount:"0",
                loanPurpose:"",
                loanTenor:0,
                filterid:''
            },
            range:{mintenor:0,maxtenor:0,defaulttenor:0,minamount:0,maxamount:0,defaultamount:0,msgtenor:"Range Teno 2 s/d 4",msgamount:""},
            test:[
                {id:'1',name:'test1'},
                {id:'2',name:'test2'},
                {id:'3',name:'test3'}
            ],
        }
    }

    componentDidMount() {
        loanvalue = this.state.value;
        var url = suburllistloan
        const otherPram={
            method:"GET",
            headers: headers
        }
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                        this.setState({posts: json.data})
            )
        listprodloan = this.state.posts;

        // url = suburllistloan_simpool
        // fetch(url,otherPram)
        //     .then(response => response.json())
        //     .then(json =>
        //         this.setState({listloansimpool: JSON.parse(json.data)})
        //     )
    }

    onReturnLoan() {
        this.props.loan_update(this.state.loan)
        this.props.onGetData()
        console.log(this.props.loan_console)
    }

    onParseAmount(e) {
        var str = e.target.value;
        str = str.replace(/,/g, "");
        loanAmount = str;
        var value = this.state.value;
        value.loanAmount = str;
        this.setState(value);
        loanvalue = this.state.value;
        flag = true;
    }
    priceFormatter(val) {
        var price = val;
        var val = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        return val;
    }
    onParseMonth(e) {
        //this.state.value.loanTenor
        //range
        var str = e.target.value;
        var mintenor = 5;
        var maxtenor = 12;
        // if (str < mintenor ) {
        //     str = mintenor
        // } else if (str > maxtenor) {
        //     str = maxtenor
        // }
        var value = this.state.value;
        value.loanTenor = str;
        tenor= str;
        this.setState(value);
        loanvalue = this.state.value;
        flag = true;
    }

    myChangeHandler = (e) => {
        const loanprodID = e.target.value;

        var nameloan = this.state.posts.filter( (item) => {
            return item.loanProductId == loanprodID
        })
        loanName = '';
        var mintenor = 0
        var maxtenor = 0
        var minamount = 0
        var maxamount = 0
        var filterid = ''
        var defaulttenor=0
        var defaultamount=0
        nameloan.map(function (item) {
            loanName = item.loanName;
            mintenor = item.mintenor;
            maxtenor = item.maxtenor;
            minamount = item.minamount;
            maxamount = item.maxamount;
            filterid = item.filterid_h;
            defaulttenor = item.defaulttenor;
            defaultamount = item.defaultamount;

        })
        var value = this.state.value;
        value.loanProductId = loanprodID;
        value.loanTenor = defaulttenor;
        value.loanAmount = defaultamount;
        value.filterid = filterid;
        this.setState(value);
        tenor = defaulttenor
        loanAmount = defaultamount
        var range = this.state.range;
        range.mintenor=mintenor;
        range.maxtenor=maxtenor;
        range.minamount=minamount;
        range.maxamount=maxamount;
        range.defaulttenor=defaulttenor;
        range.defaultamount=defaultamount;
        range.msgtenor = "Range Tenor "+mintenor+" s/d "+maxtenor;
        range.msgamount = "Range Amount "+minamount+" s/d "+maxamount;
        this.setState(range);

        loanvalue = this.state.value;
        flag = true;
    }

    onChangeLoanProduct(e) {
        const loanprodID = e.target.value;
        var value = this.state.value;
        value.loanProductId = loanprodID;
        this.setState(value);
        loanvalue = this.state.value;
    }
    onChangeLoanPurpose(e) {
        var str = e.target.value;
        var tempfilter = listpurposeofloan.filter( (item) => {
            return item.id == str
        })
        purposeofloan = '';
        tempfilter.map(function (item) {
            purposeofloan = item.name;
        })
        var value = this.state.value;
        value.loanPurpose = str;
        this.setState(value);
        loanvalue = this.state.value;
        flag = true;
    }

    setLoan() {
        var loan = this.props.listloan;

        if (typeof loan !== "undefined" && !flag){
            this.state.value.loanProductId = loan.loanProductId;
            this.state.value.loanAmount = loan.loanamount
            this.state.value.loanPurpose = loan.purposeofloan
            this.state.value.loanTenor = loan.tenor;
            this.state.value.filterid = loan.filterid;
            loanvalue = this.state.value;
            loanName = loan.loanname
            loanAmount = loan.loanamount
            var range = this.state.range;
            range.mintenor=loan.mintenor;
            range.maxtenor=loan.maxtenor;
            range.minamount=loan.minamount;
            range.maxamount=loan.maxamount;
            range.msgtenor = "Range Tenor "+loan.mintenor+" s/d "+loan.maxtenor;
            range.msgamount = "Range Amount "+loan.minamount+" s/d "+loan.maxamount;
            this.setState(range);

            var tempfilter = listpurposeofloan.filter( (item) => {
                return item.id == loan.purposeofloan
            })
            purposeofloan = '';
            tempfilter.map(function (item) {
                purposeofloan = item.name;
            })
            tenor = loan.tenor
        }
        flag = false;
    }
    render() {
        this.setLoan()
        // var priceamount = this.state.value.loanAmount;
        // priceamount = priceamount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        // console.log("priceamount : "+priceamount)
        return (
            <div>
                <div className="row">
                    <div className="col-md-6 mar-btm">
                        <div className="form-group">
                            <br/>
                            <h4 style={{float: "left"}}><b>{LanguageStore.translate('Loan Product')}</b></h4>

                            <div className="inputGroup-sizing-default">

                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="loanProductId" defaultValue={"0"} value={this.state.value.loanProductId}
                                        onChange={this.myChangeHandler}
                                >
                                    <option value="0" selected={true}>{LanguageStore.translate('Select Product')}</option>
                                    {
                                        this.state.posts.map(function (item) {
                                            if(item.loanName !== '') {
                                                return (
                                                    <option key={item.loanProductId}
                                                            value={item.loanProductId}>{item.loanName}</option>
                                                )
                                            }

                                        // this.state.posts.map(function (item) {
                                        //     if(item.loanName !== '') {
                                        //         return (
                                        //             <option key={item.loanProductId}
                                        //                     value={item.loanProductId}>{item.loanName}</option>
                                        //         )
                                        //     }
                                    })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mar-btm">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 style={{float: "left"}}><b>{LanguageStore.translate('Loan Amount')}</b><label>&nbsp;( IDR )</label></h4>

                                <NumberFormat className="form-control input-lg" data-minlength="4" data-required=""
                                              thousandSeparator={true} placeholder="Enter your loan amount"
                                              onChange={this.onParseAmount.bind(this)} min={this.state.range.minamount} max={this.state.range.maxamount }
                                              name="loanAmount" value={this.state.value.loanAmount} data-message=""

                                />

                                {/*<input className="form-control input-lg" min={this.state.range.minamount} max={this.state.range.maxamount}*/}
                                {/*       placeholder="Enter your loan amount" thousandSeparator={true} type="number"*/}
                                {/*       name="loanAmount"*/}
                                {/*       data-smart-validate-input="" data-required=""*/}
                                {/*       data-message=""*/}
                                {/*       onChange={this.onParseAmount.bind(this)} value={priceamount}*/}
                                {/*/>*/}

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mar-btm">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 style={{float: "left"}}><b>{LanguageStore.translate('Purpose of Loan')}</b></h4>
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your purpose"
                                        name="purpose" defaultValue={"0"} value={this.state.value.loanPurpose}
                                        onChange={this.onChangeLoanPurpose.bind(this)}>
                                    <option value="" selected={true}>{LanguageStore.translate('Select Purpose')}</option>
                                    {
                                        listpurposeofloan.map(function (item) {
                                            return (
                                                <option key={item.id}
                                                        value={item.id} >{LanguageStore.translate(item.name)}</option>
                                            )
                                        })}
                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mar-btm">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 style={{float: "left"}}><b>Tenor</b><label>&nbsp;( {LanguageStore.translate('Months')} )</label></h4>
                                <input className="form-control input-lg" min={this.state.range.mintenor} max={this.state.range.maxtenor}
                                       placeholder="Length of Time until Loan is Due in Months" type="number"
                                       name="tenor"
                                       data-smart-validate-input="" data-required=""
                                       data-message=""
                                       onChange={this.onParseMonth.bind(this)} value={this.state.value.loanTenor}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )

    }
};