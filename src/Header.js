// @flow

import React, {Component} from "react";
import "./Header.css";


import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'

library.add(faEllipsisV)

class Header extends Component{
  render(){
    return(
        <div>
            <div className="title">
                <p>Zoneamento Agrícola de Risco Climático</p>
            </div>
            <div className="menu-bar">
                <FontAwesomeIcon icon="ellipsis-v" style="text-align: center;"/>
            </div>
        </div>
    )
    }
}

export default Header
