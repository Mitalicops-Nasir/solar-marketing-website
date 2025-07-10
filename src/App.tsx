
import {
  CTA,
  Contact,
  Copyright,
  Feature,
  Footer,
  Hero,
  Navbar,
  Services,
} from "./components";

import "./App.css";
import "./index.css";
import ScrollHandler from "./components/ScrollHandler/ScrollHandler";

const App = () => {
  return (
    <div>
        <Navbar />
        <ScrollHandler/>
        <Hero />
        <Feature/>
        <Services/>
        <CTA/>
        <Contact/>
        <Footer/>
        <Copyright/>
    </div>
  );
};

export default App;
