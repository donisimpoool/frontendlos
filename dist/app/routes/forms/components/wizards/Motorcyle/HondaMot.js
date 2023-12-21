import React from 'react'
import modelhonda from '../../../../../components/forms/commons/modelhonda';
import KategoriMotor from '../../../../../components/forms/commons/KategoriMotor';

export default class HondaMot extends React.Component{ 

    render(){
        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>Model</b></h4>
                            <input className="col-xs-4 col-md-12 input-lg" required 
                                        autoComplete="off"
                                        placeholder="Select a the Model..." type="text" name="modelhonda" list="modelhonda"/>
                                        <datalist id="modelhonda">
                                        {modelhonda.map(function(modelhonda){
                                        return <option value={modelhonda.key} key={modelhonda.key}>{modelhonda.value}</option>
                                    })}
                              </datalist>
                            </div>
                        </div>
                    </div>
                </div>   
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>Style</b></h4>
                            <input className="col-xs-4 col-md-12 input-lg" required 
                                    placeholder="Select a the Motor..." type="text" name="KategoriMotor" list="KategoriMotor"/>
                                    <datalist id="KategoriMotor">
                                    {KategoriMotor.map(function(KategoriMotor){
                                            return <option value={KategoriMotor.key} key={KategoriMotor.key}>{KategoriMotor.value}</option>
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