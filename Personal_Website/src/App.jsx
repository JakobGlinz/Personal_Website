import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import NavBar from './NavBar.jsx';
import Intro from './IntroPage.jsx';
import AboutMe from './AboutMe.jsx';
import Skills from './Skills.jsx';
import Roadmap from './Roadmap.jsx';
import Footer from './Footer.jsx';

import './App.css';
import './index.css';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={
                                  <>
                                    <NavBar />
                                    <Intro />
                                    <AboutMe />
                                    <Skills />
                                    <Roadmap />
                                    <Footer />
                                  </>
                                } />
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
