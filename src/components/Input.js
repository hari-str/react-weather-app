import React from 'react'
import './Input.css';
import { Input, Button } from '@mui/material';


const Inputer = ({ input, setInput, findWeather }) => {

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleClick = (e) => {
        e.preventDefault();
        findWeather();
    }


    return (
        <div className="inputbox">
            <div className="inputbox__field">
                <h1>React Weather App</h1>
                <img src="https://thumbs.gfycat.com/AppropriateAgedCoral-size_restricted.gif" alt='react-logo' />
                <form>
                    <Input placeholder='Enter the city name' onChange={handleChange} value={input} /> <br />
                    <Button variant="contained" color="primary" onClick={handleClick} type="submit">Search</Button>
                </form>
            </div>
        </div>
    )
}

export default Inputer