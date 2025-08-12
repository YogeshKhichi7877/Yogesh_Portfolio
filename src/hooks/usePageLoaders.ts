import { useState, useEffect } from 'react';

export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          // Add a small delay before hiding loader for smooth transition
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    // Ensure minimum loading time for better UX
    const minLoadTime = setTimeout(() => {
      if (loadingProgress < 100) {
        setLoadingProgress(100);
      }
    }, 2000);

    // Check if page is actually loaded
    const handleLoad = () => {
      setLoadingProgress(100);
    };

    // Check if document is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(minLoadTime);
      window.removeEventListener('load', handleLoad);
    };
  }, [loadingProgress]);

  return { isLoading, loadingProgress };
};