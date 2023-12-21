import React from 'react'


export default class BantenCity2 extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            // collateralId:"",
            valueJkts:'',
        }
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
                                    placeholder="Select a the City..." type="text" autoComplete="off"
                                    name="city" list="Bantenlist2"
                                    onChange={this.props.OnChangeProvinces.bind(this)}
                                />
                                 <datalist id="Bantenlist2">
                                  <option value="Tangerang">Tangerang</option>
                                  <option value="Tangerang Selatan">Tangerang Selatan</option>
                              </datalist> 
                             
                            </div>
                        </div>
                    </div>
                </div>   
               
                {/* <TypeJktDistrict  DivState={this.state.valueJkt}/> */}
                <br/>
            </div>
            
        )
        
    }
}