import React from 'react'
import '../css/components/reportPerson.css'

export const ReportPerson = () => {
    return (
        <>
            <div className='profile__user'>
                <img src="./src/assets/images/image-jeremy.png" alt="" className='profile__image--modifier ' />
                <div className="profile__information">
                    <p>Report for</p>
                    <p>Jeremy Robson</p>
                </div>
            </div>
        </>
    )
}