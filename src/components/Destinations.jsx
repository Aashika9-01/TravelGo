import { useState, useMemo } from "react";
import DestinationData from "../Data/DestinationData";
import Destination from "./project/Destination";
import { Search, Sparkles } from "lucide-react";

function Destinations({
  selectedCategory = "All",
  setSelectedCategory,
  searchQuery = "",
  setSearchQuery,
  onSelectTour,
}) {
  const [internalCategory, setInternalCategory] = useState("All");
  const [internalSearch, setInternalSearch] = useState("");

  const activeCategory = setSelectedCategory ? selectedCategory : internalCategory;
  const changeCategory = setSelectedCategory || setInternalCategory;

  const activeSearch = setSearchQuery ? searchQuery : internalSearch;
  const changeSearch = setSearchQuery || setInternalSearch;

  const categories = [
    "All",
    "Trekking",
    "Lakes & Nature",
    "Culture & Heritage",
    "Wildlife",
  ];

  const filteredDestinations = useMemo(() => {
    return DestinationData.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(activeSearch.toLowerCase()) ||
        item.description.toLowerCase().includes(activeSearch.toLowerCase()) ||
        item.country.toLowerCase().includes(activeSearch.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, activeSearch]);

  return (
    <section id="destinations" className="bg-gray-50/80 px-6 py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/80 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <Sparkles className="h-3.5 w-3.5 text-emerald-700" />
            <span>Featured Tour Packages</span>
          </div>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Explore Popular Destinations
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-600">
            Discover the most revered mountain trails, pristine glacial lakes, ancient sacred cities, and wild jungle reserves.
          </p>
        </div>

        {/* Filter and Search Controls Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 sm:flex-row">
          {/* Category Tabs */}
          <div className="flex w-full flex-wrap items-center justify-center gap-2 sm:w-auto sm:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => changeCategory(cat)}
                className={`rounded-full px-5 py-2 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-emerald-800 text-white shadow-md shadow-emerald-800/20 scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-100 hover:text-emerald-800 border border-gray-200"
                }`}
              >
                {cat === "All" ? "All Tours" : cat}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={activeSearch}
              onChange={(e) => changeSearch(e.target.value)}
              placeholder="Search destination..."
              className="w-full rounded-full border border-gray-200 bg-white py-2 pl-10 pr-4 text-sm text-gray-800 placeholder-gray-400 shadow-2xs outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />
            {activeSearch && (
              <button
                type="button"
                onClick={() => changeSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="mt-6 flex items-center justify-between text-xs font-medium text-gray-500">
          <span>
            Showing <strong className="text-gray-900">{filteredDestinations.length}</strong> of{" "}
            {DestinationData.length} available packages
          </span>
          {(activeCategory !== "All" || activeSearch) && (
            <button
              onClick={() => {
                changeCategory("All");
                changeSearch("");
              }}
              className="text-emerald-700 hover:underline font-semibold"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Destination Cards Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredDestinations.map((item) => (
              <Destination
                key={item.id}
                destination={item}
                onSelect={onSelectTour}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 rounded-3xl border border-dashed border-gray-200 bg-white p-12 text-center">
            <p className="text-lg font-bold text-gray-800">No destinations found matching your criteria</p>
            <p className="mt-2 text-sm text-gray-500">
              Try searching for something else or reset your filter category.
            </p>
            <button
              onClick={() => {
                changeCategory("All");
                changeSearch("");
              }}
              className="mt-6 rounded-full bg-emerald-800 px-6 py-2.5 text-xs font-bold text-white transition hover:bg-orange-500"
            >
              View All Tours
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Destinations;