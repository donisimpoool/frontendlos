import React from 'react'
import CreditCard from './CreditCard'
import NumberFormat from 'react-number-format';
import {financialvalue, typeincome} from "./Financial";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
import {suburlbank} from "../../../../../config/baseUrl";

export var bankvalue = {bank: "0",
    acctype:"",
    accnumber:"",
    iscc:"N"};
export var bankname='',acctypename='',accnumber='',iscc='No'
var bankcc='0',numbercc=''
export var listacctype =[
    {id:'currentaccount',name:'Current Account'},
    {id:'deposit',name:'Deposit'},
    {id:'saving',name:'Saving'}
];
var flag = false;
export default class Bank extends React.Component{ 
    constructor(props){
        super(props)
        this.state = {
            valueCC: false,
            // account: this.props.bankAccountstate,
            account: {
                bankId: 1
            }, 
            creditCardList: [],
            valuebank:{
                bank: "0",
                acctype:"",
                accnumber:"",
                iscc:"N"
            },
            posts: []
        }
    }
    componentDidMount(){
        var url = suburlbank;
        console.log("bank : "+url);
        const otherPram={
            method:"GET",
            headers:{
                'content-type': 'application/json'
            }
        }
        fetch(url,otherPram)
            .then(response => response.json())
            .then(json =>
                // console.log(json.data)
                this.setState({posts: json.data})
            )
    }
    onChangeCreditCard(e){
        var str = e.target.value;
        iscc = "Yes"
        if(str == "N"){
            iscc = "No";
        }
        var value = this.state.valuebank;
        value.iscc = str;
        this.setState(value);
        bankvalue = this.state.valuebank;
        bankcc = '0'
        numbercc = ''
        flag = true;
    }

    onCreditCard(param){
        
        this.setState(prevState =>({ 
            creditCardList: [param]
        }),
        this.onReturnCC.bind(this),
        )
    }

    onReturnCC(){
        this.props.bank_creditCardUpdate(this.state.creditCardList)
    }

    onChangeBank(e){
        var str = e.target.value;
        var value = this.state.valuebank;
        value.bank = str;
        this.setState(value);
        bankvalue = this.state.valuebank;
        var filterbank = this.state.posts.filter( (item) => {
            return item.bankId == e.target.value
        })
        bankname='';
        filterbank.map(function (item) {
            bankname = item.bankName;
        })
        flag = true
    }
    onChangeAccType(e){
        var str = e.target.value;
        var value = this.state.valuebank;
        value.acctype = str;
        this.setState(value);
        bankvalue = this.state.valuebank;
        var filteracctype = listacctype.filter( (item) => {
            return item.id == e.target.value
        })
        acctypename='';
        filteracctype.map(function (item) {
            acctypename = item.name;
        })
        flag = true
    }
    onChangeAccNumber(e){
        var str = e.target.value;
        accnumber = str;
        var value = this.state.valuebank;
        value.accnumber = str;
        this.setState(value);
        bankvalue = this.state.valuebank;
        flag = true
    }

    onReturnBank(){
        this.props.bank_update(this.state.account);
        this.props.onGetData();
    }
    setEntity() {
        var entity = this.props.databank;
        if (typeof entity !== "undefined" && !flag){
            this.state.valuebank.bank = entity.bankid
            this.state.valuebank.acctype = entity.accounttype
            this.state.valuebank.accnumber = entity.accountnumber
            this.state.valuebank.iscc = entity.iscreditcard
            bankcc = entity.bankcc
            numbercc = entity.numbercc
            bankvalue = this.state.valuebank;
            var filterbank = this.state.posts.filter( (item) => {
                return item.bankId == entity.bankid
            })
            bankname='';
            filterbank.map(function (item) {
                bankname = item.bankName;
            })
            var filteracctype = listacctype.filter( (item) => {
                return item.id == entity.accounttype
            })
            acctypename='';
            filteracctype.map(function (item) {
                acctypename = item.name;
            })
            accnumber = entity.accountnumber
            iscc = "Yes"
            if(entity.iscreditcard == "N"){
                iscc = "No"
            }
        }
        flag = false;
    }
    render(){
        this.setEntity()
        console.log("this.state.valuebank.iscc : "+this.state.valuebank.iscc)
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>Bank</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="bank" defaultValue={""}
                                        onChange={this.onChangeBank.bind(this)} value={this.state.valuebank.bank}
                                >
                                    <option value="0" selected={true}>{LanguageStore.translate('Choose')}</option>
                                    {
                                        this.state.posts.map(function (item) {
                                            if(item.bankName !== '') {
                                                return (
                                                    <option key={item.bankId}
                                                            value={item.bankId}>{item.bankName}</option>
                                                )
                                            }
                                        })}

                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Account Type')}</b></h4>
                                <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="accountType" 
                                    onChange={this.onChangeAccType.bind(this)}
                                    defaultValue={""} value={this.state.valuebank.acctype}>
                                    <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                    {
                                        listacctype.map(function (item) {
                                            return (
                                                <option key={item.id} value={item.id}>{LanguageStore.translate(item.name)}</option>
                                            )
                                        })}
                                    </select> 
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Account Number')}</b></h4>
                            <NumberFormat className="form-control input-lg" minLength="10" 
                                   data-required="" placeholder={LanguageStore.translate('Account Number')}
                                    format="#### #### #### ####"  onChange={this.onChangeAccNumber.bind(this)} value={this.state.valuebank.accnumber}
                                    name="accountNumber" required/>
                              {/* <input className="form-control input-lg"
                                placeholder="Account Number" type="number"
                                name="accountNumber" minLength
                                onChange={this.onChangeBank.bind(this)}
                                data-smart-validate-input=""
                                data-required=""data-minlength="10" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('Credit Card')}</b></h4>
                            <br/>
                            <div className="col-xs-4 col-lg-8">
                                <div className="inputGroup-sizing-default">
                                    <label className="radio state-error">
                                        <input type="radio" name="creditcard"  value="Y" onChange={this.onChangeCreditCard.bind(this)} checked={this.state.valuebank.iscc == 'Y'} />
                                        {LanguageStore.translate('Yes')}</label>
                                    &nbsp;&nbsp;&nbsp;
                                    <label className="radio">
                                        <input type="radio" name="creditcard"  value="N" onChange={this.onChangeCreditCard.bind(this)} checked={this.state.valuebank.iscc == 'N'} />
                                        {LanguageStore.translate('No')}</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br/>
                  <CreditCard
                      bankcc={bankcc}
                      numbercc={numbercc}
                    divState={this.state.valuebank.iscc}
                    listbank={this.state.posts}
                    onCreditCard={this.onCreditCard.bind(this)}
                  /> 
            </div>
            
        )
        
    }
}