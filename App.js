import './App.css';
import React from 'react'
import LandingPage from './LandingPage';
import Deals from './TopDeals';
import TopVendors from './TopVendors';
import TopCustomers from './TopCustomers';
import TechnologyCategories from './TopTechnologies';
import Partners from './Partners';
import Testimonial from './Testimonial';
import BlogSection from './BlogSection';
import MetricsSection from './KeyMatrics';
import Footer from './Footer';

function App() {
  return (
    <div>
      <LandingPage />
      <Deals />
      <TopVendors />
      <TopCustomers />
      <TechnologyCategories />
      <Partners />
      <Testimonial />
      <BlogSection />
      <MetricsSection />
      <Footer />
    </div>
  )
}

export default App

