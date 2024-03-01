import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'
import './App.css'

const App = () => {
  const [activeComponent, setActiveComponent] = useState('About');

  const handleEvent = (component) => {
    setActiveComponent(component);
  }

  return (
    <div className="app">
      <Header handleEvent={handleEvent} />
      <div className='content'>
        {activeComponent === "About" && <About />}
        {activeComponent === 'Contact' && <Contact />}
        {activeComponent === 'Portfolio' && <Portfolio />}
        {activeComponent === 'Resume' && <Resume />}
      </div>
      {<Footer />}
    </div>
  );
}

export default App;