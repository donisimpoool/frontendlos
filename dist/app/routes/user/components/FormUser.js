import React from "react";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {valueuser} from "./User";
import {suburlSaveUser, suburlUpdateUser, suburlDeleteUser, keyset} from "../../../config/baseUrl";
import {info} from "../../auth/containers/Login";
import {DecrypsCode} from "../../../config/Encrypt";

export default class FormUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listvalid:[],
            list:[],
            listfilter:[],
            valueform:{
                id:0,
                userid:'',
                password:'',
                name:'',
                ruleid:'',
                level:0,
                isapproval:'N',
                created:''
            },
            valueformbank:{
                id:0,
                name:''
            },
            valueflag:{
                attributeid:'',
                disablepassword:true,
                flagequalsnumber:true,
                flagerange:true,
                flagsave:false,
                flagadd:false,
                flagedit:true
            }
        }
    }
    componentDidMount(){
        this.setform()
    }
    onChangeApproval(e){
        var str = e.target.value;
        var value = this.state.valueform
        value.isapproval = str
        this.setState(value);
    }
    onChangeLevel(e){
        var str = e.target.value;
        var value = this.state.valueform
        value.level = str
        this.setState(value);
    }
    onChangeUser(e){
        var str = e.target.value;
        var value = this.state.valueform
        value.userid = str
        this.setState(value);
    }
    onChangeName(e){
        var str = e.target.value;
        var value = this.state.valueform
        value.name = str
        this.setState(value);
    }
    onChangePassword(e){
        var str = e.target.value;
        var value = this.state.valueform
        value.password = str;
        this.setState(value);
    }
    setform(){
        var valueform = this.state.valueform
        var value = this.state.valueflag

        valueform.id = valueuser.id;
        valueform.userid = valueuser.userid;
        valueform.name = valueuser.name;
        valueform.ruleid = valueuser.ruleid;
        valueform.level = valueuser.level;
        valueform.isapproval = valueuser.isapproval;
        valueform.password = valueuser.password
        var str = valueuser.id;
        if(str !== 0){
            value.flagadd = true
            value.flagedit = false
            value.disablepassword = true
        }else{
            value.flagadd = false
            value.flagedit = true
            value.disablepassword = false
        }
        this.setState(value);
        this.setState(valueform);
    }
    validation(){
        var msg = "";
        var arraymsg = [];
        var temp = this.state.valueform.name
        if(temp == ""){
            msg = "Name Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueform.userid
        if(temp == ""){
            msg = "User Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueform.password
        if(temp == ""){
            msg = "Password Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueform.level
        if(temp == "0"){
            msg = "Level Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        this.state.listvalid = arraymsg
    }
    saveformroules(){
        this.validation()
        if(this.state.listvalid.length == 0) {
            var url = suburlSaveUser;
            var params = this.state.valueform;
            params.created = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    window.location.href = "/#/user";
                })
        }else{
            this.alertmsg()
        }
    }
    editformroules(){
        this.validation()
        if(this.state.listvalid.length == 0) {
            var url = suburlUpdateUser;
            var params = this.state.valueform;
            params.created = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    window.location.href = "/#/user";
                })
        }else{
            this.alertmsg()
        }
    }
    deleteformroules(){
        var params =
            {
                "id": this.state.valueform.id+'',
                "create":JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
            }
        var url = suburlDeleteUser;
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                window.location.href = "/#/user";
            })
    }
    alertmsg(){
        var msg = "";
        this.state.listvalid.map(function (item) {
            msg += item;
        })
        this.state.listvalid = []
        alert(msg);
    }
    cancelformroules(){
        window.location.href = "/#/user";
    }
    render(){
        return(
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['User']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Name</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Name" type="text"
                                       name="Name"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Name" value={this.state.valueform.name}
                                       onChange={this.onChangeName.bind(this)}

                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>User</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="User" type="text"
                                       name="User"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your User" value={this.state.valueform.userid}
                                       onChange={this.onChangeUser.bind(this)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Password</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Password" type="password"
                                       name="Password"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Password" value={this.state.valueform.password}
                                       disabled={this.state.valueflag.disablepassword} onChange={this.onChangePassword.bind(this)}

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>Level</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your Level"
                                        name="Level" defaultValue={""} value={this.state.valueform.level}
                                        onChange={this.onChangeLevel.bind(this)}
                                        >
                                    <option value="0" selected={true}>Select Level</option>
                                    <option value={'1'}>Level 1</option>
                                    <option value={'2'}>Level 2</option>
                                    <option value={'3'}>Level 3</option>
                                    <option value={'4'}>Level 4</option>
                                    <option value={'5'}>Level 5</option>
                                    <option value={'6'}>Level 6</option>
                                    <option value={'7'}>Level 7</option>
                                    <option value={'8'}>Level 8</option>
                                    <option value={'9'}>Level 9</option>

                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>Is Approval</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <label className="radio state-error">
                                    <input type="radio" name="IsApproval"
                                           value="Y" onChange={this.onChangeApproval.bind(this)} checked={this.state.valueform.isapproval === 'Y'} />
                                    {LanguageStore.translate('Yes')}</label>
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="radio">
                                    <input type="radio" name="IsApproval"
                                           value="N" onChange={this.onChangeApproval.bind(this)} checked={this.state.valueform.isapproval === 'N'} />
                                    {LanguageStore.translate('No')}</label>
                            </div>
                        </div>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagadd} >
                    <div className="widget-body">
                        <button name="submit" onClick={this.saveformroules.bind(this)}  type="button"style={{height:"50px",width:"70px"}} >Save</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitcancel"  type="button" onClick={this.cancelformroules.bind(this)} style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>

                <div hidden={this.state.valueflag.flagedit}>
                    <div className="widget-body">
                        <button name="submitedit"  type="button" onClick={this.editformroules.bind(this)} style={{height:"50px",width:"95px"}} >Save ( Edit )</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitdelete"  type="button" onClick={this.deleteformroules.bind(this)} style={{height:"50px",width:"95px"}} >Delete</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitcancel"  type="button" onClick={this.cancelformroules.bind(this)} style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}