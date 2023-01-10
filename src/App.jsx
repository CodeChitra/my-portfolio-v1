import React, { useState } from "react";
import ReactDOM from "react-dom";
import Topbar from "./component/topbar/Topbar";
import Intro from "./component/intro/Intro";
import Portfolio from "./component/portfolio/Portfolio";
import Works from "./component/works/Works";
// import Testimonials from "./component/testimonials/Testimonials";
import Contact from "./component/contact/Contact";
import Menu from "./component/menu/Menu";
import Education from "./component/education/Education"
import "./App.scss"
const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="app" id="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    {ReactDOM.createPortal(<Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />, document.getElementById("menuDrawer"))}
    <div className="sections">
      <Intro />
      <Works />
      <Portfolio />
      {/* <Testimonials /> */}
      <Education />
      <Contact />
    </div>
  </div>
}
export default App;
