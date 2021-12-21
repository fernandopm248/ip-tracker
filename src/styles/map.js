import L from 'leaflet';
import icon from '../imgs/icon-location.svg'

export const IconLocation = new L.Icon({
    iconUrl: icon,
    iconSize: [45, 55], // tamanho do icone
    iconAnchor: [20, 51], // ponto do ícone que corresponderá à localização do marcador
    popupAnchor: [0, -51] // ponto a partir do qual o pop-up deve abrir em relação ao iconAnchor                                
  });