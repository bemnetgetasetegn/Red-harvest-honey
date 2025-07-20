import img1 from '../assets/img-1.jpg'
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
const About = () => {
  const services = [
    {
      title: "White Honey",
      image: img1,
      description:
        "Famous for its crystal-clear color and unique floral taste from the Tigray region.",
      button: "Explore Honey",
    },
    {
      title: "Sheka Forest Honey",
      image: img2,
      description:
        "Collected from wild forest hives in Sheka, rich in medicinal properties.",
      button: "View Honeycombs",
    },
    {
      title: "Guji Highland Honey",
      image: img3,
      description:
        "Harvested in Ethiopia’s highlands, known for its bold flavor and golden hue.",
      button: "Browse Flavor",
    },
  ];

  return (
    <section id='about' className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-center mb-5">Why Choose us?</h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          Experience the difference of authentic flavors, fresh ingredients, and
          handmade delights that elevate every bite.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-md overflow-hidden"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold mb-2 text-brown-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <button className="btn btn-primary hover:bg-[#5c3c22] transition">
                  {service.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
