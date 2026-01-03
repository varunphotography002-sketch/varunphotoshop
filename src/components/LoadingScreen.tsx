import { useEffect, useState, useRef } from 'react';
import { Camera } from './Icons';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const hasCompletedRef = useRef(false);
  const progressRef = useRef(0);

  useEffect(() => {
    // Update ref when progress changes
    progressRef.current = progress;
  }, [progress]);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev < 70 
          ? prev + 2 
          : prev < 90 
          ? prev + 1 
          : prev + 0.5;
        
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(newProgress, 100);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let windowLoaded = false;
    let resourcesReady = false;

    // Wait for all resources to load
    const completeLoading = () => {
      if (hasCompletedRef.current) return;
      hasCompletedRef.current = true;
      
      // Small delay for smooth transition
      setTimeout(() => {
        setIsComplete(true);
        setTimeout(() => {
          onLoadingComplete();
        }, 500); // Fade out duration
      }, 300);
    };

    const checkAllResourcesLoaded = () => {
      const isDocumentReady = document.readyState === 'complete';
      const isProgressComplete = progressRef.current >= 100;

      // Complete when:
      // 1. Document is ready
      // 2. Progress is 100%
      // 3. Window load event has fired (all resources loaded)
      if (isDocumentReady && isProgressComplete && windowLoaded) {
        // Additional check: wait for fonts if available
        if (document.fonts) {
          document.fonts.ready.then(() => {
            resourcesReady = true;
            completeLoading();
          }).catch(() => {
            // If fonts fail, still complete
            resourcesReady = true;
            completeLoading();
          });
        } else {
          resourcesReady = true;
          completeLoading();
        }
        return true;
      }
      return false;
    };

    // Handle window load event (fires when all resources are loaded)
    const handleLoad = () => {
      windowLoaded = true;
      // Give a small delay to ensure everything is truly ready
      setTimeout(() => {
        checkAllResourcesLoaded();
      }, 300);
    };
    
    // Check if already loaded
    if (document.readyState === 'complete') {
      windowLoaded = true;
      setTimeout(() => {
        checkAllResourcesLoaded();
      }, 300);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Check periodically until everything is loaded
    const checkInterval = setInterval(() => {
      if (windowLoaded && !resourcesReady) {
        checkAllResourcesLoaded();
      }
      if (resourcesReady) {
        clearInterval(checkInterval);
        window.removeEventListener('load', handleLoad);
      }
    }, 100);

    // Fallback: ensure it completes after max 3.5 seconds
    const fallbackTimeout = setTimeout(() => {
      if (!hasCompletedRef.current) {
        windowLoaded = true;
        resourcesReady = true;
        completeLoading();
      }
      clearInterval(checkInterval);
      window.removeEventListener('load', handleLoad);
    }, 3500);

    return () => {
      window.removeEventListener('load', handleLoad);
      clearInterval(checkInterval);
      clearTimeout(fallbackTimeout);
    };
  }, [onLoadingComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo/Icon Animation */}
      <div className="mb-8 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 border-4 border-gray-200 rounded-full animate-spin border-t-gray-900"></div>
        </div>
        <div className="relative w-24 h-24 flex items-center justify-center">
          <Camera className="w-12 h-12 text-gray-900 animate-pulse" />
        </div>
      </div>

      {/* Brand Name */}
      <h1
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Varun Photography
      </h1>

      {/* Progress Bar */}
      <div className="w-64 md:w-80 h-1 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="h-full bg-gradient-to-r from-gray-900 to-gray-700 transition-all duration-300 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Text */}
      <p className="text-sm text-gray-600 font-medium">{Math.round(progress)}%</p>

      {/* Loading Text */}
      <p className="text-sm text-gray-500 mt-4 animate-pulse">Loading your experience...</p>
    </div>
  );
}
