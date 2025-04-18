import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Expertise';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify';

const App = () => {
  
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//code.tidio.co/nvzggz2d8gas8qm7vzt5bcvgwe6e4tuj.js";
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    window.googleTranslateElementInit = () => {
      new google.translate.TranslateElement(
        {pageLanguage: 'en'},
         'google_translate_element');
    }

    

    
  }, []);

  return (
    <div className='mx-4 sm:mx-[10%]' id='google_translate_element'>

      <ToastContainer />
      <h1>Choose Your Prefered Language From Bottom</h1>
      <div id='google_translate_element' ></div>

      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/experts' element={<Doctors />} />
        <Route path='/expertise/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:docId' element={<Appointment />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/verify' element={<Verify />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
