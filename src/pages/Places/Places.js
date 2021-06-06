import React from 'react';
import { MapView } from "../Map/MapView";
import { useHistory } from 'react-router';


export const Places = (place) =>{
  const [provincias, setProvincias] = React.useState();
  const [status, setStatus] = React.useState("");
  const history = useHistory();
  
  function handleHomeClick(){
    history.replaceState("/");
  }

  /* React.useEffect(() => {
    setStatus("Cargando"); 
    console.log(place);  
   fetch(`http://apis.datos.gob.ar/georef/api/provincias?nombre=${place.place}`)
   .then(response => response.json()
   .then((data) =>{ console.log(data);
       console.log(place.place);
     this.setProvincias(data[3]);
     
     })
     )
     .catch((error) => setStatus("error"));
     }, [provincias]);
      */

     React.useEffect(() =>{
      fetchPlace(place);

     },[] );

     const fetchPlace = async(place) => {
      console.log(place.place);
        const data = await fetch(`http://apis.datos.gob.ar/georef/api/provincias?nombre=${place.place}`);
        console.log(data);
        const places= await data.json();
        console.log(places.provincias[0].centroide);
        setProvincias(places.provincias[0]);
        console.log(provincias);
     }
     console.log(provincias);
     /* if(status === "success"){ */    
     return(  
    <>
    <MapView provincias = {provincias}/>
    </>  
 );

}







/*const Places = ({institutosData,setInstitutosData, organismosData, setOrganismosData})=> {
    const [status, setStatus]= React.useState();
    React.useEffect(()=> {
         fetch(`https://www.cultura.gob.ar/api/v2.0/institutos/?format=json`).then(response=> response.json().then((dataI)=> {
          if(dataI.results === null ){
            setStatus("error");
          } else {
            setInstitutosData(dataI);
            setStatus("success");
          }
        }))
        
    }, []);

    React.useEffect(()=> {
      fetch(`https://www.cultura.gob.ar/api/v2.0/organismos/?format=json`).then(response=> response.json().then((data)=> {
        if(data.results === null ){
          setStatus("error");
        } else {
          setOrganismosData(data);
          setStatus("success");
        }
      }))
    }, []);
    
}*/