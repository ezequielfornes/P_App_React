import React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import { Markers } from "../../components/Markers";
import { useHistory } from 'react-router';
//const position = [-34.607271, -58.386612]
/*const [organismosData, setOrganismosData]=React.useState();
const [institutosData, setInstitutosData]=React.useState();*/
import styled from 'styled-components';


const Places = ({place}) =>{
  const history= useHistory();
  function handleHomeClick(){
  history.replaceState("/");
}
  const [status, setStatus]= React.useState();
  const [provincias, setProvincias]=React.useState();
  /*React.useEffect(()=> {
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

  ***********NO SIRVIO PORQUE NO HAY API QUE ME DEVUELVA LONGITUD Y LATITUD***********

}*/
/* React.useEffect(()=> {
  fetch(`https://apis.datos.gob.ar/georef/api/provincias`).then(response=> response.json().then((data)=> {
    if(data.results === null ){
      setStatus("error");
    } else {
      setProvincias(data.provincias);
      setStatus("success");
    }
  }))
}, []);

return (
  provincias.map(place=>(<Markers Place={place}/>))
);

 */
React.useEffect(() => {
  setStatus("Cargando");  
  console.log(place);
  fetch(`https://apis.datos.gob.ar/georef/api/provincias?nombre=${place}`)
  .then(response => response.json()
  .then((data) =>{
    console.log(data);
      if(data.errores){
        setStatus("error");
      }else{
         setStatus("success"); 
        setProvincias(data);  
        console.log(data);
      } 
    })
    )
    .catch((error) => setStatus("error"));
    }, [place]);
    if(status === "success"){    
    return(  
     <> 
    <Markers Place={provincias}/>
    </> 
    );
  
} else if(status === "Cargando"){
  return(  
<>
"Cargando"
</>
)
}else{  
return(
<>
"No se encontro la provincia"
  <ButtonWrapper>
    <button
    type="button"
    buttonStyle="btn--warning--solid"
    buttonSize="btn--large"
    onClick={handleHomeClick}
      >
    Go Home
    </button> 
</ButtonWrapper>
</>
)
} 


}
export const MapView = ({place}) => {
  //console.log(place);


   return <MapContainer center={[-34.607271, -58.386612 ]} zoom={13}>
   
   <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
   />
   <Places value={place}/>
   {/* <Places value={provincias}
   {...provincias.map(place=><Markers Place={place}/>)}/> */}
 </MapContainer>
 }

/* 
export const Map = () =>{
 
    /*fetch(https://api.coingecko.com/api/v3/coins/${map})
    .then(response => 
    response.json().then((data) => setCriptoData(data))
    );
    }, [map]);

   */

  
 /* <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        Bienvenido a la busqueda  <br /> Encontraras los mejores lugares.
      </Popup>
    </Marker>
  </MapContainer>
  
  
  }
 

export const ZoomControl = createControlComponent(
  (props) => new Control.Zoom(props),
) */
  
const ButtonWrapper= styled.div`
display:flex;
margin-top: 20px;
justify-content: center;
gap: 10px;

button{
  cursor:pointer;
  color:white;
  padding:15px;
  font-weight: 600;
  background-color:black;
  border:none;
  border-radius:6px;

  transition: all ease-out 0.5s;

  &:hover{
    filter:brightness(0.8);
    transform: translateY(-4px);
  }
}
`