
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">

        <div className="flex items-center mb-4 md:mb-0">
          <span className="font-bold text-lg text-gray-800">StoryFlow</span>
        </div>


        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="/about" className="hover:text-gray-800">About</a>
          <a href="/terms" className="hover:text-gray-800">Terms</a>
          <a href="/privacy" className="hover:text-gray-800">Privacy</a>
          <a href="/careers" className="hover:text-gray-800">Careers</a>
          <a href="/help" className="hover:text-gray-800">Help</a>
        </div>

        <div className="flex space-x-3 text-gray-500">
          <button className="hover:text-gray-800">🔗</button>
          <button className="hover:text-gray-800">📡</button>
        </div>
      </div>


      <div className="text-center text-gray-400 text-xs mt-4 pb-4">
        © 2024 StoryFlow Media Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
