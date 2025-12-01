import { Link } from 'react-router-dom';
import { Camera, Heart, Users, Award, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from '@/components/ui/animated-slideshow';
import { ZoomParallax } from '@/components/ui/zoom-parallax';
import Lenis from '@studio-freight/lenis';
import ServiceCustomizer from '@/components/ServiceCustomizer';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

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
    };
  }, []);

  const services = [
    {
      title: 'Wedding Photography',
      description: 'Capturing the joy, emotions, rituals, and celebrations of your big day.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Pre-Wedding Shoots',
      description: 'Beautiful couple stories told through creative photography.',
      icon: Camera,
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Kids & Baby Photography',
      description: 'Adorable and memorable photoshoots for children.',
      icon: Users,
      image: 'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Candid Photography',
      description: 'Unscripted moments captured naturally.',
      icon: Camera,
      image: 'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Studio Portraits',
      description: 'Professional portraits with premium lighting setup.',
      icon: Award,
      image: 'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Photo Editing & Retouching',
      description: 'Professional enhancements and color correction.',
      icon: Camera,
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const portfolioImages = [
    'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1252500/pexels-photo-1252500.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  // Convert portfolio images to ZoomParallax format (max 7 images)
  const parallaxImages = portfolioImages.slice(0, 7).map((img, index) => ({
    src: img,
    alt: `Portfolio image ${index + 1}`,
  }));

  return (
    <div className="bg-white">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Capturing Moments That Last a Lifetime
          </h1>
          <p className="text-xl md:text-2xl mb-12 opacity-90 animate-slide-up-delay">
            Professional photography that brings your memories to life with creativity, color, and
            emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up-delay-2">
            <Link
              to="/contact"
              className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
            >
              Book a Photoshoot
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Story, Captured Beautifully
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            We are dedicated to making every picture meaningful. From portraits to weddings, we
            bring artistry and precision to every frame.
          </p>
          <Link
            to="/about"
            className="inline-flex items-center space-x-2 text-gray-900 font-semibold hover:gap-4 transition-all"
          >
            <span>Know More About Us</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#faf9f5] fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <HoverSlider className="min-h-[70vh] flex flex-col justify-center p-6 md:p-12 bg-[#faf9f5] text-[#3d3929]">
            <h3 className="mb-8 md:mb-12 text-[rgb(201, 100, 66)] text-xs font-medium capitalize tracking-wide text-[#c96442]">
              / our services
            </h3>
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
                  <div key={`${service.title}-${index}`} className="w-full h-full">
                    <HoverSliderImage
                      index={index}
                      imageUrl={service.image}
                      src={service.image}
                      alt={service.title}
                      className="size-full object-cover rounded-lg"
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
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Portfolio Preview
          </h2>
          
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
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-700 transition-all duration-300 hover:shadow-xl"
            >
              Explore Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            What Our Clients Say
          </h2>
          <div className="bg-white p-12 rounded-lg shadow-xl">
            <p className="text-xl text-gray-700 italic mb-6 leading-relaxed">
              "Absolutely loved their work! The pictures came out magical. Professional team and
              quick delivery."
            </p>
            <p className="text-gray-900 font-semibold">— Ramya & Praveen</p>
          </div>
        </div>
      </section>

      <ServiceCustomizer />

      <section className="py-24 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2
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
          >
            Book Your Session
          </Link>
        </div>
      </section>
    </div>
  );
}
