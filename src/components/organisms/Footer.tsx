import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 py-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        <span className="text-black-600 text-lg">© 2024</span>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.pinterest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 text-2xl"
          >
            <i className="fab fa-pinterest"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
