import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Camera, Heart, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
=======
// Optimize Lucide React - use centralized icon exports for better tree-shaking
import { Camera, Heart, Users, Award, ChevronLeft, ChevronRight } from '@/components/OptimizedIcons';
import { useEffect, useRef, useState, lazy, Suspense } from 'react';
>>>>>>> 713e091 (Initial project upload)
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from '@/components/ui/animated-slideshow';
<<<<<<< HEAD
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import { HeroVideoSection } from '@/components/ui/hero-video-section';
import Lenis from '@studio-freight/lenis';
import ServiceCustomizer from '@/components/ServiceCustomizer';
import SEO from '@/components/SEO';
=======
import { HeroVideoSection } from '@/components/ui/hero-video-section';
import SEO from '@/components/SEO';
import { getFeaturedPortfolioImages } from '@/lib/portfolio';

// Lazy load heavy components
const ZoomParallax = lazy(() => import('@/components/ui/zoom-parallax').then(module => ({ default: module.ZoomParallax })));
const ServiceCustomizer = lazy(() => import('@/components/ServiceCustomizer'));
>>>>>>> 713e091 (Initial project upload)

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

<<<<<<< HEAD
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
=======
  // Initialize Lenis smooth scroll - deferred to avoid blocking
  useEffect(() => {
    // Defer Lenis initialization to avoid blocking initial render
    const initLenis = async () => {
      const LenisModule = await import('@studio-freight/lenis');
      const Lenis = LenisModule.default;
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    };

    // Delay initialization until after initial render
    const timeoutId = setTimeout(() => {
      initLenis();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
>>>>>>> 713e091 (Initial project upload)
    };
  }, []);

  const services = [
    {
<<<<<<< HEAD
      title: 'Wedding Photography',
      description: 'Capturing the joy, emotions, rituals, and celebrations of your big day.',
      icon: Heart,
      image: '/Archive (1)/002Wedding.jpg',
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Beautiful couple stories told through creative photography.',
      icon: Camera,
      image: '/Archive (1)/PRE WEDDING.jpg',
=======
      title: 'wedding Photography',
      description: 'Capturing the joy, emotions, rituals, and celebrations of your big day.',
      icon: Heart,
      image: '/Archive (1)/002wedding.jpg',
    },
    {
      title: 'Pre-wedding Shoots',
      description: 'Beautiful couple stories told through creative photography.',
      icon: Camera,
      image: '/Archive (1)/PRE wedding.jpg',
>>>>>>> 713e091 (Initial project upload)
    },
    {
      title: 'Kids & Baby Photography',
      description: 'Adorable and memorable photoshoots for children.',
      icon: Users,
      image: '/Archive (1)/kids and baby photography2.jpg',
    },
    {
      title: 'Candid Photography',
      description: 'Unscripted moments captured naturally.',
      icon: Camera,
      image: '/Archive (1)/candid .jpg'
    },
    {
      title: 'Studio Portraits',
      description: 'Professional portraits with premium lighting setup.',
      icon: Award,
      image: '/Archive (1)/studio .jpeg',
    },
    {
      title: 'Photo Editing & Retouching',
      description: 'Professional enhancements and color correction.',
      icon: Camera,
      image: '/Archive (1)/retouching2.jpg',
    },
  ];

<<<<<<< HEAD
  const portfolioImages = [
    '/Archive (1)/001Wedding.jpg',
    '/Archive (1)/002Wedding.jpg',
    '/Archive (1)/PRE WEDDING.jpg',
    '/Archive (1)/candid .jpg',
    '/Archive (1)/kids and baby photography.jpg',
    '/Archive (1)/studio .jpeg',
  ];
=======
  const portfolioImages = getFeaturedPortfolioImages();
>>>>>>> 713e091 (Initial project upload)

  // Convert portfolio images to ZoomParallax format (max 7 images)
  const parallaxImages = portfolioImages.slice(0, 7).map((img, index) => ({
    src: img,
    alt: `Portfolio image ${index + 1}`,
  }));

  const testimonials = [
    {
      quote: "Absolutely loved their work! The pictures came out magical. Professional team and quick delivery.",
      author: "Ramya & Praveen",
    },
    {
      quote: "Best photography experience ever! They captured every emotion perfectly. Highly recommended!",
      author: "Priya & Rohan",
    },
    {
      quote: "Outstanding service and beautiful photos. The team was professional and made us feel comfortable throughout.",
      author: "Anjali & Vikram",
    },
  ];

<<<<<<< HEAD
  const galleryImages = [
    {
      src: '/Archive (1)/001Wedding.jpg',
      alt: 'Wedding Photography',
    },
    {
      src: '/Archive (1)/kids and baby photography.jpg',
      alt: 'Baby Photography',
    },
    {
      src: '/Archive (1)/PRE WEDDING.jpg',
      alt: 'Pre-Wedding Photography',
    },
  ];

=======
>>>>>>> 713e091 (Initial project upload)
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEO
<<<<<<< HEAD
        title="Varun Photography - Professional Wedding Photography & Studio Portraits | Book Now"
        description="Professional wedding photography, pre-wedding shoots & studio portraits. Expert photographers capturing your special moments. Book your session today - 100% satisfaction guaranteed."
        keywords="Varun Photography, Wedding Photography, Professional Photographer, Pre-Wedding Photography, Candid Photography, Studio Portraits, Photography Services, Book Photographer"
=======
        title="Varun Photography - Professional wedding Photography & Studio Portraits | Book Now"
        description="Professional wedding photography, pre-wedding shoots & studio portraits. Expert photographers capturing your special moments. Book your session today - 100% satisfaction guaranteed."
        keywords="Varun Photography, wedding Photography, Professional Photographer, Pre-wedding Photography, Candid Photography, Studio Portraits, Photography Services, Book Photographer"
>>>>>>> 713e091 (Initial project upload)
        canonical="https://www.varunphotography002.com/"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'PhotographyService',
          name: 'Varun Photography',
          description: 'Professional wedding photography, pre-wedding shoots, candid photography, and studio portraits',
          url: 'https://www.varunphotography002.com',
<<<<<<< HEAD
          serviceType: ['Wedding Photography', 'Pre-Wedding Photography', 'Candid Photography', 'Studio Portraits', 'Kids Photography'],
=======
          serviceType: ['wedding Photography', 'Pre-wedding Photography', 'Candid Photography', 'Studio Portraits', 'Kids Photography'],
>>>>>>> 713e091 (Initial project upload)
          areaServed: 'Hyderabad',
          priceRange: '$$',
        }}
      />
<<<<<<< HEAD
      <div className="bg-white">
      <section className="relative h-screen overflow-hidden">
=======
      <main className="bg-white">
      <section className="relative h-screen overflow-hidden" aria-label="Hero section">
>>>>>>> 713e091 (Initial project upload)
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Archive (1)/background wall paper .jpg')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
        </div>

<<<<<<< HEAD
        {/* H1 at the top */}
        <div className="absolute top-0 left-0 right-0 z-10 text-center px-4 pt-16 md:pt-24 max-w-5xl mx-auto">
          <h1
            className="text-5xl md:text-4xl font-bold animate-slide-up text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Playfair Display', serif" }}
=======
        {/* H1 at the top - Optimized for LCP (no animation blocking) */}
        <div className="absolute top-0 left-0 right-0 z-10 text-center px-4 pt-16 md:pt-24 max-w-5xl mx-auto">
          <h1
            className="text-5xl md:text-4xl font-bold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            style={{ 
              fontFamily: "'Playfair Display', serif",
              willChange: 'auto'
            }}
>>>>>>> 713e091 (Initial project upload)
          >
            Capturing Moments That Last a Lifetime
          </h1>
        </div>

        {/* Paragraph and buttons at the bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 text-center px-4 pb-8 md:pb-12 max-w-5xl mx-auto">
          <p className="text-xl md:text-1xl mb-13 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] animate-slide-up-delay">
            Professional photography that brings your memories to life with creativity, color, and
            emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2 mt-6">
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
<<<<<<< HEAD
=======
              aria-label="Book a photoshoot session"
>>>>>>> 713e091 (Initial project upload)
            >
              Book a Photoshoot
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
<<<<<<< HEAD
=======
              aria-label="View our photography portfolio"
>>>>>>> 713e091 (Initial project upload)
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-24 px-4 bg-[#faf9f5] fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <HoverSlider className="min-h-[70vh] flex flex-col justify-center p-6 md:p-12 bg-[#faf9f5] text-[#3d3929]">
            <h3 className="mb-8 md:mb-12 text-[rgb(201, 100, 66)] text-xs font-medium capitalize tracking-wide text-[#c96442]">
              / our services
            </h3>
=======
      <section className="py-24 px-4 bg-[#faf9f5] fade-in-section opacity-0" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto">
          <HoverSlider className="min-h-[70vh] flex flex-col justify-center p-6 md:p-12 bg-[#faf9f5] text-[#3d3929]">
            <h2 id="services-heading" className="mb-8 md:mb-12 text-[rgb(201, 100, 66)] text-xs font-medium capitalize tracking-wide text-[#c96442]">
              / our services
            </h2>
>>>>>>> 713e091 (Initial project upload)
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-16">
              <div className="flex flex-col space-y-3 md:space-y-4 w-full md:w-auto">
                {services.map((service, index) => (
                  <TextStaggerHover
                    key={service.title}
                    index={index}
                    className="cursor-pointer text-2xl md:text-4xl font-bold uppercase tracking-tighter"
                    text={service.title}
                  />
                ))}
              </div>
              <HoverSliderImageWrap className="w-full md:w-[500px] lg:w-[600px] h-[400px] md:h-[500px] lg:h-[600px] flex-shrink-0">
                {services.map((service, index) => (
                  <div key={`${service.title}-${index}`} className="w-full h-full overflow-hidden rounded-lg">
                    <HoverSliderImage
                      index={index}
                      imageUrl={service.image}
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover object-center rounded-lg"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                ))}
              </HoverSliderImageWrap>
            </div>
          </HoverSlider>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:shadow-xl"
<<<<<<< HEAD
=======
              aria-label="View all photography services"
>>>>>>> 713e091 (Initial project upload)
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2
=======
      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0" aria-labelledby="portfolio-heading">
        <div className="max-w-7xl mx-auto">
          <h2
            id="portfolio-heading"
>>>>>>> 713e091 (Initial project upload)
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Portfolio Preview
          </h2>
          
<<<<<<< HEAD
          {/* Desktop: Zoom Parallax Effect */}
          <div className="hidden lg:block">
            <ZoomParallax images={parallaxImages} />
          </div>

          {/* Mobile/Tablet: Grid Layout */}
          <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
            {portfolioImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer h-80"
=======
          {/* Desktop: Zoom Parallax Effect - Lazy loaded */}
          <div className="hidden lg:block">
            <Suspense fallback={<div className="h-[300vh] flex items-center justify-center"><div className="text-gray-400">Loading portfolio...</div></div>}>
              <ZoomParallax images={parallaxImages} />
            </Suspense>
          </div>

          {/* Mobile/Tablet: Grid Layout */}
          <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {portfolioImages.map((img, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-lg group cursor-pointer ${
                  index === 1 || index === 4 ? 'col-span-2 h-80 md:h-96' : 'h-64 md:h-80'
                }`}
>>>>>>> 713e091 (Initial project upload)
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
<<<<<<< HEAD
=======
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  style={{ willChange: 'transform' }}
>>>>>>> 713e091 (Initial project upload)
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:shadow-xl"
<<<<<<< HEAD
=======
              aria-label="Explore our full photography portfolio"
>>>>>>> 713e091 (Initial project upload)
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Gallery Section */}
      <section className="py-24 px-4 bg-white fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Gallery
          </h2>
          <p className="text-center text-lg text-gray-600 mb-12">
            Experience the Art of Photography! See our works and relive your special moments.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg group cursor-pointer h-80"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/portfolio"
              className="inline-block bg-pink-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-600 transition-all duration-300 hover:shadow-xl"
            >
              See More
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section with Carousel */}
      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto relative">
          <h2
=======
      {/* Testimonials Section with Carousel */}
      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0" aria-labelledby="testimonials-heading">
        <div className="max-w-4xl mx-auto relative">
          <h2
            id="testimonials-heading"
>>>>>>> 713e091 (Initial project upload)
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Say
          </h2>
          
          <div className="relative bg-white p-12 rounded-lg shadow-xl">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-8">
              <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].quote}"
              </p>
              <p className="text-gray-900 font-semibold">— {testimonials[currentTestimonial].author}</p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-gray-900 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <HeroVideoSection
        heroTitle="Experience Our Photography Journey"
        heroDescription="Watch how we capture life's most precious moments with creativity, passion, and professionalism."
        emailPlaceholder="your.email@example.com"
        backgroundImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80"
        googleDriveLink="https://drive.google.com/file/d/1mrtKtCKTFqz0_H-jnIEgHjv7-qd3uUqS/view?usp=drive_link"
        autoPlayOnScroll={true}
      />

<<<<<<< HEAD
      <ServiceCustomizer />

      <section className="py-24 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2
=======
      <Suspense fallback={null}>
        <ServiceCustomizer />
      </Suspense>

      <section className="py-24 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white fade-in-section opacity-0" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            id="cta-heading"
>>>>>>> 713e091 (Initial project upload)
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Capture Your Precious Moments?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's create beautiful memories together. Book your session today.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
<<<<<<< HEAD
=======
            aria-label="Book your photography session"
>>>>>>> 713e091 (Initial project upload)
          >
            Book Your Session
          </Link>
        </div>
      </section>
<<<<<<< HEAD
    </div>
=======
    </main>
>>>>>>> 713e091 (Initial project upload)
    </>
  );
}
