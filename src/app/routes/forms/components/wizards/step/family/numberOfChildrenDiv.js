import React from 'react'

export default class numberOfChildrenDiv extends React.Component{
    render(){
        if(this.props.summary==undefined){
            return(
                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4  style={{float:"left"}}><b>Number of Children</b></h4>
                                <input className="form-control input-lg"min="0"
                                placeholder="Enter Number of Children" type="number"
                                name="numOfDep" data-smart-validate-input=""
                                data-required=""  onChange={this.props.onChangeFamily.bind(this)}
                                data-message-required="We need Number of Children"/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return(
                <div>
                    <div className="row" >
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4  style={{float:"left"}}><b>Number of Children</b></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <h4>
                                {this.props.family.numOfDep!=undefined ? this.props.family.numOfDep : "Empty"}
                            </h4>
                        </div>
                    </div>
                    <br/>
                </div>
                
            )
        }
    }
}