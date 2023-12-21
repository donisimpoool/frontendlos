import React from 'react'
import JktPusatDis from '../../../../../components/forms/commons/JktPusatDis';
import jktkecamatan from '../../../../../components/forms/commons/jktkecamatan';

export default class JakPusatDistrict extends React.Component{ 
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
                                        placeholder="Select a the district..." type="text" name="district" list="JktPusatDis"/>
                                        <datalist id="JktPusatDis">
                                        {JktPusatDis.map(function(JktPusatDis){
                                        return <option value={JktPusatDis.key} key={JktPusatDis.key}>{JktPusatDis.value}</option>
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
                                        placeholder="Select a the urban community..." type="text" name="district" list="jktkecamatan"/>
                                        <datalist id="jktkecamatan">
                                        {jktkecamatan.map(function(jktkecamatan){
                                        return <option value={jktkecamatan.key} key={jktkecamatan.key}>{jktkecamatan.value}</option>
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