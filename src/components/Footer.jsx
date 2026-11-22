import { Compass, Mail, Phone, MapPin, ArrowUp } from "lucide-react";

function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNav = (id) => {
    if (onNavigate) {
      onNavigate(id);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-950 px-6 pt-16 pb-8 text-gray-300">
      <div className="mx-auto max-w-7xl">
        {/* 4-Column Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <button
              type="button"
              onClick={() => handleNav("home")}
              className="flex items-center gap-2 text-2xl font-black text-white cursor-pointer"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 text-white shadow-md">
                <Compass className="h-5 w-5" />
              </div>
              <span>
                Travel<span className="text-orange-500">Go</span>
                <span className="text-emerald-500">.</span>
              </span>
            </button>

            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              Nepal’s premier adventure travel operator. Crafting life-changing treks, wildlife safaris, and cultural odysseys since 2012.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
             
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 text-gray-400 transition hover:bg-orange-500 hover:text-white"
              >
                <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("home")}
                  className="transition hover:text-orange-400 cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("destinations")}
                  className="transition hover:text-orange-400 cursor-pointer"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("about")}
                  className="transition hover:text-orange-400 cursor-pointer"
                >
                  About Our Company
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("contact")}
                  className="transition hover:text-orange-400 cursor-pointer"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Featured Destinations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Popular Treks & Tours
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("destinations")}
                  className="text-left transition hover:text-orange-400 cursor-pointer"
                >
                  Everest Base Camp Trek
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("destinations")}
                  className="text-left transition hover:text-orange-400 cursor-pointer"
                >
                  Pokhara Valley & Annapurna
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("destinations")}
                  className="text-left transition hover:text-orange-400 cursor-pointer"
                >
                  Upper Mustang Forbidden Kingdom
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("destinations")}
                  className="text-left transition hover:text-orange-400 cursor-pointer"
                >
                  Chitwan Jungle Safari
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => handleNav("destinations")}
                  className="text-left transition hover:text-orange-400 cursor-pointer"
                >
                  Lumbini Buddha Heritage Tour
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Headquarters
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>Thamel, Kathmandu 44600, Nepal</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="tel:+9779800000000" className="hover:text-orange-400">
                  +977 980-0000000
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-emerald-400 shrink-0" />
                <a href="mailto:contact@travelgo.com" className="hover:text-orange-400">
                  contact@travelgo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-900 pt-6 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} TravelGo Nepal Pvt. Ltd. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-gray-400 transition hover:text-orange-400 cursor-pointer"
              aria-label="Back to Top"
            >
              <span>Back to Top</span>
              <ArrowUp className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;