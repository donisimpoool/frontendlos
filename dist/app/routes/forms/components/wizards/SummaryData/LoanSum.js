import React from 'react'
import { updateRealEstate } from '../actions/collateralAction';
import {loanvalue} from "../step/Loan";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class LoanSum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loanapp:[]
        }
    }

    // componentDidMount(){
    //     this.state.loanapp = loanvalue;
    //     console.log("loansum")
    // }
    render(){
        var numamount = this.props.loanAmount;
        numamount = numamount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
        return(
            <div>
                 <div className="row">
                    <div className="col-md-6">
                      <h4 ><b>{LanguageStore.translate('Loan Product')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {this.props.loanName}
                      </h4>
                    </div>
                  </div>  
                 <br />
                 <div className="row" >
                    <div className="col-sm-6">
                      <h4 ><b>{LanguageStore.translate('Loan Amount')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4 style={{float:"center"}}>
                          {numamount}
                      </h4>
                    </div>
                 </div>   
                 <br />
                 <div className="row" >
                    <div className="col-sm-6">
                      <h4 ><b>{LanguageStore.translate('Purpose of Loan')}</b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4>
                          {LanguageStore.translate(this.props.purposeofloan)}
                      </h4>
                    </div>
                 </div>  
                 <br />
                 <div className="row" >
                    <div className="col-sm-6">
                      <h4 ><b>Tenor<span className="text-danger col-xs">({LanguageStore.translate('Months')})</span></b></h4>
                    </div>
                    <div className="col-md-6">
                      <h4 style={{float:"center"}}>
                          {this.props.tenor}
                      </h4>
                    </div>
                 </div>            
                 <br />
               </div>
            
        )
        
    }
}