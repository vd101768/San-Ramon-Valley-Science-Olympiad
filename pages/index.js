import Head from 'next/head';
import { GiBookCover, GiHumanPyramid } from 'react-icons/gi';
import { IoPeopleCircle } from 'react-icons/io5';
import Carousel from 'nuka-carousel';
import Sponsors from './sponsors';
import { FaChevronLeft, FaChevronRight, FaSun, FaMoon } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function Home() {
  // Theme state: false = light, true = dark
  const [isDark, setIsDark] = useState(false);
  const [loading, setLoading] = useState(true);

  // Set dark class on <html> for Tailwind dark: support (not used for styles anymore)
  // Load theme from local storage on initial render
useEffect(() => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    setIsDark(savedTheme === 'dark');
  }
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
  // Cleanup function to remove the class when the component unmounts
  return () => html.classList.remove('dark');
}, [isDark]);

  // Apply global theme styles to the body element
  useEffect(() => {
    setLoading(false)
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#e5e7eb" : "#18181b";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  // Theme toggle handler
  const toggleTheme = () => setIsDark((prev) => !prev);

  // Colors for themes
  const colors = {
    background: isDark ? "#000" : "#fff",
    text: isDark ? "#e5e7eb" : "#18181b",
    cardBg: isDark ? "#18181b" : "#f9fafb",
    cardText: isDark ? "#e5e7eb" : "#18181b",
    cardSubText: isDark ? "#a1a1aa" : "#374151",
    icon: isDark ? "#fff" : "#166534",
    border: "#4ade80",
    cardBorder: isDark ? "#27272a" : "#e5e7eb",
    testimonialsBg: isDark ? "#000" : "#fff",
    testimonialsText: isDark ? "#e5e7eb" : "#18181b",
    testimonialsSubText: isDark ? "#a1a1aa" : "#374151",
    testimonialsCardBg: isDark ? "#232326" : "#f3f4f6",
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <Head>
        <title>Home — SRVSO</title>
        <meta
          name="description"
          content="SRVSO provides students with the chance to explore the world of STEM in a competitive setting. Science Olympiad prepares the young generation for success in future years of middle school, high school, and beyond."
        />
      </Head>
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
      {/* Root div */}
      <div
        className="flex flex-col min-h-screen "
        style={{
          background: colors.background,
          color: colors.text,
        }}
      >
        <div
          className="flex flex-row max-w-6xl mx-auto mt-20 gap-x-20 items-start sm:flex-col sm:gap-x-0 sm:gap-y-10 sm:items-center"
          style={{ marginLeft: "-10%" }}
        >
          {/* Left: Text content */}
          <div
            className="flex-1 min-w-[420px] max-w-md"
            style={{
              color: colors.text,
            }}
          >
            <h1
              className="mt-0 text-5xl font-bold leading-tight heading"
              style={{
                color: colors.text,
                marginLeft: "-100%",
                width: "300%",
              }}
            >
              San Ramon Valley Science Olympiad
            </h1>
            <em>
              <p
                className="mt-6 text-2xl text-left"
                style={{
                  color: isDark ? "#a1a1aa" : "gray",
                  marginLeft: "-50%",
                }}
              >
                est. 2018
              </p>
            </em>
            <div className="flex max-w-3xl mt-10 gap-x-3" style={{ marginLeft: "-50%", width: "200%" }}>
              <div style={{ width: 12, background: isDark ? "#4ade80" : "#166534" }} />
              <div>
                <h2 className="mb-4" style={{ color: colors.text }}>Welcome to SRVSO!</h2>
                <p
                  className="leading-relaxed"
                  style={{
                    color: isDark ? "#a1a1aa" : "gray",
                  }}
                >
                  SRVSO provides students with the chance to explore the world of STEM
                  in a competitive setting. Science Olympiad prepares the young
                  generation for success in future years of middle school, high
                  school, and beyond.
                </p>
              </div>
            </div>
          </div>
          {/* Right: Carousel */}
          <div
            className="flex-1 min-w-[500px] min-h-[10px] max-w-xl"
            style={{
              boxShadow: `0 0 40px 0 #4ade80", 0 0 0 4px #4ade8033`,
              borderRadius: 24,
              background: colors.cardBg,
              marginLeft:250
            }}
          >
            <section style={{
            }}>
              <Carousel
                className="relative mt-0 h-[600px] w-full"
                pauseOnHover
                swiping
                wrapAround
                renderCenterLeftControls={({ previousSlide }) => (
                  <button
                    onClick={previousSlide}
                    className="p-3"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: "9999px",
                      marginLeft: 24,
                      outline: "none",
                      transition: "background 0.2s",
                      border: "none",
                    }}
                    aria-label="Previous Slide"
                  >
                    <FaChevronLeft style={{ color: "#fff", fontSize: 28 }} />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    className="p-3"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: "9999px",
                      marginRight: 24,
                      outline: "none",
                      transition: "background 0.2s",
                      border: "none",
                    }}
                    aria-label="Next Slide"
                  >
                    <FaChevronRight style={{ color: "#fff", fontSize: 28 }} />
                  </button>
                )}
              >
                <img
                  src="/images/carousel/DSC_0055_3_15.jpg"
                  alt="Carousel"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0084_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0089_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0207_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0232_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0238_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0309_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0315_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0320_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
                <img
                  src="/images/carousel/DSC_0483_15.jpg"
                  alt="Carousel"
                  layout="fill"
                  objectFit="contain"
                  style={{ borderRadius: 20, border: `2px solid ${isDark ? "#4ade80" : "#166534"}` }}
                />
              </Carousel>
            </section>
          </div>
        </div>

        <section
          className="flex justify-between max-w-7xl mx-auto mt-32 gap-x-16 sm:flex-col sm:gap-y-8 sm:mt-8 w-full px-8"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            className="flex flex-col items-center flex-1 px-12 pt-14 pb-16 transition-transform transform border-b-4 cursor-default hover:scale-105 gap-y-8 sm:hover:scale-95 sm:scale-90 min-w-[380px] max-w-[500px]"
            style={{
              background: colors.cardBg,
              color: colors.cardText,
              borderBottom: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
            }}
          >
            <GiBookCover
              className="mb-4"
              style={{ width: 80, height: 80, color: colors.icon }}
            />
            <p className="text-center" style={{ fontSize: 24 }}>
              Curriculum aligned with Common Core and Next generation science
              standards.
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-1 px-12 pt-14 pb-16 transition-transform transform border-b-4 cursor-default hover:scale-105 gap-y-8 sm:hover:scale-95 sm:scale-90 min-w-[380px] max-w-[500px]"
            style={{
              background: colors.cardBg,
              color: colors.cardText,
              borderBottom: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
            }}
          >
            <IoPeopleCircle
              className="mb-4"
              style={{ width: 80, height: 80, color: colors.icon }}
            />
            <p className="text-center" style={{ fontSize: 24 }}>
              Promotes life skills such as organization, leadership, confidence,
              team work and more.
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-1 px-12 pt-14 pb-16 transition-transform transform border-b-4 cursor-default hover:scale-105 gap-y-8 sm:hover:scale-95 sm:scale-90 min-w-[380px] max-w-[500px]"
            style={{
              background: colors.cardBg,
              color: colors.cardText,
              borderBottom: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
            }}
          >
            <GiHumanPyramid
              className="mb-4"
              style={{ width: 80, height: 80, color: colors.icon }}
            />
            <p className="text-center" style={{ fontSize: 24 }}>
              Work in a team of peers to be rewarded for the pursuit of scientific
              achievement.
            </p>
          </div>
        </section>

        <Sponsors
        isDark={isDark} 
        />

        {/* Testimonials Section */}
        <section
          className="w-full py-24 flex flex-col items-center mt-8"
          style={{
            marginTop: -50,
            background: colors.testimonialsBg,
            color: colors.testimonialsText,
          }}
        >
          <h1
            className="text-10xl font-bold mb-2 tracking-wide text-center"
            style={{ color: isDark ? "#fff" : "#222" }}
          >
            TESTIMONIALS
          </h1>
          <em>
            <p
              className="text-lg mb-12 text-center max-w-2xl"
              style={{ color: colors.testimonialsSubText }}
            >
              Hear from our community about their SRVSO experience.
            </p>
          </em>
          <div
            className="grid grid-cols-3 md:grid-cols-3 gap-10 w-full max-w-6xl px-4"
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              gap: "12rem",
              marginLeft: 0,
              
            }}
          >
            {/* Testimonial 1 */}
            <div
              className="rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 min-w-[400px] max-w-[500px]"
              style={{
                background: colors.testimonialsCardBg,
                borderTop: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
              }}
            >
              <p
                className="italic text-center mb-6"
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  color: colors.testimonialsText,
                }}
              >
                “SRVSO gave me the confidence to pursue science and engineering. The events were fun and challenging!”
              </p>
              <div
                className="font-semibold"
                style={{ color: isDark ? "#4ade80" : "#166534", fontSize: 22 }}
              >
                -A
              </div>
            </div>
            {/* Testimonial 2 */}
            <div
              className="rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 min-w-[400px] max-w-[500px]"
              style={{
                background: colors.testimonialsCardBg,
                borderTop: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
              }}
            >
              <p
                className="italic text-center mb-6"
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  color: colors.testimonialsText,
                }}
              >
                “The team spirit and support at SRVSO is unmatched. I learned so much and made lifelong friends.”
              </p>
              <div
                className="font-semibold"
                style={{ color: isDark ? "#4ade80" : "#166534", fontSize: 22 }}
              >
                -B
              </div>
            </div>
            {/* Testimonial 3 */}
            <div
              className="rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 min-w-[400px] max-w-[500px]"
              style={{
                background: colors.testimonialsCardBg,
                borderTop: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
              }}
            >
              <p
                className="italic text-center mb-6"
                style={{
                  fontSize: 25,
                  lineHeight: 1.5,
                  color: colors.testimonialsText,
                }}
              >
                “SRVSO helped me discover my passion for STEM and develop important life skills.”
              </p>
              <div
                className="font-semibold"
                style={{ color: isDark ? "#4ade80" : "#166534", fontSize: 22 }}
              >
                -C
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
