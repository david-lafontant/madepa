import Contact from './components/contact/contact';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Services from './components/services/services';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Services />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
