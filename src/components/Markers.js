import React from 'react';
import {Marker, Popup} from 'react-leaflet';
import { IconLocation } from "./IconLocation";

export const Markers = ({provincias}) =>{
    /*const { venues } = props;
    const markers = venues.map((venue, i) => (
      <Marker key={i} position={venue.geometry} icon={IconLocation}>
        <Popup data={venue} />
      </Marker>
    ));
    return <>{markers}</>;*/
      

    return (
        <Marker position={(provincias.provincias.centroide.lat , provincias.provincias.centroide.lon)} icon={IconLocation}>
        <Popup>
            {provincias.provincias.nombre}
        </Popup>
        </Marker>
         
    );
};