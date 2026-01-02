<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Mail, ArrowRight } from 'lucide-react';
=======
import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Mail, ArrowRight } from '@/components/OptimizedIcons';
>>>>>>> 713e091 (Initial project upload)

interface HeroVideoSectionProps {
  heroTitle?: string;
  heroDescription?: string;
  backgroundImage?: string;
  videoUrl?: string;
  googleDriveLink?: string;
  emailPlaceholder?: string;
  onEmailSubmit?: (email: string) => void;
  autoPlayOnScroll?: boolean;
}

// Convert Google Drive link to embeddable format
const convertGoogleDriveLink = (link: string): { url: string; isFolder: boolean; isDirectVideo: boolean } => {
  // Extract file ID from various Google Drive link formats
  let fileId = '';
  let isFolder = false;
  
  // Format: https://drive.google.com/file/d/FILE_ID/view
  const fileMatch = link.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) {
    fileId = fileMatch[1];
  }
  
  // Format: https://drive.google.com/open?id=FILE_ID
  const openMatch = link.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (openMatch && !fileId) {
    fileId = openMatch[1];
  }
  
  // Format: https://drive.google.com/drive/folders/FOLDER_ID
  const folderMatch = link.match(/\/folders\/([a-zA-Z0-9_-]+)/);
  if (folderMatch && !fileId) {
    isFolder = true;
    // For folders, use iframe embed view
    return {
      url: `https://drive.google.com/embeddedfolderview?id=${folderMatch[1]}#grid`,
      isFolder: true,
      isDirectVideo: false
    };
  }
  
  if (fileId) {
    // For Google Drive videos, use iframe embed for better compatibility
    // This works better than direct video URLs which may be blocked by CORS
    return {
      url: `https://drive.google.com/file/d/${fileId}/preview`,
      isFolder: false,
      isDirectVideo: true
    };
  }
  
  return { url: link, isFolder: false, isDirectVideo: false };
};

export const HeroVideoSection: React.FC<HeroVideoSectionProps> = ({
  heroTitle = "Innovation Meets Simplicity",
  heroDescription = "Discover cutting-edge solutions designed for the modern digital landscape.",
  backgroundImage = "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
  videoUrl,
  googleDriveLink,
  emailPlaceholder = "enter@email.com",
  onEmailSubmit,
  autoPlayOnScroll = true
}) => {
  const [email, setEmail] = useState('');
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  
  // Determine the actual video URL and type
  const driveInfo = googleDriveLink ? convertGoogleDriveLink(googleDriveLink) : null;
  const actualVideoUrl = driveInfo ? driveInfo.url : (videoUrl || '');
<<<<<<< HEAD
  const isGoogleDriveFolder = driveInfo?.isFolder || false;
  const isDirectVideo = driveInfo?.isDirectVideo || false;
=======
>>>>>>> 713e091 (Initial project upload)
  const isGoogleDriveVideo = !!googleDriveLink; // If googleDriveLink is provided, use iframe

  const handleEmailSubmit = () => {
    if (onEmailSubmit) {
      onEmailSubmit(email);
    } else {
      console.log('Email submitted:', email);
    }
    setEmail('');
  };

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPlaying(true);
      setIsVideoPaused(false);
    }
  };

  const handlePauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsVideoPaused(true);
    }
  };
  
  const handleResumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsVideoPaused(false);
    }
  };

  const handleVideoEnded = () => {
    setIsVideoPlaying(false);
    setIsVideoPaused(false);
  };

  // Auto-play when scrolled into view
  useEffect(() => {
    if (!autoPlayOnScroll || hasAutoPlayed) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAutoPlayed) {
            // Small delay to ensure video is loaded
            setTimeout(() => {
              if (videoRef.current && !isGoogleDriveVideo) {
                videoRef.current.play().catch((error) => {
                  console.log('Auto-play prevented by browser:', error);
                  // If autoplay fails, show play button
                });
                setIsVideoPlaying(true);
                setHasAutoPlayed(true);
              } else if (isGoogleDriveVideo && iframeRef.current) {
                // For Google Drive iframe, the video will be visible and ready
                // Note: Google Drive iframes don't support programmatic autoplay
                // but the video will be visible and users can click play
                setHasAutoPlayed(true);
              }
            }, 800);
          }
        });
      },
      {
        threshold: 0.25, // Trigger when 25% of the component is visible
        rootMargin: '50px' // Start loading slightly before it's fully visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [autoPlayOnScroll, hasAutoPlayed, isGoogleDriveVideo]);

  // Handle video loaded event and preload
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isGoogleDriveVideo) return;

    // Preload video for better auto-play experience
    video.preload = 'auto';
    
    const handleCanPlay = () => {
      // Video is ready to play
      if (autoPlayOnScroll && !hasAutoPlayed) {
        // Video is loaded and ready
      }
    };

    video.addEventListener('canplay', handleCanPlay);
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [autoPlayOnScroll, hasAutoPlayed, isGoogleDriveVideo]);

  return (
    <section ref={sectionRef} className="relative py-24 px-4 bg-background fade-in-section opacity-0">
      <div className="max-w-6xl mx-auto">
        {/* --- Hero Section --- */}
        <div className="pt-4 pb-10 sm:pt-6 sm:pb-12 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-5xl text-foreground font-bold tracking-tight">{heroTitle}</h2>
            <p className="mt-6 text-lg text-muted-foreground">{heroDescription}</p>
            <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                <input 
                  type="email" 
                  placeholder={emailPlaceholder} 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleEmailSubmit()}
                  className="w-full max-w-xs bg-muted border border-border text-foreground placeholder-muted-foreground font-medium pl-10 pr-4 py-2 text-sm sm:pl-11 sm:py-3 sm:text-base rounded-full focus:outline-none focus:ring-2 focus:ring-ring" 
                />
              </div>
              <button 
                onClick={handleEmailSubmit} 
                className="bg-foreground hover:bg-muted-foreground text-background px-5 py-2 text-sm sm:px-6 sm:py-3 sm:text-base rounded-full normal-case font-medium transition-colors flex items-center gap-2"
              >
                Join Now<ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* --- Media Header --- */}
        <header className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl">
          {isGoogleDriveVideo ? (
            // Use iframe for Google Drive videos (both folders and files)
            // This is more reliable than direct video URLs which may be blocked by CORS
            <iframe
              ref={iframeRef}
              src={actualVideoUrl}
              className="w-full h-full absolute inset-0"
              allow="autoplay; fullscreen; encrypted-media"
              allowFullScreen
              style={{ border: 'none' }}
              title="Google Drive Video"
            />
          ) : (
            <>
              <img 
                src={backgroundImage} 
                alt="Background" 
                className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`} 
              />
              {actualVideoUrl && (
                <video 
                  ref={videoRef} 
                  src={actualVideoUrl} 
                  className={`w-full h-full absolute inset-0 object-cover transition-opacity duration-500 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`} 
                  onEnded={handleVideoEnded}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPaused(true)}
                  playsInline 
                  muted 
                  loop={false}
                />
              )}
              <div className="absolute bottom-5 right-5 z-10">
                {!isVideoPlaying ? (
                  <button 
                    onClick={handlePlayVideo} 
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                    aria-label="Play video"
                  >
                    <Play className="h-7 w-7 text-white fill-white ml-1" />
                  </button>
                ) : (
                  <button 
                    onClick={isVideoPaused ? handleResumeVideo : handlePauseVideo} 
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all duration-200 shadow-lg"
                    aria-label={isVideoPaused ? "Resume video" : "Pause video"}
                  >
                    {isVideoPaused ? <Play className="h-7 w-7 text-white fill-white ml-1" /> : <Pause className="h-7 w-7 text-white fill-white" />}
                  </button>
                )}
              </div>
            </>
          )}
        </header>
      </div>
    </section>
  );
};

