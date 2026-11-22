import { X, Clock, CheckCircle2, Shield, Send } from "lucide-react";

export default function TourModal({ tour, onClose, onBookNow }) {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Modal Dialog Card */}
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-gray-700 shadow-md backdrop-blur-sm transition hover:bg-orange-500 hover:text-white"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Banner Image */}
        <div className="relative h-64 w-full overflow-hidden sm:h-72">
          <img
            src={tour.image}
            alt={tour.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="inline-block rounded-full bg-orange-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              {tour.badge || tour.category}
            </span>
            <h2 className="mt-2 text-2xl font-black sm:text-3xl">{tour.name}</h2>
            <div className="mt-1 flex flex-wrap items-center gap-4 text-xs font-medium text-gray-200 sm:text-sm">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-orange-400" />
                {tour.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
              Overview
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
              {tour.description}
            </p>
          </div>

          {/* Highlights */}
          {tour.highlights && tour.highlights.length > 0 && (
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-emerald-800">
                Trip Highlights
              </h3>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {tour.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* What's Included */}
          {tour.included && tour.included.length > 0 && (
            <div className="rounded-2xl bg-emerald-50/60 p-4 border border-emerald-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-emerald-700" />
                Package Inclusions
              </h3>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {tour.included.map((inc, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-medium text-emerald-900 border border-emerald-200 shadow-2xs"
                  >
                    ✓ {inc}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing & Booking Footer */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-150 pt-5 sm:flex-row">
            <div>
              <span className="text-xs text-gray-500">All-Inclusive Price</span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-emerald-900">{tour.price}</span>
                <span className="text-xs text-gray-500">/ person</span>
              </div>
            </div>

            <div className="flex w-full items-center gap-3 sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-1/2 rounded-full border border-gray-300 px-6 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-100 sm:w-auto"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onBookNow(tour);
                  onClose();
                }}
                className="flex w-1/2 items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-sm font-bold text-white shadow-md transition hover:bg-orange-600 hover:shadow-lg sm:w-auto"
              >
                <span>Book Now</span>
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
