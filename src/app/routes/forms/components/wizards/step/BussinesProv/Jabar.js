import React from 'react'


export default class Jabar extends React.Component{ 
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
                                    name="Jatim" list="Jatim"
                                />
                                 <datalist id="Jatim">
                                  <option value="BOGOR">BOGOR</option>
                                  <option value="BEKASI">BEKASI</option>
                                  <option value="DEPOK">DEPOK</option>
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