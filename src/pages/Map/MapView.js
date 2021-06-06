
import React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import { Markers } from "../../components/Markers";


import styled from 'styled-components';


export const MapView = ({provincias}) => {


   return <MapContainer center={[provincias.centroide.lat , provincias.centroide.lon ]} zoom={13}>
   
   <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
   />
   <Markers provincias = {provincias}/>
 </MapContainer>
 }

  
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