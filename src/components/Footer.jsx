import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ButFirstCoffeeLogo from '../assets/butfirstcoffee-logo.png';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    // Navigation sections matching the header
    const sections = ["home", "products", "about", "contact"];
    
    // Get current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[var(--background-color)] text-[var(--text-color)] pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Logo and About */}
                    <div className="mb-8 md:mb-0 md:w-1/4">
                        <Link to="/" className="flex items-center mb-4">
                            <img src={ButFirstCoffeeLogo} alt="ButFirstCoffee-Logo" className="w-12 h-auto object-cover mr-2" />
                            <h3 className="text-[var(--primary-color)] font-bold text-lg">BUT FIRST, COFFEE</h3>
                        </Link>
                        <p className="text-sm mb-4">
                            We serve premium coffee and delicious food in a cozy atmosphere.
                            Our mission is to provide the best coffee experience to our customers.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                <FaFacebook className="text-[var(--primary-color)] hover:opacity-75 text-xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <FaInstagram className="text-[var(--primary-color)] hover:opacity-75 text-xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <FaTwitter className="text-[var(--primary-color)] hover:opacity-75 text-xl" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="mb-8 md:mb-0 md:w-1/4">
                        <h4 className="text-[var(--primary-color)] font-semibold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {sections.map((section) => (
                                <li key={section}>
                                    <HashLink 
                                        smooth 
                                        to={`#${section}`}
                                        className="hover:text-[var(--primary-color)] transition-colors duration-300"
                                    >
                                        {section.charAt(0).toUpperCase() + section.slice(1)}
                                    </HashLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Opening Hours */}
                    <div className="mb-8 md:mb-0 md:w-1/4">
                        <h4 className="text-[var(--primary-color)] font-semibold text-lg mb-4">Opening Hours</h4>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>7:00 AM - 9:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Saturday</span>
                                <span>8:00 AM - 10:00 PM</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Sunday</span>
                                <span>8:00 AM - 8:00 PM</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-8 md:mb-0 md:w-1/4">
                        <h4 className="text-[var(--primary-color)] font-semibold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="text-[var(--primary-color)] mt-1 mr-2" />
                                <span>123 Coffee Street, Manila, Philippines</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="text-[var(--primary-color)] mr-2" />
                                <span>+63 912 345 6789</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="text-[var(--primary-color)] mr-2" />
                                <span>info@butfirstcoffee.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 mt-8 pt-6">
                    <p className="text-center text-sm">
                        &copy; {currentYear} But First, Coffee. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
