import React from "react";
import {BootstrapTable, InsertButton, TableHeaderColumn} from "react-bootstrap-table";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import JarvisWidget from "../../../components/widgets/JarvisWidget";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {suburlbank} from "../../../config/baseUrl";

export var valueroulesfromtablebank={
    id:0,
    name:''
}
function onAfterInsertRow(row) {

}
function onAfterSaveCell(row, cellName, cellValue) {

}
export default class Bank extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listitems:[]
        }
    }

    componentDidMount() {
        valueroulesfromtablebank={
            id:0,
            name:''
        }
        var url = suburlbank;
        // fetch(`${url}/loan/application/v1/applicant-list/?pageSize=${pageSize}`,
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
    }
    onRowClick = (row) =>{
        var filterid = this.state.listitems.filter( (item) => {
            return item.bankId == row.id
        })
        valueroulesfromtablebank.id = row.id
        filterid.map(function (item) {
            valueroulesfromtablebank.name = item.bankName
        })

        window.location.href = "/#/formbank";
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
            var bankId = item.bankId;
            if(bankId != 0) {
                var bankName = item.bankName;
                var items = {
                    id: bankId,
                    bankName: bankName
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
                    <BigBreadcrumbs items={['Bank']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-log-4">
                        <a href="#/formbank" className="btn btn-info btn-lg ">Add Bank</a>
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

                                    <BootstrapTable data={list} pagination={true} striped={true}
                                                    hover={true} condensed={true} search={true}
                                                    options={options} cellEdit={ cellEditProp }
                                                    headerStyle={{background: '#aaaadd'}}  /*cellEdit={ cellEdit }*/
                                                    expandableRow={this.isExpandableRow}
                                                    containerStyle={{background: '#FFFFFF'}}
                                                    expandComponent={this.expandComponent}
                                                    searchPlaceholder='Search from any columns...'
                                                    expandColumnOptions={{expandColumnVisible: false}}>
                                        <TableHeaderColumn dataField='id' dataSort={true} width='50%'
                                                           dataAlign='center' headerAlign='center' isKey={true}
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Bank ID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='bankName' dataSort={true} width='50%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Bank Name</TableHeaderColumn>

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