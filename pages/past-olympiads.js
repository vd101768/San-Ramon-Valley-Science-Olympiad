import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaSun, FaMoon } from 'react-icons/fa';
import Carousel from 'nuka-carousel';

// Placeholder data for winning teams
const WINNING_TEAMS_2025 = [
  "6^(Us) - Bollinger Canyon Elementary School",
  "Scientific Lakers - Bollinger Canyon Elementary School",
  "The Einsteins - Bella Vista Elementary School",
  "Odysseus - Bella Vista Elementary School",
  "Peelys - John Baldwin Elementary School"
];

const WINNING_TEAMS_2024 = [
  "Science Smarties - Bella Vista Elementary School",
  "The Einsteins - Bella Vista Elementary School",
  "Scientific Lakers - Bollinger Canyon Elementary School",
  "Curious Coyotes - Coyote Creek Elementary School",
  "Blazing Stars - Bella Vista Elementary School"
];

const WINNING_TEAMS_2023 = [
  "Golden Sonic - Live Oak Elementary School",
  "The Elementals - Bollinger Canyon Elementary School",
  "Carbon 6 - Bella Vista Elementary School",
  "The Science Hawks - Hidden Hills Elementary School",
  "Science MAVVENs - Neil Armstrong Elementary School"
];

export default function PastOlympiads() {
  const [isDark, setIsDark] = useState(false);
  
  // Load theme from local storage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
    }
  }, []);

  // Save theme to local storage and apply dark class to HTML
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

  // Apply global theme styles to the body element for consistent background color
  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#e5e7eb" : "#1f2937";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  // Theme toggle handler
  const toggleTheme = () => setIsDark((prev) => !prev);
  
  return (
    <>
      <div className="min-h-screen font-sans bg-white dark:bg-gray-900 " style={{backgroundColor: isDark ? "#000" : "#fff"}}>
        <div className="max-w-7xl mx-auto px-4 pb-16 pt-8">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="fixed top-6 right-8 z-50 p-2 rounded-full shadow"
            aria-label="Toggle theme"
          >
            {isDark ? (
              <FaSun className="text-white text-xl" />
            ) : (
              <FaMoon className="text-gray-800 text-xl" />
            )}
          </button>
          
          <h1 className="text-4xl font-extrabold text-center pt-8 pb-2 text-gray-900 dark:text-gray-50" style={{color: isDark ? "#e5e7eb" : "#18181b"}}>
            Past Olympiads
          </h1>
          <em className="text-center italic text-lg text-gray-500 dark:text-gray-400 mb-8">
            <p>
              A gallery of past olympiads, with pictures and results.
            </p>
          </em>
          
         <div > 
         <section className="flex flex-col md:flex-row justify-center gap-12 mt-12 grid grid-cols-3 md:grid-cols-3" >
            
            {/* 2024-2025 Winning Teams List */}
            <div className="w-full md:w-1/2 flex flex-col items-center p-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{textAlign: 'center', color: isDark ? "#f9fafb" : "#18181b", marginLeft: "-220%", width: "150%"}}>
                2024-2025 SRVSO Overall Winning Teams
              </h2>
              <ul className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2" style={{color: isDark ? "#a1a1aa" : "#374151", marginLeft: "-220%"}}>
                {WINNING_TEAMS_2025.map((team, index) => (
                  <li key={index}>{team}</li>
                ))}
              </ul>
               <section className="mt-16">
            <em><h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center" style={{color: isDark ? "#4ade80" : "#166534", marginLeft: "-100%"}}>Images from 24-25 Winners</h3></em>
            <Carousel
              className="relative rounded-2xl shadow-xl border-4 border-green-500 overflow-hidden"
              autoplay
              pauseOnHover
              swiping
              style={{ width: "30rem", height: 'auto', marginLeft: "-50%", borderColor: isDark ? "#4ade80" : "#166534" }}
              wrapAround
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className="p-3 bg-gray-900 bg-opacity-40 rounded-full ml-4 focus:outline-none transition-all duration-300 hover:bg-opacity-60"
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft className="text-white text-2xl" />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className="p-3 bg-gray-900 bg-opacity-40 rounded-full mr-4 focus:outline-none transition-all duration-300 hover:bg-opacity-60"
                  aria-label="Next Slide"
                >
                  <FaChevronRight className="text-white text-2xl" />
                </button>
              )}
            >
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+1" alt="Past Olympiad Image 1" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+2" alt="Past Olympiad Image 2" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+3" alt="Past Olympiad Image 3" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+4" alt="Past Olympiad Image 4" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+5" alt="Past Olympiad Image 5" />
            </Carousel>
          </section>
            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center p-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" style={{textAlign: 'center', color: isDark ? "#f9fafb" : "#18181b", width: "150%"}}>
                2023-2024 SRVSO Overall Winning Teams
              </h2>
              <ul className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2" style={{color: isDark ? "#a1a1aa" : "#374151", width: "240%", marginLeft: "30%"}}>
                {WINNING_TEAMS_2024.map((team, index) => (
                  <li key={index}>{team}</li>
                ))}
              </ul>
              <section className="mt-16">
            <em><h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center" style={{color: isDark ? "#4ade80" : "#166534"}}>Images from 23-24 Winners</h3></em>
            <Carousel
              className="relative rounded-2xl shadow-xl border-4 border-green-500 overflow-hidden"
              autoplay
              pauseOnHover
              swiping
              style={{ width: "30rem", height: 'auto', borderColor: isDark ? "#4ade80" : "#166534" }}
              wrapAround
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className="p-3 bg-gray-900 bg-opacity-40 rounded-full ml-4 focus:outline-none transition-all duration-300 hover:bg-opacity-60"
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft className="text-white text-2xl" />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className="p-3 bg-gray-900 bg-opacity-40 rounded-full mr-4 focus:outline-none transition-all duration-300 hover:bg-opacity-60"
                  aria-label="Next Slide"
                >
                  <FaChevronRight className="text-white text-2xl" />
                </button>
              )}
            >
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+1" alt="Past Olympiad Image 1" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+2" alt="Past Olympiad Image 2" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+3" alt="Past Olympiad Image 3" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+4" alt="Past Olympiad Image 4" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+5" alt="Past Olympiad Image 5" />
            </Carousel>
          </section>
            </div>

              <div className="w-full md:w-1/2 flex flex-col items-center p-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4"  style={{textAlign: 'center', color: isDark ? "#f9fafb" : "#18181b", marginLeft: "220%", width: "150%"}}>
                2022-2023 SRVSO Overall Winning Teams
              </h2>
              <ul className="list-decimal list-inside text-lg text-gray-700 dark:text-gray-300 space-y-2" style={{color: isDark ? "#a1a1aa" : "#374151", marginLeft: "270%", width: "240%"}}>
                {WINNING_TEAMS_2023.map((team, index) => (
                  <li key={index}>{team}</li>
                ))}
              </ul>
               <section className="mt-16">
            <em><h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center" style={{color: isDark ? "#4ade80" : "#166534", marginLeft: "50%", width: "100%"}}>Images from 22-23 Winners</h3></em>
            <Carousel
              className="relative rounded-2xl shadow-xl border-4 border-green-500 overflow-hidden"
              autoplay
              pauseOnHover
              swiping
              wrapAround
              style={{ width: "30rem", height: 'auto', marginLeft: "50%", borderColor: isDark ? "#4ade80" : "#166534" }}
              renderCenterLeftControls={({ previousSlide }) => (
                <button
                  onClick={previousSlide}
                  className="p-3 bg-gray-900 bg-opacity-40 rounded-full ml-4 focus:outline-none transition-all duration-300 hover:bg-opacity-60"
                  aria-label="Previous Slide"
                >
                  <FaChevronLeft className="text-white text-2xl" />
                </button>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <button
                  onClick={nextSlide}
                  className="p-3 bg-gray-900 bg-opacity-40 rounded-full mr-4 focus:outline-none transition-all duration-300 hover:bg-opacity-60"
                  aria-label="Next Slide"
                >
                  <FaChevronRight className="text-white text-2xl" />
                </button>
              )}
            >
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+1" alt="Past Olympiad Image 1" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+2" alt="Past Olympiad Image 2" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+3" alt="Past Olympiad Image 3" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+4" alt="Past Olympiad Image 4" />
              <img src="https://placehold.co/800x600/1f2937/f3f4f6?text=Image+5" alt="Past Olympiad Image 5" />
            </Carousel>
          </section>
            </div>
          </section>
          </div>
          

          {/* Existing Carousel of Images */}
         
        </div>
      </div>
    </>
  );
}