import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Cross, ChevronDown } from 'lucide-react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isPresenceOpen, setIsPresenceOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('india'); // 'india', 'international', 'escorts'
    const [mobileExpanded, setMobileExpanded] = useState({});

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleMobileExpand = (name) => {
        setMobileExpanded(prev => ({
            ...prev,
            [name]: !prev[name]
        }));
    };

    const indiaServices = [
        "Ahmedabad", "Amritsar", "Bangalore",
        "Bhubaneswar", "Chennai", "Coimbatore",
        "Delhi", "Guwahati", "Hyderabad",
        "Indore", "Jaipur", "Jodhpur",
        "Kochi", "Kolkata", "Mangalore",
        "Mumbai", "Patna", "Port Blair",
        "Pune", "Raipur", "Ranchi",
        "Silchar", "Siliguri", "Trichy",
        "Varanasi", "Vellore", "Visakhapatnam"
    ];

    const internationalServices = [
        "Bangladesh", "Canada", "Dubai",
        "Germany", "Kuwait", "Myanmar",
        "Nepal", "Singapore", "UK",
        "USA", "Australia"
    ];

    const medicalEscorts = [
        "Kuwait", "Nepal", "Myanmar",
        "Australia", "USA", "UK",
        "Canada", "Singapore", "Dubai",
        "Germany", "Bangladesh"
    ];

    const servicesList = [
        "Commercial Stretcher Transfer",
        "Disaster Management",
        "ECMO Transfers",
        "Neonatal and Pediatric Transfers",
        "Organ Transfers",
        "Planned Air Transfers",
        "ICU Air Ambulance"
    ];

    const navLinks = [
        { name: 'About Us', path: '/about' },
        { name: 'Our Presence', path: '/presence', hasDropdown: true, type: 'presence' },
        { name: 'Media presence', path: '/media' },
        { name: 'Services', path: '/services', hasDropdown: true, type: 'services' },
        { name: 'Why Choose Us', path: '/why-choose-us' },
        { name: 'Download brochure', path: '/brochure' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <header
            className="bg-white shadow-md sticky top-0 z-50 w-full h-[101px]"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-9 h-full">
                <div className="flex justify-between items-center h-full">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="bg-primary p-2 rounded-lg">
                            <Cross className="h-8 w-8 text-white" />
                        </div>
                        <div className=" flex flex-col ">
                            <span className="text-2xl font-bold text-secondary-dark tracking-tight leading-none">
                                <span className="text-red-600" style={{ height: '20px', display: 'inline-block', lineHeight: '40px' }}>RED</span>
                                <span className="text-primary">AIR</span>
                            </span>
                            <span className="text-xs text-gray-500 font-medium tracking-wider">AMBULANCE</span>
                        </div>
                    </Link>

                    {/*  Desktop Navigation */}
                    <nav className="hidden xl:flex space-x-8">
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative group">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            className="text-red-600 hover:text-red-300 font-bold transition-colors duration-200 text-xs uppercase tracking-wide flex items-center h-full py-8"
                                            onMouseEnter={() => {
                                                if (link.type === 'presence') setIsPresenceOpen(true);
                                                if (link.type === 'services') setIsServicesOpen(true);
                                            }}
                                        >
                                            {link.name}
                                            <ChevronDown className="h-3 w-3 ml-1" />
                                        </button>

                                        {/* Our Presence Dropdown */}
                                        {link.type === 'presence' && isPresenceOpen && (
                                            <div
                                                className="absolute left-0 top-[80px] w-[900px] bg-white shadow-2xl rounded-sm border-t-4 border-red-600 z-50"
                                                onMouseEnter={() => setIsPresenceOpen(true)}
                                                onMouseLeave={() => setIsPresenceOpen(false)}
                                            >
                                                <div className="flex">
                                                    {/* Left Sidebar (Tabs) */}
                                                    <div className="w-1/3 bg-white py-4 pr-2">
                                                        <div className="flex flex-col space-y-2">
                                                            <button
                                                                className={`text-left px-6 py-3 text-sm font-bold transition-colors ${activeTab === 'india' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                                                                onMouseEnter={() => setActiveTab('india')}
                                                            >
                                                                Air Ambulance Services in India
                                                            </button>
                                                            <button
                                                                className={`text-left px-6 py-3 text-sm font-bold transition-colors ${activeTab === 'international' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                                                                onMouseEnter={() => setActiveTab('international')}
                                                            >
                                                                Air Ambulance Services in International
                                                            </button>
                                                            <button
                                                                className={`text-left px-6 py-3 text-sm font-bold transition-colors ${activeTab === 'escorts' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                                                                onMouseEnter={() => setActiveTab('escorts')}
                                                            >
                                                                Medical Escorts Worldwide
                                                            </button>
                                                        </div>
                                                    </div>

                                                    {/* Right Content Area */}
                                                    <div className="w-2/3 p-6 bg-white">
                                                        {activeTab === 'india' && (
                                                            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                                                                {indiaServices.map((city) => (
                                                                    <Link
                                                                        key={city}
                                                                        to={`/presence/india/${city.toLowerCase()}`}
                                                                        className="text-xs text-gray-700 hover:text-red-600 transition-colors flex items-center"
                                                                    >
                                                                        Air Ambulance Services in {city}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {activeTab === 'international' && (
                                                            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                                                                {internationalServices.map((country) => (
                                                                    <Link
                                                                        key={country}
                                                                        to={`/presence/international/${country.toLowerCase()}`}
                                                                        className="text-xs text-gray-700 hover:text-red-600 transition-colors flex items-center"
                                                                    >
                                                                        Air Ambulance Services in {country}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}

                                                        {activeTab === 'escorts' && (
                                                            <div className="grid grid-cols-3 gap-x-4 gap-y-2">
                                                                {medicalEscorts.map((place) => (
                                                                    <Link
                                                                        key={place}
                                                                        to={`/presence/medical-escort/${place.toLowerCase()}`}
                                                                        className="text-xs text-gray-700 hover:text-red-600 transition-colors flex items-center"
                                                                    >
                                                                        Medical Escort in {place}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Services Dropdown */}
                                        {link.type === 'services' && isServicesOpen && (
                                            <div
                                                className="absolute left-0 top-[80px] w-[900px] bg-white shadow-2xl rounded-sm border-t-4 border-red-600 z-50 p-8"
                                                onMouseEnter={() => setIsServicesOpen(true)}
                                                onMouseLeave={() => setIsServicesOpen(false)}
                                            >
                                                <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                                                    {servicesList.map((service) => (
                                                        <Link
                                                            key={service}
                                                            to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="text-sm text-gray-800 hover:text-red-600 transition-colors font-medium"
                                                        >
                                                            {service}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="text-red-600 hover:text-red-300 font-bold transition-colors duration-200 text-xs uppercase tracking-wide flex items-center h-full"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden xl:flex items-center flex-shrink-0">
                        <a href="tel:1800121911911"
                            className="flex flex-col items-end group whitespace-nowrap">
                            <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">24/7 Emergency</span>
                            <div className="flex items-center bg-primary group-hover:bg-primary-dark text-white px-5 py-1 rounded-full font-bold transition-all duration-200 shadow-md">
                                <Phone className="h-4 w-4 mr-2 animate-pulse" />
                                1800-121-911-911
                            </div>
                        </a>
                    </div>

                    {/* Mobile Controls (CTA Only) */}
                    <div className="xl:hidden flex items-center">
                        <a href="tel:1800121911911"
                            className="flex items-center bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-primary-dark transition-colors font-bold text-sm"
                            aria-label="Call Emergency"
                        >
                            <Phone className="h-4 w-4 mr-2 animate-pulse" />
                            1800-121-911-911
                        </a>
                        <button
                            className="ml-4 p-2 text-gray-600 hover:text-red-600 focus:outline-none"
                            onClick={toggleMenu}
                            aria-label="Toggle Menu"
                        >
                            {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="xl:hidden bg-white border-t border-gray-100 absolute top-full left-0 w-full shadow-lg h-[calc(100vh-101px)] overflow-y-auto pb-20">
                    <div className="px-4 pt-4 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.name} className="border-b border-gray-50 last:border-none">
                                {link.hasDropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleMobileExpand(link.name)}
                                            className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-lg font-medium text-secondary hover:text-primary hover:bg-red-50 focus:outline-none"
                                        >
                                            {link.name}
                                            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${mobileExpanded[link.name] ? 'transform rotate-180' : ''}`} />
                                        </button>
                                        {mobileExpanded[link.name] && (
                                            <div className="bg-gray-50 px-4 py-2 space-y-2">
                                                {link.type === 'presence' && (
                                                    <div className="space-y-4">
                                                        {/* India */}
                                                        <div>
                                                            <h4 className="font-bold text-sm text-gray-700 mb-2 uppercase tracking-wider">India</h4>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                {indiaServices.map((city) => (
                                                                    <Link
                                                                        key={city}
                                                                        to={`/presence/india/${city.toLowerCase()}`}
                                                                        className="text-sm text-gray-600 hover:text-red-600 block"
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                    >
                                                                        {city}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        {/* International */}
                                                        <div>
                                                            <h4 className="font-bold text-sm text-gray-700 mb-2 uppercase tracking-wider">International</h4>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                {internationalServices.map((country) => (
                                                                    <Link
                                                                        key={country}
                                                                        to={`/presence/international/${country.toLowerCase()}`}
                                                                        className="text-sm text-gray-600 hover:text-red-600 block"
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                    >
                                                                        {country}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                        {/* Medical Escorts */}
                                                        <div>
                                                            <h4 className="font-bold text-sm text-gray-700 mb-2 uppercase tracking-wider">Medical Escorts</h4>
                                                            <div className="grid grid-cols-2 gap-2">
                                                                {medicalEscorts.map((place) => (
                                                                    <Link
                                                                        key={place}
                                                                        to={`/presence/medical-escort/${place.toLowerCase()}`}
                                                                        className="text-sm text-gray-600 hover:text-red-600 block"
                                                                        onClick={() => setIsMenuOpen(false)}
                                                                    >
                                                                        {place}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {link.type === 'services' && (
                                                    <div className="space-y-2">
                                                        {servicesList.map((service) => (
                                                            <Link
                                                                key={service}
                                                                to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                                                                className="block text-sm text-gray-600 hover:text-red-600 py-1"
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {service}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        to={link.path}
                                        className="block px-4 py-3 rounded-lg text-lg font-medium text-secondary hover:text-primary hover:bg-red-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <a
                            href="tel:1800121911911"
                            className="block w-full text-center mt-8 bg-primary text-white px-4 py-4 rounded-xl font-bold text-lg shadow-lg"
                        >
                            EMERGENCY: 1800-121-911-911
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
