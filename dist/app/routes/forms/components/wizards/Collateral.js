import React from 'react'
import CollateralBank from './CollateralBank'
import CollateralRealEstate from './CollateralRealEstate'
import CollateralVehicle from './CollateralVehicle'

export default class Collateral extends React.Component{ 
    constructor(){
        super()
        this.state ={
            collateralList: []
        }
    }

    onCollateralList(param){
        console.log("Param is", param)
        this.setState({
            collateralList: [{
                collateralTypeId: param.collateralTypeId,
                parameters: param.parameters
            }]
        },
        this.onSendData.bind(this)
        )
    }

    onSendData(){
        this.props.collateralUpdate(this.state.collateralList)
        this.props.onGetData()
    }
    
    render(){ 

        if(this.props.DivState ==='RealEstate'){
            return(
                <div>
                    <CollateralRealEstate
                        detailcollateral={this.props.detailcollateral}
                        collateralList = {this.onCollateralList.bind(this)}
                    />
                </div>                
            );
        } else if(this.props.DivState ==='Vehicle'){ 
            return(
                <div>
                    <CollateralVehicle
                        detailcollateral={this.props.detailcollateral}
                        collateralList = {this.onCollateralList.bind(this)}
                    />
                    <br/>
                </div>                
            );
        } else if(this.props.DivState ==='Deposit'){ 
            return(
                <div>
                    <CollateralBank
                        detailcollateral={this.props.detailcollateral}
                        collateralList = {this.onCollateralList.bind(this)}
                    />
                    <br/>
                </div>                
            );
        }  else { 
            return <div></div>
        } 

        
    }
}