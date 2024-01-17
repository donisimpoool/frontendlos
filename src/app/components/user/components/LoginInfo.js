import React from 'react'
import ToggleShortcut from './ToggleShortcut'
import {info} from "../../../routes/auth/containers/Login";

import {connect} from 'react-redux';
// import {DecrypsCode} from "../../../config/Encrypt";
import {keyset} from "../../../config/baseUrl";

class LoginInfo extends React.Component {

  componentWillMount() {

  }

  render() {
    return (

      <div className="login-info">
			    <span>
			        <ToggleShortcut>
			            {/*<img src={this.props.picture} alt="me"*/}
                       {/*className="online"/><span>{ this.props.username }</span><i className="fa fa-angle-down"/>*/}
                        {/* <img src={this.props.picture} alt="me"
                             className="online"/><span>{ JSON.parse(DecrypsCode(localStorage.getItem(keyset))).name }</span><i className="fa fa-angle-down"/> */}
			        </ToggleShortcut>
			     </span>
      </div>
    )
  }
}

const mapStateToProps = (state)=>(state.user)

export default connect(mapStateToProps)(LoginInfo)