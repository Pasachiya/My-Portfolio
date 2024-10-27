import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Projects />
              <Footer />
            </main>
          } />
          <Route path="/project/:slug" element={
            <>
              <ProjectDetail />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;