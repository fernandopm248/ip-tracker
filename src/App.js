
import { Fragment,useState,useEffect } from 'react';
import './App.css';
import Home from './components/home';
import './styles/geral.css'
import axios from 'axios';

function App() {
  const [location, setLocation] = useState(false) // serve para verificar se o user habilitou a localizaçao
  const [place,setPlace] = useState([])// place são as coordenandas pegadas via navegador do user
  

  


useEffect(()=> {   // pega as coordenadas do user
  navigator.geolocation.getCurrentPosition((position) => {
     
     const map  = {lat:`${position.coords.latitude}`, lng:`${position.coords.longitude}`}
     setPlace(map)

      setLocation(true)
    
  })
}, [])
if(location == false) { // serve como tratamento de erro caso usuario nao habilitar a localizçao
  return (
      <Fragment>
          Habilite sua localização para melhor uso da aplicação
      </Fragment>
  )
}else{
  return ( // render e passa as props pra frente
      <Fragment>

        <Home place={place} setPlace={setPlace}/>

      </Fragment> 
            
  );
}
}
export default App;
