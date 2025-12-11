import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const indiaServices = [
    "Ahmedabad", "Amritsar", "Bangalore", "Bhubaneswar", "Chennai",
    "Coimbatore", "Delhi", "Guwahati", "Hyderabad", "Indore",
    "Jaipur", "Jodhpur", "Kochi", "Kolkata", "Mangalore",
    "Mumbai", "Patna", "Port Blair", "Pune", "Raipur",
    "Ranchi", "Silchar", "Siliguri", "Trichy", "Varanasi",
    "Vellore", "Visakhapatnam", "Istanbul"
  ];

  const internationalServices = [
    "Bangladesh", "Canada", "Dubai", "Germany", "Kuwait",
    "Myanmar", "Nepal", "Singapore", "UK", "USA", "Australia"
  ];

  const medicalEscorts = [
    "Kuwait", "Nepal", "Myanmar", "Australia", "USA",
    "UK", "Canada", "Singapore", "Dubai", "Germany", "Bangladesh"
  ];

  const renderServiceList = (services, prefix) => {
    const chunks = [];
    for (let i = 0; i < services.length; i += 5) {
      chunks.push(services.slice(i, i + 5));
    }

    return chunks.map((chunk, chunkIndex) => (
      <div key={chunkIndex} className="mb-1">
        {chunk.map((item, index) => (
          <span key={item}>
            <Link
              to={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="hover:text-primary hover:underline transition-colors"
            >
              {prefix} {item}
            </Link>
            {index < chunk.length - 1 && <span className="mx-1">|</span>}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <footer className="bg-gray-100 pt-16 pb-8 font-sans">
      <div className="container mx-auto px-4 h-4xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-gray-300 pb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="inline-block mb-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-emergency tracking-tight leading-none">
                  FLY MEDICAL
                </span>
                <span className="text-xl text-charcoal font-medium tracking-wider">AMBULANCE</span>
              </div>
            </Link>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed max-w-xs">
              A Specialised Air Ambulance Service for Comprehensive Patient Transfers.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="bg-primary text-white p-2 rounded hover:bg-blue-700 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary text-white p-2 rounded hover:bg-blue-700 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-primary text-white p-2 rounded hover:bg-blue-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-primary font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/media" className="hover:text-primary">Media Presence</Link></li>
              <li><Link to="/presence" className="hover:text-primary">Our Presence</Link></li>
              <li><Link to="/why-choose-us" className="hover:text-primary">Why Choose Us</Link></li>
              <li><Link to="/faqs" className="hover:text-primary">FAQs</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-primary font-bold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/case-studies" className="hover:text-primary">Case Studies</Link></li>
            </ul>
          </div>

          {/* Location */}
          <div className="col-span-1">
            <h3 className="text-primary font-bold mb-4 text-lg">Location</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              B Block, 6th Floor, Plot 18, iLabs, Opposite InOrbit mall, Madhapur, Hyderabad, Telangana, 500081
            </p>
          </div>
        </div>

        {/* Bottom Section - Lists */}
        <div className="space-y-8">
          {/* India Services */}
          <div>
            <h3 className="text-primary font-bold mb-2 text-lg">Air Ambulance Services in India</h3>
            <div className="text-xs text-gray-600 leading-relaxed">
              {renderServiceList(indiaServices, "Air Ambulance Services in")}
            </div>
          </div>

          {/* International Services */}
          <div>
            <h3 className="text-primary font-bold mb-2 text-lg">Air Ambulance Services in International</h3>
            <div className="text-xs text-gray-600 leading-relaxed">
              {renderServiceList(internationalServices, "Air Ambulance Services in")}
            </div>
          </div>

          {/* Medical Escorts */}
          <div>
            <h3 className="text-primary font-bold mb-2 text-lg">Medical Escorts Worldwide</h3>
            <div className="text-xs text-gray-600 leading-relaxed">
              {renderServiceList(medicalEscorts, "Medical Escort in")}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Fly Medical Ambulance. All Rights Reserved. Made By Jenish Shah
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
