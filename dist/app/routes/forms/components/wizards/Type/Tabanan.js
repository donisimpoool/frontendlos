import React from 'react'
import tabanans from '../../../../../components/forms/commons/tabanans';


export default class Tabanan extends React.Component{ 
  
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
                                        placeholder="Select a the district..." type="text" name="district" list="tabanans"/>
                                        <datalist id="tabanans">
                                        {tabanans.map(function(tabanans){
                                        return <option value={tabanans.key} key={tabanans.key}>{tabanans.value}</option>
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