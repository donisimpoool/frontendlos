import React from 'react'
import DenpasarDIstrict from '../../../../../components/forms/commons/DenpasarDIstrict';



export default class Denpasar extends React.Component{ 
  
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
                                        placeholder="Select a the district..." type="text" name="district" list="DenpasarDIstrict"/>
                                        <datalist id="DenpasarDIstrict">
                                        {DenpasarDIstrict.map(function(DenpasarDIstrict){
                                        return <option value={DenpasarDIstrict.key} key={DenpasarDIstrict.key}>{DenpasarDIstrict.value}</option>
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