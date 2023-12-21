import React from 'react'
import NumberFormat from 'react-number-format'

var maritalstatus=''
export default class Spouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            family: {},

        }
    }

    render(){
        if(typeof this.props.maritalstatus !== "undefined"){
            maritalstatus = this.props.maritalstatus;
        }
        console.log("maritalstatus : "+maritalstatus)
        if(maritalstatus == 'Married'){
            return(
                <div>
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Spouse Name</b></h4>
                                    <input className="form-control input-lg"
                                                placeholder="Enter your input" type="text" name="spouseName"
                                                data-smart-validate-input="" data-required="" data-minlength="4"
                                                data-message="Please specify your spouse"/> 
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Mobile Phone Spouse </b></h4>
                                    {/* <input className="form-control input-lg"
                                                data-smart-masked-input="+62 (999) 999-9999"
                                                data-mask-placeholder="X" onChange={this.props.onChangeFamily.bind(this)}
                                                placeholder="Phone Number of Spouse"
                                                type="number" name="spouseMobile"  
                                                data-smart-validate-input="" data-required=""
                                                data-minlength="10"/> */}
                                    <NumberFormat className="form-control input-lg" data-minlength="4"
                                    data-required="" placeholder="Phone Number of Loan Applicant"
                                    format="### ### ####" mask="_" name="spouseMobile"  data-minlength="10"
                                     required />
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Spouse Place of Birth</b></h4>
                                    <input className="form-control input-lg"
                                            placeholder="Spouse Place of Birth" type="text" name="spousePlaceOfBirth"
                                            data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="255"
                                            data-message="Please specify your spouse place of birth"/>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Spouse Date of Birth</b></h4>
                                        <input type="date" className="form-control" name="spouseDateOfBirth"
                                                id="datepicker" placeholder= "dd/mm/yyyy"
                                                data-smart-validate-input="" data-required=""
                                                data-message="Please specify your spouse date of birth"/> 
                                </div>
                            </div>
                        </div>
                    </div> 
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Spouse ID(KTP)</b></h4>
                                        <input className="form-control input-lg"
                                                placeholder="Enter your Spouse ID" type="number"
                                                name="spouseIdNum" data-smart-validate-input=""
                                                required minLength="16" maxLength="16"
                                                data-message-required="We need your National ID"/>   
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            )
        }else{
            return(
                <div>
                </div>
            )
        }
        // else {
        //     return(
        //         <div>
        //             <div className="row" >
        //                 <div className="col-sm-6">
        //                     <div className="form-group">
        //                         <div className="inputGroup-sizing-default">
        //                             <h4  style={{float:"left"}}><b>Spouse Name</b></h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <h4>
        //                         {this.props.family.spouseName!=undefined ? this.props.family.spouseName : "Empty"}
        //                     </h4>
        //                 </div>
        //             </div>
        //             <br />
        //             <div className="row" >
        //                 <div className="col-sm-6">
        //                     <div className="form-group">
        //                         <div className="inputGroup-sizing-default">
        //                             <h4  style={{float:"left"}}><b>Mobile Phone Spouse </b></h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <h4>
        //                         {this.props.family.spouseMobile!=undefined ? this.props.family.spouseMobile : "Empty"}
        //                     </h4>
        //                 </div>
        //             </div>
        //             <br />
        //             <div className="row" >
        //                 <div className="col-sm-6">
        //                     <div className="form-group">
        //                         <div className="inputGroup-sizing-default">
        //                             <h4  style={{float:"left"}}><b>Spouse Place of Birth</b></h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <h4>
        //                         {this.props.family.spousePlaceOfBirth!=undefined ? this.props.family.spousePlaceOfBirth : "Empty"}
        //                     </h4>
        //                 </div>
        //             </div>
        //             <br />
        //             <div className="row" >
        //                 <div className="col-sm-6">
        //                     <div className="form-group">
        //                         <div className="inputGroup-sizing-default">
        //                             <h4  style={{float:"left"}}><b>Spouse Date of Birth</b></h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <h4>
        //                         {this.props.family.spouseDateOfBirth!=undefined ? this.props.family.spouseDateOfBirth : "Empty"}
        //                     </h4>
        //                 </div>
        //             </div>
        //             <br />
        //             <div className="row" >
        //                 <div className="col-sm-6">
        //                     <div className="form-group">
        //                         <div className="inputGroup-sizing-default">
        //                             <h4  style={{float:"left"}}><b>Spouse ID(KTP)</b></h4>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="col-md-6">
        //                     <h4>
        //                         {this.props.family.spouseIdNum!=undefined ? this.props.family.spouseIdNum : "Empty"}
        //                     </h4>
        //                 </div>
        //             </div>
        //             <br />
        //         </div>
        //     )
        // }
    }
}