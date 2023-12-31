import React from 'react'
import {additionalexpense, expense, mainincome, sideincome, typeincome} from "../step/Financial";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class FinancialSum extends React.Component{

    render(){
        var mainincome = this.props.mainincome;
        mainincome = mainincome.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        var sideincome = this.props.sideincome;
        sideincome = sideincome.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        var expense = this.props.expense;
        expense = expense.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        var addtionalexpense = this.props.addtionalexpense;
        addtionalexpense = addtionalexpense.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Type Income')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {LanguageStore.translate(this.props.typeincome)}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">

                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Main Income')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {mainincome}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Side Income')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {sideincome}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Expense')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {expense}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Additional Expense')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {addtionalexpense}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Vehicle Owner')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.vehicleowner}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Type Vehicle')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {LanguageStore.translate(this.props.typevehicle)}
                        </h4>
                    </div>
                </div>
            </div>
            
        )
        
    }
}