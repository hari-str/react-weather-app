import React from 'react';
import './Result.css'
import location from "./locationicon.png"
import { Button } from '@mui/material';


const Result = ({ temp, name, country, desc, icon, setTemp }) => {
    return (
        <div className='result'>
            <div className="result__box">
                <img src={icon} alt="logo" />
                <h1>{temp}  &deg;C</h1>
                <h2>
                    <img src={location} alt='logo' />
                    {name},{country}
                </h2>
                <h3>{desc}</h3>
                <Button variant="outlined" onClick={() => { setTemp("") }}>Back</Button>
            </div>
        </div>

    )
}

export default Result