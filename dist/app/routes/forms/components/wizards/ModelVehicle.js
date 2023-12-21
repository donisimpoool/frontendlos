import React from "react";

import {listmodelvehichle, vehicle} from "./ListData/ListModelVehicle";
import {brandname} from "./TypeVehicle";
import {typevehicle} from "./CollateralVehicle";
import LanguageStore from "../../../../components/i18n/LanguageStore";

export var modelname = '',modeilid='';
var flag = false
export default class ModelVehicle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:[],
            modelid:''
        }
    }
    myChangeHandler = (event) => {
        var str = event.target.value;
        modeilid = str;
        var filtermodel = listmodelvehichle.filter( (item) => {
            return item.value == event.target.value
        })
        modelname = '';
        filtermodel.map(function (item) {
            modelname = item.name;
        })
        this.setState({
            modelid: str
        });
        flag = true
    }
    render(){
        var filtermodel = listmodelvehichle.filter( (item) => {
            return item.jenis == this.props.jenis && item.brand == this.props.brand
        })
        if(!flag && this.props.modelid !== "0"){
            this.state.modelid = this.props.modelid
            modeilid = this.props.modelid;
            var filtermodel = listmodelvehichle.filter( (item) => {
                return item.value == modeilid
            })
            modelname = '';
            filtermodel.map(function (item) {
                modelname = item.name;
            })
        }else{
            modeilid = this.state.modelid
        }
        console.log("this.state.modelid : "+this.state.modelid)
        return(
            <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4 style={{float:"left"}}><b>Model</b></h4>
                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="model" defaultValue={""} value={this.state.modelid}
                                    onChange={this.myChangeHandler}
                            >
                                <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                {
                                    filtermodel.map(function (item) {
                                        return (
                                            <option key={item.value} value={item.value}>{item.name}</option>
                                        )
                                    })}

                            </select>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}