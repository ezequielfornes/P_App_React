import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from "../pages/HomePage/HomePage";

import React from 'react';
import {Places} from "../pages/Places/Places";


export const Router = () =>{
const [place, setPlace] = React.useState("");

  function handleSetPlace(place){
    setPlace(place);
  }

    return(
      
      <BrowserRouter>
        <Switch>
          <Route path="/map">
          <Places place={place}/>
          </Route>

          <Route path="/">
          <HomePage setPlace={handleSetPlace} />
          </Route>

        </Switch>
      </BrowserRouter>
    )
  

}

