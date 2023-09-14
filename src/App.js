import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import { MyContextProvider } from './Components/MyContext';
import Footer from './Components/Footer';

const App = () => {
  return (
    <>
      <MyContextProvider>
        <Router>
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <div style={{ flex: 1 }}>
              <Navbar />
              <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </div>
            <Footer style={{ marginTop: '5%' }} />
          </div>
        </Router>
      </MyContextProvider>
    </>
  );
};

export default App;
