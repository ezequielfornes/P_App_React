import L from 'leaflet';
import MapaIcon from "../assets/mapIcon.png";


export const IconLocation= new L.Icon({
    iconUrl: MapaIcon,
    iconRetinaUrl: MapaIcon,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
});

