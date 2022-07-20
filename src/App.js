import React, { useState } from 'react';
import Inputer from './components/Input';
import Result from './components/Result';
import './App.css';
import axios from 'axios'

function App() {

    const [input, setInput] = useState("");
    const [temp, setTemp] = useState("");
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [country, setCountry] = useState("");
    const [icon, setIcon] = useState("");

    const findWeather = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        const url = "https://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + apiKey;
        const response = await axios.get(url);
        console.log(response)
        const temp = await response.data.main.temp;
        const name = await response.data.name;
        const country = await response.data.sys.country;
        const description = await response.data.weather[0].description;
        const icon = await response.data.weather[0].icon;
        const imageUrl = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        console.log(temp, description, imageUrl);

        setTemp(temp);
        setName(name);
        setCountry(country)
        setDescription(description);
        setIcon(imageUrl);

    }

    return (
        <div>
            {temp === "" ? (
                <Inputer input={input} setInput={setInput} findWeather={findWeather} />
            ) : (
                <Result temp={temp} desc={description} icon={icon} name={name} country={country} setTemp={setTemp} />
            )}


        </div>
    )
}

export default App