import React from 'react'

function EventVIsualiser() {
    return (
        <div className='event-overlay'>

            <div className='event-card'>
                <div className='event-header'>
                    <p>Sold</p>
                </div>
                <div className='event-content'>
                    <p className='event-amount'>$ 100</p>
                    <p className='event-quantity'>10 items</p>
                    <p className='time-laps'>30 minutes ago</p>
                    <p className='event-quantity'>Store A</p>
                    <p className='time-laps'>27 minutes ago</p>
                    <p className='event-agent'>Agent:</p>
            </div>
        </div>
    )
}

export default EventVIsualiser