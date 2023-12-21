import React from 'react'
import NumberFormat from 'react-number-format';
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class PersonalSum extends React.Component{  

    render(){
        return(
            <div>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('Full Name')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.fullname}
                      </h4>
                    </div>
                 </div>  
                 <br/>
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Mobile Phone')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.mobilephone}
                      </h4>
                    </div>
                 </div>  
                 <br/>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('Landline')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.landline}
                      </h4>
                    </div>
                 </div>  
                 <br/>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('Place of Birth')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.placeofbirth}
                      </h4> 
                    </div>
                 </div>   
                 <br/>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('Date of Birth')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.dateofbirth}
                      </h4> 
                    </div>
                  </div> 
                  <br/>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('Gender')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {LanguageStore.translate(this.props.Gender)}
                      </h4>
                    </div>
                  </div> 
                  <br/>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('ID Type')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.idtype}
                      </h4>
                    </div>
                 </div>
                 <br/>
                <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('ID Number')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.idnumber}
                      </h4>
                    </div>
                 </div>
                 <br/>
                <div className="row">
                    <div className="col-md-6">
                      <h4 style={{float:"left"}}><b>{LanguageStore.translate('Education')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.education}
                      </h4>
                    </div>
                  </div>  
                  <br/> 
                 <div className="row" >
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>{LanguageStore.translate('Marital Status')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {LanguageStore.translate(this.props.maritalstatus)}
                      </h4>  
                    </div>
                 </div>  
                 <br/> 
                 <div className="row">
                    <div className="col-sm-6">
                      <h4  style={{float:"left"}}><b>Email</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.email}
                      </h4>
                    </div>
                  </div>
                  <br/>
            </div>  
        )
        
    }
}