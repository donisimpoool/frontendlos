import React from "react";
import {valueroulesfromtable} from "../../roulesscoring/components/RoulesScoring";
import {listattributeroules, listtyperoules, litvalue} from "../../roulesscoring/ListRoules";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import {valueroulesfromtableloan} from "./LoanProduct";
import {suburlfilterlist,suburlloanprodupdate,suburlloanprodcreate,suburlloanproddelete} from "../../../config/baseUrl";
import {headers} from "../../../config/ConfigParam";

export default class FormLoanProduct extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listvalid:[],
            list:[],
            listfilter:[],
            valueLoanProduct:{
                id:0,
                description:'',
                name:'',
                minamount:0,
                maxamount:0,
                mintenor:0,
                maxtenor:0,
                filterid:0,
                defaultamount:0,
                defaulttenor:0,
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

    componentDidMount(){
        var url = suburlfilterlist;
        // fetch(`${url}/loan/application/v1/applicant-list/?pageSize=${pageSize}`,
        fetch(url,
            {
                method: 'GET',
                headers: headers,
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listfilter: appList.data
                })
            })
        this.setform()
    }
    setform(){
        var valueloan = this.state.valueLoanProduct
        var value = this.state.valueflag

        valueloan.description = valueroulesfromtableloan.description
        valueloan.name = valueroulesfromtableloan.name
        valueloan.minamount = valueroulesfromtableloan.minamount
        valueloan.maxamount = valueroulesfromtableloan.maxamount
        valueloan.mintenor = valueroulesfromtableloan.mintenor
        valueloan.maxtenor = valueroulesfromtableloan.maxtenor
        valueloan.filterid = valueroulesfromtableloan.filterid
        valueloan.defaultamount = valueroulesfromtableloan.defaultamount
        valueloan.defaulttenor = valueroulesfromtableloan.defaulttenor
        valueloan.id = valueroulesfromtableloan.id;

        var str = valueroulesfromtableloan.name
        if(str !== ""){
            value.flagadd = true
            value.flagedit = false
        }else{
            value.flagadd = false
            value.flagedit = true
        }
        this.setState(value);
        this.setState(valueloan);
    }
    validation(){
        var msg = "";
        var arraymsg = [];
        // var temp = this.state.valueLoanProduct.description;
        // if(temp == ""){
        //     msg = "Description Tidak Boleh Kosong \r\n ";
        //     arraymsg.push(msg);
        // }
        var temp = this.state.valueLoanProduct.name;
        if(temp == ""){
            msg = "Loan Name Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueLoanProduct.minamount;
        if(temp == "0" || temp == ""){
            msg = "min amount Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueLoanProduct.maxamount;
        if(temp == "0" || temp == ""){
            msg = "max amount Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueLoanProduct.mintenor;
        if(temp == "0" || temp == ""){
            msg = "min tenor Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueLoanProduct.maxtenor;
        if(temp == "0" || temp == ""){
            msg = "max tenor Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        temp = this.state.valueLoanProduct.defaulttenor;
        if(temp == "0" || temp == ""){
            msg = "default tenor Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }else{
            var mintenor = this.state.valueLoanProduct.mintenor;
            var maxtenor = this.state.valueLoanProduct.maxtenor;
            if(mintenor > temp){
                msg = "default tenor Tidak Boleh Lebih Kecil Dari Min Tenor \r\n ";
                arraymsg.push(msg);
            }else if(temp > maxtenor){
                msg = "default tenor Tidak Boleh Lebih Besar Dari Max Tenor \r\n ";
                arraymsg.push(msg);
            }
        }
        temp = this.state.valueLoanProduct.defaultamount;
        if(temp == "0" || temp == ""){
            msg = "default amount Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }else{
            var minamount = this.state.valueLoanProduct.minamount;
            var maxamount = this.state.valueLoanProduct.maxamount;
            if(minamount > temp){
                msg = "default amount Tidak Boleh Lebih Kecil Dari Min Amount \r\n ";
                arraymsg.push(msg);
            }else if(temp > maxamount){
                msg = "default amount Tidak Boleh Lebih Besar Dari Max Amount \r\n ";
                arraymsg.push(msg);
            }
        }
        // temp = this.state.valueLoanProduct.filterid;
        // if(temp == "0" || temp == ""){
        //     msg = "Pilih Filter Terlebih Dahulu \r\n ";
        //     arraymsg.push(msg);
        // }
        this.state.listvalid = arraymsg
    }
    onChangeLoanName(e){
        var str = e.target.value;
        var valueloan = this.state.valueLoanProduct
        valueloan.name = str;
        this.setState(valueloan);
    }
    onChangeDescription(e){
        var str = e.target.value;
        var valueloan = this.state.valueLoanProduct
        valueloan.description = str;
        this.setState(valueloan);
    }
    onChangeMinAmount(e){
        var str = e.target.value;
        var valueloan = this.state.valueLoanProduct
        valueloan.minamount = str;
        this.setState(valueloan);
    }
    onChangeMaxamount(e){
        var str = e.target.value;
        var valueloan = this.state.valueLoanProduct
        valueloan.maxamount = str;
        this.setState(valueloan);
    }
    onChangeMinTenor(e){
        var str = e.target.value;
        var valueloan = this.state.valueLoanProduct
        valueloan.mintenor = str;
        this.setState(valueloan);
    }
    onChangeMaxTenor(e){
        var str = e.target.value;
        var valueloan = this.state.valueLoanProduct
        valueloan.maxtenor = str;
        this.setState(valueloan);
    }
    OnChangeDefaultAmount(e){
        var str = e.target.value;
        var valueroules = this.state.valueLoanProduct
        valueroules.defaultamount = str;
        this.setState(valueroules);
    }
    OnChangeFilter(e){
        var str = e.target.value;
        var valueroules = this.state.valueLoanProduct
        valueroules.filterid = str;
        this.setState(valueroules);
    }
    OnChangeDefaultTenor(e){
        var str = e.target.value;
        var valueroules = this.state.valueLoanProduct
        valueroules.defaulttenor = str;
        this.setState(valueroules);
    }

    cancelformroules(){
        window.location.href = "/#/LoanProduct";
    }
    editformroules(){
        this.validation()
        if(this.state.listvalid.length == 0) {
            var url = suburlloanprodupdate;
            var params = this.state.valueLoanProduct;
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    window.location.href = "/#/LoanProduct";
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
            var url = suburlloanprodcreate;
            var params = this.state.valueLoanProduct;
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    window.location.href = "/#/LoanProduct";
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
                "id": this.state.valueLoanProduct.id+'',
            }
        var url = suburlloanproddelete;
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                window.location.href = "/#/LoanProduct";
            })
    }
    render(){

        return(
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Loan Product']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    <div className="form-group">
                        <div className="inputGroup-sizing-default">
                            <h4 className="input" style={{textAlign:"left"}}><b>Loan Name</b></h4>
                            <input className="form-control input-lg"
                                   placeholder="Name Roules" type="text"
                                   name="nameroules" disabled={true}
                                   data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                   data-message="Please specify your Name Roules"
                                   onChange={this.onChangeLoanName.bind(this)} value={this.state.valueLoanProduct.name}
                            />
                        </div>
                    </div>
                </div>
            </div>

                <div className="row" hidden={true}>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Loan Description</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Loan Description" type="text"
                                       name="LoanDescription" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Loan Description"
                                       onChange={this.onChangeDescription.bind(this)} value={this.state.valueLoanProduct.description}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Min Amount</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Min Amount" type="text"
                                       name="MinAmount" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Min Amount"
                                       onChange={this.onChangeMinAmount.bind(this)} value={this.state.valueLoanProduct.minamount}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Max Amount</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Max Amount" type="text"
                                       name="MaxAmount" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Max Amount"
                                       onChange={this.onChangeMaxamount.bind(this)} value={this.state.valueLoanProduct.maxamount}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row" >
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Min Tenor</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="MinTenor" type="text"
                                       name="MinTenor" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Min Tenor"
                                       onChange={this.onChangeMinTenor.bind(this)} value={this.state.valueLoanProduct.mintenor}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Max Tenor</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="MaxTenor" type="text"
                                       name="MaxTenor" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Max Tenor"
                                       onChange={this.onChangeMaxTenor.bind(this)} value={this.state.valueLoanProduct.maxtenor}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Default Amount</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Default Amount" type="text"
                                       name="DefaultAmount" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Default Amount"
                                       onChange={this.OnChangeDefaultAmount.bind(this)} value={this.state.valueLoanProduct.defaultamount}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <div className="inputGroup-sizing-default">
                                <h4 className="input" style={{textAlign:"left"}}><b>Default Tenor</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Default Tenor" type="text"
                                       name="DefaultTenor" disabled={true}
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Default Tenor"
                                       onChange={this.OnChangeDefaultTenor.bind(this)} value={this.state.valueLoanProduct.defaulttenor}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><h4 style={{float:"left"}}><b>Filter</b></h4></label>
                            <div className="inputGroup-sizing-default">
                                <select className="form-control input-lg "
                                        data-smart-validate-input="" data-required=""
                                        data-message-required="Please specify your Attributes"
                                        name="attributes" defaultValue={"0"} onChange={this.OnChangeFilter.bind(this)} value={this.state.valueLoanProduct.filterid}>
                                    <option value="0" selected={true}>Choose</option>
                                    {
                                        this.state.listfilter.map(function (item) {
                                            return (
                                                <option key={item.filterid}
                                                        value={item.filterid}>{item.description}</option>

                                            )
                                        })}
                                </select>
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