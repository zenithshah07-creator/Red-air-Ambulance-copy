import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import ScrollToTop from './components/ui/ScrollToTop';
import Footer from './components/layout/Footer';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          {/* Fallback for demo purposes */}
          <Route path="*" element={<Home />} />
          <Route path='/Footer' element={<Footer />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
