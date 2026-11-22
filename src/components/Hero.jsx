import { ArrowRight } from "lucide-react";

function Hero({ onNavigate }) {
  const handleDestinationsClick = () => {
    const el = document.getElementById("destinations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("destinations");
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else if (onNavigate) {
      onNavigate("contact");
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-center justify-center bg-cover bg-center px-6 pt-20 pb-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=85')",
      }}
    >
      {/* Background Overlay - Natural & Bright, not overly dark */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Hero Content Container */}
      <div className="relative z-10 mx-auto max-w-4xl text-center text-white">
        {/* Top Tag */}
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-orange-400 sm:text-sm">
          Discover the beauty of Nepal
        </p>

        {/* Main Heading */}
        <h1 className="mb-6 text-4xl font-extrabold leading-tight sm:text-6xl lg:text-7xl">
          Explore the World,
          <br />
          <span className="text-orange-400">Create Memories.</span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-gray-100 sm:text-lg">
          Discover breathtaking destinations, explore hidden places, and experience unforgettable adventures with TravelGo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={handleDestinationsClick}
            className="flex items-center gap-2 rounded-full bg-orange-500 px-8 py-4 font-bold text-white shadow-lg transition duration-300 hover:bg-orange-600 hover:scale-105 cursor-pointer"
          >
            <span>Explore Tour Packages</span>
            <ArrowRight className="h-5 w-5" />
          </button>

          <button
            type="button"
            onClick={handleContactClick}
            className="rounded-full border border-white/80 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur-xs transition duration-300 hover:bg-white hover:text-gray-900 cursor-pointer"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
