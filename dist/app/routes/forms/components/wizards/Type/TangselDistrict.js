import React from 'react'

import tgrdistrict from '../../../../../components/forms/commons/tgrdistrict';
import tangsel from '../../../../../components/forms/commons/tangsel';

export default class TangselDistrict extends React.Component{ 
    render(){
      
        return(
            <div>
             <br/>
             <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                                    <h4 style={{float:"left"}}><b>District</b></h4>
                            
                                    <input className="col-xs-4 col-md-12 input-lg" required 
                                        autoComplete="off"
                                        onChange= {this.props.onChangeAddress.bind(this)}
                                        placeholder="Select a the district..." type="text" name="district" list="tangsel"/>
                                        <datalist id="tangsel">
                                        {tangsel.map(function(tangsel){
                                        return <option value={tangsel.key} key={tangsel.key}>{tangsel.value}</option>
                                    })}
                              </datalist>
                            </div>
                        </div>
                      </div>
                    </div>  
            </div>
            
        )
        
    }
}