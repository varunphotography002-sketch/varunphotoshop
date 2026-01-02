import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Camera, Instagram, Facebook, MessageCircle, Mail, Phone, Clock } from 'lucide-react';
=======
import { Camera, Instagram, Facebook, MessageCircle, Mail, Phone, Clock, Youtube } from '@/components/OptimizedIcons';
>>>>>>> 713e091 (Initial project upload)

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="w-8 h-8 text-white" />
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Varun Photography
              </span>
            </div>
            <p className="text-sm">
              Capturing moments that last a lifetime with creativity, color, and emotion.
            </p>
            <div className="flex space-x-4">
              <a
<<<<<<< HEAD
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
=======
                href="https://www.instagram.com/varun_photography002?igsh=ODYwaG4wdXB0cDlq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
>>>>>>> 713e091 (Initial project upload)
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
<<<<<<< HEAD
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
=======
                href="https://www.facebook.com/share/1Cd7hCWWEE/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
>>>>>>> 713e091 (Initial project upload)
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
<<<<<<< HEAD
=======
                href="https://youtube.com/@varunphotography002?si=EnE8mjTR7JAoFA2_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Subscribe to our YouTube channel"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
>>>>>>> 713e091 (Initial project upload)
                href="https://wa.me/919963562764"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
<<<<<<< HEAD
=======
                aria-label="Contact us on WhatsApp"
>>>>>>> 713e091 (Initial project upload)
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
<<<<<<< HEAD
              <li>Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
=======
              <li>wedding Photography</li>
              <li>Pre-wedding Shoots</li>
>>>>>>> 713e091 (Initial project upload)
              <li>Kids & Baby Photography</li>
              <li>Candid Photography</li>
              <li>Studio Portraits</li>
              <li>Photo Editing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+919963562764" className="hover:text-white transition-colors">
                  +91 99635 62764
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:varunphotography002@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  varunphotography002@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>9:00 AM – 10:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>© 2025 Varun Photography — All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
