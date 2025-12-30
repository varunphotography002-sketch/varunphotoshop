import { Heart, Camera, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import SEO from '@/components/SEO';

export default function Services() {
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

  const services = [
    {
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
    },
    {
      title: 'Kids & Baby Photography',
      description: 'Adorable and memorable photoshoots for children.',
      icon: Users,
      image: '/Archive (1)/kids and baby photography.jpg',
    },
    {
      title: 'Candid Photography',
      description: 'Unscripted moments captured naturally.',
      icon: Camera,
      image: '/Archive (1)/candid .jpg',
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
      image: '/Archive (1)/retouching.jpg',
    },
  ];

  return (
    <>
      <SEO
        title="Photography Services - Wedding, Pre-Wedding, Studio Portraits | Varun Photography"
        description="Book professional wedding photography, pre-wedding shoots, candid & studio portraits. Expert photographers with high-end equipment. Get a quote today - affordable packages available."
        keywords="Photography Services, Wedding Photography, Pre-Wedding Photography, Candid Photography, Studio Portraits, Kids Photography, Professional Photographer, Book Photography"
        canonical="https://www.varunphotography002.com/services"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          serviceType: 'Photography Services',
          provider: {
            '@type': 'PhotographyService',
            name: 'Varun Photography',
            url: 'https://www.varunphotography002.com',
          },
          areaServed: 'Hyderabad',
          offers: {
            '@type': 'Offer',
            description: 'Professional photography packages for weddings, pre-wedding, candid, and studio portraits',
          },
        }}
      />
      <div className="bg-white pt-20">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/Archive (1)/background wall paper .jpg')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Photography Services
          </h1>
          <p className="text-xl mt-4 opacity-90">
            Professional photography services tailored to your needs
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto space-y-24">
          {services.map((service, index) => (
            <div
              key={index}
              className={`fade-in-section opacity-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <service.icon className="w-12 h-12 text-gray-900 mb-6" />
                <h2
                  className="text-4xl font-bold mb-6 text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {service.title}
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">{service.description}</p>
              </div>

              <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${
                index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
              }`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-gray-900 to-gray-700 text-white fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Ready to Book Your Session?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your photography needs and create something beautiful together.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-xl"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
