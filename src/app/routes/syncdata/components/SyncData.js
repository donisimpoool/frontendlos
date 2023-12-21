import React from "react";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import LanguageStore from "../../../components/i18n/LanguageStore";
import '../../../../assets/css/spinnercycle.css'
import '../../../../assets/css/formoverlay.css'
import '../../../../assets/css/styleCustomerTable.css'
import {keyset, suburlSyncLoan,suburlSyncLineBusiness,suburlSyncReligion} from "../../../config/baseUrl";
import {DecrypsCode} from "../../../config/Encrypt";
import {headers} from "../../../config/ConfigParam";

export default class SyncData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listitems:[],
            valueflag:{
                flagdisplay:"none",
                labelsynloan:"Sync Loan",
                disabledloanbutton:false,
                labelsynlinebusiness:"Sync Businees",
                disabledbusineesbutton:false,
                labelsynreligion:"Sync Religion",
                disabledreligion:false
            }
        }
    }

    componentDidMount() {

    }
    funconverlay(type){
        var value = this.state.valueflag
        if(type == "show"){
            value.flagdisplay = "inline-block"
        }else if(type == "hide"){
            value.flagdisplay = "none"
        }
        this.setState(value);
    }
    syncreligion(){
        this.funconverlay("show")
        var param = {
            userid:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
        }
        var url = suburlSyncReligion
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(param)
            })
            .then(response => response.json())
            .then(appList => {
                if(appList.data !== 200){
                    this.aftersynrelgion("Failed")
                    if(appList.validation !== ""){
                        alert(JSON.parse(appList.validation).errormessages)
                    }else{
                        alert(appList.data)
                    }

                }else if(appList.data == 200){
                    this.aftersynrelgion("Done")
                }
            })
    }
    aftersynrelgion(text){
        var value = this.state.valueflag
        this.funconverlay("hide")
        if(text == "Done"){
            value.disabledreligion = true
        }
        value.labelsynreligion = text
        this.setState(value);
    }
    synclinebusiness(){
        this.funconverlay("show")
        var param = {
            userid:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
        }
        var url = suburlSyncLineBusiness
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(param)
            })
            .then(response => response.json())
            .then(appList => {
                if(appList.data !== 200){
                    this.aftersynlinebusiness("Failed")
                    alert(appList.data)
                }else if(appList.data == 200){
                    this.aftersynlinebusiness("Done")
                }
            })
    }
    aftersynlinebusiness(text){
        var value = this.state.valueflag
        this.funconverlay("hide")
        if(text == "Done"){
            value.disabledbusineesbutton = true
        }
        value.labelsynlinebusiness = text
        this.setState(value);
    }
    syncloan(){
        this.funconverlay("show")
        var param = {
            userid:JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
        }
        var url = suburlSyncLoan
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(param)
            })
            .then(response => response.json())
            .then(appList => {

                if(appList.data !== 200){
                    this.aftersynloan("Failed")
                    alert(appList.data)
                }else if(appList.data == 200){
                    this.aftersynloan("Done")
                }
            })
    }
    aftersynloan(text){
        var value = this.state.valueflag
        this.funconverlay("hide")
        if(text == "Done"){
            value.disabledloanbutton = true
        }
        value.labelsynloan = text
        this.setState(value);
    }
    render() {

        return (

            <div id="content">
                <div id="overlay" style={{display:this.state.valueflag.flagdisplay}}>
                    <div className="lds-ring">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className="row">
                    <BigBreadcrumbs items={['Syncronize Data Simpool']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                </div>

                <div className="row">

                    <table id="tablesync">
                        <tr>
                            <th>Sync</th>
                            <th>Action</th>
                        </tr>
                        <tr>
                            <td>Loan Product</td>
                            <td>
                                <button onClick={this.syncloan.bind(this)} type="button" className="btn btn-info btn-sm" disabled={this.state.valueflag.disabledloanbutton}>
                                    {LanguageStore.translate(this.state.valueflag.labelsynloan)}
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Business / Line Industry</td>
                            <td>
                                <button onClick={this.synclinebusiness.bind(this)} type="button" className="btn btn-info btn-sm" disabled={this.state.valueflag.disabledbusineesbutton}>
                                    {LanguageStore.translate(this.state.valueflag.labelsynlinebusiness)}
                                </button>
                            </td>
                        </tr>
                        <tr>
                            <td>Religion</td>
                            <td>
                                <button onClick={this.syncreligion.bind(this)} type="button" className="btn btn-info btn-sm" disabled={this.state.valueflag.disabledreligion}>
                                    {LanguageStore.translate(this.state.valueflag.labelsynreligion)}
                                </button>
                            </td>
                        </tr>
                    </table>
                </div>

            </div>
        )
    }
}