import { useState } from "react";
import { Mail, Phone, MapPin, Clock, CheckCircle2, Sparkles } from "lucide-react";

function Contact({ selectedTour }) {
  const [prevTour, setPrevTour] = useState(selectedTour);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: selectedTour ? selectedTour.name : "",
    travelers: "2",
    date: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (selectedTour !== prevTour) {
    setPrevTour(selectedTour);
    setFormData((prev) => ({
      ...prev,
      package: selectedTour ? selectedTour.name : "",
    }));
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact Form Submitted Successfully:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="bg-gray-50/70 px-6 py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Ready to Plan Your Adventure?</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-5xl">
            Get In Touch With Us
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-gray-600 text-sm sm:text-base">
            Have questions or want a custom trek itinerary? Send us an inquiry and our travel experts will respond within 24 hours.
          </p>
        </div>

        {/* Content Grid: Contact Info + Form */}
        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Left Side: Contact Cards (5 cols) */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-5">
            <div className="rounded-3xl bg-emerald-900 p-8 text-white shadow-xl">
              <h3 className="text-2xl font-bold">Contact Information</h3>
              <p className="mt-2 text-sm text-emerald-200">
                Drop by our Kathmandu headquarters or reach out via phone or email.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-orange-400 shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Our Location
                    </h4>
                    <p className="mt-1 text-sm font-medium text-white">
                     Kathmandu , Nepal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-orange-400 shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Phone Number
                    </h4>
                    <a
                      href="tel:+9779800000000"
                      className="mt-1 block text-sm font-medium text-white hover:text-orange-400 transition"
                    >
                      +977 980-0000000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-orange-400 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Direct Email
                    </h4>
                    <a
                      href="mailto:contact@travelgo.com"
                      className="mt-1 block text-sm font-medium text-white hover:text-orange-400 transition"
                    >
                      contact@travelgo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-800 text-orange-400 shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-300">
                      Office Time
                    </h4>
                    <p className="mt-1 text-sm font-medium text-white">
                      Sunday – Friday: 8:00 AM – 7:00 PM 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Interactive Inquiry Form (7 cols) */}
          <div className="rounded-3xl border border-gray-150 bg-white p-6 shadow-xl sm:p-10 lg:col-span-7">
            {isSubmitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-9 w-9" />
                </div>
                <h3 className="mt-5 text-2xl font-black text-gray-900">
                  Inquiry Received Successfully!
                </h3>
                <p className="mx-auto mt-2 max-w-md text-sm text-gray-600 leading-relaxed">
                  Thank you, <strong className="text-gray-900">{formData.name}</strong>. Our destination specialist will review your request for{" "}
                  <strong className="text-emerald-800">{formData.package || "Nepal Tour"}</strong> and email your customized quote shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      package: "",
                      travelers: "2",
                      date: "",
                      message: "",
                    });
                  }}
                  className="mt-6 rounded-full bg-emerald-800 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-orange-500"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sujan Shrestha"
                      required
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. sujan@example.com"
                      required
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+977 98..."
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="package"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Destination / Package
                    </label>
                    <input
                      id="package"
                      name="package"
                      type="text"
                      value={formData.package}
                      onChange={handleChange}
                      placeholder="e.g. Pokhara, Upper Mustang, Everest"
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="travelers"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Number of Travelers
                    </label>
                    <select
                      id="travelers"
                      name="travelers"
                      value={formData.travelers}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="1">1 Traveler (Solo)</option>
                      <option value="2">2 Travelers (Couple)</option>
                      <option value="3-5">3 - 5 Travelers (Small Group)</option>
                      <option value="6+">6+ Travelers (Large Group)</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="date"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                    >
                      Estimated Travel Date
                    </label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-gray-700"
                  >
                    Your Message 
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness level, special dates, or specific places you want to see..."
                    className="w-full resize-y rounded-2xl border border-gray-200 px-4 py-3 text-sm outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-emerald-800 px-8 py-4 font-bold text-white shadow-md transition duration-300 hover:bg-orange-500 hover:shadow-lg"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;