import React from 'react'
import ChildrenDiv from './family/numberOfChildrenDiv'
import Spouse from './family/Spouse'
import NumberFormat from 'react-number-format'
import {Addressvalue2} from "./Address2";
import {maritalstatus} from "./Personal";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export var familyvalue = {
    contactemergency: "",
    addressemergencycontact:"",
    mobileemergency:"",
    mothername:""};
export var contactemergency='',addressemergencycontact='',mobileemergency='',mothername='';
var flag = false;
export default class Family extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
          family: {},
          emergencyAddress:{},
            valuefamily:{
                contactemergency: "",
                addressemergencycontact:"",
                mobileemergency:"",
                mothername:""
            }

        }
      }
      changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
    }

    onchangeemergencycontact(e){
        var str = e.target.value;
        contactemergency = str;
        var value = this.state.valuefamily;
        value.contactemergency = str;
        this.setState(value);
        familyvalue = this.state.valuefamily;
        flag = true;
    }

    onchangeaddressemergencycontact(e){
        var str = e.target.value;
        addressemergencycontact = str;
        var value = this.state.valuefamily;
        value.addressemergencycontact = str;
        this.setState(value);
        familyvalue = this.state.valuefamily;
        flag = true;
    }
    onchangemobilephoneemergencycontact(e){
        var str = e.target.value;
        mobileemergency = str;
        var value = this.state.valuefamily;
        value.mobileemergency = str;
        this.setState(value);
        familyvalue = this.state.valuefamily;
        flag = true;
    }
    onmothername(e){
        var str = e.target.value;
        mothername = str
        var value = this.state.valuefamily;
        value.mothername = str
        this.state(value)
        familyvalue = this.state.valuefamily;
        flag = true;
    }
    setEntity() {
        var entity = this.props.datafamily;
        if (typeof entity !== "undefined" && !flag){
            this.state.valuefamily.contactemergency = entity.contactemergency
            this.state.valuefamily.addressemergencycontact = entity.addressemergencycontact
            this.state.valuefamily.mobileemergency = entity.mobileemergency
            this.state.valuefamily.mothername = entity.mothername
            contactemergency = entity.contactemergency
            addressemergencycontact = entity.addressemergencycontact
            mobileemergency = entity.mobileemergency
            familyvalue = this.state.valuefamily;
            mothername = entity.mothername
        }
        flag = false;
    }
    render(){
        this.setEntity()
        let numberOfChildren = "";
        let spouse = "";
        return(

            <div>
                <Spouse
                    // maritalstatus={""}
                />
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Mother Name')} </b></h4>
                                <input className="form-control input-lg"
                                       onChange={this.onmothername.bind(this)}
                                       name="MotherName"
                                       placeholder={LanguageStore.translate('Mother Name')} type="text" value={this.state.valuefamily.mothername}
                                       data-smart-validate-input="" data-required="" data-minlength="4"
                                       data-message="Please specify Mother Name"/>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4  style={{float:"left"}}><b>{LanguageStore.translate('Emergency Contact Name')} </b></h4>
                                <input className="form-control input-lg" 
                                    onChange={this.onchangeemergencycontact.bind(this)}
                                    name="emergencyContactPersonName"
                                    placeholder={LanguageStore.translate('Emergency Contact Name')} type="text" value={this.state.valuefamily.contactemergency}
                                    data-smart-validate-input="" data-required="" data-minlength="4" 
                                    data-message="Please specify Emergency Contact"/>
                                </div>
                            </div>
                            </div>
                        </div> 
                        <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Address Emergency Contact')}</b></h4>
                                    <textarea rows="5" placeholder={LanguageStore.translate('Address Emergency Contact')}
                                    onChange={this.onchangeaddressemergencycontact.bind(this)}
                                    name="currentAddress" value={this.state.valuefamily.addressemergencycontact}
                                    className="form-control input-md" required  data-message="Please specify your address emergency"
                                    id="example-textarea" data-minlength="10" data-maxLength="255">
                                    </textarea>
                                    {/* <input className="form-control input-lg" onChange={this.onChangeFamily.bind(this)}
                                        placeholder="Address Emergency Contact" type="text" name="Address Emergency Contact"
                                        data-smart-validate-input="" data-required="" data-minlength="4" 
                                        data-message="Please specify Address Emergency Contact"/> */}
                                    </div>
                                </div>
                                </div>
                            </div> 
                            <div className="row" >
                            <div className="col-sm-6">
                                <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>{LanguageStore.translate('Mobile Phone Emergency Contact')}</b></h4>
                                        <NumberFormat className="form-control input-lg" data-minlength="4"
                                        data-required="" placeholder={LanguageStore.translate('Mobile Phone Emergency Contact')}
                                        format="##########"  name="emergencyContactMobile"  maxLength="10" value={this.state.valuefamily.mobileemergency}
                                        onChange={this.onchangemobilephoneemergencycontact.bind(this)} required />
                                        </div>
                                      </div>
                                  </div>
                             </div>
                                                  
            </div>

            
        )
        
    }
}