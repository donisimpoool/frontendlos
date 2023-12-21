import React from 'react'
import VehicleMob from './VehicleMob';
import VehicleMot from './VehicleMot';
import {vehicle} from "./ListData/ListModelVehicle";
import ModelVehicle from "./ModelVehicle";
import {namecity} from "./Type/TypeCity";
import LanguageStore from "../../../../components/i18n/LanguageStore";

export var brandname='',transmisiionname='',transmisionid='',brandid;
var flag = false;
export default class TypeVehicle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // collateralId:"",
            valuebrand:'',
            typetransmision:''
        }
    }
    myChangeHandler = (event) => {
        var str = event.target.value;
        brandid = str;
        this.setState({valuebrand: event.target.value});
        var filterbrand = vehicle.filter( (item) => {
            return item.value == event.target.value
        })
        brandname = '';
        filterbrand.map(function (item) {
            brandname = item.brand;
        })
        flag = true;
    }

    onChangeTrasmission(e){
        var str = e.target.value;
        this.setState({typetransmision: str});
        transmisionid = str;
        transmisiionname = "Automatic Transmission"
        if(str == 'MT'){
            transmisiionname = "Manual Transmission"
        }
        flag = true;
    }
    render(){
        var filtervehicle = vehicle.filter( (item) => {
            return item.jenis == this.props.DivState
        })
        if(!flag){
            this.state.valuebrand = this.props.brandid;
            this.state.typetransmision = this.props.typetransmision;
            transmisionid = this.props.typetransmision;
            brandid = this.props.brandid;
            transmisiionname = "Automatic Transmission"
            if(this.props.typetransmision == 'MT'){
                transmisiionname = "Manual Transmission"
            }
            var filterbrand = vehicle.filter( (item) => {
                return item.value == this.props.brandid
            })
            brandname = '';
            filterbrand.map(function (item) {
                brandname = item.brand;
            })
        }
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 style={{float:"left"}}><b>{LanguageStore.translate('Brand')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
                                        name="brandvehicle" defaultValue={""}
                                        value={this.state.valuebrand} onClick={this.myChangeHandler}
                                >
                                    <option value="" disabled={true}>{LanguageStore.translate('Choose')}</option>
                                    {
                                        filtervehicle.map(function (item) {
                                            return (
                                                <option key={item.value} value={item.value}>{item.brand}</option>
                                            )
                                        })}

                                </select>

                            </div>
                        </div>
                    </div>
                </div>
                <ModelVehicle
                    modelid={this.props.modelid}
                    jenis={this.props.DivState}
                    brand={this.state.valuebrand}
                />
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type Transmision')}</b></h4>
                                <select className="form-control input-lg"
                                        data-smart-validate-input="" required
                                        name="vehicle.type"
                                        onChange={this.onChangeTrasmission.bind(this)}
                                        defaultValue={""} value={this.state.typetransmision}>
                                    <option value="" disabled={true}>{LanguageStore.translate('Choose')}</option>
                                    <option value="AT"> {LanguageStore.translate('Automatic Transmission')}</option>
                                    <option value="MT"> {LanguageStore.translate('Manual Transmission')}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}