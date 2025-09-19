// src/App.tsx
import React from 'react';
import Navbar from './components/Navbar/navbar';
import Footer from './components/Footer/footer';
import Home from './components/Home/home';
import AboutSection from './components/AboutSection/aboutsection';
import CardsSection from './components/CardSection/cardsection';
import SubscribeSection from './components/SubscribeSection/subscribesection';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <Home />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <CardsSection />
      </section>

      {/* Blog Section */}
      <section id="blog">
        <SubscribeSection />
      </section>

      <Footer />
    </div>
  );
};

export default App;
