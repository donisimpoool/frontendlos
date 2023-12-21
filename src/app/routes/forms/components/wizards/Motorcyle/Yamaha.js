import React from 'react'
import modelYamaha from '../../../../../components/forms/commons/modelYamaha';
import KategoriMotor from '../../../../../components/forms/commons/KategoriMotor';

export default class Yamaha extends React.Component{ 

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
                                        placeholder="Select a the Model..." type="text" name="yamaha" list="modelYamaha"/>
                                        <datalist id="modelYamaha">
                                        {modelYamaha.map(function(modelYamaha){
                                        return <option value={modelYamaha.key} key={modelYamaha.key}>{modelYamaha.value}</option>
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
                                    placeholder="Select a the Car..." type="text" name="KategoriMotor2" list="KategoriMotor"/>
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