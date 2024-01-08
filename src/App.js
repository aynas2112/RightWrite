import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Screens/Home';
import About from './Screens/About';
import Contact from './Screens/Contact';
import { MyContextProvider } from './Components/MyContext';
import Footer from './Components/Footer';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/material';
import Blogs from './Screens/Blogs';
import BlogDetail from './Components/BlogDetail';
import TermsOfService from './Components/TermsOfService';
import Disclaimer from './Components/Disclaimer';
import PrivacyPolicy from './Components/PrivacyPolicy';

const App = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
      secondary: {
        main: '#fff',
      },
    },
  });

  return (
    <>
      <MyContextProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <div style={{ flex: 1 }}>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blogs" element={<Blogs />} />
                  <Route path="/blogs/:blogId" element={<BlogDetail />} />
                  <Route path="/terms" element={<TermsOfService />} />
                  <Route path="/disclaimer" element={<Disclaimer />} />
                  <Route path="/privacy" element={<PrivacyPolicy />} />
                </Routes>
              </div>
              <Footer style={{ marginTop: '5%' }} />
            </div>
          </Router>
        </ThemeProvider>
      </MyContextProvider>
    </>
  );
};

export default App;