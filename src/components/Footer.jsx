// Footer.jsx
import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Logo + About */}
        <div>
          <h1 className="text-4xl font-extrabold mb-2">2113 MERCATORES</h1>
          <p className="text-gray-400 text-2xl font-bold">Global Traders</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-1 text-gray-300">
            <li><a href="#" className="hover:text-orange-400 transition">Shop</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">About</a></li>
            <li><a href="#" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin className="w-5 h-5 text-orange-400" />
            <span>Chicago, IL</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Mail className="w-5 h-5 text-orange-400" />
            <a href="mailto:sales@2113merc.com" className="hover:text-orange-400 transition">sales@2113merc.com</a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 border-t border-zinc-700 pt-6 text-sm text-center text-gray-500">
        © 2025 2113 Mercatores. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
