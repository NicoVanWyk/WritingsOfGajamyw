import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthProvider } from './contexts/authContext';
import './globalStyles.css';
import NavbarComponent from './components/NavbarComponent';

const AppWrapper = () => {
  return (
    <>
      <NavbarComponent />
      <Routes>
        {/* Base Path (Home) */}
        <Route path="/" element={<HomePage />} />

        {/* Not Found */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router basename="/WritingsOfGajamyw">
        <AppWrapper />
      </Router>
    </AuthProvider>
  );
};

export default App;