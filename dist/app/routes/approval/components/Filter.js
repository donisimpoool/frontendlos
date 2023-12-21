import React, {Component} from 'react';
import './MenuTabs.css'
import { BootstrapTable, TableHeaderColumn,InsertButton,InsertModalFooter } from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import { Alert } from 'react-bootstrap';


import {WidgetGrid, JarvisWidget}  from '../../../components'
import Approved from "./Approved";
const reqreq = require('../../../../assets/api/tables/datatables.reqreq.json');
const filt = require('../../../../assets/api/tables/datatables.filt.json');

function onAfterSaveCell(row, cellName, cellValue) {
    var paramsfilter={
        id:row.filterid,
        operand:row.operand,
        field:row.field,
        value:row.value,
        action:row.action,
        desccription:row.description,
    }
    var url = `http://localhost:8080/filter/v1/update`;
    fetch(url,
        {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(paramsfilter)
        })
        .then(response => console.log('Filter Update POSTED', response.status))
  console.log(`Save cell ${cellName} with value ${cellValue}`);
  console.log('The whole row :');
  console.log(row.operand);
    // no: "autovalue-1575885643818", field: "Gender", operand: "=", value: "667", action: "Reject", description: "yutyut" };
}

function onAfterInsertRow(row) {
    let newRowStr = '';

    for (const prop in row) {
      newRowStr += prop + ': ' + row[prop] + ' \n';
    }
    alert('The new row is:\n ' + newRowStr);
}

const cellEditProp = {
  mode: 'click',
  blurToSave: true,
  nonEditableRows: function() {
    // return filt.filter(p => p.id < 1).map(p => p.id);
  },
  afterSaveCell: onAfterSaveCell
};
const optionally = {
  afterInsertRow: onAfterInsertRow   // A hook for after insert rows
};
const field = [ 'Gender'	, 'Age'	, 'Education'	, 'Marital Status'	, 'Current Address'	, 'House Ownership'	, 'Number of Children'	,  'Net Income'	,  'Own Credit Card'	,  'Collateral Value'	, 'National ID Number'	, 'Bankrupty Check'	, 'Defaults Check'	, 'Credit Bureau Inquiries'	, 'Credit Bureau Score'	, 'Active Loans'	, 'Delinquency Check'	, 'Income Type'];
const operand = [ '=', '>', '>=', '<', '<=', '!=' ];
const action = [ 'Pass','Reject','Refer' ];

class Filter extends Component{
  constructor(props) {
    super(props);
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
     onAfterInsertRow(row) {
        let newRowStr = '';
        var paramsfilter={
            operand:row['operand'],
            field:row['field'],
            value:row['value'],
            action:row['action'],
            desccription:row['description'],
        }
             var url = `http://localhost:8080/filter/v1/create`;
             fetch(url,
                 {
                     method: 'POST',
                     headers: {
                         'content-type': 'application/json'
                     },
                     body: JSON.stringify(paramsfilter)
                 })
                 .then(response => console.log('Filter POSTED', response.status))
         // The new row is:
         //no: autovalue-1575880648884
         // field: Gender
         // operand: =
         //value:
         // action: Pass
         // description:
        //      for (const prop in row) {
        //     newRowStr += prop + ': ' + row[prop] + ' \n';
        // }
        // alert('The new row is:\n ' + row['value']);
    }
    render(){
      const options = {
          insertBtn: this.createCustomInsertButton,
          insertModalFooter: this.createCustomModalFooter,
          afterInsertRow: this.onAfterInsertRow
      };
        const rowEvents = {
            onChange: (e, row, rowIndex) => {

            }
        };
        return(
            <div id="content">

                <div className="row">
                  <article className="col-sm-12">
      
                    <WidgetGrid><JarvisWidget editbutton={false} fullscreenbutton={false} deletebutton={false} color="blue">
                    <header><span className="widget-icon"> <i className="fa fa-table"/> </span> <h2>Filters </h2></header>
                    <div>
                      <div className="widget-body no-padding">

                      <BootstrapTable data={ reqreq }  striped={true} hover={true} condensed= {true} options={ optionally } cellEdit={ cellEditProp }
                            options={ options } headerStyle={ { background: '#aaaadd' } }  containerStyle={ { background: '#FFFFFF' } } bodyStyle={ { background: '#ffffff' } }>

                            <TableHeaderColumn dataField='field' width='25' dataAlign='center'  headerAlign='center' isKey={true}
                            >Field</TableHeaderColumn>
                            <TableHeaderColumn dataField='value' width='75' dataAlign='center'  headerAlign='center'
                            >Value</TableHeaderColumn>
                          </BootstrapTable>
                      </div>
                    </div>
                  </JarvisWidget></WidgetGrid>
                  </article>
                </div>

            <Alert variant="warning" >Please click on the empty cells to start entering your desired Filters</Alert>

        <BootstrapTable data={ this.props.listfilter } insertRow={ true } options={ optionally } cellEdit={ cellEditProp } pagination={true} /*striped={true}*/ hover={true} condensed= {true} search={true}
        options={ options } headerStyle={ { background: '#aaaadd' } }  containerStyle={ { background: '#FFFFFF' } } bodyStyle={ { background: '#ffffff' } }
        searchPlaceholder='Search from any columns...' expandComponent={ this.expandComponent }>

        <TableHeaderColumn dataField='filterid' width='0' dataAlign='center'  headerAlign='center'  isKey={ true } autoValue={true}>ID</TableHeaderColumn>

        <TableHeaderColumn dataField='field' width='25' dataAlign='center'  headerAlign='center'
        editable={ {type: 'select', options: { values: field }} }>Field</TableHeaderColumn>

        <TableHeaderColumn dataField='operand' width='25' dataAlign='center'  headerAlign='center'
        editable={ { type: 'select', options: { values: operand } } }>Operand</TableHeaderColumn>

        <TableHeaderColumn dataField='value' width='25' dataAlign='center'  headerAlign='center'>Value</TableHeaderColumn>

        <TableHeaderColumn dataField='action' width='20' dataAlign='center'  headerAlign='center'
        editable={ { type: 'select', options: { values: action } } }>Action</TableHeaderColumn>

        <TableHeaderColumn dataField='description' width='155' dataAlign='center'  headerAlign='center'
        editable={ { type: 'textarea'} }>Description</TableHeaderColumn>

      </BootstrapTable>
            </div>
        )
    }
}

export default Filter;