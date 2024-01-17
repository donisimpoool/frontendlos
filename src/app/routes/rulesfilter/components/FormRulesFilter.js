import React from "react";
import {valueroulesfromtable} from "../../roulesscoring/components/RoulesScoring";
import {listattributeroules, listtyperoules, litvalue} from "../../roulesscoring/ListRoules";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {BootstrapTable, InsertButton, InsertModalFooter, TableHeaderColumn} from "react-bootstrap-table";
import {valuerulesfilter} from "./RulesFilter";
import {suburlcreatefilter, suburlupdatefilter, suburldeletefilter, keyset} from "../../../config/baseUrl";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {listpurposeofloan} from "../../forms/components/wizards/step/Loan";
import {info} from "../../auth/containers/Login";
import {DecrypsCode} from "../../../config/Encrypt";
import {headers} from "../../../config/ConfigParam";

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
const field = [ {
    value: 'age',
    text: 'Age'
}, {
    value: 'education',
    text: 'Education'
}, {
    value: 'gender',
    text: 'Gender'
}, {
    value: 'maritalstatus',
    text: 'Marital Status'
}, {
    value: 'houseownership',
    text: 'House Ownership'
}, {
    value: 'numberofchildren',
    text: 'Number of Children'
}, {
    value: 'netincome',
    text: 'Net Income'
}, {
    value: 'owncreditcard',
    text: 'Own Credit Card'
}, {
    value: 'incometype',
    text: 'Income Type'
}
];
const operand = [ {
    value: '=',
    text: '='
}, {
    value: '>',
    text: '>'
}, {
    value: '>=',
    text: '>='
}, {
    value: '<',
    text: '<'
}, {
    value: '<=',
    text: '<='
}, {
    value: '!=',
    text: '!='
}
];
const action = [ {
    value: 'Pass',
    text: 'Pass'
}, {
    value: 'Reject',
    text: 'Reject'
}, {
    value: 'Refer',
    text: 'Refer'
}
];
var listdetailfilter = [];
function onAfterSaveCell(row, cellName, cellValue) {
    var description = row.description;
    if(description == null){
        description = ''
    }
    var paramsfilter={
        filterid:row.filterid,
        operand:row.operand,
        field:row.field,
        value:row.value,
        action:row.action,
        description:description,
    }
    var tempListDetail = listdetailfilter;
    listdetailfilter = [];
    for(var x=0; x<tempListDetail.length; x++){
        var detail = tempListDetail[x];
        if(detail.filterid !== row.filterid){
            listdetailfilter.push(detail);
        }
    }
    listdetailfilter.push(paramsfilter);
}

function onAfterInsertRow(row) {
    let newRowStr = '';

    for (const prop in row) {
        newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
}

const cellEditProp = {
    mode: 'dbclick',
    blurToSave: true,
    nonEditableRows: function() {
        // return filt.filter(p => p.id < 1).map(p => p.id);
    },
    afterSaveCell: onAfterSaveCell
};
const optionally = {
    afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};
export default class FormRulesFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listfilter:[],
            valuefilter:{
                id:"",
                name:"",
                createby:"",
                filterdetail:[]
            },
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
                flagsave:false,
                flagadd:true,
                flagedit:true,
                typefield:'text'
            }
        }
    }


    componentDidMount(){
        listdetailfilter = [];
        var valueroules = this.state.valuefilter
        var value = this.state.valueflag

        valueroules.name = valuerulesfilter.name
        valueroules.id = valuerulesfilter.id;
        var str = valuerulesfilter.id

        if(str !== ""){

            value.flagadd = true
            value.flagedit = false
        }else {
            value.flagadd = false
            value.flagedit = true
        }

        this.setState(value);
        this.setState(valueroules);


    }
    OnChangeName(e){
        var str = e.target.value;
        var valuefilter = this.state.valuefilter
        valuefilter.name = str;
        this.setState(valuefilter);
    }
    setparams = (params) => {
        var valuefilter = this.state.valuefilter
        valuefilter.filterdetail = paramsfilter;
        this.setState(params);
    }
    cancelformroules(){
        window.location.href = "/#/rulesfilter";
    }

    expandComponent(row) {
        console.log(row);
    }
    beforeClose(e) {
        // alert(`[Custom Event]: Modal close event triggered!`);
    }

    beforeSave(e) {
        // alert(`[Custom Event]: Modal save event triggered! : `+e.target);
    }

    handleModalClose(closeModal) {
        // Custom your onCloseModal event here,
        // it's not necessary to implement this function if you have no any process before modal close
        console.log('This is my custom function for modal close event');
        closeModal();
    }

    handleSave(save,closeModal,row) {
        // Custom your onSave event here,
        // it's not necessary to implement this function if you have no any process before save
        console.log('This is my custom function for save event '+row);
        closeModal();
        save();
    }

    createCustomModalFooter = (closeModal, save,row) => {
        return (
            <InsertModalFooter
                className='my-custom-class'
                saveBtnText='Save'
                closeBtnText='Close'
                // closeBtnContextual='btn-warning'
                // saveBtnContextual='btn-success'
                // closeBtnClass='my-close-btn-class'
                // saveBtnClass='my-save-btn-class'

                beforeClose={this.beforeClose}
                beforeSave={this.beforeSave}
                onModalClose={() => this.handleModalClose(closeModal)}
                onSave={() => this.handleSave(save,closeModal,row)}/>
        );
    }


    handleInsertButtonClick = (onClick) => {
        // Custom your onClick event here,
        // it's not necessary to implement this function if you have no any process before onClick

        console.log('This is my custom function for InserButton click event');

        onClick();

    }

    createCustomInsertButton = (onClick) => {
        return (
            <InsertButton
                // btnText='CustomInsertText'
                // btnContextual='btn-warning'
                // className='my-custom-class'
                // btnGlyphicon='glyphicon-edit'

                onClick={ () => this.handleInsertButtonClick(onClick) }/>
        );
    }
    editFormatter = (e) => {
        console.log(`e `+e);
    }
    onDeleteRow(rows) {
        var temp = rows.toString();
        var ar = temp.split(",");
        var templistID = [];
        for(var i=0; i<ar.length; i++){
            templistID.push(ar[i]);
        }
        var tempListDetail = listdetailfilter;
        listdetailfilter = [];
        for(var x=0; x<tempListDetail.length; x++){
            var detail = tempListDetail[x];
            if(templistID.indexOf(detail.filterid) == -1){
                listdetailfilter.push(detail);
            }
        }
        console.log("listdetailfilter after delete: "+listdetailfilter.length)
    }

    onAfterInsertRow(row) {
        let newRowStr = '';
        var description = row['description'];
        if(description == null){
            description = ''
        }
        var paramsfilter={
            filterid:row['filterid'],
            operand:row['operand'],
            field:row['field'],
            value:row['value'],
            action:row['action'],
            description:description,
        }
        listdetailfilter.push(paramsfilter)
    }
    editformroules(){

        var valuefilter = this.state.valuefilter
        // valuefilter.createby = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).sizefile
        valuefilter.filterdetail = listdetailfilter;
        this.setState(valuefilter);
        var url = suburlupdatefilter
        var params = this.state.valuefilter;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                if(respon.message == "") {
                    var value = this.state.valueflag
                    value.flagsave = true
                    this.setState(value);
                    window.location.href = "/#/rulesfilter";
                }else{
                    alert(respon.message)
                }
            })
    }
    saveformroules(){
        var valuefilter = this.state.valuefilter
        // valuefilter.createby = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id
        valuefilter.filterdetail = listdetailfilter;
        this.setState(valuefilter);
        var url = suburlcreatefilter;
        var params = this.state.valuefilter;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                if(respon.message == "") {
                    var value = this.state.valueflag
                    value.flagsave = true
                    this.setState(value);
                    window.location.href = "/#/rulesfilter";
                }else{
                    alert(respon.message)
                }
            })
    }
    deleteformroules(){
        var params =
            {
                "id": this.state.valuefilter.id+'',
            }
        var url = suburldeletefilter;
        fetch(url,
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(params)
            }).then(response => response.json())
            .then(respon => {
                if(respon.message == "") {
                    window.location.href = "/#/rulesfilter";
                }else{
                    alert(respon.message)
                }
            })
    }
    jobStatusValidator(value, row) {
        // If this function return an object, you got some ability to customize your error message
        const response = { isValid: true, notification: { type: 'success', msg: '', title: '' } };
        if (value == "doni") {
            response.isValid = false;
            response.notification.type = 'error';
            response.notification.msg = 'Value must be inserted';
            response.notification.title = 'Requested Value';
        } else if (value.length < 10) {
            response.isValid = false;
            response.notification.type = 'error';
            response.notification.msg = 'Value must have 10+ characters';
            response.notification.title = 'Invalid Value';
        }
        return response;
        // const nan = isNaN(parseInt(value, 10));
        // alert(nan)
        // alert(row['operand'])
        // if (nan) {
        //     return 'Job Status must be a integer!';
        // }
        // return true;
    }

    teschange(){
        alert("WOY")
    }
    render(){

        const options = {
            insertBtn: this.createCustomInsertButton,
            insertModalFooter: this.createCustomModalFooter,
            afterInsertRow: this.onAfterInsertRow,
            onDeleteRow: this.onDeleteRow,

        };
        const rowEvents = {
            onChange: (e, row, rowIndex) => {

            }
        };
        const selectRow = {
            mode: 'checkbox', //radio or checkbox
            showOnlySelected: false,

        };
        var list = [];
        listdetailfilter = [];
        valuerulesfilter.listdetail.map(function (item) {
            var description = item.description;
            if(description == null){
                description = ''
            }
            var fieldval = {
                filterid:item.id.filterid_d,
                field:item.field,
                operand:item.operand,
                value:item.value,
                action:item.action,
                description:description

            }
            listdetailfilter.push(fieldval);
            list.push(fieldval);
        })

        return(

            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={[LanguageStore.translate('Rules Filter')]}
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
                                       data-smart-validate-input="" data-required="" data-minlength="1" data-maxLength="3"
                                       data-message="Please specify your Name" onChange={this.OnChangeName.bind(this)}  value={this.state.valuefilter.name}

                                />
                            </div>
                        </div>
                    </div>
                </div>

                <BootstrapTable data={ list } insertRow={ true } options={ optionally } cellEdit={ cellEditProp } pagination={true} /*striped={true}*/ hover={true} condensed= {true} search={true}
                                options={ options } selectRow={ selectRow } deleteRow={true} headerStyle={ { background: '#aaaadd' } }  containerStyle={ { background: '#FFFFFF' } } bodyStyle={ { background: '#ffffff' } }
                                searchPlaceholder='Search from any columns...' expandComponent={ this.expandComponent }>

                    <TableHeaderColumn  dataField='filterid' width='0' dataAlign='center'  headerAlign='center'  isKey={ true } autoValue={true}>ID</TableHeaderColumn>

                    <TableHeaderColumn dataField='field' width='25' dataAlign='center'  headerAlign='center'
                                       editable={ {type: 'select', options: { values: field } } }>Field</TableHeaderColumn>

                    <TableHeaderColumn dataField='operand' width='25' dataAlign='center'  headerAlign='center'
                                       editable={ { type: 'select', options: { values: operand } } }>Operand</TableHeaderColumn>

                    <TableHeaderColumn dataField='value' width='25' dataAlign='center'  headerAlign='center'
                                       editable={ { type: 'text', options: { values: action },validator: this.jobStatusValidator } }>Value</TableHeaderColumn>

                    <TableHeaderColumn dataField='action' width='20' dataAlign='center'  headerAlign='center'
                                       editable={ { type: 'select', options: { values: action } } }>Action</TableHeaderColumn>

                    <TableHeaderColumn dataField='description' width='155' dataAlign='center'  headerAlign='center'
                                       editable={ { type: 'textarea'} }>Description</TableHeaderColumn>

                </BootstrapTable>
                <br></br>
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
                        <button name="submitdelete" onClick={this.deleteformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Delete</button>
                        &nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;
                        <button name="submitcancel" onClick={this.cancelformroules.bind(this)} type="button"style={{height:"50px",width:"95px"}} >Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}