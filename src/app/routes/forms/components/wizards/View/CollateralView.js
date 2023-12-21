import React from "react";
import CollateralRealEstateView from "./CollateralRealEstateView";
import {selectcollateral} from "../step/SelectCollateral";
import {
    addresss,
    condition,
    proofownership,
    provincee,
    rooms, sizee,
    typeofrealestate,
    yearbuild
} from "../CollateralRealEstate";
import {namecity4} from "../Type/TypeCity";
import {namekecataman4} from "../Type/typeDistrict";
import CollateralVehicleView from "./CollateralVehicleView";
import {millage, typevehicle, years} from "../CollateralVehicle";
import {brandname, transmisiionname} from "../TypeVehicle";
import {modelname} from "../ModelVehicle";
import CollateralDepositView from "./CollateralDepositView";
import {accnumber, amount, bankName, currency, duedate} from "../CollateralBank";


export default class CollateralView extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // collateralId:"",
            valuebrand:''
        }
    }

    render(){
        if(this.props.typecollateral == 'RealEstate'){
            return(
                <div>
                    <CollateralRealEstateView
                        typeofrealestate={this.props.typeofrealestate}
                        condition={this.props.condition}
                        yearbuild={this.props.yearbuild}proofownership={this.props.proofownership}
                        rooms={this.props.rooms}addresss={this.props.addresss}provincee={this.props.provincee}sizee={this.props.sizee}
                        namecity4={this.props.namecity4}namekecataman4={this.props.namekecataman4}isuploadfileRE={this.props.isuploadfileRE}
                    />
                </div>
            )
        }else if(this.props.typecollateral == 'Vehicle'){
            return(
                <div>
                    <CollateralVehicleView
                        typevehicle={this.props.typevehicle}years={this.props.years}millage={this.props.millage}
                        brandname={this.props.brandname}transmisiionname={this.props.transmisiionname}
                        modelname={this.props.modelname}isuploadfileVehicle={this.props.isuploadfileVehicle}
                    />
                </div>
            )
        }else if(this.props.typecollateral == 'Deposit'){
            return(
                <div>
                    <CollateralDepositView
                        bankName={this.props.bankName}amount={this.props.amount}currency={this.props.currency}
                        accnumber={this.props.accnumber}duedate={this.props.duedate}isuploadfileBank={this.props.isuploadfileBank}
                    />
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
}