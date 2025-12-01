import { Award, Target, Eye, CheckCircle } from 'lucide-react';
import { useEffect, useRef } from 'react';

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
    <div className="bg-white pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1787220/pexels-photo-1787220.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
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
              Wedding, pre-wedding, and portrait photography designed to tell your story
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

      <section className="py-24 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Professional Studio Setup
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our state-of-the-art studio is equipped with the latest photography equipment,
                professional lighting setups, and versatile backdrops to create stunning portraits
                and creative shoots.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From intimate family portraits to elaborate fashion shoots, we have the tools and
                expertise to bring your vision to life.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/2422259/pexels-photo-2422259.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Photography Studio"
                className="w-full h-full object-cover"
              />
            </div>
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
          <p className="text-lg text-gray-700 leading-relaxed">
            With years of experience and hundreds of satisfied clients, we've built a reputation for
            delivering exceptional photography services. Every project we undertake is treated with
            the utmost care and professionalism, ensuring that your special moments are preserved
            perfectly.
          </p>
        </div>
      </section>
    </div>
  );
}
