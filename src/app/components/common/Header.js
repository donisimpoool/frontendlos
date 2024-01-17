/**
 * Created by griga on 11/17/15.
 */

import React from 'react'

import FullScreen from './FullScreen'
import ToggleMenu from './ToggleMenu'
import SpeechButton from '../voice-control/components/SpeechButton'
import SearchMobile from './SearchMobile'

import Activities from '../activities/components/Activities'
import LanguageSelector from '../i18n/LanguageSelector'

import RecentProjects from './RecentProjects'
import {keyset, suburlLogout} from "../../config/baseUrl";
import {info} from "../../routes/auth/containers/Login";
import {DecrypsCode} from "../../config/Encrypt";
import { keyToken } from '../../config/ConfigParam'

export default class Header extends React.Component {
    logout(){
      localStorage.removeItem(keyToken);
      window.location.href = "/#/login";
        // if (window.confirm('Are you sure you want to exit ?')) {
        //     var user = JSON.parse(DecrypsCode(localStorage.getItem(keyset))).id;
        //     var url = suburlLogout + `?userid=` + user;
        //     fetch(url,
        //         {
        //             method: 'GET',
        //             headers: {
        //                 // Authorization: 'Bearer '+localStorage.getItem('token')
        //                 'content-type': 'application/json'
        //             },
        //         })
        //         .then(response => response.json())
        //         .then(appList => {
        //             localStorage.removeItem(keyset);
        //             window.location.href = "/#/login"
        //         })
        // }
    }
  render() {
    return <header id="header">
      <div id="logo-group">
                <span id="logo">
                    <img src="assets/img/simpoolv5-removebg-preview.png" // place your logo here
                         alt="SmartAdmin"/>
                </span>
        {/* Note: The activity badge color changes when clicked and resets the number to 0
         Suggestion: You may want to set a flag when this happens to tick off all checked messages / notifications */}

        <Activities />
      </div>
      <ToggleMenu className="btn-header"  /* collapse menu button */ 
        />

      {/* <RecentProjects /> */}
      <div className="pull-right"  /*pulled right: nav area*/ >


        


        {/* #MOBILE */}
        {/*  Top menu profile link : this shows only when top menu is active */}
        <ul id="mobile-profile-img" className="header-dropdown-list hidden-xs padding-5">
          <li className="">
            <a className="dropdown-toggle no-margin userdropdown" data-toggle="dropdown">
              <img src="assets/img/avatars/sunny.png" alt="John Doe" className="online"/>
            </a>
            <ul className="dropdown-menu pull-right">
              <li>
                <a className="padding-10 padding-top-0 padding-bottom-0"><i
                  className="fa fa-cog"/> Setting</a>
              </li>
              <li className="divider"/>
              <li>
                <a href="#/views/profile"
                   className="padding-10 padding-top-0 padding-bottom-0"> <i className="fa fa-user"/>
                  <u>P</u>rofile</a>
              </li>
              <li className="divider"/>
              <li>
                <a className="padding-10 padding-top-0 padding-bottom-0"
                   data-action="toggleShortcut"><i className="fa fa-arrow-down"/> <u>S</u>hortcut</a>
              </li>
              <li className="divider"/>
              <li>
                <a className="padding-10 padding-top-0 padding-bottom-0"
                   data-action="launchFullscreen"><i className="fa fa-arrows-alt"/> Full
                  <u>S</u>creen</a>
              </li>
              <li className="divider"/>
              <li>
                <a href="#/login" className="padding-10 padding-top-5 padding-bottom-5"
                   data-action="userLogout"><i
                  className="fa fa-sign-out fa-lg"/> <strong><u>L</u>ogout</strong></a>
              </li>
            </ul>
          </li>
        </ul>

        {/* logout button style="margin-top: 13px;"*/}
        <div id="logout" className="btn-header transparent pull-right" style={{marginTop:'13px'}}>
                    <span> <button  type="button" title="Sign Out" onClick={this.logout.bind(this)}
                              data-logout-msg="You can improve your security further after logging out by closing this opened browser"><i
                      className="fa fa-sign-out"/></button> </span>
        </div>

        {/* search mobile button (this is hidden till mobile view port)
        <SearchMobile className="btn-header transparent pull-right"/> */}
 
        {/* input: search field
        <form action="#/misc/search.html" className="header-search pull-right">
          <input id="search-fld" type="text" name="param" placeholder="Find reports and more"
                 data-autocomplete='[
					"ActionScript",
					"AppleScript",
					"Asp",
					"BASIC",
					"C",
					"C++",
					"Clojure",
					"COBOL",
					"ColdFusion",
					"Erlang",
					"Fortran",
					"Groovy",
					"Haskell",
					"Java",
					"JavaScript",
					"Lisp",
					"Perl",
					"PHP",
					"Python",
					"Ruby",
					"Scala",
					"Scheme"]'/>
          <button type="submit">
            <i className="fa fa-search"/>
          </button>
          <a href="$" id="cancel-search-js" title="Cancel Search"><i className="fa fa-times"/></a>
        </form> */}


        {/* <SpeechButton className="btn-header transparent pull-right hidden-sm hidden-xs" /> */}

        {/* <FullScreen className="btn-header transparent pull-right"/> */}


        {/* multiple lang dropdown : find all flags in the flags page */}
        <LanguageSelector />


      </div>
      {/* end pulled right: nav area */}


    </header>
  }
}