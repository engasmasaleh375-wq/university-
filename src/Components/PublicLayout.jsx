import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
}
