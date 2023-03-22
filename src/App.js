import './App.css';

import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <h1>Welcome To Our Country Site</h1>

      <Countries></Countries>

    {/* <Header></Header>
    <Country></Country>
    <Person></Person> */}
    </div>
  );
}

// Alt + Shift + A
/* function LoadCountries(){
  const [countries,setCountries] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  return(
    <div>
      <h1>Visiting All Countries Of The World!!!</h1>
      <h3>Available countries: {countries.length}</h3>
      {
        countries.map(country => 
        <Country name={country.name.common} population=
        {country.population}></Country>)
      }
    </div>
  )
}

function Country(props){
  return(
    <div>
      <h4>Name: {props.name}</h4>
      <h6>Population: {props.population}</h6>
    </div>
  )
} */
export default App;
