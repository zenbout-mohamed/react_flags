import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./components/Card";

export default function App (){

  const [countries, setCountries] = useState([]);
  const [region, setRegion = useState("");
  const [search, setSearch] = useState("");



  // ----------------------

  const regions=["Afrique","Europe","Asie","Amérique","Océanie"];
  

}