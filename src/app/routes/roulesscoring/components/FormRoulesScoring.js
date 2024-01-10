import React from "react";
import NumberFormat from "react-number-format";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import {listattributeroules,listtyperoules,litvalue} from "../ListRoules";
import {valueroulesfromtable} from "./RoulesScoring";
import {suburlroulesscoringcreate,suburlroulesscoringupdate,suburlroulesscoringdelete, updateScoreRoules} from "../../../config/baseUrl";
import {header, headers} from "../../../config/ConfigParam";

export var valueroules ={
    typeroules:'',
        minvalue:0,
        maxvalue:0,
        value:'',
        valuenumber:0,
        score:0,
        groups:'',
        nameroules:'',
        userid:'',
        id:0
}
export default class FormRoulesScoring extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            list:[],
            valueroules:{
                typeroules:'',
                minvalue:0,
                maxvalue:0,
                value:'',
                valuenumber:0,
                score:0,
                groups:'',
                nameroules:'',
                userid:'',
                id:0
            },
            valueflag:{
                attributeid:'',
                flagequals:true,
                flagequalsnumber:true,
                flagerange:true,
                flagsave:false,
                flagadd:true,
                flagedit:true
            }
        }
    }

    componentDidMount(){
        var valueroules = this.state.valueroules
        var value = this.state.valueflag

        valueroules.id = valueroulesfromtable.id
        valueroules.typeroules = valueroulesfromtable.typeroules
        valueroules.minvalue = valueroulesfromtable.minvalue
        valueroules.maxvalue = valueroulesfromtable.maxvalue
        valueroules.value = valueroulesfromtable.value
        valueroules.valuenumber = valueroulesfromtable.valuenumber
        valueroules.score = valueroulesfromtable.score
        valueroules.groups = valueroulesfromtable.groups
        valueroules.nameroules = valueroulesfromtable.nameroules
        valueroules.userid = valueroulesfromtable.userid
        var str = valueroulesfromtable.typeroules

        value.attributeid = valueroulesfromtable.groups;
        if(str == "range"){
            value.flagequals = true
            value.flagequalsnumber = true
            value.flagerange = false

            value.flagadd = true
            value.flagedit = false
        }else if(str == "equals"){
            value.flagequals = false
            value.flagequalsnumber = true
            value.flagerange = true

            value.flagadd = true
            value.flagedit = false
        }else if(str == "equalsnumber"){
            value.flagequals = true
            value.flagequalsnumber = false
            value.flagerange = true

            value.flagadd = true
            value.flagedit = false
        }else{
            value.flagadd = false
            value.flagedit = true
        }

        this.setState(value);
        this.setState(valueroules);

        console.log("sana : "+value.attributeid)
    }
    OnChangeAttributes(e){
        var str = e.target.value;
        var value = this.state.valueflag
        value.attributeid = str;
        value.flagequals = true
        value.flagequalsnumber = true
        value.flagerange = true
        this.setState(value);

        var valueroules = this.state.valueroules
        valueroules.typeroules = '';
        valueroules.groups = str;
        valueroules.score = 0;
        this.setState(valueroules);
        valueroules = this.state.valueroules
    }
    OnChangeTypeRoules(e){
        var str = e.target.value;
        var value = this.state.valueflag

        var valueroules = this.state.valueroules
        valueroules.typeroules = str;
        this.setState(valueroules);
        if(str == "range"){
            value.flagequals = true
            value.flagequalsnumber = true
            value.flagerange = false
        }else if(str == "equals"){
            value.flagequals = false
            value.flagequalsnumber = true
            value.flagerange = true
        }else if(str == "equalsnumber"){
            value.flagequals = true
            value.flagequalsnumber = false
            value.flagerange = true
        }
        this.setState(value);
    }

    OnChangeRoulesName(e){
        var str = e.target.value;
        var valueroules = this.state.valueroules
        valueroules.nameroules = str;
        this.setState(valueroules);
    }
    OnChangeValue(e){
        var str = e.target.value;
        var valueroules = this.state.valueroules
        valueroules.value = str;
        this.setState(valueroules);
    }
    OnChangeValueNumber(e){
        var str = e.target.value;
        var valueroules = this.state.valueroules
        valueroules.valuenumber = str;
        this.setState(valueroules);
    }
    OnChangeMinValue(e){
        var str = e.target.value;
        var valueroules = this.state.valueroules
        valueroules.minvalue = str;
        this.setState(valueroules);
    }
    OnChangeMaxValue(e){
        var str = e.target.value;
        var valueroules = this.state.valueroules
        valueroules.maxvalue = str;
        this.setState(valueroules);
    }
    OnChangeScore(e){
        var str = e.target.value;
        var valueroules = this.state.valueroules
        valueroules.score = str;
        this.setState(valueroules);
    }
    cancelformroules(){
        window.location.href = "/#/RoulesScoring";
    }
    editformroules(){
        var valueroules = this.state.valueroules
        valueroules.userid = 'Doni';
        this.setState(valueroules);
        var url = updateScoreRoules;//suburlroulesscoringupdate;
        var params = {score:this.state.valueroules.score,id:this.state.valueroules.id};//this.state.valueroules;
        fetch(url,
            {
                method: 'POST',
                headers: header,
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                var value = this.state.valueflag
                value.flagsave = true
                this.setState(value);
                window.location.href = "/#/RoulesScoring";
            })
    }
    saveformroules(){
        var valueroules = this.state.valueroules
        valueroules.userid = 'Doni';
        this.setState(valueroules);
        var url = suburlroulesscoringcreate;
        var params = this.state.valueroules;
        fetch(url,
        {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(params)
        }).then(response => response.json())
            .then(respon => {
                var value = this.state.valueflag
                value.flagsave = true
                this.setState(value);
                window.location.href = "/#/RoulesScoring";
            })
    }
    deleteformroules(){
        var params =
            {
                "id": this.state.valueroules.id+'',
            }
        var url = suburlroulesscoringdelete;
        var params = this.state.valueroules;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                window.location.href = "/#/RoulesScoring";
            })
    }
    render(){
        var filtertyperoules = listtyperoules.filter( (item) => {
            return item.attributid == this.state.valueflag.attributeid
        })
        var filtervalue = litvalue.filter( (item) => {
            return item.attributid == this.state.valueflag.attributeid
        })
        return(
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Rules Scoring']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                </div>
                <div className="row" hidden={true}>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Name Roules</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Name Roules" type="text"
                                       name="nameroules"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Name Roules"
                                       onChange={this.OnChangeRoulesName.bind(this)} value={this.state.valueroules.nameroules}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" hidden={true}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>Attributes</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your Attributes"
                                        name="attributes" defaultValue={""} onChange={this.OnChangeAttributes.bind(this)} value={this.state.valueroules.groups}>
                                    <option value="" selected={true}>Choose</option>
                                    {
                                        listattributeroules.map(function (item) {
                                                return (
                                                    <option key={item.id}
                                                            value={item.id}>{item.name}</option>

                                                )
                                        })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" hidden={true}>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>Type Roules</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your Type Roules"
                                        name="typeroules" defaultValue={""} onChange={this.OnChangeTypeRoules.bind(this)}  value={this.state.valueroules.typeroules}>
                                    <option value="" selected={true}>Choose</option>
                                    {
                                        filtertyperoules.map(function (item) {
                                            return (
                                                <option key={item.id}
                                                        value={item.id}>{item.name}</option>

                                            )
                                        })}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagequals}>
                    <div className="row" hidden={true}>
                        <div className="col-md-6">
                            <div className="form-group">
                                <label><h4 style={{float:"left"}}><b>Value</b></h4></label>
                                <div className="inputGroup-sizing-default">
                                    <select className="form-control input-lg "
                                            data-smart-validate-input="" data-required=""
                                            data-message-required="Please specify your Type Roules"
                                            name="typeroules" defaultValue={""} onChange={this.OnChangeValue.bind(this)}  value={this.state.valueroules.value} >
                                        <option value="" selected={true}>Choose</option>
                                        {
                                            filtervalue.map(function (item) {
                                                return (
                                                    <option key={item.id}
                                                            value={item.id}>{item.name}</option>

                                                )
                                            })}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagequalsnumber}>
                <div className="row" hidden={true}>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Value</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Value" type="text"
                                       name="value"
                                       data-smart-validate-input="" data-required="" data-minlength="1" data-maxLength="10"
                                       data-message="Please specify your Value" onChange={this.OnChangeValueNumber.bind(this)}  value={this.state.valueroules.valuenumber}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                </div>

                <div hidden={this.state.valueflag.flagerange}>
                    <div className="row" hidden={true}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4 className="input" style={{textAlign:"left"}}><b>Min Value</b></h4>
                                    <input className="form-control input-lg"
                                           placeholder="Min Value" type="text"
                                           name="minvalue"
                                           data-smart-validate-input="" data-required="" data-minlength="1" data-maxLength="10"
                                           data-message="Please specify your Min Value" onChange={this.OnChangeMinValue.bind(this)}  value={this.state.valueroules.minvalue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row" hidden={true}>
                        <div className="col-sm-6">
                            <div className="form-group">
                                <div className="inputGroup-sizing-default">
                                    <h4 className="input" style={{textAlign:"left"}}><b>Max Value</b></h4>
                                    <input className="form-control input-lg"
                                           placeholder="Max Value" type="text"
                                           name="maxvalue"
                                           data-smart-validate-input="" data-required="" data-minlength="1" data-maxLength="10"
                                           data-message="Please specify your Max Value" onChange={this.OnChangeMaxValue.bind(this)}  value={this.state.valueroules.maxvalue}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Score</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Score" type="text"
                                       name="score"
                                       data-smart-validate-input="" data-required="" data-minlength="1" data-maxLength="3"
                                       data-message="Please specify your Score" onChange={this.OnChangeScore.bind(this)}  value={this.state.valueroules.score}

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagadd} >
                    <div className="widget-body">
                        <button name="submit" onClick={this.saveformroules.bind(this)} type="button"style={{height:"50px",width:"70px"}} >Save</button>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagedit}>
                    <div className="widget-body">
                        <button name="submitedit" onClick={this.editformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Save ( Edit )</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        {/*<button name="submitdelete" onClick={this.deleteformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Delete</button>*/}
                        {/*&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;*/}
                        <button name="submitcancel" onClick={this.cancelformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}