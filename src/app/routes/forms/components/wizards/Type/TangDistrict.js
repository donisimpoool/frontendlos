import React from 'react'

import tgrdistrict from '../../../../../components/forms/commons/tgrdistrict';
import tgrUrban from '../../../../../components/forms/commons/tgrUrban';

export default class TangDistrict extends React.Component{ 
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
                                        placeholder="Select a the district..." type="text" name="district" list="tgrdistrict"/>
                                        <datalist id="tgrdistrict">
                                        {tgrdistrict.map(function(tgrdistrict){
                                        return <option value={tgrdistrict.key} key={tgrdistrict.key}>{tgrdistrict.value}</option>
                                    })}
                              </datalist>
                            </div>
                        </div>
                      </div>
                    </div>  
                    <br/>
                    <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                        <div className="inputGroup-sizing-default">
                                    <h4 style={{float:"left"}}><b>Urban Community</b></h4>
                            
                                    <input className="col-xs-4 col-md-12 input-lg" required 
                                       autoComplete="off"
                                        placeholder="Select a the urban community..." type="text" name="district" list="tgrUrban"/>
                                        <datalist id="tgrUrban">
                                        {tgrUrban.map(function(tgrUrban){
                                        return <option value={tgrUrban.key} key={tgrUrban.key}>{tgrUrban.value}</option>
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