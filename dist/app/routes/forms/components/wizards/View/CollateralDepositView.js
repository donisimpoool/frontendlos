import React from "react";
import LanguageStore from "../../../../../components/i18n/LanguageStore";


export default class CollateralDepositView extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>Bank</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.bankName}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Amount')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.amount}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Currency')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.currency}
                        </h4>
                    </div>
                </div>
                <br/>
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
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Due Date')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.duedate}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>Upload File</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.isuploadfileBank}
                        </h4>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}