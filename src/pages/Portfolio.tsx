import React, { useState, useCallback, useEffect } from "react";

const images = [
  "1536w dark.png",
  "Frame 1000002539.png",
  "Frame 1000002540.png",
  "Frame 126.png",
  "Frame 48095571.png",
  "Frame 52.png",
  "Home Screen.png",
  "Home_page.png",
  "causalfunnel.png",
  "our_services.png",
  "main.svg",
];

const Portfolio: React.FC = () => {
  const [zoomedIdx, setZoomedIdx] = useState<number | null>(null);

  // Close zoom on Escape
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") setZoomedIdx(null);
    if (zoomedIdx !== null && (e.key === "ArrowRight" || e.key === "ArrowDown")) {
      setZoomedIdx((prev) => (prev !== null && prev < images.length - 1 ? prev + 1 : prev));
    }
    if (zoomedIdx !== null && (e.key === "ArrowLeft" || e.key === "ArrowUp")) {
      setZoomedIdx((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
    }
  }, [zoomedIdx]);

  useEffect(() => {
    if (zoomedIdx !== null) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [zoomedIdx, handleKeyDown]);

  return (
    <div
      className="relative min-h-screen w-full bg-gradient-to-b from-logic-dark via-logic-purple/40 to-logic-blue/40 text-white font-sans overflow-x-hidden"
      style={{ scrollSnapType: "y mandatory", WebkitOverflowScrolling: "touch" }}
    >
      {/* Sticky Glassy Header */}
      <header className="sticky top-0 z-30 w-full backdrop-blur-md bg-logic-dark/60 border-b border-logic-blue/10 shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center py-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-logic-blue to-logic-purple select-none">
          Portfolio
        </h1>
      </header>
      <main className="w-full">
        {images.map((img, idx) => (
          <section
            key={img}
            className="relative min-h-screen w-full flex justify-center items-center snap-start group transition-all duration-700"
            style={{
              scrollSnapAlign: "start",
              background:
                idx % 2 === 0
                  ? "linear-gradient(120deg, rgba(31,38,135,0.25) 0%, rgba(102,126,234,0.13) 100%)"
                  : "linear-gradient(120deg, rgba(102,126,234,0.13) 0%, rgba(31,38,135,0.25) 100%)",
            }}
          >
            {/* Parallax Background Blur */}
            <div
              className="absolute inset-0 -z-10 bg-gradient-to-br from-logic-blue/20 to-logic-purple/10 blur-2xl opacity-60 pointer-events-none"
              aria-hidden
            />
            {/* Image with animated scale on hover/focus */}
            <div className="relative flex flex-col items-center justify-center w-full h-full">
              <img
                src={`/Anubhav Agency/${img}`}
                alt={img.replace(/\.[^/.]+$/, "").replace(/_/g, " ")}
                className="max-h-[75vh] w-auto max-w-4xl mx-auto object-contain rounded-2xl shadow-2xl border border-logic-blue/30 bg-logic-dark transition-transform duration-500 group-hover:scale-105 group-focus:scale-105 cursor-zoom-in"
                style={{ boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)" }}
                loading="lazy"
                tabIndex={0}
                onClick={() => setZoomedIdx(idx)}
              />
              {/* Zoom prompt */}
              
              
            </div>
          </section>
        ))}
      </main>
      {/* Keyboard navigation hint */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-logic-dark/80 px-4 py-2 rounded-full text-xs text-logic-blue shadow-lg select-none pointer-events-none">
        Scroll or use ↑ ↓ keys
      </div>
      {/* Lightbox Zoom Overlay */}
      {zoomedIdx !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in cursor-zoom-out"
          onClick={() => setZoomedIdx(null)}
        >
          <img
            src={`/Anubhav Agency/${images[zoomedIdx]}`}
            alt={images[zoomedIdx].replace(/\.[^/.]+$/, "").replace(/_/g, " ")}
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-2xl shadow-2xl border-2 border-logic-blue/40 transition-transform duration-300"
            style={{ boxShadow: "0 12px 48px 0 rgba(31, 38, 135, 0.45)" }}
            loading="eager"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
