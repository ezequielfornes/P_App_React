import React from 'react';
import { MapView } from "../Map/MapView";
import { useHistory } from 'react-router';


export const Places = (place) =>{
  const [provincias, setProvincias] = React.useState();
  const [status, setStatus] = React.useState("");

  
  
     React.useEffect(() =>{
      fetchPlace(place);
      console.log(provincias);

     },[] );

     const fetchPlace = async(place) => {
      console.log(place.place);
        const data = await fetch(`http://apis.datos.gob.ar/georef/api/provincias?nombre=${place.place}`);
        console.log(data);
        const places= await data.json();
        console.log(places.provincias[0].centroide.lat);
        setProvincias(places.provincias[0]);
        
      }
      
      if(provincias){
        return(  
          <>
          <MapView provincias={provincias}/>
          </>   
        )
      }else {
        return("Loading..")
      }
}
