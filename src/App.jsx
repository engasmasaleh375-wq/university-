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
      {/* Seamless Noise Texture Overlay */}
      <div 
        className="fixed inset-0 opacity-[0.04] pointer-events-none z-50" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* 1. Base Layer & Animated Blobs: Fixed background wrapper */}
      <div className="fixed inset-0 pointer-events-none -z-20 bg-slate-50 overflow-hidden">
        {/* Animated Glass Blobs: Responsive sizes (smaller on mobile, large on desktop) */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] md:w-[700px] md:h-[700px] bg-sky-200/70 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-cyan-200/60 rounded-full mix-blend-multiply filter blur-[80px] md:blur-[120px] animate-blob delay-2000"></div>
        <div className="absolute top-1/2 right-1/3 w-[280px] h-[280px] md:w-[500px] md:h-[500px] bg-blue-200/50 rounded-full mix-blend-multiply filter blur-[90px] md:blur-[130px] animate-blob delay-4000"></div>
      </div>

      {/* 2. Fixed Full-Width Glass Backdrop Layer */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-white/40 backdrop-blur-2xl"></div>

      {/* 3. Main Content Wrapper (No backdrop-filter here so fixed Navbar stays pinned to viewport) */}
      <div className="w-full min-h-screen text-slate-800 flex flex-col overflow-x-hidden">
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
      </div>
    </LanguageProvider>
  );
}
