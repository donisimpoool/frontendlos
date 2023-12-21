import React from "react";
import {namekecataman4} from "../Type/typeDistrict";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class CollateralRealEstateView extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type of Real Estate')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {LanguageStore.translate(this.props.typeofrealestate)}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Condition')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.condition}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Year Build')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.yearbuild}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Rooms')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.rooms}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Address')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.addresss}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Province')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.provincee}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('City')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.namecity4}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('District')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.namekecataman4}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Size')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.sizee}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Proof of Ownership')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.proofownership}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>Upload File</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.isuploadfileRE}
                        </h4>
                    </div>
                </div>
                <br/>

            </div>
        )
    }
}