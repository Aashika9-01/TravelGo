import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import TourModal from "./components/TourModal";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const hash = window.location.hash.replace("#", "").toLowerCase();
    return ["home", "destinations", "about", "contact"].includes(hash)
      ? hash
      : "home";
  });
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalTour, setModalTour] = useState(null);
  const [bookedTour, setBookedTour] = useState(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (["home", "destinations", "about", "contact"].includes(hash)) {
        setCurrentPage(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleOpenModal = (tour) => {
    setModalTour(tour);
  };

  const handleCloseModal = () => {
    setModalTour(null);
  };

  const handleBookTour = (tour) => {
    setBookedTour(tour);
    setModalTour(null);
    if (currentPage === "home") {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigateTo("contact");
  };

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 selection:bg-orange-500 selection:text-white">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      <main className="flex-1">
        {/* On Home: Show EVERYTHING (Hero -> Destinations -> About -> Contact) */}
        {currentPage === "home" && (
          <>
            <Hero onNavigate={navigateTo} />
            <Destinations
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              onSelectTour={handleOpenModal}
            />
            <About onNavigate={navigateTo} />
            <Contact selectedTour={bookedTour} />
          </>
        )}

        {/* Dedicated Destinations Page */}
        {currentPage === "destinations" && (
          <Destinations
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSelectTour={handleOpenModal}
          />
        )}

        {/* Dedicated About Page */}
        {currentPage === "about" && <About onNavigate={navigateTo} />}

        {/* Dedicated Contact Page */}
        {currentPage === "contact" && <Contact selectedTour={bookedTour} />}
      </main>

      <Footer onNavigate={navigateTo} />

      {/* Quick View & Detail Modal */}
      {modalTour && (
        <TourModal
          tour={modalTour}
          onClose={handleCloseModal}
          onBookNow={handleBookTour}
        />
      )}
    </div>
  );
}

export default App;
