import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'

import './popupMenu.css'

function PopupMenu(props) {
  return (
      <div className='popup-container'>
      <div className='popup-inner'>
      <FontAwesomeIcon icon={faWindowClose} className="menu-bars" onClick={()=>props.handlePopup()}/>
      <ul className='popup-menu'>
            <li><a>Store A</a></li>
            <li><a>Store A</a></li>
            <li><a>Store A</a></li>
            <li><a>Store A</a></li>
            <li><a>Store A</a></li>
          </ul>
      </div>
          
      </div>
  )
}

export default PopupMenu