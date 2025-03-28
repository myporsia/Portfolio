import { Link } from '@remix-run/react';

export default function Navbar() {
  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Get the navbar height
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      
      // Calculate position
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      // Smooth scroll
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="relative flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="Porsia Logo" 
                  className="h-20 w-auto translate-y-2.5"
                />
                <div className="flex items-center -ml-7">
                  <span className="text-brand-blue text-3xl font-semibold">POR</span>
                  <span className="text-brand-purple text-3xl font-semibold">SIA</span>
                </div>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <button
              onClick={() => handleScroll('what-were-building')}
              className="text-gray-600 hover:text-gray-900"
            >
              Features
            </button>
            <button
              onClick={() => handleScroll('how-it-works')}
              className="text-gray-600 hover:text-gray-900"
            >
              How It Works
            </button>
            <button
              onClick={() => handleScroll('benefits')}
              className="text-gray-600 hover:text-gray-900"
            >
              Benefits
            </button>
            <button
              onClick={() => handleScroll('vision')}
              className="text-gray-600 hover:text-gray-900"
            >
              Vision
            </button>
            <button
              onClick={() => handleScroll('contact-form')}
              className="inline-block px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 