import React from 'react'
import TypeBali from './TypeBali';


export default class BaliCity extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            valueBali:'',
        }
      }
    OnChangeBaliCity(event){
        this.props.onChangeAddress(event)
        this.setState({
            valueBali: event.target.value
        });
    }
    render(){
      
        return(
            <div>
             {/* <br/> */}
             <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>City</b></h4>
                            <input className="col-xs-4 col-md-12 input-lg" required
                                   onChange={this.OnChangeBaliCity.bind(this)} value={this.state.valueBali} 
                                    placeholder="Select a the City..." type="text" autoComplete="off"
                                    name="city" list="Bali2"
                                />
                                 <datalist id="Bali2">
                                  <option value="Denpasar">Denpasar</option>
                                  <option value="Badung">Badung</option>
                                  <option value="Gianyar">Gianyar</option>
                                  <option value="Karangasem">Karangasem</option>
                                  <option value="Klungkung">Klungkung</option>
                                  <option value="Buleleng">Buleleng</option>
                                  <option value="Tabanan">Tabanan</option>
                              </datalist> 
                            </div>
                        </div>
                    </div>
                </div>   
                <TypeBali  
                onChangeAddress= {this.props.onChangeAddress.bind(this)}
                DivState={this.state.valueBali}
                />
                <br/>
            </div>
            
        )
        
    }
}