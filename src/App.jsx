import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './index.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Contacts from './components/Contacts';
import Restaurant from './components/Restaurant';
import About from './components/About';

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <NavBar />
        <MainContent />
        <Footer />
      </Router>
    </HelmetProvider>
  );
};

const MainContent = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';
  const isRooms = location.pathname === '/rooms';
  const isGallery = location.pathname === '/gallery';
  const isContacts = location.pathname === '/contacts';
  const isRestaurant = location.pathname === '/restaurant';

  return (
    <>
      {/* SEO Metadata */}
      <SEO location={location} />

      {/* Conditionally render Hero and Services */}
      {!isGallery && !isAboutPage && !isRooms && !isContacts && !isRestaurant && <Hero />}
      
      {/* {!isGallery && !isAboutPage && !isRooms && !isContacts && !isRestaurant && <Services />} */}

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </>
  );
};

// Dynamic SEO Component
const SEO = ({ location }) => {
  let title = 'Welcome to Our Website';
  let description = 'Discover our amazing services and offerings.';
  let keywords = 'hotel,hawassa, hawassa, restaurant, rooms';

  switch (location.pathname) {
    case '/about':
      title = 'About Us - Our Story';
      description = 'Learn more about our history and values.';
      keywords = 'about us, history, values, mission';
      break;
    case '/rooms':
      title = 'Rooms - Comfortable Stay';
      description = 'Explore our range of comfortable and luxurious rooms.';
      keywords = 'rooms, luxury, comfort, hotel stay';
      break;
    case '/gallery':
      title = 'Gallery - A Visual Tour';
      description = 'Take a visual tour of our facilities and services.';
      keywords = 'gallery, photos, tour, visuals';
      break;
    case '/contacts':
      title = 'Contact Us - Get in Touch';
      description = 'Reach out to us for bookings or inquiries.';
      keywords = 'contact, inquiries, bookings, reach us';
      break;
    case '/restaurant':
      title = 'Restaurant - Fine Dining';
      description = 'Indulge in our exquisite culinary offerings.';
      keywords = 'restaurant, dining, cuisine, food';
      break;
    default:
      break;
  }

  return (
    <Helmet>
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta rel="canonical" href={window.location.href} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Your Name" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Helmet>
  );
};

export default App;
