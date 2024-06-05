import React, {useState} from "react";
import styles from "./weather.module.css"
import axios from "axios"

const Weather = () => {
  const [location, setLocation]= useState("");
  const [request, setRequest]=useState({});
console.log(location);

const Url =` https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=3064ef5b22169c1dedb22b8af0be47d3&units=metric `


const setWeather=()=>{
axios.get(Url).then((response) =>  {
  setRequest(response.data);
  console.log(response.data)
});
};

  return (
    <div>
      <div className = {styles.container}>
        <div className={styles.header}>
          <div className={styles.search_box}>
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
      <input type="text" placeholder="Enter your location" className={styles.userInput} value={location} onChange={(e)=> setLocation(e.target.value)}></input>
  
      </div>
      <button className={styles.btn_search} onClick={setWeather}>Search</button>
      </div>
      
      <h2 className={styles.city}>{request.name}</h2>
      <h4 className={styles.city}>  Temperature &nbsp;{request.main? <span>{request.main.temp}°C <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-84,57V88a8,8,0,0,0-16,0v65a32,32,0,1,0,16,0Zm-8,47a16,16,0,1,1,16-16A16,16,0,0,1,120,200Zm40-66V48a40,40,0,0,0-80,0v86a64,64,0,1,0,80,0Zm-40,98a48,48,0,0,1-27.42-87.4A8,8,0,0,0,96,138V48a24,24,0,0,1,48,0v90a8,8,0,0,0,3.42,6.56A48,48,0,0,1,120,232Z"></path></svg></span>:null}</h4>
      <p className={styles.city}> Humidity {request.main? <span>{request.main.humidity}% <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#ffffff" viewBox="0 0 256 256"><path d="M174,47.75a254.19,254.19,0,0,0-41.45-38.3,8,8,0,0,0-9.18,0A254.19,254.19,0,0,0,82,47.75C54.51,79.32,40,112.6,40,144a88,88,0,0,0,176,0C216,112.6,201.49,79.32,174,47.75ZM128,216a72.08,72.08,0,0,1-72-72c0-57.23,55.47-105,72-118,16.53,13,72,60.75,72,118A72.08,72.08,0,0,1,128,216Z"></path></svg></span>:null}</p>
     
      
    
    </div>
     

   
      </div>
  )
}

export default Weather
