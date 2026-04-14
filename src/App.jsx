import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card";

export default function App (){

  const [countries, setCountries] = useState([]);
  const [region, setRegion = useState("");
  const [search, setSearch] = useState("");

  // ------------------------------

  const regions=["Afrique","Europe","Asie","Amérique","Océanie"];


//  Appels de l'API
useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(res => setCountries(res.data))
    .catch(err => console.log(err));
}, []);

// Filtrage
const filteredCountries = countries.filter((country) => {
  const matchRegion = region ? country.region === region : true;
  const matchSearch = country.name.common 
  .toLowerCase()
  .includes(search.toLowerCase());

  return matchRegion && matchSearch;
});

return(
  
);



}