export default function Card({ country}){
    return (
        <div className="card">
            <img src={country.flags.png} alt={country.name.common}></img>
            <h3>{country.name.common}</h3>
            <p>Capitale : {country.capital?.[0] || "N/A"}</p>
            <p>Region : {country.region}</p> 
            {/* Hongrie */}
            {country.isOpen === false &&(
                <p style={{color:"red"}}>Accès restreint.</p>
            )}
        </div>
    );
}