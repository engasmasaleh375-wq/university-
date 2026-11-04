import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PublicLayout({ children }) {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-transparent relative overflow-x-hidden">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow w-full overflow-x-hidden">
        {children}
      </main>

      {/* Footer rendered across all pages */}
      <Footer />
    </div>
  );
}
