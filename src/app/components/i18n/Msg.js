import React from 'react'
import Reflux from 'reflux'

import LanguageStore from './LanguageStore'

export var phrase = ''
export default class Msg extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.store = LanguageStore
  }


  render() {
     phrase = ''
     phrase = LanguageStore.translate(this.props.phrase)
      let colour = this.props.txtcolour;
      let spanphrase = this.props.spanphrase;
      if (typeof colour == "undefined") {
          if (typeof spanphrase == "undefined") {
              return (
                  <span>{phrase}</span>
              )
          }else{
              return (
                  {phrase}
              )
          }
      }else if (typeof colour !== "undefined"){
          return (
              <span className="txt-color-white">{phrase}</span>
          )
      }
  }
}