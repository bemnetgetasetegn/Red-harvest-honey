const Hero = () => {
  return (
    <div
      id="home"
      className="relative h-screen bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('./assets/background.jpg')] bg-cover bg-center text-white"
    >
      {/* Mobile: Centered content */}
      <div className="md:hidden flex h-full items-center justify-center px-4">
        <div className="w-full max-w-md text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">WELCOME</h1>
          <p className="pt-2 text-base sm:text-lg">
            Experience the pure taste of nature with our golden, organic honey.
            Harvested with care, rich in flavor, and packed with natural
            goodness—perfect for your table and your health.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn btn-secondary">LETS GO</button>
            <button className="btn btn-primary">DISCOVER</button>
          </div>
        </div>
      </div>

      {/* Desktop: Positioned content */}
      <div className="hidden md:flex h-full items-center px-4">
        <div className="absolute left-10  transform -translate-y-1/3 max-w-md lg:max-w-xl">
          <h1 className="text-5xl lg:text-6xl font-bold">WELCOME</h1>
          <p className="pt-2 text-lg lg:text-xl">
            Experience the pure taste of nature with our golden, organic honey.
            Harvested with care, rich in flavor, and packed with natural
            goodness—perfect for your table and your health.
          </p>
          <div className="pt-4 flex flex-row gap-4">
            <button className="btn btn-secondary">LETS GO</button>
            <button className="btn btn-primary">DISCOVER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
