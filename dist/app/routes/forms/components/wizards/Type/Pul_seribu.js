import React from 'react'
import TypeJktDistrict from './TypeJktDistrict';


export default class Pul_seribu extends React.Component{ 
    constructor(props){
        super(props);
        this.state = { 
            // collateralId:"",
            valueSeribu:'',
        }
      }
    onChangePulSeribu(event){
        this.props.onChangeAddress.bind(this)
        this.setState({
            valueSeribu: event.target.value
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
                            <h4 className="input" style={{textAlign:"left"}}><b>District</b></h4>
                            <select className="form-control input-lg " 
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your district"
                                        name="district" defaultValue={"0"}
                                        onChange={
                                            // this.onChangePulSeribu.bind(this)
                                            this.props.onChangeAddress.bind(this)
                                            } value={this.state.valueSeribu}>
                                    <option value="0" disabled={true}>Select District</option>                                                                
                                    <option>KEPULAUAN SERIBU SELATAN</option>
                                    <option>KEPULAUAN SERIBU UTARA</option>
                                    </select> 
                            </div>
                        </div>
                    </div>
                </div>
           
            </div>
        )
        
    }
}