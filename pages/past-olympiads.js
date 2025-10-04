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
          className="fixed z-50 p-2 transition-all duration-300 rounded-full shadow top-6 right-8 sm:absolute sm:top-5 sm:right-20 sm:p-1"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <FaSun className="text-xl text-white" />
          ) : (
            <FaMoon className="text-xl text-gray-800" />
          )}
        </button>
        <div className="max-w-6xl px-4 py-12 mx-auto">
          <h1 className="mb-2 text-3xl font-bold text-center md:text-5xl" style={{ color: colors.text }}>
            Past Olympiads
          </h1>
          <p className="mb-12 text-base text-center md:text-lg" style={{ color: colors.subtext }}>
            A gallery of past olympiads, with pictures and results.
          </p>
          <div className="flex flex-col gap-8 md:gap-16">
            {OLYMPIADS.map((olympiad, idx) => (
              <div
                key={olympiad.year}
                className="p-4 border shadow-xl rounded-2xl md:p-8 lg:p-10"
                style={{
                  background: colors.card,
                  borderColor: colors.border,
                }}
              >
                <div className="flex flex-col gap-6 md:gap-8">
                  {/* Carousel */}
                  <div className="flex justify-center w-full">
                    <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                      <Carousel
                        className="overflow-hidden border-2 border-green-400 shadow rounded-xl"
                        autoplay
                        pauseOnHover
                        swiping
                        wrapAround
                        style={{
                          width: "100%",
                          borderColor: colors.border,
                          background: "#000"
                        }}
                        renderCenterLeftControls={({ previousSlide }) => (
                          <button
                            onClick={previousSlide}
                            className="p-2 ml-2 bg-gray-900 rounded-full bg-opacity-40 focus:outline-none hover:bg-opacity-60"
                            aria-label="Previous Slide"
                          >
                            <FaChevronLeft className="text-lg text-white md:text-xl" />
                          </button>
                        )}
                        renderCenterRightControls={({ nextSlide }) => (
                          <button
                            onClick={nextSlide}
                            className="p-2 mr-2 bg-gray-900 rounded-full bg-opacity-40 focus:outline-none hover:bg-opacity-60"
                            aria-label="Next Slide"
                          >
                            <FaChevronRight className="text-lg text-white md:text-xl" />
                          </button>
                        )}
                      >
                        {olympiad.images.map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt={`Olympiad ${olympiad.year} Image ${i + 1}`}
                            className="object-cover w-full h-64 md:h-80 lg:h-96"
                            style={{ borderRadius: 16, border: `2px solid ${colors.border}` }}
                          />
                        ))}
                      </Carousel>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="w-full">
                    <div className="flex flex-col items-center justify-center gap-2 mb-4 sm:flex-row sm:gap-3">
                      <FaTrophy style={{ color: colors.accent, fontSize: '1.5rem' }} className="md:text-2xl" />
                      <h2 className="text-xl font-bold text-center sm:text-2xl md:text-3xl" style={{ color: colors.accent }}>
                        {olympiad.year} Winners
                      </h2>
                    </div>
                    <div className="flex justify-center" >
                      <ul className="w-full max-w-2xl space-y-1 text-sm list-decimal list-inside md:text-lg md:space-y-2" style={{ color: colors.subtext, textAlign: 'center' }}>
                        {olympiad.teams.map((team, i) => (
                          <li key={i} className="break-words">{team}</li>
                        ))}
                      </ul>
                    </div>
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