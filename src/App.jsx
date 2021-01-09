import React from "react"
import './App.css';
import { About } from "./components/Aboutpage/About";
import { BorocolliPage } from "./components/Borocollipage/BorocolliPage";
import { LandingPage } from "./components/Landingpage/LandingPage";
import {PaperSpace} from "./components/Paperspace/PaperSpace";
import { Playground } from "./components/Playgroundpage/Playground";
import {Contact} from "./components/Contactpage/Contact";
// importing routers
import {Switch , Route ,BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      {/* <LandingPage/> */}
      {/* <BorocolliPage/> */}
      {/* <PaperSpace/> */}
      {/* <About/> */}
      {/* <Playground/> */}


    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/borocolli" exact component={BorocolliPage} />
      <Route path="/paperspace" exact component={PaperSpace} />
      <Route path="/about" exact component={About} />
      <Route path="/playground" exact component={Playground} />
      <Route path="/contact" exact component={Contact} />
    </Switch>


    </>
  );
}

export default App;
