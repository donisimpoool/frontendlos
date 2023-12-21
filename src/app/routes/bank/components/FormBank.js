import React from "react";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import {valueroulesfromtablebank} from "./Bank";
import {suburlbankupdate,suburlbankcreate,suburlbankdelete} from "../../../config/baseUrl";

export default class FormBank extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listvalid:[],
            list:[],
            listfilter:[],
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
    onChangeBankName(e){
        var str = e.target.value;
        var valuebank = this.state.valueformbank
        valuebank.name = str;
        this.setState(valuebank);
    }
    componentDidMount(){
        this.setform()
    }
    setform(){
        var valuebank = this.state.valueformbank
        var value = this.state.valueflag

        valuebank.name = valueroulesfromtablebank.name
        valuebank.id = valueroulesfromtablebank.id;

        var str = valueroulesfromtablebank.name
        if(str !== ""){
            value.flagadd = true
            value.flagedit = false
        }else{
            value.flagadd = false
            value.flagedit = true
        }
        this.setState(value);
        this.setState(valuebank);
    }
    validation(){
        var msg = "";
        var arraymsg = [];
        var temp = this.state.valueformbank.name;
        if(temp == ""){
            msg = "Name Tidak Boleh Kosong \r\n ";
            arraymsg.push(msg);
        }
        this.state.listvalid = arraymsg
    }


    cancelformroules(){
        window.location.href = "/#/bank";
    }
    editformroules(){
        this.validation()
        if(this.state.listvalid.length == 0) {
            var url = suburlbankupdate;
            var params = this.state.valueformbank;
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    window.location.href = "/#/bank";
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
            var url = suburlbankcreate;
            var params = this.state.valueformbank;
            fetch(url,
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(params)
                }).then(response => response.json())
                .then(respon => {
                    window.location.href = "/#/bank";
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
                "id": this.state.valueformbank.id+'',
            }
        var url = suburlbankdelete;
        fetch(url,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                window.location.href = "/#/bank";
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
                                <h4 className="input" style={{textAlign:"left"}}><b>Bank Name</b></h4>
                                <input className="form-control input-lg"
                                       placeholder="Bank Name" type="text"
                                       name="BankName"
                                       data-smart-validate-input="" data-required="" data-minlength="4" data-maxLength="100"
                                       data-message="Please specify your Name Roules"
                                       onChange={this.onChangeBankName.bind(this)} value={this.state.valueformbank.name}
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
                        <button name="submitdelete" onClick={this.deleteformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Delete</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitcancel" onClick={this.cancelformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}