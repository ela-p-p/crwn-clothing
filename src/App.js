import React from "react";
import { Switch, Route } from 'react-router-dom'
import "./App.css";

import ShopPage from "./pages/ShopPage/ShopPage"
import Homepage from "./pages/HomePage/HomePage";

function App() {
  return (
   <div>
<Switch>
  <Route exact path='/' component={Homepage}></Route>
  <Route path='/shop' component={ShopPage}></Route>
</Switch>
   </div>
  );
}

export default App;
