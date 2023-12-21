import React, {Component} from 'react';
import './MenuTabs.css'
import AllTable2 from './AllTable2';

import {WidgetGrid, JarvisWidget}  from '../../../components'
import Datatable from '../../../components/tables/Datatable'


// {
//     catatan:
//     // npm install react-bootstrap-table-next --save
//     // npm install react-bootstrap-table --save
//     // npm install --save-dev json-loader
//     // npm install react-bootstrap bootstrap --save
    
//     import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
//     import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css'
//     import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
//     import { Tabs, Tab } from 'react-bootstrap';

//     file json ga pake "data: {" kek kalo di beautifier biasa
// }

class All extends Component{
    render(){
        return(
              <AllTable2
                  listallitem={this.props.listallitem}
              />
        )
    }
}

export default All;