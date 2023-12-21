import React from 'react'
import jakbarDis from '../../../../../components/forms/commons/jakbarDis';

export default class Jakbar extends React.Component{ 
  
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
                                        placeholder="Select a the district..." type="text" name="district" list="jakbarDis"/>
                                        <datalist id="jakbarDis">
                                        {jakbarDis.map(function(jakbarDis){
                                        return <option value={jakbarDis.key} key={jakbarDis.key}>{jakbarDis.value}</option>
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