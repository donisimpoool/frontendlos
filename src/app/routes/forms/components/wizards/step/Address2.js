import React from 'react'
// import province from '../../../../../components/forms/commons/province'
import SelectUntil from '../SelectUntil';

import district from '../../../../../components/forms/commons/district';
import TypeCity from '../Type/TypeCity';
import {Addressvalue, isCollateral, ownershipstatus, provincename} from "./Address";
import LanguageStore from "../../../../../components/i18n/LanguageStore";
export var mainaddress2='',provincename2='',postalcode2='',ownershipstatus2='',isCollateral2='';
export var Addressvalue2 = {mainaddress: "",
    province:"0",
    postalcode:"",
    ownershipstatus:"",
    collateral:"",
    idregencies:"0",
    iddistrict:"0"};
var flag = false,idcity="0",iddistrict="0";
export default class Address2 extends React.Component{ 

    constructor(props){
        super(props)
        this.state = {     
            value:"0",  
            valueUntil2: false,
            valueProv:'',
            valueaddress:{
                mainaddress: "",
                province:"0",
                postalcode:"",
                ownershipstatus:"",
                collateral:"",
                idregencies:"0",
                iddistrict:"0"
            }
        }
    }

    onchangecollateral(e){
        var str = e.target.value;
        isCollateral2 = 'No';
        if(str == 'Y'){
            isCollateral2 = 'Yes';
        }
        var value = this.state.valueaddress;
        value.collateral = str;
        this.setState(value);
        Addressvalue2 = this.state.valueaddress;
        flag = true
    }
    onChangeAddress(e){
        var str = e.target.value;
        mainaddress2 = str;
        var value = this.state.valueaddress;
        value.mainaddress = str;
        this.setState(value);
        Addressvalue2 = this.state.valueaddress;
        flag = true
    }
    onChangeOwnershipStatus(e){
        var str = e.target.value;
        var value = this.state.valueaddress;
        value.ownershipstatus = str;
        this.setState(value);
        Addressvalue2 = this.state.valueaddress;
        ownershipstatus2 = '';
        var filterownershipstatus = this.props.listownershipstatus.filter( (item) => {
            return item.id == e.target.value
        })
        filterownershipstatus.map(function (item) {
            ownershipstatus2 = item.name;
        })
        flag = true
    }

    OnChangeProvince(e){
        var str = e.target.value;
        var value = this.state.valueaddress;
        value.province = str;
        this.state.valueProv = str;
        this.setState(value);
        Addressvalue2 = this.state.valueaddress;
        var filterprovince = this.props.listprovince.filter( (item) => {
            return item.locationCode == e.target.value
        })
        provincename2= '';
        filterprovince.map(function (item) {
            provincename2 = item.locationName;
        })
        flag = true
    }
    onChangePostalCode(e){
        var str = e.target.value;
        postalcode2 = str;
        var value = this.state.valueaddress;
        value.postalcode = str;
        this.setState(value);
        Addressvalue2 = this.state.valueaddress;
        flag = true
    }
    onChangeUntil2(e){
        console.log(e.target.value)
        if(e.target.value==1)
            this.setState({
                valueUntil2: true
            });
        else {
            this.setState({
                valueUntil2: false
            });
        }
    }

    setEntity() {
        var entity = this.props.dataaddress;
        if (typeof entity !== "undefined" && !flag){
            this.state.valueaddress.mainaddress = entity.secondaddress
            this.state.valueaddress.province = entity.secondprovinceid
            this.state.valueProv = entity.secondprovinceid
            idcity = entity.secondidregencies
            iddistrict = entity.secondiddistrict
            this.state.valueaddress.postalcode = entity.secondpostalcode
            this.state.valueaddress.ownershipstatus = entity.secondownershipstatus
            this.state.valueaddress.collateral = entity.secondusedforcollateral
            mainaddress2 = entity.secondaddress
            provincename2 = entity.provincesecond.locationName
            postalcode2 = entity.secondpostalcode
            ownershipstatus2 = '';
            var filterownershipstatus = this.props.listownershipstatus.filter( (item) => {
                return item.id == e.target.value
            })
            filterownershipstatus.map(function (item) {
                ownershipstatus2 = item.name;
            })
            isCollateral2 = 'No';
            if(entity.secondusedforcollateral == 'Y'){
                isCollateral2 = 'Yes';
            }
            Addressvalue2 = this.state.valueaddress
        }

        flag = false;
    }
    
    render(){
        this.setEntity()
        return(
            <div>
                <br/>
                <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                    <div className="inputGroup-sizing-default">
                                <h4 style={{float:"left"}}><b>{LanguageStore.translate('Additional Address')}</b></h4>
                                <textarea rows="5" placeholder="Full Address" 
                                name="currentAddress"
                                onChange={this.onChangeAddress.bind(this)} value={this.state.valueaddress.mainaddress}
                                 className="form-control input-md" required  data-message="Please specify your address"
                                id="example-textarea" data-minlength="10" data-maxLength="255">
                                </textarea>
                          
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                               <h4 style={{float:"left"}}><b>{LanguageStore.translate('Province')}</b></h4>

                            <select className="form-control input-lg"
                                    data-smart-validate-input="" data-required=""
                                    name="province" defaultValue={""} value={this.state.valueaddress.province}
                                    onChange={this.OnChangeProvince.bind(this)}
                            >
                                <option value="0" selected={true}>{LanguageStore.translate('Choose')}</option>
                                {

                                    this.props.listprovince.map(function (item) {
                                        return (
                                            <option key={item.locationCode} value={item.locationCode}>{item.locationName}</option>

                                        )
                                    })}

                            </select>

                           
                            </div>
                        </div>
                      </div>
                    </div>  
                <TypeCity
                    idcity={idcity}
                    iddistrict={iddistrict}
                    no={'2'}
                    DivState={this.state.valueProv}
                    onChangeAddress= {this.OnChangeProvince.bind(this)}
                />
                    <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                             <h4  style={{float:"left"}}><b>{LanguageStore.translate('Postal')}</b></h4>
                                 <input className="form-control input-lg"
                                        placeholder="Postal Code" type="number"
                                        name="postalCode"
                                        onChange={this.onChangePostalCode.bind(this)}
                                        data-smart-validate-input="" value={this.state.valueaddress.postalcode}
                                        data-required=""data-minlength="3" data-minlength="5"/>
                                    </div>
                                </div>
                                </div>
                            </div>   
                            <div className="row" >
                                <div className="col-sm-6">
                                    <div className="form-group">
                                         <div className="inputGroup-sizing-default">                    
                                                    <h4 ><b>{LanguageStore.translate('Ownership Status')}</b></h4>
                                                <select className="form-control input-lg"
                                                    data-smart-validate-input="" data-required="" value={this.state.valueaddress.ownershipstatus}
                                                    name="dropdown" onChange={this.onChangeOwnershipStatus.bind(this)} defaultValue={"0"}>
                                                    <option value="" selected={true}>{LanguageStore.translate('Choose')}</option>
                                                    {
                                                        this.props.listownershipstatus.map(function (item) {
                                                            return (
                                                                <option key={item.id} value={item.id}>{LanguageStore.translate(item.name)}</option>

                                                            )
                                                        })}
                                                </select> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div className="row" >
                                    <div className="col-sm-6">
                                    <div className="form-group">
                                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Has been used as collateral elsewhere')}</b></h4>
                                        <br/>
                                        <div className="col-xs-4 col-lg-8">
                                    
                                                <div className="inputGroup-sizing-default">
                                                    <label className="radio state-error">
                                                    <input type="radio" name="radio1s"
                                                        onChange={this.onchangecollateral.bind(this)} checked={this.state.valueaddress.collateral === 'Y'}
                                                        value="Y"/>
                                                        {LanguageStore.translate('Yes')}</label>
                                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <label className="radio">
                                                    <input type="radio" name="radio1s"
                                                        onChange={this.onchangecollateral.bind(this)} checked={this.state.valueaddress.collateral === 'N'}
                                                        value="N"/>
                                                        {LanguageStore.translate('No')}</label>
                                                </div>
                                         </div>
                                     </div>
                                </div>
                             
                            </div> 
                                 <SelectUntil 
                                    DivState={this.state.valueUntil2}
                                    onChangeAddress = {this.props.onChangeAddressAdditional.bind(this)}
                                />
                                <br/>
                   </div>
        )
        
    }
}