import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import SEO from '@/components/SEO';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
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
  }, [selectedCategory]);

  const categories = ['All', 'Weddings', 'Pre-Wedding', 'Kids / Baby', 'Portraits', 'Candid', 'Events', 'Studio'];

  const portfolioItems = [
    {
      category: 'Weddings',
      image: '/Archive (1)/001Wedding.jpg',
      title: 'Wedding Ceremony',
    },
    {
      category: 'Pre-Wedding',
      image: '/Archive (1)/PRE WEDDING.jpg',
      title: 'Pre-Wedding Shoot',
    },
    {
      category: 'Kids / Baby',
      image: '/Archive (1)/kids and baby photography.jpg',
      title: 'Baby Portrait',
    },
    {
      category: 'Weddings',
      image: '/Archive (1)/002Wedding.jpg',
      title: 'Wedding Moments',
    },
    {
      category: 'Portraits',
      image: '/Archive (1)/studio .jpeg',
      title: 'Portrait Session',
    },
    {
      category: 'Candid',
      image: '/Archive (1)/candid .jpg',
      title: 'Candid Moments',
    },
    {
      category: 'Pre-Wedding',
      image: '/Archive (1)/PRE WEDDING.jpg',
      title: 'Couple Photography',
    },
    {
      category: 'Studio',
      image: '/Archive (1)/studio .jpeg',
      title: 'Studio Portrait',
    },
    {
      category: 'Weddings',
      image: '/Archive (1)/001Wedding.jpg',
      title: 'Wedding Reception',
    },
    {
      category: 'Events',
      image: '/Archive (1)/002Wedding.jpg',
      title: 'Event Photography',
    },
    {
      category: 'Kids / Baby',
      image: '/Archive (1)/kids and baby photography.jpg',
      title: 'Kids Portrait',
    },
    {
      category: 'Candid',
      image: '/Archive (1)/candid photography.JPG',
      title: 'Candid Shot',
    },
    {
      category: 'Portraits',
      image: '/Archive (1)/studio .jpeg',
      title: 'Professional Portrait',
    },
    {
      category: 'Pre-Wedding',
      image: '/Archive (1)/PRE WEDDING.jpg',
      title: 'Romantic Shoot',
    },
    {
      category: 'Studio',
      image: '/Archive (1)/studio .jpeg',
      title: 'Studio Session',
    },
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (image: string, index: number) => {
    setSelectedImage(image);
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'next'
        ? (selectedIndex + 1) % filteredItems.length
        : (selectedIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedIndex(newIndex);
    setSelectedImage(filteredItems[newIndex].image);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox('prev');
        if (e.key === 'ArrowRight') navigateLightbox('next');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, selectedIndex]);

  return (
    <>
      <SEO
        title="Portfolio - Wedding Photography Gallery | Varun Photography"
        description="Browse our stunning wedding photography portfolio. See real wedding photos, pre-wedding shoots & studio portraits. Book your session after viewing our work - quality guaranteed."
        keywords="Photography Portfolio, Wedding Photography Gallery, Pre-Wedding Photos, Candid Photography, Studio Portraits, Professional Photography, Wedding Photos"
        canonical="https://www.varunphotography002.com/portfolio"
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
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl mt-4 opacity-90">A collection of our finest moments</p>
        </div>
      </section>

      <section className="py-16 px-4 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="fade-in-section opacity-0 break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(item.image, index)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
          >
            ‹
          </button>

          <img
            src={selectedImage}
            alt="Portfolio"
            className="max-w-full max-h-full object-contain object-center"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="absolute right-4 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
    </>
  );
}
