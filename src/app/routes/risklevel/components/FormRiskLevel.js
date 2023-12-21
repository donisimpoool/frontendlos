import React from "react";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import {valueroulesfromtablerisk} from "./RiskLevel";
import {suburllistrisklevelupdate,suburllistrisklevelcreate,suburllistriskleveldelete} from "../../../config/baseUrl";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {headers} from "../../../config/ConfigParam";

export default class FormBank extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listvalid:[],
            list:[],
            listfilter:[],
            valueformrisk:{
                id:0,
                name:'',
                odds:'',
                probabilityofdefault:0,
                min:0,
                max:0,
                status:''
            },
            valueformbank:{
                id:0,
                name:''
            },
            valueflag:{
                attributeid:'',
                flagequals:true,
                flagequalsnumber:true,
                flagerange:true,
                flagsave:false,
                flagadd:false,
                flagedit:true
            }
        }
    }
    onChangeName(e){
        var str = e.target.value;
        var value = this.state.valueformrisk
        value.name = str;
        this.setState(value);
    }
    onChangeOdds(e){
        var str = e.target.value;
        var value = this.state.valueformrisk
        value.odds = str;
        this.setState(value);
    }
    onChangeprobabilityofdefault(e){
        var str = e.target.value;
        var value = this.state.valueformrisk
        value.probabilityofdefault = str;
        this.setState(value);
    }
    onChangeMin(e){
        var str = e.target.value;
        var value = this.state.valueformrisk
        value.min = str;
        this.setState(value);
    }
    onChangeMax(e){
        var str = e.target.value;
        var value = this.state.valueformrisk
        value.max = str;
        this.setState(value);
    }
    onChangeStatus(e){
        var str = e.target.value;
        var value = this.state.valueformrisk
        value.status = str;
        this.setState(value);
    }
    componentDidMount(){
        this.setform()
    }
    setform(){
        var valuerisk = this.state.valueformrisk
        var value = this.state.valueflag

        valuerisk.name = valueroulesfromtablerisk.name
        valuerisk.id = valueroulesfromtablerisk.id;

        valuerisk.odds = valueroulesfromtablerisk.odds
        valuerisk.probabilityofdefault = valueroulesfromtablerisk.probabilityofdefault
        valuerisk.min = valueroulesfromtablerisk.min
        valuerisk.max = valueroulesfromtablerisk.max
        valuerisk.status = valueroulesfromtablerisk.status

        var str = valueroulesfromtablerisk.name
        if(str !== ""){
            value.flagadd = true
            value.flagedit = false
        }else{
            value.flagadd = false
            value.flagedit = true
        }
        this.setState(value);
        this.setState(valuerisk);
    }
    validation(){
        var msg = "";
        var arraymsg = [];
        var temp = this.state.valueformrisk.name;
        if(temp == ""){
            msg = "Name Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueformrisk.odds;
        if(temp == ""){
            msg = "Odds Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueformrisk.min;
        if(temp == ""){
            msg = "Min Score Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueformrisk.max;
        if(temp == 0 || temp == ""){
            msg = "Max Score Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }else{
            var min = this.state.valueformrisk.min;
            if(min > temp){
                msg = "Max Tidak Boleh Kecil Dari Min \r\n ";
                arraymsg.push(msg);
            }
        }
        temp = this.state.valueformrisk.status;
        if(temp == ""){
            msg = "Status Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        this.state.listvalid = arraymsg
    }


    cancelformroules(){
        window.location.href = "/#/risklevel";
    }
    editformroules(){
        this.validation()
        if(this.state.listvalid.length == 0) {
            var url = suburllistrisklevelupdate;
            var params = this.state.valueformrisk;
            fetch(url,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    if(respon.message == "") {
                        window.location.href = "/#/risklevel";
                    }else{
                        alert(respon.message)
                    }
                })
        }else{
            var msg = "";
            this.state.listvalid.map(function (item) {
                msg += item;
            })
            this.state.listvalid = []
            alert(msg);
        }
    }
    saveformroules(){
        this.validation()
        if(this.state.listvalid.length == 0) {
            var url = suburllistrisklevelcreate;
            var params = this.state.valueformrisk;
            fetch(url,
                {
                    method: 'POST',
                    headers: headers,
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    if(respon.message == "") {
                        window.location.href = "/#/risklevel";
                    }else{
                        alert(respon.message)
                    }
                })
        }else{
            var msg = "";
            this.state.listvalid.map(function (item) {
                msg += item;
            })
            this.state.listvalid = []
            alert(msg);
        }
    }
    deleteformroules(){
        var params =
            {
                "id": this.state.valueformrisk.id+'',
            }
        var url = suburllistriskleveldelete;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                window.location.href = "/#/risklevel";
            })
    }
    render(){

        return(
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Risk Level']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Name')}</b></h4>
                                <input className="form-control input-lg"
                                       placeholder={LanguageStore.translate('Name')} type="text"
                                       name="Name"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Name"
                                       onChange={this.onChangeName.bind(this)} value={this.state.valueformrisk.name}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Odds')}</b></h4>
                                <input className="form-control input-lg"
                                       placeholder={LanguageStore.translate('Odds')} type="text"
                                       name="Odds"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Odds"
                                       onChange={this.onChangeOdds.bind(this)} value={this.state.valueformrisk.odds}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>{LanguageStore.translate('Probability Of Defaults')}</b></h4>
                            <input className="form-control input-lg"
                                   placeholder={LanguageStore.translate('Probability Of Defaults')} type="text"
                                   name="probabilityofdefault"
                                   data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                   data-message="Please specify your probabilityofdefault"
                                   onChange={this.onChangeprobabilityofdefault.bind(this)} value={this.state.valueformrisk.probabilityofdefault}
                            />
                        </div>
                    </div>
                </div>
            </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Min Score</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Min Score" type="text"
                                       name="MinScore"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Min Score"
                                       onChange={this.onChangeMin.bind(this)} value={this.state.valueformrisk.min}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Max Score</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Max Score" type="text"
                                       name="MaxScore"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Max Score"
                                       onChange={this.onChangeMax.bind(this)} value={this.state.valueformrisk.max}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>Status</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your Status"
                                        name="Status" defaultValue={""} value={this.state.valueformrisk.status}
                                        onChange={this.onChangeStatus.bind(this)}>
                                    <option value="" selected={true}>Select Status</option>
                                    <option value={'A'}>Approved</option>
                                    <option value={'R'}>Reject</option>
                                    <option value={'U'}>Underwriting</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagadd} >
                    <div className="widget-body">
                        <button name="submit" onClick={this.saveformroules.bind(this)} type="button"style={{height:"50px",width:"70px"}} >Save</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitcancel" onClick={this.cancelformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagedit}>
                    <div className="widget-body">
                        <button name="submitedit" onClick={this.editformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Save ( Edit )</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitdelete" onClick={this.deleteformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} hidden={true}>Delete</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitcancel" onClick={this.cancelformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}