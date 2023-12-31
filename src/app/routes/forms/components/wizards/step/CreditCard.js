import React from 'react'
import issuer from '../../../../../components/forms/commons/issuer';
import NumberFormat from "react-number-format";
import {bankvalue, iscc} from "./Bank";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export var bankcc = '',numbercc='',typecredittcard='';
var flag = false
export var creditcardvalue={
    bankcc:'0',
    numbercc:'',
    typecredittcard:''
}
export default class CreditCard extends React.Component{

    constructor(){
        super()
        this.state = {
            creditCard: {},
            creditcardvalue:{
                bankcc:'0',
                numbercc:'',
                typecredittcard:''
            }
        }
    }

    onChangeCreditCard(e){
        const value = e.target.value;
        const CCData = e.target.name;
        this.setState(prevState => ({
            creditCard: {
                ...prevState.creditCard,
                [CCData]: value
            }
        }),
        () => {
            this.props.onCreditCard(this.state.creditCard)
        }
        )
    }

    onChangeIssuer(event){
        var str = event.target.value;
        bankcc = str
        var value = this.state.creditcardvalue;
        value.bankcc = str
        this.setState(value);
        creditcardvalue = this.state.creditcardvalue
        flag = true
    }

    onChangeTypeCreditCard(e){
        var str = e.target.value;
        typecredittcard = str
        var value = this.state.creditcardvalue;
        value.typecredittcard = str;
        this.setState(value);
        creditcardvalue = this.state.creditcardvalue;
        flag = true;
    }

    onChangeCreditNumber(event){
        var str = event.target.value;
        numbercc = str
        var value = this.state.creditcardvalue;
        value.numbercc = str
        this.setState(value);
        creditcardvalue = this.state.creditcardvalue
        flag = true
    }

    setentity(){
        if(!flag){
            var value = this.state.creditcardvalue;
            this.state.creditcardvalue.numbercc = this.props.numbercc
            this.state.creditcardvalue.bankcc = this.props.bankcc
            this.state.creditcardvalue.typecredittcard = this.props.typecredittcard
            numbercc = this.props.numbercc
            bankcc = this.props.bankcc
            typecredittcard = this.props.typecredittcard
            creditcardvalue = this.state.creditcardvalue
        }
        flag = false;
    }
    render(){
        this.setentity()
        if(this.props.divState === "Y"){
            return(
                <div>
                    <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Issuer')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="bank" defaultValue={""} onChange={this.onChangeIssuer.bind(this)} value={this.state.creditcardvalue.bankcc}
                                >
                                    <option value="0" selected={true}>{LanguageStore.translate('Choose')}</option>
                                    {
                                        this.props.listbank.map(function (item) {
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
                                    <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Credit Card Number')}</b></h4>
                                    <NumberFormat className="form-control input-lg" minLength="10" onChange={this.onChangeCreditNumber.bind(this)} value={this.state.creditcardvalue.numbercc}
                                                  data-required="" placeholder="Enter your Credit Card Number"
                                                  format="#### #### #### ####"
                                                  name="numbercc" required/>
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
                    <br/>
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Type Credit Card')}</b></h4>
                                <br/>
                                <div className="col-xs-4 col-lg-8">
                                    <div className="inputGroup-sizing-default">
                                        <label className="radio state-error">
                                            <input type="radio" name="typecredittcard"  value="visa" onChange={this.onChangeTypeCreditCard.bind(this)} checked={this.state.creditcardvalue.typecredittcard == 'visa'} />
                                            Visa</label>
                                        &nbsp;&nbsp;&nbsp;
                                        <label className="radio">
                                            <input type="radio" name="typecredittcard"  value="mastercard" onChange={this.onChangeTypeCreditCard.bind(this)} checked={this.state.creditcardvalue.typecredittcard == 'mastercard'} />
                                            Master Card</label>
                                        &nbsp;&nbsp;&nbsp;
                                        <label className="radio">
                                            <input type="radio" name="typecredittcard"  value="jcb" onChange={this.onChangeTypeCreditCard.bind(this)} checked={this.state.creditcardvalue.typecredittcard == 'jcb'} />
                                            JCB</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            );
        } else { 
            return <div></div>
        }  
    }
}