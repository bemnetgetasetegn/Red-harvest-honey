import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const HoneyFooter = () => {
  return (
    <footer className="bg-amber-50 border-t border-amber-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold text-black mb-4">HoneyHarvest</h3>
          <p className="text-gray-600 text-sm">
            Bringing you pure, natural, and sustainably sourced honey from the heart of Ethiopia.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-black-700 mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><a href="#" className="hover:text-amber-800">Home</a></li>
            <li><a href="#" className="hover:text-amber-800">About</a></li>
            <li><a href="#" className="hover:text-amber-800">Products</a></li>
            <li><a href="#" className="hover:text-amber-800">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-black-700 mb-4">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-amber-700 hover:text-amber-900"><FaFacebookF /></a>
            <a href="#" className="text-amber-700 hover:text-amber-900"><FaTwitter /></a>
            <a href="#" className="text-amber-700 hover:text-amber-900"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} HoneyHarvest. All rights reserved.
      </div>
    </footer>
  );
};

export default HoneyFooter;
