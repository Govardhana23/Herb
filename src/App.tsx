import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import IdentifyPage from './pages/IdentifyPage';
import DiagnosePage from './pages/DiagnosePage';
import MyPlantsPage from './pages/MyPlantsPage';
import PlantDetailPage from './pages/PlantDetailPage';
import LearnPage from './pages/LearnPage';

function App() {
  useEffect(() => {
    document.title = 'Herbivista - Plant Identification & Care';
  }, []);

  return (
    <ThemeProvider>
      <UserProvider>
        <Router>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/identify" element={<IdentifyPage />} />
                <Route path="/diagnose" element={<DiagnosePage />} />
                <Route path="/my-plants" element={<MyPlantsPage />} />
                <Route path="/plant/:id" element={<PlantDetailPage />} />
                <Route path="/learn" element={<LearnPage />} />
                <Route path="/community" element={<HomePage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;