import React from 'react'
import TypeYogyaDis from './TypeYogyaDis';

export default class YogyaCity extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            
            valueYogya:'',
        }
      }
    OnChangeYogyaCity(event){
        this.props.onChangeAddress(event)
        this.setState({
            valueYogya: event.target.value
        });
    }
    render(){
      
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>City</b></h4>
                            <input className="col-xs-4 col-md-12 input-lg" required
                                    onChange={this.OnChangeYogyaCity.bind(this)} value={this.state.valueYogya} 
                                    placeholder="Select a the City..." type="text" autoComplete="off"
                                    name="city" list="yogyaCity"
                                />
                                <datalist id="yogyaCity">
                                  <option value="YOGYAKARTA">YOGYAKARTA</option>
                                  <option value="GUNUNG KIDUL">GUNUNG KIDUL</option>
                                  <option value="BANTUL">BANTUL</option>
                                  <option value="SLEMAN">SLEMAN</option>
                                  <option value="KULON PROGO">KULON PROGO</option>
                              </datalist> 
                            </div>
                        </div>
                    </div>
                </div>   
                <TypeYogyaDis 
                onChangeAddress= {this.props.onChangeAddress.bind(this)}
                DivState={this.state.valueYogya}
                />
                <br/>  
            </div>
            
        )
        
    }
}