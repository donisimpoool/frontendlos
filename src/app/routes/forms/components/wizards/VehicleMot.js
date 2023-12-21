import React from 'react'
import TypeMotor from './TypeMotor';
// import brandMotor from '../../../../components/forms/commons/brandMotor';
// import modelhonda from '../../../../components/forms/commons/modelhonda';

export default class VehicleMot extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            
            valueMot:'',
        }
      }
    OnChangeMotorCyle(event){
        this.setState({
            valueMot: event.target.value
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
                            <h4 className="input" style={{textAlign:"left"}}><b>Motorcyle Brand</b></h4>
                            <input className="col-xs-4 col-md-12 input-lg" required
                                        onChange={this.OnChangeMotorCyle.bind(this)} value={this.state.valueMot} 
                                        placeholder="Select a the Motorcyle.." type="text" autoComplete="off"
                                        name="brand" list="brand"
                                    />
                                    <datalist id="brand">
                                    <option value="Yamaha">Yamaha</option>
                                    <option value="Suzuki">Suzuki</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Kawasaki">Kawasaki</option>
                                  
                                </datalist> 
                            </div>
                        </div>
                    </div>
                </div>   
                {/* <br/> */}
                <TypeMotor
                        DivState={this.state.valueMot}/>   
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                               <h4 className="input" style={{textAlign:"left"}}><b>Type</b></h4>
                                    <select className="form-control input-lg"
                                        data-smart-validate-input="" data-required=""
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