import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";

export default function Home() {
    const [city, setCity] = useState('pune');
    const [temperature, setTemperature] = useState('0');
    const [meassage, setMessage]= useState('')

    async function loadweatherinfo() {
        try{
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f652964084c552e8c0492237a3fabd9c`);
        setTemperature((response.data.main.temp -273).toFixed(2))
        setMessage('✅ Data Fetched Successfully...')
        }
        catch(err){
            setTemperature(0)
            setMessage('city not found')
        }
       
    }
    useEffect(()=>{
        loadweatherinfo()
    },[city])
    return (
        <div>
            <h1 className="app-title">Weather for {city}</h1>
            <input className="search-bar"
                type="text"
                placeholder="Enter city..."
                value={city}
                onChange={(e) => {
                    setCity(e.target.value)

                }} />
                <p className="mess-text">{meassage}</p>
            <h1 className="temp-text">Temperature:{temperature}  °C</h1>
            
        </div>
    )
}