import av1 from "../assets/av1.jpg";
import av2 from "../assets/av2.jpg";
import av3 from "../assets/av3.jpg";

const testimonials = [
  {
    image: av1,
    name: "Savannah Nguyen",
    quote:
      "“This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority.”",
  },
  {
    image: av2,
    name: "Savannah Nguyen",
    quote:
      "“This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority.”",
  },
  {
    image: av3,
    name: "Savannah Nguyen",
    quote:
      "“This place is great! Atmosphere is chill and cool but the staff is also really friendly. They know what they’re doing and what they’re talking about, and you can tell making the customers happy is their main priority.”",
  },
];

const Testimonial = () => {
  return (
    <section id="testi" className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-brown-900 mb-12">
          What Our Customer Says?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#fff8f1] p-6 rounded-xl shadow text-left flex flex-col justify-between"
            >
              <p className="text-gray-700 text-sm mb-6">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold text-brown-800">
                  {testimonial.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
