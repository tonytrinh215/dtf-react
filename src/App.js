import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          {/* <Route path='/ourstory' element={<StoryPage />} /> */}
          <Route path='/bookings' element={<BookingPage />} />
          {/* <Route path='/testimonials' element={<TestimonialPage />} /> */}
          {/* <Route path='/contact' element={<ContactPage />} /> */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
