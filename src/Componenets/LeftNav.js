import React,{useState,useEffect} from 'react'
import axios from 'axios';

import "./our.css"
function LeftNav({onSelectSaveChanges}) {
    let [countries,setCountries] = useState([])
    let [country,setCountry] = useState([])

    useEffect(() => {
      //saving the data by hitting the get request to the below endpoint
      //why resp.data?
      //bcz in api response metadata details is also comming which useless for us
      //we only need data part so i.e resp.data
      axios.get("https://disease.sh/v3/covid-19/countries")
        .then(resp => {
          setCountries(resp.data);
        });
    }, []); 

  return (
    <div className='left__nav'>
        <h1>Select Country</h1>
        {countries && countries.map((country,idx)=>(
          // here key={idx} becz every time the map runs it requried unique container so to make unique we write key={idx}
          <h3 key={idx} onClick={()=>{
             // when user click this button .ie country name 
             //this two function calls are made
             //setCountry() to save the selected country
              setCountry(country.country)
              // onSelectSaveChanges() this function is comming through props 
              //see line no 46 in file App.js
              //sending countries && country name
              onSelectSaveChanges(countries,country.country)
            }
            } >{country.country}</h3>
        ))}
    </div>
  )
}

export default LeftNav