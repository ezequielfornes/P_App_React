import React from 'react';
import { MapView } from "../Map/MapView";
import { useHistory } from 'react-router';


export const Places = (place) =>{
  const [provincias, setProvincias] = React.useState();
  const [status, setStatus] = React.useState("");

  function handleError(){
    history.replace("/");
  }
  const history= useHistory();
  
     React.useEffect(() =>{
      fetchPlace(place);
      console.log(provincias);

     },[] );

     const fetchPlace = async(place) => {
       setStatus("loading")
      console.log(place.place);
        const data = await fetch(`http://apis.datos.gob.ar/georef/api/provincias?nombre=${place.place}`);
        const places= await data.json();
        console.log(data);
        console.log(places);
        if(places.errores || places.cantidad===0){
          setStatus("error");
        }
        if(places.cantidad>0){
          setProvincias(places.provincias[0]);
          setStatus("success");
        } 

      console.log(status);
      }
      if(provincias && status==="success"){
        return(  
          <>
          <MapView provincias={provincias}/>
          </>   
        )
      }else if((!provincias && status==="error")){
        return (
          <>
            <div>
              Debe ingresar una provincia valida en Argentina
              
              <button onClick={handleError}>Volver a buscar</button>
              
            </div>
          </>
          );
      }else {
        return("Loading..")
      }
}
