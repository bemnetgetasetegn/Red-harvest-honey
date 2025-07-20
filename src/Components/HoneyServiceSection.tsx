import { FaGlobe, FaStore, FaTruck } from 'react-icons/fa';

const HoneyServiceSection = () => {
  const services = [
    {
      icon: <FaGlobe className="h-10 w-10 text-honey mb-4" />,
      title: 'Ethiopia’s Finest Varieties',
      description: 'Enjoy premium honey varieties sourced from Ethiopia’s diverse regions, harvested with tradition and care.',
    },
    {
      icon: <FaStore className="h-10 w-10 text-honey mb-4" />,
      title: 'Widespread Availability',
      description: 'Our honey is available at numerous outlets across Ethiopia and beyond—easy to find, hard to forget.',
    },
    {
      icon: <FaTruck className="h-10 w-10 text-honey mb-4" />,
      title: 'Fast & Safe Delivery',
      description: 'Get fresh, high-quality honey delivered right to your door, quickly and securely.',
    },
  ];

  return (
    <section id='service' className="py-10 px-4 text-center relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-brown-900 mb-4">OUR BEST SERVICE</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our mission is to share Ethiopia’s natural golden treasure through unmatched quality, reliable delivery, and accessible distribution.
        </p>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-6 shadow-md transition-transform hover:-translate-y-1 duration-200 ${index === 1 ? 'border border-amber-500 shadow-lg' : ''}`}
            >
              {service.icon}
              <h3 className="text-xl font-semibold mb-2 text-brown-800">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HoneyServiceSection;
