import React from 'react';
import ReactDOM from 'react-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap';
import classnames from 'classnames';
import './w3school.css';
import './MenuTabs.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import All from './All'
import Filter from './Filter'
import Underwriting from './Underwriting'
import Rejected from './Rejected'
import Approved from './Approved'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
      
      percentage: 50
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      percentage: event.target.value
    });
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div><h1>APPROVAL PROCESS</h1>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              All
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Filter
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Underwriting
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Rejected
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Approved
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1" className="tab1">
              <All/>
          </TabPane>


          <TabPane tabId="2" className="tab2">
            <Filter/>
          </TabPane>


          <TabPane tabId="3" className="tab3">
            <Underwriting/>
          </TabPane>


          <TabPane tabId="4" className="tab4">
            <Approved/>
          </TabPane>


          <TabPane tabId="5" className="tab5">
            <Rejected/>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);