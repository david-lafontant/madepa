import Booking from "./components/booking/booking";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Projects from "./components/projects/projects";
import Services from "./components/services/services";

function App() {
  return (
    <div className="App">
<h1>Madepa Haiti</h1>
    <Home />
    <Services />
    <Projects />
    <Booking />
    <Contact />
    
    </div>
  );
}

export default App;
