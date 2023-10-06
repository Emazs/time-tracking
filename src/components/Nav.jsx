import React from 'react'
import '../css/components/profileWeek.css'

export const Nav = ({ onActivate }) => {

    const onHandleClick = (event) => {
        onActivate(event.target.textContent.toLowerCase())
    }

    return (
        <>
            <article className="profile__week">
                <p className="menu" onClick={onHandleClick} >Daily </p>
                <p className="menu" onClick={onHandleClick} >Weekly</p>
                <p className="menu" onClick={onHandleClick} >Monthly</p>
            </article>
        </>
    )
}