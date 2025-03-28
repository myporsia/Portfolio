import { useEffect } from 'react';

declare global {
  interface Window {
    tf: any;
  }
}

export default function GetStarted() {
  useEffect(() => {
    // Create and load the Typeform embed script
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    
    script.onload = () => {
      // Initialize Typeform after script loads
      if (window.tf) {
        window.tf.createWidget();
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      const existingScript = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="relative bg-[#F3F0FF] py-24">
      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gray-200"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">Get Started Today</h2>
          <p className="text-gray-600 text-lg">
            Want to be an early user? We're currently offering personalized profiles while building the AI experience.
          </p>
        </div>

        {/* Typeform */}
        <div className="max-w-3xl mx-auto">
          <div data-tf-live="01JQE71XQ9HYQDQ458N1VEB6GB"></div>
        </div>
      </div>
    </div>
  );
} 