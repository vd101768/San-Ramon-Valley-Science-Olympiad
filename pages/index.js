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
  const [showPopup, setShowPopup] = useState(true);

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
    setLoading(false);
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

  const closePopup = () => setShowPopup(false);

  // Check localStorage for popup visibility
  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup');
    if (!hasSeenPopup) {
      setShowPopup(true);
      localStorage.setItem('hasSeenPopup', 'true');
    } else {
      setShowPopup(false);
    }
  }, []);

  useEffect(() => {
    setShowPopup(true);
  }, []);

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
        className="fixed z-50 p-2 transition-all duration-300 rounded-full shadow top-6 right-8 sm:absolute sm:top-5 sm:right-20 sm:p-1"
        style={{
          pointerEvents: "auto"
        }}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FaSun className="text-xl text-white sm:text-lg" />
        ) : (
          <FaMoon className="text-xl text-gray-800 sm:text-lg" />
        )}
      </button>
      {/* Root div */}
      <div
        className="flex flex-col min-h-screen"
        style={{
          background: colors.background,
          color: colors.text,
        }}
      >
        
        <div
          className="flex flex-row items-start max-w-6xl mx-auto mt-20 sm:mt-8 gap-x-20 sm:flex-col sm:gap-x-0 sm:gap-y-10 sm:items-center"
          style={{ marginLeft: "0" }}
        >


          {/* Left: Text content */}
          <div
            className="flex-1 min-w-[420px] max-w-md w-full sm:min-w-[320px] sm:max-w-full"
            style={{
              color: colors.text,
            marginLeft:-50
            }}
          >
            <h1
              className="mt-0 text-5xl font-bold leading-tight heading sm:text-3xl sm:text-center"
              style={{
                color: colors.text,
                marginLeft: "0",
                width: "100%",
              }}
            >
              San Ramon Valley Science Olympiad
            </h1>
            <em>
              <p
                className="mt-6 text-2xl text-left sm:text-lg sm:text-center"
                style={{
                  color: isDark ? "#a1a1aa" : "gray",
                  marginLeft: "0",
                }}
              >
                est. 2018
              </p>
            </em>
            <div className="flex max-w-3xl mt-10 gap-x-3 sm:mt-4" style={{ marginLeft: "0", width: "100%" }}>
              <div style={{ width: 12, background: isDark ? "#4ade80" : "#166534" }} />
              <div>
                <h2 className="mb-4 sm:text-base" style={{ color: colors.text }}>Welcome to SRVSO!</h2>
                <p
                  className="leading-relaxed sm:text-sm"
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
            className="flex-1 min-w-[500px] min-h-[10px] max-w-xl w-full sm:min-w-[320px] sm:max-w-full"
            style={{
              boxShadow: `0 0 40px 0 #4ade80, 0 0 0 4px #4ade8033`,
              borderRadius: 24,
              background: colors.cardBg,
              marginLeft: 0,
            }}
          >
            <section>
              <Carousel
                className="relative mt-0 h-[600px] w-full sm:h-[200px]"
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
                      marginLeft: 8,
                      outline: "none",
                      transition: "background 0.2s",
                      border: "none",
                    }}
                    aria-label="Previous Slide"
                  >
                    <FaChevronLeft style={{ color: "#fff", fontSize: 24 }} />
                  </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <button
                    onClick={nextSlide}
                    className="p-3"
                    style={{
                      background: "rgba(0,0,0,0.4)",
                      borderRadius: "9999px",
                      marginRight: 8,
                      outline: "none",
                      transition: "background 0.2s",
                      border: "none",
                    }}
                    aria-label="Next Slide"
                  >
                    <FaChevronRight style={{ color: "#fff", fontSize: 24 }} />
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
<em><p style={{alignItems: "center", justifyContent: "center", display: "flex", top: 50, position: "relative"}}>Questions? Contact us at:&nbsp; <u><a href="https://mail.google.com/mail/?view=cm&fs=1&to=srvusd2020@gmail.com">srvso2020@gmail.com</a></u></p></em>
        <section
          className="flex justify-between w-full px-8 mx-auto mt-32 max-w-7xl gap-x-16 sm:flex-col sm:gap-y-8 sm:mt-8"
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          
          <div
            className="flex flex-col items-center flex-1 px-12 pt-14 pb-16 transition-transform transform border-b-4 cursor-default hover:scale-105 gap-y-8 sm:hover:scale-95 sm:scale-100 min-w-[380px] max-w-[500px] w-full sm:min-w-[220px] sm:max-w-full"
            style={{
              background: colors.cardBg,
              color: colors.cardText,
              borderBottom: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
            }}
          >
            <GiBookCover
              className="mb-4"
              style={{ width: 60, height: 60, color: colors.icon }}
            />
            <p className="text-lg text-center sm:text-base" style={{ fontSize: 20 }}>
              Curriculum aligned with Common Core and Next generation science
              standards.
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-1 px-12 pt-14 pb-16 transition-transform transform border-b-4 cursor-default hover:scale-105 gap-y-8 sm:hover:scale-95 sm:scale-100 min-w-[380px] max-w-[500px] w-full sm:min-w-[220px] sm:max-w-full"
            style={{
              background: colors.cardBg,
              color: colors.cardText,
              borderBottom: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
            }}
          >
            <IoPeopleCircle
              className="mb-4"
              style={{ width: 60, height: 60, color: colors.icon }}
            />
            <p className="text-lg text-center sm:text-base" style={{ fontSize: 20 }}>
              Promotes life skills such as organization, leadership, confidence,
              team work and more.
            </p>
          </div>
          <div
            className="flex flex-col items-center flex-1 px-12 pt-14 pb-16 transition-transform transform border-b-4 cursor-default hover:scale-105 gap-y-8 sm:hover:scale-95 sm:scale-100 min-w-[380px] max-w-[500px] w-full sm:min-w-[220px] sm:max-w-full"
            style={{
              background: colors.cardBg,
              color: colors.cardText,
              borderBottom: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
            }}
          >
            <GiHumanPyramid
              className="mb-4"
              style={{ width: 60, height: 60, color: colors.icon }}
            />
            <p className="text-lg text-center sm:text-base" style={{ fontSize: 20 }}>
              Work in a team of peers to be rewarded for the pursuit of scientific
              achievement.
            </p>
          </div>
        </section>

        <Sponsors isDark={isDark} />

        {/* Testimonials Section */}
        <section
          className="flex flex-col items-center w-full py-24 mt-8 sm:py-8"
          style={{
            marginTop: -50,
            background: colors.testimonialsBg,
            color: colors.testimonialsText,
          }}
        >
          <h1
            className="mb-2 font-bold tracking-wide text-center text-10xl sm:text-2xl"
            style={{ color: isDark ? "#fff" : "#222" }}
          >
            Testimonials
          </h1>
          <em>
            <p
              className="max-w-2xl mb-12 text-lg text-center sm:text-sm"
              style={{ color: colors.testimonialsSubText }}
            >
              Hear from our community about their SRVSO experience.
            </p>
          </em>
          <div
            className="flex flex-row justify-center gap-[8.5rem] w-full max-w-6xl px-4 sm:grid sm:grid-cols-1 sm:gap-8"
            style={{
              alignItems: "stretch",
              marginLeft: 0,
            }}
          >
            {/* Testimonial 1 */}
            <div
              className="rounded-xl shadow-lg p-8 flex flex-col items-center justify-center border-t-4 min-w-[350px] max-w-[400px] w-full sm:min-w-[220px] sm:max-w-full sm:p-4 sm:mb-8"
              style={{
                background: colors.testimonialsCardBg,
                borderTop: `4px solid ${isDark ? "#4ade80" : "#166534"}`,

              }}
            >
              <p
                className="mb-6 italic text-center sm:text-sm"
                style={{
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: colors.testimonialsText,
                }}
              >
                “It was a very positive activity for the team to work hard preparing for it, and they learned not only the science concepts, but also other skills.”
              </p>
              {/* <div
                className="font-semibold"
                style={{ color: isDark ? "#4ade80" : "#166534", fontSize: 18 }}
              >
                -A
              </div> */}
            </div>
            {/* Testimonial 2 */}
            <div
              className="rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 min-w-[350px] max-w-[400px] w-full sm:min-w-[220px] sm:max-w-full sm:p-4 sm:mb-8"
              style={{
                background: colors.testimonialsCardBg,
                borderTop: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
              }}
            >
              <p
                className="mb-6 italic text-center sm:text-sm"
                style={{
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: colors.testimonialsText,
                }}
              >
                "Above all, the kids learn about teamwork. More than the "winning" component of the event, I always love the "fun and educative" part of it! Couldn't thank you all more for giving us this nice experience with science!”
              </p>
              {/* <div
                className="font-semibold"
                style={{ color: isDark ? "#4ade80" : "#166534", fontSize: 18 }}
              >
                -B
              </div> */}
            </div>
            {/* Testimonial 3 */}
            <div
              className="rounded-xl shadow-lg p-8 flex flex-col items-center justify-center border-t-4 min-w-[350px] max-w-[400px] w-full sm:min-w-[220px] sm:max-w-full sm:p-4"
              style={{
                background: colors.testimonialsCardBg,
                borderTop: `4px solid ${isDark ? "#4ade80" : "#166534"}`,
              }}
            >
              <p
                className="mb-6 italic text-center sm:text-sm"
                style={{
                  fontSize: 18,
                  lineHeight: 1.5,
                  color: colors.testimonialsText,
                }}
              >
                “This is amazing. I am deeply appreciative of the fact that our kids in elementary get to work on something of this scale and magnitude right in our city.”
              </p>
              {/* <div
                className="font-semibold"
                style={{ color: isDark ? "#4ade80" : "#166534", fontSize: 18 }}
              >
                -C
              </div> */}
            </div>
          </div>
        </section>

        {showPopup && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closePopup}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
            style={{ color: colors.text, background: colors.cardBg, border: `2px solid ${colors.border}` }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4" style={{ color: colors.text }}>Welcome to SRVSO!</h2>
            <p className="text-sm mb-4" style={{ color: colors.subtext }}>
              Learn more about participating in the 2026 SRVSO by viewing our flyer below and clicking <u><a href="https://forms.gle/NMDMqMLGNnXRTBUS8" target='_blank' style={{color: "#5A93DB"}}>here</a></u> to sign up for our Information Nights!
            </p>
            <img
              src="/images/information-night.png"
              alt="Information Night"
              className="rounded-lg w-full"
              style={{ border: `2px solid ${colors.border}` }}
            />
          </div>
        </div>
      )}
      </div>
    </div>
  );
}