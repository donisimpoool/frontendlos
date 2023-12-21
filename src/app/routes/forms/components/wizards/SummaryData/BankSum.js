import React from 'react'
import CreditCard from '../step/CreditCard'
import LanguageStore from "../../../../../components/i18n/LanguageStore";

var summary = true;

export default class BankSum extends React.Component{  
    
    render(){
        // console.log(this.props.bank.creditCardList)
        // if(this.props.valueCC == true){
        //     summary = true
        // }
        // else summary = false
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>Bank</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.bankname}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Account Type')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {LanguageStore.translate(this.props.acctypename)}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Account Number')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.accnumber}
                        </h4>
                    </div>
                </div> 
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Credit Card')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.iscc}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Issuer')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.bankcc}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Credit Card Number')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.numbercc}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type Credit Card')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.typecreditcard}
                        </h4>
                    </div>
                </div>
                {/*<CreditCard*/}
                {/*    creditCard = {this.props.bank.creditCardList}*/}
                {/*    summary = {summary}*/}
                {/*    divState = {false}*/}
                {/*/>*/}
            </div>
            
        )
        
    }
}