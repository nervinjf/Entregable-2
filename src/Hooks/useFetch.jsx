import React from 'react';
import { useState, useEffect } from 'React';
import axios from 'axios';

const useFetch = (accessApi) => {

        const [ api, setApi] = useState({});
        const [centigrados , setCentigrados] = useState(false)
    
        useEffect(() => {
            navigator.geolocation.getCurrentPosition(success);
  
    function success(pos) {
      const crd = pos.coords;
      
       axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=72f1c5a8cb94f04b0008a4b7ed0c41dd`)
      .then(res => setApi(accessApi(res)))
    }
        }, [])

        let tempF = (api.main?.temp-273.15)*9/5 +32;
        let tempC = (api.main?.temp - 273.15);

        const degrees = () => {
            setCentigrados(!centigrados)
        }

    return { api, tempF, tempC, centigrados, degrees};

}
    

export default useFetch;