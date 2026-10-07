import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-accent mb-4">جامعة العلوم والتكنولوجيا</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              جامعة رائدة في تقديم تعليم أكاديمي متميز يواكب التطورات العلمية والتقنية الحديثة، 
              لإعداد جيل مبدع ومؤهل للمساهمة في بناء المجتمع وسد احتياجات سوق العمل.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">عن الجامعة</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">شروط القبول</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">التقويم الجامعي</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-accent transition-colors">تواصل معنا</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">تواصل معنا</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="font-bold">هاتف:</span> 
                <span dir="ltr">+966 920000000</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">بريد إلكتروني:</span> 
                <span>info@ust.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="font-bold">العنوان:</span> 
                <span>المدينة الجامعية، الشارع الرئيسي</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-8 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} جامعة العلوم والتكنولوجيا. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">سياسة الخصوصية</a>
            <a href="#" className="text-gray-400 hover:text-accent transition-colors text-sm">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
