import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import PublicLayout from './components/PublicLayout';
import Home from './pages/Home';
import Faculties from './pages/Faculties';
import AdmissionForm from './pages/AdmissionForm';
import Login from './pages/Login';
import StudentLayout from './components/StudentLayout';
import StudentDashboard from './pages/StudentDashboard';
import AcademicRecord from './pages/AcademicRecord';
import Schedule from './pages/Schedule';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<PublicLayout><Home /></PublicLayout>} />
          <Route path="/faculties" element={<PublicLayout><Faculties /></PublicLayout>} />
          <Route path="/admission" element={<PublicLayout><AdmissionForm /></PublicLayout>} />
          <Route path="/login" element={<Login />} />
          
          {/* Student Routes */}
          <Route path="/student" element={<StudentLayout><StudentDashboard /></StudentLayout>} />
          <Route path="/student/academic-record" element={<StudentLayout><AcademicRecord /></StudentLayout>} />
          <Route path="/student/schedule" element={<StudentLayout><Schedule /></StudentLayout>} />
          
          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}
