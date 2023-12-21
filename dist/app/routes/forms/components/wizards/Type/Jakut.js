import React from 'react'
import jakutDistrict from '../../../../../components/forms/commons/jakutDistrict';


export default class Jakut extends React.Component{ 
  
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
                                        placeholder="Select a the district..." type="text" name="district" list="jakutDistrict"/>
                                        <datalist id="jakutDistrict">
                                        {jakutDistrict.map(function(jakutDistrict){
                                        return <option value={jakutDistrict.key} key={jakutDistrict.key}>{jakutDistrict.value}</option>
                                    })}
                              </datalist>
                            </div>
                        </div>
                      </div>
                    </div>  
                <br/>  
            </div>
        )
        
    }
}