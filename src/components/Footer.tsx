import { Link } from 'react-router-dom';
import { Camera, Instagram, Facebook, MessageCircle, Mail, Phone, Clock } from 'lucide-react';

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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/919963562764"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
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
              <li>Wedding Photography</li>
              <li>Pre-Wedding Shoots</li>
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
