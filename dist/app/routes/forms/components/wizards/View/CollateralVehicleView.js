import React from "react";
import LanguageStore from "../../../../../components/i18n/LanguageStore";

export default class CollateralVehicleView extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type Vehicle')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.typevehicle}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Brand')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.brandname}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>Model</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.modelname}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Type Transmision')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {LanguageStore.translate(this.props.transmisiionname)}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Year')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.years}
                        </h4>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Millage')}</b></h4>
                    </div>
                    <div className="col-md-6">
                        <h4>
                            {this.props.millage}
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
                            {this.props.isuploadfileVehicle}
                        </h4>
                    </div>
                </div>
                <br/>
            </div>
        )
    }
}