import React, {Component} from 'react'
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import JarvisWidget from "../../../components/widgets/JarvisWidget";
import {BootstrapTable, InsertButton, TableHeaderColumn} from "react-bootstrap-table";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {listattributeroules,litvalue} from "../ListRoules";
import {valueroules} from "./FormRoulesScoring";
import {suburllistrules,suburlalllistrules, baseUrlRoules} from "../../../config/baseUrl";
import {header, headers} from "../../../config/ConfigParam";

function priceFormatter(cell, row) {
    var price = cell;
    price = price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
    return price;
}
function onAfterInsertRow(row) {

}
function onAfterSaveCell(row, cellName, cellValue) {

}
export var valueroulesfromtable ={typeroules:'',
    minvalue:0,
    maxvalue:0,
    value:'',
    valuenumber:0,
    score:0,
    groups:'',
    nameroules:'',
    userid:'',
    id:0}
export default class RoulesScoring extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listitems:[],
            listlinebusiness:[],
            page:{
                atpage:1,
                sizePerPage:10
            }
        }
    }

    componentDidMount() {
        valueroulesfromtable ={typeroules:'',
            minvalue:0,
            maxvalue:0,
            value:'',
            valuenumber:0,
            score:0,
            groups:'',
            nameroules:'',
            userid:'',
            id:0}
        // var url = suburllistrules+`?page=1&sizeperpage=10`;
        //suburlalllistrules
        var url = baseUrlRoules;
        // fetch(`${url}/loan/application/v1/applicant-list/?pageSize=${pageSize}`,
        fetch(url,
            {
                method: 'GET',
                headers: header,
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listitems: appList.data.listrules,
                    listlinebusiness:appList.data.listlb
                })
            })
    }
    onRowClick = (row) =>{
        var filterroulesid = this.state.listitems.filter( (item) => {
            return item.id == row.id
        })
        valueroulesfromtable.id = row.id
        filterroulesid.map(function (item) {
            valueroulesfromtable.typeroules = item.typeroules
            valueroulesfromtable.minvalue = item.minvalue
            valueroulesfromtable.maxvalue = item.maxvalue
            valueroulesfromtable.value = item.value
            valueroulesfromtable.valuenumber = item.valuenumber
            valueroulesfromtable.score = item.score
            valueroulesfromtable.groups = item.groups
            valueroulesfromtable.nameroules = item.nameroules
            valueroulesfromtable.userid = item.createdby
        })

        window.location.href = "/#/FormRoulesScoring";
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
    onPageChange = (page, sizePerPage) => {
        // console.log("page : "+page);
        // console.log("sizePerPage : "+sizePerPage);
        // var url = suburllistrules+`?page=`+page+`&sizeperpage=`+sizePerPage+` `;
        // // fetch(`${url}/loan/application/v1/applicant-list/?pageSize=${pageSize}`,
        // fetch(url,
        //     {
        //         method: 'GET',
        //         headers: {
        //             // Authorization: 'Bearer '+localStorage.getItem('token')
        //             'content-type': 'application/json'
        //         },
        //     })
        //     .then(response => response.json())
        //     .then(appList => {
        //         this.setState({
        //             listitems: appList.data
        //         })
        //     })
        // var valuepage = this.state.page
        // valuepage.atpage = page;
        // valuepage.sizePerPage = sizePerPage;
        // this.setState(valuepage);
    }
    render() {
        var list = [];
        var listlb = this.state.listlinebusiness;
        this.state.listitems.map(function (item) {
            var roulesid = item.id;
            var nameroules = item.nameroules;
            var score = item.score;
            var createdby = item.createdby;
            var modifieddate = item.modifieddate;
            var groups = ''
            var value = '';
            var filterattr = listattributeroules.filter( (item4) => {
                return item4.id == item.groups
            })
            filterattr.map(function (item3) {
                groups = item3.name
            })
            if(item.groups == 'industrysector'){
                var filterlb = listlb.filter( (itemlb) => {
                    return item.value == itemlb.id
                })
                filterlb.map(function (item2) {
                    value = item2.name
                })
            }else if(item.typeroules == 'equals'){
                var filtervalue = litvalue.filter( (item1) => {
                    return item1.attributid == item.groups && item1.id == item.value
                })
                filtervalue.map(function (item2) {
                    value = item2.name
                })
            }else if(item.typeroules == 'equalsnumber'){
                value = item.valuenumber
            }else if(item.typeroules == 'range'){
                value = item.minvalue +' s/d '+ item.maxvalue
            }
            var items = {
                id:roulesid,
                nameroules:nameroules,
                score:score,
                groups:groups,
                createdby:createdby,
                modifieddate:modifieddate,
                value:value,
                date:item.date
            }
            list.push(items);
        })
        const options = {
            insertBtn: this.createCustomInsertButton,
            onRowClick: this.onRowClick,
            afterInsertRow: this.onAfterInsertRow,
            expandBy: 'column',
            page:this.state.page.atpage,
            sizePerPage: this.state.page.sizePerPage,
            // paginationSize: 5,
            onPageChange: this.onPageChange
        };
        const optionally = {
            afterInsertRow: onAfterInsertRow   // A hook for after insert rows
        };
        const cellEdit = {
            mode: 'click',
            blurToSave: true
        };
        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            nonEditableRows: function() {
                // return filt.filter(p => p.id < 1).map(p => p.id);
            },
            afterSaveCell: onAfterSaveCell
        };

        return (
            <div id="content">
                <div className="row">
            <BigBreadcrumbs items={['Rules Scoring']}
                            className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    {/*<div className="col-xs-4 col-sm-4 col-md-4 col-log-4">*/}
                        {/*<a href="#/formroulesscoring" className="btn btn-info btn-lg ">Add Roules</a>*/}
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
                                        <TableHeaderColumn dataField='id' dataSort={true} width='10%'
                                                           dataAlign='center' headerAlign='center' isKey={true}
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Roules ID</TableHeaderColumn>

                                        <TableHeaderColumn dataField='value' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Value</TableHeaderColumn>
                                        <TableHeaderColumn dataField='groups' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Attributes</TableHeaderColumn>

                                        <TableHeaderColumn dataField='score'
                                                           dataSort={true} width='15%' dataAlign='center'
                                                           headerAlign='center'
                                                           editable={false} expandable={false}
                                                           filter={{type: 'NumberFilter', delay: 10}}
                                        >Score</TableHeaderColumn>

                                        <TableHeaderColumn dataField='date' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Modified By</TableHeaderColumn>
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
