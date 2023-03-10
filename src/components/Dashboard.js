import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './dashboard.css'
import PopupMenu from './PopupMenu'
import MyChart from './Chart'
import Table from './Table'

function Dashboard() {
  const [popup,setPopup]=useState(false)
  const handlePopup=()=>{
    setPopup(!popup)
  }
  return (
    <div className='container'>
     {popup?<PopupMenu state={popup} handlePopup={handlePopup}/>:''} 
     {!popup?<FontAwesomeIcon icon={faBars} className="menu-bars" onClick={()=>handlePopup()}/>:''}
      <div className='log-button'>Log In</div>
      <div className={popup?'blur-effect-inner-container':'inner-container'}>
        <div className='top-panel'>
          <div className='top-left-panel'>
            <MyChart /></div>
          <div className='top-right-panel'>
            <MyChart />
          </div>
        </div>
        <div className='center-panel'><Table /></div>
        <ul className='left-side-panel'>
          <li className='left-menu-option'>All</li>
          <li className='left-menu-option'>Credits</li>
          <li className='left-menu-option'>Sales</li>
          <li className='left-menu-option'>Entries</li>
          <li className='left-menu-option'>Expenses</li>
        </ul>
        <div className='right-side-upper-panel'>
          <div className='subject-Header'>
            <div className='avatar-wrapper'>
              <img src="https://images.unsplash.com/photo-1564460576398-ef55d99548b2?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1287&amp;q=80" alt="Avatar" className="avatar-image" />
            </div><p>Sandy - <span>Store B</span></p>
          </div>
          <p className='text-message'>Hi, I have a bunch of empty bottles,
            still waiting for the first delivery
            to run at full speed. I didn't have
            time to set up the store yet, but
            I'm sure it will be great.

            I'm looking forward to the first
            delivery.
          </p>
          <div className='chat-action'>Reply</div>
        </div>
        <div className='right-side-lower-panel'>

          <div className='event-container'>
            <div className='event-header'>
              <p>Sold</p>
            
            </div>
            <div className='event-content'>
           
              <p className='event-amount'>$ 100</p>
              <p className='event-quantity'>10 items</p>
              <p className='time-laps'>30 minutes ago</p>
            </div>
          </div>
          
          <div className='event-container'>
            <div className='event-header event-header-credit'>
              <p>Credit</p>
            
            </div>
            <div className='event-content'>
              <p className='event-amount'>$ 220</p>
              <p className='event-quantity'>13 items</p>
              <p className='time-laps'>27 minutes ago</p>
            </div>
          </div>

          <div className='event-container'>
            <div className='event-header event-header-entry'>
              <p>Entry</p>
            
            </div>
            <div className='event-content'>
              <p className='event-amount'>13 items</p>
              <p className='event-quantity'>Store A</p>
              <p className='time-laps'>27 minutes ago</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard