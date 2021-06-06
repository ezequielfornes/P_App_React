import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import { IconLocation } from "./IconLocation";

export const Markers = ({provincias}) =>{
    
      console.log(provincias.centroide.lat);

    return (
      <>
        <Marker position={(provincias.centroide.lat ), (provincias.centroide.lon)} icon={IconLocation}>
        <Popup>
            {provincias.nombre}
        </Popup>
        </Marker>
      </> 
    );
};