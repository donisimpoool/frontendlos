import React from 'react'
import ChildrenDiv from '../step/family/numberOfChildrenDiv'
import Spouse from '../step/family/Spouse'
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class Family extends React.Component{  
    constructor(){
        super()
        this.state={
            summary: true
        }
    }
    render(){
        // console.log("MARITAL STATS", this.props.marital_status)
        let numberOfChildren = "";
        let spouse = "";
        if(this.props.marital_status == "Divorced" || this.props.marital_status == "Widow"){
            numberOfChildren = 
                <ChildrenDiv 
                    summary = {this.state.summary}
                    family = {this.props.family}
                />
            // console.log("DIVORCED / WIDOW")
        } else if(this.props.marital_status == "Married"){
            spouse = 
                <Spouse 
                    summary = {this.state.summary}
                    family = {this.props.family}
                />;
            numberOfChildren = 
                <ChildrenDiv 
                    summary = {this.state.summary}
                    family = {this.props.family}
                />
            // console.log("Married")
        }

        return(
            <div>
                {spouse}
                {numberOfChildren} 
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Emergency Contact Name')}</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.emergencycontact}
                        </h4>
                    </div>
                </div> 
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Address Emergency Contact')}</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.addressemergencycontact}
                        </h4>
                    </div>
                </div> 
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>{LanguageStore.translate('Mobile Phone Emergency Contact')}</b></h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.mobilephoneemergencycontact}
                        </h4>
                    </div>
                </div> 
                <br />                          
            </div>
            
        )
        
    }
}