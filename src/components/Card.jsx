import React from 'react'
import '../css/components/Cards.css'
import img from '../assets/images/icon-ellipsis.svg'

export const Card = ({ title, hours, week, color }) => {

    return (
        <>
            <div className={`card card__work--${color}`}>
                <div className={`card__image--${color}`}></div>
                <div className="card__informatio--modifier">
                    <div className="card__title">
                        <p>{title}</p>
                        <img src={img} alt="Imagen de menu, tres puntos" className="icon-menu" />
                    </div>

                    <div className="card__hours">
                        <p><span className="work__hour">{hours}</span>hrs</p>
                        <p>Previous - <span className="work__week">{week}</span>hrs</p>
                    </div>
                </div>
            </div>
        </>
    )
}