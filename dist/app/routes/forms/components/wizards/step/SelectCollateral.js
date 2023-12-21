import React from 'react'
import Collateral from '../Collateral';
import {bankvalue} from "./Bank";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
export var collateralvalue = {valueC:""};
export var selectcollateral= '';
var flag = false;
export default class SelectCollateral extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            // collateralId:"",
            valueC:""
        }
      }

    OnChangeCollateral(e){
        var str = e.target.value;
        selectcollateral = str;
        var value = this.state;
        value.valueC = str;
        this.setState(value);
        collateralvalue.valueC = str;
        flag = true;
        // console.log("value", this.state.valueC)
    }
    setEntity() {
        var entity = this.props.datacollateral;
        if (typeof entity !== "undefined" && !flag){
            collateralvalue.valueC = entity.collateral
            this.state.valueC = entity.collateral
            selectcollateral = entity.collateral
        }
        flag = false;
    }
    render(){
      this.setEntity()
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Collateral Type')}</b></h4>

                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="province" defaultValue={""}
                                    onChange={this.OnChangeCollateral.bind(this)} value={this.state.valueC}
                            >
                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                <option value="RealEstate">{LanguageStore.translate('Real Estate')}</option>
                                <option value="Vehicle">{LanguageStore.translate('Vehicle')}</option>
                                <option value="Deposit">{LanguageStore.translate('Deposit')}</option>

                            </select>

                            </div>
                        </div>
                    </div>
                </div>
                <Collateral
                    detailcollateral={this.props.detailcollateral}
                    DivState={this.state.valueC}
                    collateralUpdate = {this.props.collateralUpdate.bind(this)}
                    onGetData = {this.props.onGetData.bind(this)}
                />
            </div>
            
        )
        
    }
}