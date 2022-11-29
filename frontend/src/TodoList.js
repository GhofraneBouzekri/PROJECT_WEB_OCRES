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
                <div className="Timer-container">
                    <h1>lol</h1>
                    <h1>{days} Days</h1>
                    <h2>{hours} Heures {minutes} Minutes:{seconds} Seconds</h2>

                    <button className='start' /*onClick={ }*/>START</button>
                    <button className='stop' /*</div>onClick={stop}*/>STOP</button>
                </div>
                <div className="Timer-container">
                    <h1>WORKING TIME MA BELLE</h1>
                    <h1>{days} Days  </h1>
                    <h2>{hours} : {minutes} :{seconds} </h2>
                    <button className='start' /*onClick={ }*/>START</button>
                    <button className='stop' /*</div>onClick={stop}*/>STOP</button>

                </div>


            </div>
        </div>
    )
}


export default Timer;

