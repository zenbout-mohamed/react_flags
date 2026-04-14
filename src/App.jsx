import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card";

export default function App (){

  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");


  const regions=["Africa","Europe","Asia","Americas","Oceania"];

useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital,region,cca3"
      );

      setCountries(res.data);
    } catch (error) {
      console.log("Erreur API :", error);
    }
  };

  fetchData();
}, []);

const filteredCountries = countries
  .filter((country) => {
    const matchRegion = region ? country.region === region : true;

    const matchSearch =
      search === ""
        ? true
        : country.name?.common
            ?.toLowerCase()
            .includes(search.toLowerCase());

    return matchRegion && matchSearch;
  })
  .map((country) => {
    if (country.name.common === "Hungary") {
      return { ...country, isOpen: false };
    }
    return country;
  });



return(
    <div className ="container">
      <h1> Countries-App </h1>

      <select onChange={(e) => setRegion(e.target.value)}>
      <option value="">Toutes les régions</option>
      {regions.map((r) => (
        <option key = {r} value ={r}>{r}</option>
      ))}
      </select>

      
      <input onChange={(e) => setSearch(e.target.value)} type="text" value={search} placeholder="Rechercher un pays :"/>

      
      <p>{filteredCountries.length} pays Affichés :</p>

      
      <div className="liste">
        {filteredCountries.map((country) => (
          <Card key ={country.cca3} country ={country}/>
        ))}      
      </div>

    </div>
);
}