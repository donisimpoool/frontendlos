import React from 'react' 

export default class SelectUntil extends React.Component{ 
    
    render(){ 
        let  maxOffset = 25;
        let thisYear = (new Date()).getFullYear();
        let allYears = [];
        for(let x = 0; x <= maxOffset; x++) {
            allYears.push(thisYear - x)
        }
    
        const untilyearList = allYears.map((x) => {return(<option key={x}>{x}</option>)});

        if(this.props.DivState === true){
            return(
                <div>
                     <br/>
                    <div className="row">
                        <div className="col-md-8">
                            <div className="form-group">
                                <div className="input-group col-sm-6">                          
                                        <h4 ><b>Until</b></h4>
                                        <select className="form-control input-lg" required
                                            data-smart-validate-input="" data-required=""
                                            onChange={this.props.onChangeAddress.bind(this)}
                                            name="collateralYearEnd" defaultValue={"0"}>
                                             <option value="0" disabled={true}>Select Until</option>
                                            {untilyearList}
                                        </select>    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            );
        } else { 
            return <div></div>
        } 

        
    }
}