import React from 'react'
import slemandis from '../../../../../components/forms/commons/slemandis';


export default class Sleman extends React.Component{ 
  
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
                                        placeholder="Select a the district..." type="text" name="district" list="JogjaPusat"/>
                                        <datalist id="JogjaPusat">
                                        {slemandis.map(function(slemandis){
                                        return <option value={slemandis.key} key={slemandis.key}>{slemandis.value}</option>
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