import './App.css';
import React, { useState,useEffect } from 'react';
import LeftNav from './Componenets/LeftNav';
import MapCom from './Componenets/MapCom';
import RightCom from './Componenets/RightCom';

function App() {
  let [countries, setCountries] = useState([])
  let [country, setCountry] = useState()
  let [counrtyData,setCountryData]=useState()
  let [relatedCourties,setRelatedCountries]=useState([])
  let [coutryIndex,setCountryIndex]=useState(0)


  let [details,setDetails]=useState({
    lat:0,
    long:0
  })

  let onSelectSaveData=(countries,country)=>{
    //here countries,country are comming from function props 
    // see line no 45 for reference
    //those data are stored in this component state variable to access any where in this component
    setCountries(countries)
    setCountry(country)
  }
  useEffect(()=>{
    //if countries is not empty
    //check props country is equals to the country in the list of countries from api and set that country lat ,long
    if(countries){   
      countries.map((cot,idx)=>{
        if(cot.country==country){
          setDetails({
            lat:cot.countryInfo.lat,
            long:cot.countryInfo.long
          })
          setCountryData({
            country:cot.country,
            cases:cot.cases,
            flag:cot.countryInfo.flag,
            deaths:cot.deaths,
            recovered:cot.recovered
          })
          // setCountryIndex(idx)
          let tempRelatedCountries=[]
          if(countries && idx){
             if(countries.length-idx >= 6){
                  for(let i=idx;i<idx+5;i++){
                    tempRelatedCountries.push(countries[i]);
                  }
             }else{
              for(let i=countries.length-1;i>=countries.length-6;i--){
                tempRelatedCountries.push(countries[i]);
              }
             }
             setRelatedCountries(tempRelatedCountries)
          }
        }
      })

     
    }

  },[country])




  

  return (
    <div className="App">
      {/* 
      IMP:This method is used to send data from child to parent Component
      here we are sending onSelectSaveData(countries,country) as a props 
      where  countries,country values are comming from child component 
       */}
       <LeftNav onSelectSaveChanges={onSelectSaveData}/>
       {/* here we are sending lat ,long to child component as props
        why only lat,long ?
        becz only lat ,long are required to set the position in the map
       */}
       {/* <MapCom lat={details.lat} long={details.long}/> */}
       <RightCom  lat={details.lat} long={details.long} counrtyData={counrtyData} relatedCourties={relatedCourties} />
    </div>
  );
}

export default App;
