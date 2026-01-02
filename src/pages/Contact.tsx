import { useState, useEffect, useRef } from 'react';
<<<<<<< HEAD
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';
=======
import { Phone, Mail, Clock, MapPin, Send } from '@/components/OptimizedIcons';
>>>>>>> 713e091 (Initial project upload)
import SEO from '@/components/SEO';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    shootType: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setSubmitMessage('Thank you! We will call you back soon.');
    setIsSubmitting(false);
    setFormData({
      name: '',
      phone: '',
      email: '',
      shootType: '',
      preferredDate: '',
      message: '',
    });

    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const shootTypes = [
<<<<<<< HEAD
    'Wedding Photography',
    'Pre-Wedding Shoot',
=======
    'wedding Photography',
    'Pre-wedding Shoot',
>>>>>>> 713e091 (Initial project upload)
    'Kids & Baby Photography',
    'Candid Photography',
    'Studio Portraits',
    'Maternity Shoot',
    'Event Photography',
    'Photo Editing',
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99635 62764',
      link: 'tel:+919963562764',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'varunphotography002@gmail.com',
      link: 'mailto:varunphotography002@gmail.com',
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: '9:00 AM – 10:00 PM',
      link: null,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Varun Photography - Book Your Photography Session Today"
        description="Get a free quote for wedding photography, pre-wedding shoots & studio portraits. Contact us now - quick response guaranteed. Professional photography services in Hyderabad."
<<<<<<< HEAD
        keywords="Contact Photographer, Book Photography Session, Wedding Photographer Contact, Professional Photography Booking, Photography Quote, Hyderabad Photographer"
=======
        keywords="Contact Photographer, Book Photography Session, wedding Photographer Contact, Professional Photography Booking, Photography Quote, Hyderabad Photographer"
>>>>>>> 713e091 (Initial project upload)
        canonical="https://www.varunphotography002.com/contact"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          mainEntity: {
            '@type': 'PhotographyService',
            name: 'Varun Photography',
            url: 'https://www.varunphotography002.com',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'Customer Service',
              availableLanguage: 'English',
            },
          },
        }}
      />
      <div className="bg-white pt-20">
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/1174775/pexels-photo-1174775.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-5xl md:text-6xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-xl mt-4 opacity-90">We're here to bring your vision to life</p>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="fade-in-section opacity-0">
              <h2
                className="text-4xl font-bold mb-8 text-gray-900"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Get in Touch
              </h2>

              <div className="space-y-8 mb-12">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <item.icon className="w-6 h-6 text-gray-900 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-600">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3
                  className="text-2xl font-bold mb-4 text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Varun Photography
                </h3>
                <p className="text-gray-700 mb-6">
                  Your trusted partner for capturing life's most precious moments with creativity,
                  passion, and professionalism.
                </p>
                <div className="flex items-start space-x-2 text-gray-600">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <p>Location details available upon request</p>
                </div>
              </div>
            </div>

            <div className="fade-in-section opacity-0">
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-xl">
                <h2
                  className="text-3xl font-bold mb-8 text-gray-900"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Book Your Session
                </h2>

                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="shootType"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Type of Photoshoot *
                    </label>
                    <select
                      id="shootType"
                      name="shootType"
                      required
                      value={formData.shootType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {shootTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="preferredDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Preferred Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all resize-none"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{isSubmitting ? 'Submitting...' : 'Submit & We Will Call You Back'}</span>
                    {!isSubmitting && <Send className="w-5 h-5" />}
                  </button>

                  {submitMessage && (
                    <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-center">
                      {submitMessage}
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 fade-in-section opacity-0">
        <div className="max-w-7xl mx-auto">
          <h2
            className="text-4xl font-bold text-center mb-12 text-gray-900"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Find Us Here
          </h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">
              <MapPin className="w-6 h-6 inline-block mr-2" />
              Map location to be added
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
