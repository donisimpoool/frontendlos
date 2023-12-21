import React, {Component} from 'react'
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import JarvisWidget from "../../../components/widgets/JarvisWidget";
import {BootstrapTable, InsertButton, TableHeaderColumn} from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {listattributeroules,litvalue} from "../../roulesscoring/ListRoules";
import {valueroules} from "../../roulesscoring/components/FormRoulesScoring";
import {suburllistloan} from "../../../config/baseUrl";
import {tempData} from "../../new-app/components/ListApplication";
import {headers} from "../../../config/ConfigParam";

function priceFormatter(cell, row) {
    var price = cell;
    price = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return price;
}
function onAfterInsertRow(row) {

}
function onAfterSaveCell(row, cellName, cellValue) {

}
export var valueroulesfromtableloan={
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
}
export default class LoanProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listitems:[]
        }
    }

    componentDidMount() {
        valueroulesfromtableloan={
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
        }
        var url = suburllistloan;
        // fetch(`${url}/loan/application/v1/applicant-list/?pageSize=${pageSize}`,
        fetch(url,
            {
                method: 'GET',
                headers: headers,
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listitems: appList.data
                })
            })
    }
    onRowClick = (row) =>{
        var filterid = this.state.listitems.filter( (item) => {
            return item.loanProductId == row.id
        })
        valueroulesfromtableloan.id = row.id
        filterid.map(function (item) {
            valueroulesfromtableloan.description = item.loanDescription
            valueroulesfromtableloan.name = item.loanName
            valueroulesfromtableloan.minamount = item.minamount
            valueroulesfromtableloan.maxamount = item.maxamount
            valueroulesfromtableloan.mintenor = item.mintenor
            valueroulesfromtableloan.maxtenor = item.maxtenor
            valueroulesfromtableloan.filterid = item.filterid_h
            valueroulesfromtableloan.defaultamount = item.defaultamount
            valueroulesfromtableloan.defaulttenor = item.defaulttenor
        })

        window.location.href = "/#/formloanproduct";
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
    onAfterInsertRow(row) {

    }
    render() {
        var list = [];
        this.state.listitems.map(function (item) {
            var loanproductid = item.loanProductId;
            if(loanproductid != 0) {
                var loan_description = item.loanDescription;
                var loan_name = item.loanName;
                var amount = item.minamount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " s/d " + item.maxamount.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
                var tenor = item.mintenor + " s/d " + item.maxtenor

                var items = {
                    id: loanproductid,
                    loan_description: loan_description,
                    loan_name: loan_name,
                    amount: amount,
                    tenor: tenor
                }
                list.push(items);
            }
        })

        const options = {
            insertBtn: this.createCustomInsertButton,
            onRowClick: this.onRowClick,
            afterInsertRow: this.onAfterInsertRow,
            expandBy: 'column' //dan tiap kolom di expandable={false} maka supaya hanya (+) biar bisa expand
            //expandRowBgColor: 'rgb(255,255,255)'
        };
        const optionally = {
            afterInsertRow: onAfterInsertRow   // A hook for after insert rows
        };
        const cellEdit = {
            mode: 'dbclick',
            blurToSave: true
        };
        const cellEditProp = {
            mode: 'dbclick',
            blurToSave: true,
            nonEditableRows: function() {
                // return filt.filter(p => p.id < 1).map(p => p.id);
            },
            afterSaveCell: onAfterSaveCell
        };

        return (
            <div id="content">
                <div className="row">
                    <BigBreadcrumbs items={['Loan Product']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    {/*<div className="col-xs-4 col-sm-4 col-md-4 col-log-4">*/}
                        {/*<a href="#/formloanproduct" className="btn btn-info btn-lg ">Add Loan Product</a>*/}
                    {/*</div>*/}

                </div>

                <div className="row">
                    <article className="col-sm-12">

                        <JarvisWidget editbutton={false} color="darken">
                            <header><span className="widget-icon"> <i className="fa fa-table"/> </span>
                                <h2>Data</h2>

                            </header>
                            <div>
                                <div className="widget-body no-padding">

                                    <BootstrapTable data={list} pagination={true} striped={true}
                                                    hover={true} condensed={true} search={true}
                                                    options={options} cellEdit={ cellEditProp }
                                                    headerStyle={{background: '#aaaadd'}}  /*cellEdit={ cellEdit }*/
                                                    expandableRow={this.isExpandableRow}
                                                    containerStyle={{background: '#FFFFFF'}}
                                                    expandComponent={this.expandComponent}
                                                    searchPlaceholder='Search from any columns...'
                                                    expandColumnOptions={{expandColumnVisible: false}}>
                                        <TableHeaderColumn dataField='id' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center' isKey={true}
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Loan ProductID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='loan_name' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Loan Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField='loan_description' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Description</TableHeaderColumn>
                                        <TableHeaderColumn dataField='amount' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Amount</TableHeaderColumn>

                                        <TableHeaderColumn dataField='tenor' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Tenor</TableHeaderColumn>
                                        {/*<TableHeaderColumn dataField='id' dataAlign='center'  width='18%' headerAlign='center' editable={ false } expandable={ false }>Waiting Time</TableHeaderColumn>*/}
                                        {/*<TableHeaderColumn dataField='status' dataAlign='center'  width='25%' headerAlign='center' expandable={ false }  editable={ false } editable={ { type: 'select', options: { values: status } } }>Status</TableHeaderColumn>*/}
                                    </BootstrapTable>

                                </div>
                            </div>
                        </JarvisWidget>
                    </article>
                </div>

            </div>
        )
    }
}
