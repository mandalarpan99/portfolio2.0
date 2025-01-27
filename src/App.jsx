
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
import { useState, useEffect } from 'react';
import { Preloader } from './assets/component/Preloader';
const App = ()=> {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    document.title = "Arpan Mandal";
    setLoading(true);
        setTimeout(()=>{
            setLoading(false)
        },3000)
  }, []);

  return (

    <>
    {
      loading ?<Preloader /> :
    
      <>
      <NavBar />
      <Home />
      <AboutMe />
      <Skill />
      <Project />
      <Contact />
      <Footer />
      </>
    }
      </>
  )
}

export default App;
