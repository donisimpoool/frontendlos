import React from 'react'
import TypeTgrDistrict from './TypeTgrDistrict';

export default class BantenCity extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            // collateralId:"",
            valueBanten:'',
            variabelkota:[]
        }
      }
    OnChangeBantenCity(event){
        this.props.onChangeAddress(event)
        this.setState({
            valueBanten: event.target.value

        });
    }
    render(){
        this.state.variabelkota = this.props.listkota;
        var listfilter = this.state.variabelkota;
        console.log("lisfilter : "+listfilter);
        return(
            <div>
             <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>City</b></h4>
                            <input className="col-xs-4 col-md-12 input-lg" required
                                     onChange={this.OnChangeBantenCity.bind(this)} value={this.state.valueBanten}
                                    placeholder="Select a the City..." type="text" autoComplete="off"
                                    name="city" list="Bantenlist"
                                />
                                <datalist id="Bantenlist">
                                <option value="Tangerang">Tangerang</option>
                                  <option value="Tangerang Selatan">Tangerang Selatan</option>
                              </datalist> 
                            </div>
                        </div>
                    </div>
                </div>   
                <TypeTgrDistrict 
                    DivState={this.state.valueBanten}
                    onChangeAddress= {this.props.onChangeAddress.bind(this)}
                />
                <br/>  
            </div>
            
        )
        
    }
}