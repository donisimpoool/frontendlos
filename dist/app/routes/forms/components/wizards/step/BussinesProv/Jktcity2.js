import React from 'react'



export default class Jktcity2 extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            // collateralId:"",
            valueJkt:'',
        }
      }
    OnChangeJktcity(event){
        this.props.OnChangeProvinces(event)
        this.setState({
            valueJkt: event.target.value
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
                                    onChange={this.OnChangeJktcity.bind(this)} value={this.state.valueJkt} 
                                    placeholder="Select a the City..." type="text" autoComplete="off"
                                    name="city" list="listJkt"
                                />
                                <datalist id="listJkt">
                                  <option value="Jakarta Pusat">Jakarta Pusat</option>
                                  <option value="Kepulauan Seribu">Kepulauan Seribu</option>
                                  <option value="Jakarta Utara">Jakarta Utara</option>
                                  <option value="Jakarta Selatan">Jakarta Selatan</option>
                                  <option value="Jakarta Timur">Jakarta Timur</option>
                                  <option value="Jakarta Barat">Jakarta Barat</option>
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