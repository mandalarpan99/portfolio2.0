import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './assets/Navbar';
import { Home } from './assets/Home';
import { AboutMe } from './assets/AboutMe';
import { Skill } from './assets/Skill';
import { Project } from './assets/Project';
import { Contact } from './assets/Contact';
import { Footer } from './assets/Footer';
const App = ()=> {
  

  return (
    <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
