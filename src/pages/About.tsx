<<<<<<< HEAD
import { Award, Target, Eye, CheckCircle, ArrowRight } from 'lucide-react';
=======
import { Award, Target, Eye, CheckCircle, ArrowRight } from '@/components/OptimizedIcons';
>>>>>>> 713e091 (Initial project upload)
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';

export default function About() {
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

  const reasons = [
    'Professional & Experienced Team',
    'Creative shooting style',
    'Quick delivery & High-quality output',
    'State-of-the-art studio equipment',
    '100% customer satisfaction',
  ];

  return (
    <>
      <SEO
        title="About Varun Photography - Professional Photography Team | Trusted Photographers"
        description="Meet Varun Photography's expert team. Years of experience in wedding photography & studio portraits. 100% customer satisfaction. Book with confidence - professional service guaranteed."
<<<<<<< HEAD
        keywords="About Varun Photography, Professional Photographer, Photography Team, Wedding Photography Services, Trusted Photographer"
=======
        keywords="About Varun Photography, Professional Photographer, Photography Team, wedding Photography Services, Trusted Photographer"
>>>>>>> 713e091 (Initial project upload)
        canonical="https://www.varunphotography002.com/about"
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
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            About Us
          </h1>
        </div>
      </section>
      <section className="py-24 px-4 bg-white fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                10+ Years of Excellence in Photography!
              </h2>
              <div className="w-20 h-1 bg-pink-500 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  We specialize in capturing the most precious moments of your life with artistic
                  excellence and professional expertise. From grand weddings and intimate receptions
                  to joyful birthdays and adorable baby shoots, we bring years of experience to every
                  frame.
                </p>
                <p>
                  Our team understands that every event is unique, and we approach each assignment
                  with creativity, passion, and attention to detail. We don't just take photos—we
                  create timeless memories that tell your story beautifully.
                </p>
                <p>
                  With state-of-the-art equipment and a keen eye for detail, we ensure that every
                  emotion, every smile, and every special moment is captured with perfection. Your
                  memories deserve the best, and that's exactly what we deliver.
                </p>
              </div>
              <Link
                to="/services"
                className="inline-block mt-8 border-2 border-pink-500 text-pink-500 bg-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                Know More
              </Link>
            </div>

            {/* Right Column - Image Grid */}
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
<<<<<<< HEAD
                  src="/Archive (1)/001Wedding.jpg"
                  alt="Wedding Photography"
=======
                  src="/portfolio/wedding/wedding_4.jpg"
                  alt="wedding Photography"
>>>>>>> 713e091 (Initial project upload)
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
<<<<<<< HEAD
                  src="/Archive (1)/002Wedding.jpg"
                  alt="Wedding Moments"
=======
                  src="/portfolio/wedding/wedding_3.jpg"
                  alt="wedding Moments"
>>>>>>> 713e091 (Initial project upload)
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
<<<<<<< HEAD
                  src="/Archive (1)/PRE WEDDING.jpg"
                  alt="Pre-Wedding Photography"
=======
                  src="/portfolio/pre-wedding/pre_wedding.jpg"
                  alt="Pre-wedding Photography"
>>>>>>> 713e091 (Initial project upload)
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
                <img
<<<<<<< HEAD
                  src="/Archive (1)/kids and baby photography.jpg"
=======
                  src="/portfolio/kids and baby/baby_1.JPG"
>>>>>>> 713e091 (Initial project upload)
                  alt="Baby Photography"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 fade-in-section opacity-0">
        <div className="max-w-5xl mx-auto text-center">
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Behind Every Beautiful Picture, There's a Passionate Team
          </h2>
          <div className="text-lg text-gray-700 leading-relaxed space-y-6">
            <p>
              <strong>Varun Photography</strong> — Capturing love, emotions & elegance.
            </p>
            <p>
<<<<<<< HEAD
              Wedding, pre-wedding, and portrait photography designed to tell your story
=======
              wedding, pre-wedding, and portrait photography designed to tell your story
>>>>>>> 713e091 (Initial project upload)
              beautifully. Every frame is crafted with passion, creativity, and attention to detail.
            </p>
            <p className="text-xl font-semibold text-gray-900">
              Your memories deserve art — we create it.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="bg-white p-12 rounded-lg shadow-lg">
              <Target className="w-12 h-12 text-gray-900 mb-6" />
              <h3
                className="text-3xl font-bold mb-4 text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Mission
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To deliver high-quality, artistic, and meaningful photographs that speak from the
                heart. We believe every moment has a story, and we're here to tell it through our
                lens.
              </p>
            </div>

            <div className="bg-white p-12 rounded-lg shadow-lg">
              <Eye className="w-12 h-12 text-gray-900 mb-6" />
              <h3
                className="text-3xl font-bold mb-4 text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our Vision
              </h3>
              <p className="text-gray-700 leading-relaxed">
                To be the most trusted and creative photography studio in the region. We strive to
                set new standards in visual storytelling and create timeless memories for every
                client.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 fade-in-section opacity-0">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Why Choose Us?
            </h2>
            <p className="text-lg text-gray-600">
              We're committed to excellence in every aspect of our service.
            </p>
          </div>

          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                <p className="text-lg font-medium text-gray-900">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 fade-in-section opacity-0">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 text-gray-900 mx-auto mb-6" />
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Committed to Excellence
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            With years of experience and hundreds of satisfied clients, we've built a reputation for
            delivering exceptional photography services. Every project we undertake is treated with
            the utmost care and professionalism, ensuring that your special moments are preserved
            perfectly.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:gap-4"
          >
            <span>Explore</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
      </div>
    </>
  );
}
