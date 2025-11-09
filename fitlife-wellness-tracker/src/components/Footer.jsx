const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-2xl mr-2">💪</span>
              FitLife Wellness Tracker
            </h3>
            <p className="text-gray-400">
              Your personal companion for achieving health and fitness goals.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-green-400 transition-colors">About</a></li>
              <li><a href="/services" className="hover:text-green-400 transition-colors">Services</a></li>
              <li><a href="/dashboard" className="hover:text-green-400 transition-colors">Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: Healthcare@fitlife.com</li>
              <li>Phone: 81 888 777</li>
              <li>Address: Beirut, Lebanon</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitLife Wellness Tracker. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
