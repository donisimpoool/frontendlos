import React from 'react'
import modelhonda from '../../../../../components/forms/commons/modelhonda';
import KategoriMotor from '../../../../../components/forms/commons/KategoriMotor';
import modelKawasaki from '../../../../../components/forms/commons/modelKawasaki';

export default class Kawasaki extends React.Component{ 

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
                                        placeholder="Select a the Model..." type="text" name="modelKawasaki" list="modelKawasaki"/>
                                        <datalist id="modelKawasaki">
                                        {modelKawasaki.map(function(modelKawasaki){
                                        return <option value={modelKawasaki.key} key={modelKawasaki.key}>{modelKawasaki.value}</option>
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
            </div>
        )
        
    }
}