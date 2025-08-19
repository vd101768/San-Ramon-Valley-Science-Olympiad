import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaSun, FaMoon, FaTrophy } from 'react-icons/fa';
import Carousel from 'nuka-carousel';

const OLYMPIADS = [
  {
    year: "2024-2025",
    teams: [
      "6^(Us) - Bollinger Canyon Elementary School",
      "Scientific Lakers - Bollinger Canyon Elementary School",
      "The Einsteins - Bella Vista Elementary School",
      "Odysseus - Bella Vista Elementary School",
      "Peelys - John Baldwin Elementary School"
    ],
    images: [
      "/images/past-olympiads/24-25/image1.JPG",
      "/images/past-olympiads/24-25/image2.JPG",
      "/images/past-olympiads/24-25/image3.JPG",
      "/images/past-olympiads/24-25/image4.JPG",
      "/images/past-olympiads/24-25/image5.JPG"
    ]
  },
  {
    year: "2023-2024",
    teams: [
      "Science Smarties - Bella Vista Elementary School",
      "The Einsteins - Bella Vista Elementary School",
      "Scientific Lakers - Bollinger Canyon Elementary School",
      "Curious Coyotes - Coyote Creek Elementary School",
      "Blazing Stars - Bella Vista Elementary School"
    ],
    images: [
      "/images/past-olympiads/23-24/24image1.png",
      "/images/past-olympiads/23-24/24image2.JPG",
      "/images/past-olympiads/23-24/24image3.JPG",
      "/images/past-olympiads/23-24/24image4.JPG",
      "/images/past-olympiads/23-24/24image5.JPG"
    ]
  }, /* */
  {
    year: "2022-2023",
    teams: [
      "Golden Sonic - Live Oak Elementary School",
      "The Elementals - Bollinger Canyon Elementary School",
      "Carbon 6 - Bella Vista Elementary School",
      "The Science Hawks - Hidden Hills Elementary School",
      "Science MAVVENs - Neil Armstrong Elementary School"
    ],
    images: [
      "/images/past-olympiads/22-23/23image1.png",
      "/images/past-olympiads/22-23/23image2.png",
      "/images/past-olympiads/22-23/23image3.png",
      "/images/past-olympiads/22-23/23image4.jpg",
      "/images/past-olympiads/22-23/23image5.png"
    ]
  }
];

export default function PastOlympiads() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setIsDark(savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    return () => html.classList.remove('dark');
  }, [isDark]);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#e5e7eb" : "#1f2937";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  const colors = {
    background: isDark ? "#18181b" : "#f9fafb",
    card: isDark ? "#232326" : "#fff",
    border: isDark ? "#4ade80" : "#166534",
    text: isDark ? "#e5e7eb" : "#18181b",
    subtext: isDark ? "#a1a1aa" : "#374151",
    accent: isDark ? "#4ade80" : "#166534"
  };

  return (
    <>
      <div className="min-h-screen font-sans" style={{ color: colors.text }}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-8 z-50 p-2 rounded-full shadow transition-all duration-300"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <FaSun className="text-white text-xl" />
          ) : (
            <FaMoon className="text-gray-800 text-xl" />
          )}
        </button>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-5xl font-bold text-center mb-2" style={{ color: colors.text }}>
            Past Olympiads
          </h1>
          <p className="text-center text-lg mb-12" style={{ color: colors.subtext }}>
            A gallery of past olympiads, with pictures and results.
          </p>
          <div className="flex flex-col gap-16">
            {OLYMPIADS.map((olympiad, idx) => (
              <div
                key={olympiad.year}
                className="rounded-2xl shadow-xl border"
                style={{
                  background: colors.card,
                  borderColor: colors.border,
                  padding: "2.5rem 2rem"
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-8">
                  {/* Carousel */}
                  <div className="flex-1 flex justify-center items-center">
                    <Carousel
                      className="rounded-xl shadow border-2 border-green-400 overflow-hidden"
                      autoplay
                      pauseOnHover
                      swiping
                      wrapAround
                      style={{
                        width: "100%",
                        maxWidth: 480,
                        minHeight: 320,
                        borderColor: colors.border,
                        background: "#000"
                      }}
                      renderCenterLeftControls={({ previousSlide }) => (
                        <button
                          onClick={previousSlide}
                          className="p-2 bg-gray-900 bg-opacity-40 rounded-full ml-2 focus:outline-none hover:bg-opacity-60"
                          aria-label="Previous Slide"
                        >
                          <FaChevronLeft className="text-white text-xl" />
                        </button>
                      )}
                      renderCenterRightControls={({ nextSlide }) => (
                        <button
                          onClick={nextSlide}
                          className="p-2 bg-gray-900 bg-opacity-40 rounded-full mr-2 focus:outline-none hover:bg-opacity-60"
                          aria-label="Next Slide"
                        >
                          <FaChevronRight className="text-white text-xl" />
                        </button>
                      )}
                    >
                      {olympiad.images.map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`Olympiad ${olympiad.year} Image ${i + 1}`}
                          className="w-full h-80 object-cover"
                          style={{ borderRadius: 16, border: `2px solid ${colors.border}` }}
                        />
                      ))}
                    </Carousel>
                  </div>
                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-center items-center md:items-start">
                    <div className="flex items-center gap-3 mb-2">
                      <FaTrophy style={{ color: colors.accent, fontSize: 28 }} />
                      <h2 className="text-3xl font-bold" style={{ color: colors.accent }}>
                        {olympiad.year} Winners
                      </h2>
                    </div>
                    <ul className="list-decimal list-inside text-lg mt-4 mb-2 w-full max-w-lg" style={{ color: colors.subtext }}>
                      {olympiad.teams.map((team, i) => (
                        <li key={i} className="mb-2">{team}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}