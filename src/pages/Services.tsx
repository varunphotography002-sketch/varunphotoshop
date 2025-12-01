import { Heart, Camera, Baby, Users, Sparkles, Edit } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';

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
      description:
        'We capture the joy, emotions, rituals, and celebrations of your big day with cinematic style. From the intimate moments to the grand celebrations, we document every precious detail of your special day.',
      icon: Heart,
      image:
        'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Pre-Wedding Shoots',
      description:
        'Beautiful couple stories told through creative photography at your favorite locations. We help you create stunning memories before your big day with artistic and romantic photoshoots.',
      icon: Camera,
      image:
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Kids & Baby Photography',
      description:
        'Adorable, fun, and memorable photoshoots for infants, toddlers, and children. We capture the innocence, joy, and playful moments of childhood with patience and creativity.',
      icon: Baby,
      image:
        'https://images.pexels.com/photos/1648375/pexels-photo-1648375.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Candid Photography',
      description:
        'Unscripted moments captured naturally — the way memories are meant to be. We specialize in capturing genuine emotions and spontaneous moments that tell authentic stories.',
      icon: Camera,
      image:
        'https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Studio Portraits',
      description:
        'Professional individual, family, and fashion portraits with premium lighting setup. Our studio is equipped with state-of-the-art equipment to create stunning, timeless portraits.',
      icon: Users,
      image:
        'https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Maternity Shoots',
      description:
        'Celebrate the beauty of motherhood with elegant and emotional maternity photography. We create artistic images that honor this special time in your life.',
      icon: Sparkles,
      image:
        'https://images.pexels.com/photos/1556652/pexels-photo-1556652.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      title: 'Photo Editing & Retouching',
      description:
        'Color correction, retouching, background removal, and professional enhancements. We transform your photos into works of art with our expert post-processing services.',
      icon: Edit,
      image:
        'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="bg-white pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1983032/pexels-photo-1983032.jpeg?auto=compress&cs=tinysrgb&w=1600')",
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
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
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
  );
}
