import React from 'react'
import TypeCar from './TypeCar';



export default class VehicleMob extends React.Component{ 
        constructor(props){
            super(props);
            this.state = { 
                
                valueCar:'',
            }
          }
        OnChangeCar(event){
            this.setState({
                valueCar: event.target.value
            });
        }
        
    render(){
        return(
            <div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>Car Brand</b></h4>
                                <input className="col-xs-4 col-md-12 input-lg" required
                                        onChange={this.OnChangeCar.bind(this)} value={this.state.valueCar} 
                                        placeholder="Select a the Car.." type="text" autoComplete="off"
                                        name="brand" list="brand"
                                    />
                                    <datalist id="brand">
                                    <option value="Toyota">Toyota</option>
                                    <option value="Daihatsu">Daihatsu</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Mitsubishi">Mitsubishi</option>
                                    <option value="Nisssan">Nisssan</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Mazda">Mazda</option>
                                  
                                </datalist> 
                            {/* <input className="col-xs-4 col-md-12 input-lg" required 
                                    placeholder="Select a the Car..." type="text" 
                                    name="brand" autoComplete="off"
                                    onChange={this.props.onVehicle.bind(this)}
                                    list="listMobil"/>
                                    <datalist id="listMobil">
                                    {brandMobil.map(function(brandMobil){
                                            return <option value={brandMobil.key} key={brandMobil.key}>{brandMobil.value}</option>
                                        })}
                                </datalist> */}
                            </div>
                        </div>
                    </div>
                </div>   
                {/* <br/> */}
                <TypeCar
                        DivState={this.state.valueCar}/>        
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                               <h4 className="input" style={{textAlign:"left"}}><b>Type</b></h4>
                                  <select className="form-control input-lg"
                                        data-smart-validate-input="" required
                                        name="vehicle.type"
                                        onChange={this.props.onVehicle.bind(this)}
                                        defaultValue={"0"}>
                                            <option value="0" disabled={true}>List of Type</option>    
                                            <option> Automatic Transmission</option>
                                            <option> Manual Transmission</option>
                                        </select>    
                            </div>
                        </div>
                    </div>
                </div>                  
            </div>
        )
        
    }
}