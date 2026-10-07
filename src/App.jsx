import React from 'react';
import PublicLayout from './components/PublicLayout';

export default function App() {
  return (
    <PublicLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">مرحباً بك في جامعة العلوم والتكنولوجيا</h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
            هذا هو الهيكل الأساسي للصفحات العامة (Public Layout) الذي يتضمن شريط التصفح والفوتر.
            يمكنك بناء وتضمين مكونات الصفحة الرئيسية هنا.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-lg shadow-md transition-all">
              استكشف الكليات
            </button>
            <button className="bg-white border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-3 px-8 rounded-lg shadow-sm transition-all">
              شروط القبول
            </button>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}
