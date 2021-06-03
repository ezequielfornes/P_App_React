import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";
import { MapView } from "../pages/Map/MapView";
import React from 'react';


export const Router = () =>{
const [place, setPlace] = React.useState("");
//console.log(place);
/* const [organismosData, setOrganismosData]=React.useState();
const [institutosData, setInstitutosData]=React.useState(); */

  function handleSetPlace(place){
    setPlace(place);
  }

    return(
      
      <BrowserRouter>
        <Switch>
        {/* <Places institutosData={institutosData} setInstitutosData={setInstitutosData}
        organismosData organismosData, setOrganismosData}/> */}
          <Route path="/map">
          <MapView place={place}/>
          </Route>

          <Route path="/">
          <HomePage setPlace={handleSetPlace} />
          </Route>

        </Switch>
      </BrowserRouter>
    )
  

}

