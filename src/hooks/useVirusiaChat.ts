import { useEffect } from 'react';

export const useVirusiaChat = () => {
  useEffect(() => {
    // Create and append the Virusia AI chat script
    const script = document.createElement('script');
    script.src = 'https://virusiaai.nimblyhq.com/public/widget.js';
    script.setAttribute('data-api', 'https://virusiaai.nimblyhq.com');
    script.setAttribute('data-site', 'site_80f0ef82c58d06fd13a9');
    script.defer = true;
    
    document.body.appendChild(script);

    // Cleanup: remove script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);
};
