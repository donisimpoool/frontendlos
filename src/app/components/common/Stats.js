import React from 'react'

import SparklineContainer, {Sparkline} from '../graphs/inline/SparklineContainer'
import { ChartJSGraph } from '../graphs/chartjs/ChartJsGraph';
import Msg from "../i18n/Msg";


export default class Stats extends React.Component {
  getStats() {
    return {
      income: {
        total: '$47,171',
        values: [1300, 1877, 2500, 2577, 2000, 2100, 3000, 2700, 3631, 2471, 2700, 3631, 2471]
      },
      traffic: {
        total: '45%',
        values: [110,150,300,130,400,240,220,310,220,300, 270, 210]
      },
      orders: {
        total: '2447',
        values: [110,150,300,130,400,240,220,310,220,300, 270, 210]
      },
      applicant: {
        values: '5124'
      },
      approved:{
        total: '10'
      },
      pending:{
        total:'500'
      }
    }
  }

  render() {
    var all = 0;
    var underwriting = 0;
    var approve = 0;
    var length = this.props.list.length;
    if (length > 0) {
    this.props.list.slice(0, 1).map(function (item) {
      all = item.appall;
      underwriting = item.appunderwriting;
      approve = item.appapprove;
    })
  }
    const {className, ...props} = this.props;
    const stats = this.getStats()
    return (
      <div className="col-xs-12 col-sm-5 col-md-5 col-lg-8">  
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
          <div className="well well-sm bg-color-purple txt-color-white text-center">
            <ul id="sparks" className={className} className="text-center">
              <li className="sparks-info"> 
                <h5 className="txt-color-white"> <Msg phrase="Applicants" txtcolour={'white'}/>  <span className="txt-color-white"> {all}</span></h5>
              </li> 
            </ul>
          </div> 
        </div> 

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
          <div className="well well-sm bg-color-purple txt-color-white text-center">
            <ul id="sparks" className={className} className="text-center"> 
              <li className="sparks-info">
                <h5 className="txt-color-white"> <Msg phrase="Approved" txtcolour={'white'}/> <span className="txt-color-white">  {approve}</span></h5>
              </li> 
            </ul>
          </div>
          
        </div> 

        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3">
          <div className="well well-sm bg-color-purple txt-color-white text-center">
            <ul id="sparks" className={className} className="text-center"> 
              <li className="sparks-info">
                <h5 className="txt-color-white"> <Msg phrase="Pending" txtcolour={'white'}/> <span className="txt-color-white">  {underwriting}</span></h5>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    )
  }
}
