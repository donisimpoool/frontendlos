import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router'
import Msg from '../../i18n/Msg'

import SmartMenuList from './NavMenuList'


export default class SmartMenuItem extends React.Component {

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  render() {
    const item = this.props.item;


    const title = !item.parent ?
      <span className="menu-item-parent"><Msg phrase={item.title}/></span> :
      <Msg phrase={item.title}/>;

    const badge = item.badge ? <span className={item.badge.class}>{item.badge.label || ''}</span> : null;
    const childItems = item.items ? <SmartMenuList items={item.items}/> : null;

    const icon = item.icon ? (
      item.counter ? <i className={item.icon}><em>{item.counter}</em></i> : <i className={item.icon}/>
    ) : null;
    const liClassName = (item.route && this.context.router.isActive(item.route) ) ? 'active' : '';
      const linkparent =
          <Link activeClassName="active">
              {icon} {title} {badge}
          </Link>
    return <li className={liClassName}>{linkparent}{childItems}
            <ul>
                {item.menuitem.map((eventmenu) => {
                    var liClassName1 = (eventmenu.route && this.context.router.isActive(eventmenu.route)) ? 'active' : '';
                    const title1 = !eventmenu.parent ?
                        <span className="menu-item-parent"><Msg phrase={eventmenu.title}/></span> :
                        <Msg phrase={eventmenu.title}/>;
                    const icon1 = eventmenu.icon ? (
                        eventmenu.counter ? <i className={eventmenu.icon}><em>{eventmenu.counter}</em></i> : <i className={eventmenu.icon}/>
                    ) : null;
                    var link =
                        <Link to={eventmenu.route} title={eventmenu.title} activeClassName="active">
                            {icon1} {title1} {badge}
                        </Link>
                    var childItems1 = eventmenu.items ? <SmartMenuList items={eventmenu.items}/> : null;
                    return <li className={liClassName1}>{link}{childItems1}</li>;
                })}
            </ul>
          </li>
  }
}

