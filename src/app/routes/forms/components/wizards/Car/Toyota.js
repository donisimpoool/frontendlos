import React from 'react'
import ToyotaMod from '../../../../../components/forms/commons/ToyotaMod';
import KategoriMobil from '../../../../../components/forms/commons/KategoriMobil';

export default class Toyota extends React.Component{ 

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
                                        placeholder="Select a the Model..." type="text" name="toyota" list="ToyotaMod"/>
                                        <datalist id="ToyotaMod">
                                        {ToyotaMod.map(function(ToyotaMod){
                                        return <option value={ToyotaMod.key} key={ToyotaMod.key}>{ToyotaMod.value}</option>
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
                                    placeholder="Select a the Car..." type="text" name="KategoriMobil" list="KategoriMobil"/>
                                    <datalist id="KategoriMobil">
                                    {KategoriMobil.map(function(KategoriMobil){
                                            return <option value={KategoriMobil.key} key={KategoriMobil.key}>{KategoriMobil.value}</option>
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