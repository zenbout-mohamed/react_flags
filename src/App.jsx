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
    <div className ="container">
      <h1> Countries-App </h1>

      // Region Filtrage
      <select onChange={(e) => setRegion(e.target.value)}>
      <option value="">Toutes les régions</option>
      {regions.map((r) => (
        <option key = {r} value ={r}>{r}</option>
      ))}
      </select>

      // Recherche-------------
      <input onChange={(e) => setSearch(e.target.value)} type="text"  placeholder="Rechercher un pays :"/>

      // Compteur -------------
      <p>{filteredCountries.length} pays Affichés :</p>

      // Liste -------------
      <div className="liste">
        {filteredCountries.map((country) => (
          <Card key ={country.cca3} country ={country}/>
        ))}      
      </div>

    </div>
);
}