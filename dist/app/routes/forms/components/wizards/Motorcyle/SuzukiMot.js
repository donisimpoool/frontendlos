import React from 'react'
import KategoriMotor from '../../../../../components/forms/commons/KategoriMotor';
import modelSuzukiMot from '../../../../../components/forms/commons/modelSuzukiMot';

export default class SuzukiMot extends React.Component{ 

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
                                        placeholder="Select a the Model..." type="text" name="yamaha" list="modelSuzukiMot"/>
                                        <datalist id="modelSuzukiMot">
                                        {modelSuzukiMot.map(function(modelSuzukiMot){
                                        return <option value={modelSuzukiMot.key} key={modelSuzukiMot.key}>{modelSuzukiMot.value}</option>
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