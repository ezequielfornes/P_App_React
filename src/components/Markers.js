import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import { IconLocation } from "./IconLocation";

export const Markers = ({prov}) =>{
      console.log(prov);

    return (
      <>
        <Marker position={prov.centroide} icon={IconLocation}>
        <Popup>
            {prov.nombre}
        </Popup>
        </Marker>
      </> 
    );
};