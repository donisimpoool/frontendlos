import React from 'react'


export default class BaliCity2 extends React.Component{ 
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
                                    name="Bali2" list="Bali2"
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
                <br/>
            </div>
            
        )
        
    }
}