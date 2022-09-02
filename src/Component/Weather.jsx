import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'react'
import useFetch from '../Hooks/useFetch';

const Weather = () => {

    const { api, tempF, tempC, centigrados, degrees} = useFetch(res => res.data)

    return (
        <div className='container'>
            <h1>Weather App</h1>
            <h4 className="country"><span>{api.name}, {api.sys?.country}</span></h4>
            <img src={`http://openweathermap.org/img/wn/${api.weather?.[0].icon}@2x.png`} alt="" />
            <h4 className='temp'> <span>{!centigrados ? tempF.toFixed(2) : tempC.toFixed(2)} {!centigrados ? "°F" : "°C"}</span></h4>
            <div className='container-characters'>
                <h4><span>"{api.weather?.[0].description}"</span></h4><hr/>
                <h4>wind Speed: <span>{api.wind?.speed} m/s</span> </h4>
                <h4>Clouds: <span>{api.clouds?.all} %</span> </h4><hr/>
                <h4>Pressure: <span>{api.main?.pressure} mb</span> </h4>
            </div>
            <button onClick={degrees}>Degrees °F/°C</button>
        </div>
    );
};

export default Weather;