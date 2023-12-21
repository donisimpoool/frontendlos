import React from 'react'
import jakseldis from '../../../../../components/forms/commons/jakseldis';


export default class Jaksel extends React.Component{ 
  
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
                                        placeholder="Select a the district..." type="text" name="district" list="jakseldis"/>
                                        <datalist id="jakseldis">
                                        {jakseldis.map(function(jakseldis){
                                        return <option value={jakseldis.key} key={jakseldis.key}>{jakseldis.value}</option>
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