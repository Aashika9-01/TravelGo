import { Mountain, Trees, Compass, Landmark, ArrowRight } from "lucide-react";

function About({ onNavigate }) {
  const travelServices = [
    {
      icon: Mountain,
      title: "Mountain Treks & Hiking",
      desc: "Scenic treks to Everest, Annapurna, Mustang, and Langtang suited for all fitness levels.",
    },
    {
      icon: Compass,
      title: "Lakes & Hill Stations",
      desc: "Relaxing lakeside escapes in Pokhara, scenic sunrises in Nagarkot, and green tea gardens in Ilam.",
    },
    {
      icon: Trees,
      title: "Jungle & Wildlife Safaris",
      desc: "Exciting elephant & jeep safaris in Chitwan to spot one-horned rhinos, deer, and exotic birds.",
    },
    {
      icon: Landmark,
      title: "Culture & Pilgrimage",
      desc: "Historic temple walks in Kathmandu Valley and peaceful spiritual visits to Lumbini.",
    },
  ];

  return (
    <section id="about" className="bg-white px-6 py-20 scroll-mt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Side: Image */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85"
              alt="Travelers enjoying Nepal mountain scenery"
              className="h-[400px] w-full object-cover transition duration-500 hover:scale-105 sm:h-[460px]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

        {/* Right Side: What We Offer */}
        <div>
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-4 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <span>About TravelGo</span>
          </div>

          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
            Everything You Need For Your Next Nepal Trip
          </h2>

          <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-600">
            Welcome to TravelGo! We help you plan and enjoy holidays across Nepal with ease. From booking hotels and arranging vehicles to recommending the best mountain viewpoints, we take care of the details so you can simply enjoy the journey.
          </p>

          {/* 4 Main Travel Services */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {travelServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-gray-150 bg-gray-50/60 p-4 transition duration-200 hover:border-emerald-300 hover:bg-white hover:shadow-sm"
                >
                  {Icon && (
                    <div className="mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-800 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  )}
                  <h3 className="text-sm font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-gray-500">{service.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Action Button: View Packages only */}
          <div className="mt-8">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById("destinations");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                } else if (onNavigate) {
                  onNavigate("destinations");
                }
              }}
              className="inline-flex items-center gap-2 rounded-full bg-emerald-800 px-7 py-3.5 text-xs sm:text-sm font-bold text-white shadow-sm transition duration-300 hover:bg-orange-500 cursor-pointer"
            >
              <span>View Packages</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;