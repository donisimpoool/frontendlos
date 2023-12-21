import React from "react";
import {BootstrapTable, InsertButton, TableHeaderColumn} from "react-bootstrap-table";
import {listattributeroules, litvalue} from "../../roulesscoring/ListRoules";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import JarvisWidget from "../../../components/widgets/JarvisWidget";
import {valueroulesfromtable} from "../../roulesscoring/components/RoulesScoring";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {suburllistrules,suburlalllistrules,suburllistrulesfilter,suburllistrulesfilterdetail} from "../../../config/baseUrl";
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
export var valueroulesfromtable1 ={typeroules:'',
    minvalue:0,
    maxvalue:0,
    value:'',
    valuenumber:0,
    score:0,
    groups:'',
    nameroules:'',
    userid:'',
    id:0}

export var valuerulesfilter ={id:'',name:'',
    listdetail:[]}
export default class RulesFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listitems:[],
            listdetail:[],
            page:{
                atpage:1,
                sizePerPage:10
            }
        }
    }

    componentDidMount() {
        valuerulesfilter ={id:'',name:'',
            listdetail:[]}
        var url = suburllistrulesfilter+`?page=1&sizeperpage=10`;
        fetch(url,
            {
                method: 'GET',
                headers: headers,
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listitems: appList.data.filterheader
                })
            })
    }
    onRowClick = (row) =>{
        var id = row.filterid;
        var name = row.filtername;
        var url = suburllistrulesfilterdetail+`?id=`+id+` `;
        fetch(url,
            {
                method: 'GET',
                headers: headers,
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listdetail: appList.data.listdetail
                })
                valuerulesfilter.id = id;
                valuerulesfilter.name = name;
                valuerulesfilter.listdetail = appList.data.listdetail;
                window.location.href = "/#/formrulesfilter";
            })

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
        var url = suburllistrules+`?page=`+page+`&sizeperpage=`+sizePerPage+` `;
        fetch(url,
            {
                method: 'GET',
                headers: {
                    // Authorization: 'Bearer '+localStorage.getItem('token')
                    'content-type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(appList => {
                this.setState({
                    listitems: appList.data
                })
            })
        var valuepage = this.state.page
        valuepage.atpage = page;
        valuepage.sizePerPage = sizePerPage;
        this.setState(valuepage);
    }
    render() {
        var list = [];
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
                    <BigBreadcrumbs items={[LanguageStore.translate('Rules Filter')]}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-log-4">
                    <a href="#/formrulesfilter" className="btn btn-info btn-lg ">{[LanguageStore.translate('Add Rules')]}</a>
                    </div>

                </div>

                <div className="row">
                    <article className="col-sm-12">

                        <JarvisWidget editbutton={false} color="darken">
                            <header><span className="widget-icon"> <i className="fa fa-table"/> </span>
                                <h2>Data</h2>

                            </header>
                            <div>
                                <div className="widget-body no-padding">

                                    <BootstrapTable data={this.state.listitems} pagination={true} striped={true}
                                                    hover={true} condensed={true} search={true}
                                                    options={options} cellEdit={ cellEditProp }
                                                    headerStyle={{background: '#aaaadd'}}  /*cellEdit={ cellEdit }*/
                                                    expandableRow={this.isExpandableRow}
                                                    containerStyle={{background: '#FFFFFF'}}
                                                    expandComponent={this.expandComponent}
                                                    searchPlaceholder='Search from any columns...'
                                                    expandColumnOptions={{expandColumnVisible: false}}>
                                        <TableHeaderColumn dataField='filterid' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center' isKey={true}
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Filter ID</TableHeaderColumn>

                                        <TableHeaderColumn dataField='filtername' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Filter Name</TableHeaderColumn>
                                        <TableHeaderColumn dataField='date' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Created Date</TableHeaderColumn>

                                        <TableHeaderColumn dataField='createby' dataSort={true} width='25%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Created By</TableHeaderColumn>
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