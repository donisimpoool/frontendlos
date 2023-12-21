import React from "react";
import {postalcode} from "../step/Address";
import LanguageStore from "../../../../../components/i18n/LanguageStore";


export default class AddressSum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loanapp:[]
        }
    }
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <h4 ><b>{LanguageStore.translate('Main Address')}</b></h4>
                    </div>
                    <div className="col-md-5">
                        <h4>
                            {this.props.mainaddress}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Province')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.provincename}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('City')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.namecity}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('District')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.namekecamatan}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Postal')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.postalcode}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Ownership Status')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.ownershipstatus}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Location')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.location}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Has been used as collateral elsewhere')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.isCollateral}
                        </h4>
                    </div>
                </div>
                <br />

                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Has lived in address since year')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.livedinaddress}
                        </h4>
                    </div>
                </div>
                <br />

                <div className="row" >
                    <div className="col-sm-6">
                        <h4 style={{ color: 'blue' }}><b>{LanguageStore.translate('Addtional Address')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {/*{this.props.loanAmount}*/}
                        </h4>
                    </div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-6">
                        <h4 ><b>{LanguageStore.translate('Main Address')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.mainaddress2}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Province')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.provincename2}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('City')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.namecity2}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('District')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.namekecataman2}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Postal')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.postalcode2}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4><b>{LanguageStore.translate('Ownership Status')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.ownershipstatus2}
                        </h4>
                    </div>
                </div>
                <br />
                <div className="row" >
                    <div className="col-sm-6">
                        <h4 ><b>{LanguageStore.translate('Has been used as collateral elsewhere')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4 style={{float:"center"}}>
                            {this.props.isCollateral2}
                        </h4>
                    </div>
                </div>
                <br />

            </div>
        );
    }
}