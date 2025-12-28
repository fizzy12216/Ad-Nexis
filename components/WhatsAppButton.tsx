
import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/923430418776" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center"
      title="Chat on WhatsApp"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.031 6.172c-2.277 0-4.125 1.848-4.125 4.125 0 .882.278 1.701.75 2.375l-.8 2.381 2.455-.788c.613.385 1.332.613 2.103.613 2.277 0 4.125-1.848 4.125-4.125s-1.848-4.125-4.125-4.125zm4.126 5.86c-.163.411-.842.827-1.163.874-.321.047-.643.074-1.854-.423-1.442-.591-2.352-2.046-2.423-2.14-.07-.094-.575-.76-.575-1.45s.361-1.031.488-1.163c.127-.132.278-.163.37-.163h.276c.091 0 .215-.034.33.245.116.278.4 1.002.434 1.071.034.07.058.15.011.245-.047.094-.07.152-.14.232-.07.081-.148.18-.211.242-.07.07-.143.146-.062.285.081.139.362.597.777.967.535.477.986.625 1.125.694.139.07.22.058.3-.035.081-.093.348-.405.441-.544.093-.139.186-.116.313-.07.127.047.808.382.947.452.139.07.232.104.266.163.035.058.035.336-.128.747zM12 2C6.477 2 2 6.477 2 12c0 2.136.673 4.116 1.82 5.74L2 22l4.35-1.785A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"></path>
      </svg>
      <span className="absolute -left-32 bg-white text-gray-800 px-3 py-1 rounded shadow text-sm font-bold opacity-0 hover:opacity-100 transition-opacity">Chat With Us!</span>
    </a>
  );
};

export default WhatsAppButton;
