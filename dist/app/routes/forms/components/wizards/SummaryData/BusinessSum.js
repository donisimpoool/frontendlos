import React from 'react'
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class Business extends React.Component{
    
    render(){ 
        return(
            <div>
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Company')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.companyname}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Address Company')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.companyaddress}
                        </h4>
                    </div>
                </div> 
                <br/>
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Province')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.provincename}
                        </h4>
                    </div>
                </div> 
                <br/>
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('City')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.namecity3}
                        </h4>
                    </div>
                </div>  
                <br/>
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('District')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.namekecataman3}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Division')}</b></h4>
                     </div>
                     <div className="col-md-6">
                        <h4>
                            {this.props.divisionname}
                        </h4>
                     </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Position')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.positionname}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Duration')}</b><label>&nbsp;( {LanguageStore.translate('Months')} )</label></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.durationtime}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Number Of Employee')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.totalnumberemp}
                        </h4>
                    </div>
                </div> 
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4  style={{float:"left"}}><b>{LanguageStore.translate('Business line or industry')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.businessline}
                        </h4>
                    </div>
                </div> 
                <br />                   
                                         
            </div>
            
        )
        
    }
}