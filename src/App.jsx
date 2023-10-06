import './css/components/person.css'
import './css/objects/container.css'
import './css/components/Cards.css'

import React, { useEffect, useState } from "react"
import { Card } from './components/Card'
import { ReportPerson } from './components/ReportPerson'
import { Nav } from './components/Nav'
import { fetchData } from './components/FetchData'

function App() {

    const [nameTarget, setNameTarget] = useState('weekly');
    const [datas, setdatas] = useState([]);

    useEffect(() => {
        fetchData().then(datas => {
            setdatas(datas)
        })
    }, []) 

    const onActivate = (target) => {
        setNameTarget(target.trim());
    }

    return (
        <>
            <section className="container">
                <section className='container__person'>
                    <ReportPerson />
                    <Nav onActivate={onActivate} />
                </section>

                <div className='container__cards'>
                    {datas.map(data =>
                        nameTarget == 'weekly' ? <Card color={data.color} title={data.title} hours={data.timeframes.weekly.current} week={data.timeframes.weekly.previous} key={data.title} />
                            : nameTarget == 'daily' ? <Card color={data.color} title={data.title} hours={data.timeframes.daily.current} week={data.timeframes.daily.previous} key={data.title} />
                                : nameTarget == 'monthly' && <Card color={data.color} title={data.title} hours={data.timeframes.monthly.current} week={data.timeframes.monthly.previous} key={data.title} />
                    )}
                </div>
            </section>
        </>
    )
}

export default App