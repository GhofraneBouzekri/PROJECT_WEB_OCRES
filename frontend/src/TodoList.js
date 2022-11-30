import React from 'react'; 
import './TodoList.css';
import { useState, useEffect } from 'react';

const Timer = () => {

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "December, 7, 2022";
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);
    /*
    const [seconds, setSeconds] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);


    React.useEffect(() => {

        const timer = setInterval(() => {

            setSeconds(seconds + 1);

            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);
            }

        }, 1000);

        return () => clearIntervall(timer);
    })*/




    return (
        <div className="timer">
            <div className="container">

            </div>
            <div className="Todolist_container2">

                <h1> MY TO DO LIST </h1>
                <div className="mission-container">
                    <h2>Devoir 1</h2>
                    <label>{days} Days</label>
                    <label>{hours} Heures {minutes} Minutes:{seconds} Seconds</label>

                    <button className='start' /*onClick={ }*/>START</button>
                    <button className='stop' /*</div>onClick={stop}*/>EN ATTENTE</button>
                </div>
                <div className="position-mission">
                </div>
                <div className="mission-container">
                    <h2>Devoir 2</h2>
                    <label>{days} Days  </label>
                    <label>{hours} : {minutes} :{seconds} </label>
                    <button className='start' /*onClick={ }*/>START</button>
                    <button className='stop' /*</div>onClick={stop}*/>EN ATTENTE</button>

                </div>


            </div>
        </div>
    )
}


export default Timer;

