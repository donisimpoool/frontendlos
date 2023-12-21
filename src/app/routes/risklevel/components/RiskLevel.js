import React from "react";
import {BootstrapTable, InsertButton, TableHeaderColumn} from "react-bootstrap-table";
import BigBreadcrumbs from "../../../components/navigation/components/BigBreadcrumbs";
import JarvisWidget from "../../../components/widgets/JarvisWidget";
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import {suburllistrisklevel} from "../../../config/baseUrl";
import LanguageStore from "../../../components/i18n/LanguageStore";
import {headers} from "../../../config/ConfigParam";

export var valueroulesfromtablerisk={
    id:0,
    name:'',
    odds:'',
    probabilityofdefault:0,
    min:0,
    max:0,
    status:''
}
function onAfterInsertRow(row) {

}
function onAfterSaveCell(row, cellName, cellValue) {

}
export default class RiskLevel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listitems:[]
        }
    }

    componentDidMount() {
        valueroulesfromtablerisk={
            id:0,
            name:'',
            odds:'',
            probabilityofdefault:0,
            min:0,
            max:0,
            status:''
        }
        var url = suburllistrisklevel;
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
            return item.id == row.id
        })
        valueroulesfromtablerisk.id = row.id
        filterid.map(function (item) {
            valueroulesfromtablerisk.name = item.namerisk
            valueroulesfromtablerisk.odds = item.odds
            valueroulesfromtablerisk.probabilityofdefault = item.probabilityofdefault
            valueroulesfromtablerisk.min = item.min
            valueroulesfromtablerisk.max = item.max
            valueroulesfromtablerisk.status = item.status
        })

        window.location.href = "/#/formrisklevel";
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
            var id = item.id;
            var name = item.namerisk;
            var score = item.min +" s/d "+item.max
            var status = '';
            if(item.status == "A"){
                status = "Approved"
            }else if(item.status == "R"){
                status = "Rejected"
            }else if(item.status == "U"){
                status = "UnderWriting"
            }
            var items = {
                id: id,
                name: name,
                odds: item.odds,
                probabilityofdefault: item.probabilityofdefault,
                score:score,
                status:status
            }
            list.push(items);

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
                    <BigBreadcrumbs items={['Risk Level']}
                                    className="col-xs-12 col-sm-7 col-md-7 col-lg-4"/>
                    <div className="col-xs-4 col-sm-4 col-md-4 col-log-4">
                        <a href="#/formrisklevel" className="btn btn-info btn-lg ">{LanguageStore.translate('Add Risk Level')}</a>
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
                                        <TableHeaderColumn dataField='id' dataSort={true} width='20%'
                                                           dataAlign='center' headerAlign='center' isKey={true}
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >ID</TableHeaderColumn>
                                        <TableHeaderColumn dataField='name' dataSort={true} width='20%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >{LanguageStore.translate('Name')}</TableHeaderColumn>
                                        <TableHeaderColumn dataField='odds' dataSort={true} width='20%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >{LanguageStore.translate('Odds')}</TableHeaderColumn>
                                        <TableHeaderColumn dataField='probabilityofdefault' dataSort={true} width='20%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >{LanguageStore.translate('Probability Of Defaults')}</TableHeaderColumn>
                                        <TableHeaderColumn dataField='score' dataSort={true} width='10%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >{LanguageStore.translate('Score')}</TableHeaderColumn>
                                        <TableHeaderColumn dataField='status' dataSort={true} width='10%'
                                                           dataAlign='center' headerAlign='center'
                                                           editable={false} expandable={false} filter={{
                                            type: 'TextFilter',
                                            placeholder: 'Please enter a value',
                                            delay: 10
                                        }}
                                        >Status</TableHeaderColumn>

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