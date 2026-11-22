import { useState } from "react";
import { Clock, Heart, ArrowRight } from "lucide-react";

function Destination({ destination, onSelect }) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl">
      {/* Top Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-64 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

        {/* Badge Tag */}
        {destination.badge && (
          <span className="absolute top-4 left-4 rounded-full bg-emerald-800/90 px-3.5 py-1 text-xs font-bold text-white shadow-sm backdrop-blur-xs">
            {destination.badge}
          </span>
        )}

        {/* Wishlist Heart Button */}
        <button
          type="button"
          onClick={() => setIsLiked(!isLiked)}
          aria-label="Save to Wishlist"
          className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-xs text-gray-700 shadow-sm transition hover:scale-110 hover:bg-white"
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              isLiked ? "fill-red-500 text-red-500" : "text-gray-700 hover:text-red-500"
            }`}
          />
        </button>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              {destination.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="h-3.5 w-3.5 text-gray-400" />
              {destination.duration}
            </span>
          </div>

          <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-emerald-800 transition-colors">
            {destination.name}
          </h3>

          <p className="mb-5 line-clamp-2 text-sm leading-relaxed text-gray-600">
            {destination.description}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between gap-3 border-t border-gray-100 pt-4">
          <div>
            <p className="text-[11px] font-medium text-gray-500">Starting from</p>
            <div className="flex items-baseline gap-1">
              <p className="text-xl font-black text-emerald-900">
                {destination.price}
              </p>
              <span className="text-[11px] text-gray-400">/ person</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => onSelect(destination)}
            className="flex items-center gap-1.5 rounded-full bg-emerald-800 px-5 py-2.5 text-xs font-bold text-white shadow-xs transition duration-300 hover:bg-orange-500 hover:shadow-md"
          >
            <span>Explore</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default Destination;
