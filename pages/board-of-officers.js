import Head from 'next/head';
import { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

// Tab definitions
const TABS = [
  { key: 'all', label: 'All Members' },
  { key: 'executivedivision', label: 'Executive Division' },
  { key: 'buildeventsdivision', label: 'Build Events Division' },
  { key: 'theoryeventsdivision', label: 'Theory Events Division' },
  { key: 'instantchallengedivision', label: 'Instant Challenge Division' },
  { key: 'boardofdirectors', label: 'Board of Directors' },
];

// Officer data (grouped by committee/role)
const OFFICERS = [
  {
    key: 'all',
    sections: [
      {
        title: 'Leadership',
        members: [
          {
            name: 'Rishab Guntuku',
            img: '/images/officers/rishab.png',
            desc: 'Rishab is a senior at Dougherty Valley High School. He is an aspiring computer/electrical engineer passionate about giving younger STEM students more learning opportunities, especially with the emergence of AI. Rishab has been with the SRVSO for three years now and is currently a Co-Executive Director. In the past, he has served as an IC Head Officer.',
            role: 'Co-Executive Director',
          },
          {
            name: 'Srivatsa Yanamandra',
            img: '/images/officers/srivatsa.png',
            desc: 'Srivatsa is a senior at Dougherty Valley High School. He is an aspiring ML researcher with an interest in mechanistic interpretability and AI alignment.This is Srivatsa’s third year with SRVSO and he is currently a Co-Executive Director. In the past, he has served as an Build Officer.',
            role: 'Co-Executive Director',
          },
          {
            name: 'Aasiya Juneja',
            img: '/images/officers/aasiya.png',
            desc: 'Aasiya is a junior at Dougherty Valley High School. In the future, she hopes to combine her passion for business and data science. She wants to provide students with more opportunities to grow their skills as critical thinkers. This is her second year and she is currently an Associate Director. In the past, she has served as an IC officer.',
            role: 'Associate Director',
          },
          {
            name: 'Krishna Sreeneel',
            img: '/images/officers/krishna.png',
            desc: 'Krishna is a senior at Dougherty Valley High School. He aspires to pursue neuroscience and behavioral science research and is passionate about bringing interest in STEM to others. This is his second year at SRVSO, and he currently serves as a Co-Associate Director. In the past he has served as a Theory Officer.',
            role: 'Associate Director',
          },
          {
            name: 'Arnav Kavoori',
            img: '/images/officers/arnav.png',
            desc: "Arnav is a senior at Dougherty Valley High school. He wants to pursue his passion for engineering by becoming an Electrical Engineer. This is Arnav's second year at SRVSO and he is currently the Build Events Head Officer. In the past, he has served as an intern and a build officer.",
            role: 'Build Events Head',
          },
          {
            name: 'Ishita Jain',
            img: '/images/officers/ishita.png',
            desc: 'Ishita is a junior at Dougherty Valley High School. She is exploring the STEM field and hopes to share her experiences with others in the field as well. This is her first year on the SRVSO board, and she currently serves as an Officer for the Build Events Committee. In the past, she has served as an Intern.',
            role: 'Build Events Officer',
          },
          {
            name: 'Vanshikaa Anand',
            img: '/images/officers/vanshikaa.png',
            desc: 'Vanshikaa is a junior at Dougherty Valley High School. She is passionate about healthcare and hopes to pursue a career in dentistry. She is excited to help SRVSO provide younger students with hands-on STEM opportunities. This is her first year at SRVSO, and she currently serves as a Build Events Officer.',
            role: 'Build Events Officer',
          },
          {
            name: 'Ami Ajgaonkar',
            img: '/images/officers/ami.png',
            desc: 'Ami is a junior at Dougherty Valley High School. She is interested in pursuing a career in STEM, particularly in fields involving technology and science, and is passionate about inspiring younger students to explore science and problem solving. This is Ami’s second year with SRVSO, and she currently serves as a Theory Events Head Officer. In the past, she has served as a Theory Officer.',
            role: 'Theory Events Head',
          },
          {
            name: 'Aashika Cheruvu',
            img: '/images/officers/aashika.png',
            desc: 'Aashika is a sophomore at Dougherty Valley High School, and an aspiring physician with a passion for neuroscience and understanding the brain. She is especially passionate about expanding access to meaningful scientific opportunities for youth and collaborating to make those opportunities possible. This is Aashika’s first year with SRVSO, where she currently serves as a Theory Events Officer.',
            role: 'Theory Events Officer',
          },
          {
            name: 'Harshini Elamparithi',
            img: '/images/officers/harshini.png',
            desc: 'Harshini is a junior at Dougherty Valley High School. She aspires to be a biomedical engineer and is excited to share her passion for STEM. This is her first year at SRVSO, and she currently serves as a Theory Events Officer. In the past, she served as an intern.',
            role: 'Theory Events Officer',
          },
          {
            name: 'Sunny Li',
            img: '/images/officers/sunny.png',
            desc: 'Sunny is a Junior from Dougherty Valley High School. She wants to pursue a career in healthcare, and her goal is to combine creativity with STEM to promote hands-on science to younger students. Sunny has been with SRVSO for two years now and she is currently the IC Head Officer. In the past, she has served as an intern as well as an IC Officer.',
            role: 'Instant Challenge Head',
          },
          {
            name: 'Grace Sehgal',
            img: '/images/officers/grace.png',
            desc: 'Grace is a senior at Dougherty Valley High School who is interested in the intersection of computer science, engineering, and problem-solving. Through her involvement with SRVSO, she hopes to contribute to an environment where students can explore STEM in an engaging and meaningful way. This is Grace’s first year with SRVSO, and she currently serves as an IC Event Officer.',
            role: 'Instant Challenge Officer',
          },
          {
            name: 'Vihaan Choudhary',
            img: '/images/officers/vihaan.png',
            desc: 'Vihaan is a junior at Dougherty Valley High School. He aspires to work in biomedical research and is passionate about getting others involved in science. This is Vihaan’s first year with SRVSO, and he currently serves as an Instant Challenge Officer. He has served as an intern in the past.',
            role: 'Instant Challenge Officer',
          },
          {
            name: 'Sophia Jacob',
            img: '/images/officers/sophia.png',
            desc: 'Sophia is a senior at Dougherty Valley High School. She is looking to go into data science and hopes to introduce others to the STEM field as well. This is her third year at SRVSO and she currently serves as the Logistics Officer. In the past, she has served as the Theory Head Officer.',
            role: 'Logistics Officer',
          },
        ],
      },
      // ...add more sections as needed...
    ],
  },
  // Example for other tabs (fill in as needed)
  {
    key: 'executivedivision',
    sections: [
      {
        title: 'Executive Division',
        members: [
          {
            name: 'Rishab Guntuku',
            img: '/images/officers/rishab.png',
            desc: 'Rishab is a senior at Dougherty Valley High School. He is an aspiring computer/electrical engineer passionate about giving younger STEM students more learning opportunities, especially with the emergence of AI. Rishab has been with the SRVSO for three years now and is currently a Co-Executive Director. In the past, he has served as an IC Head Officer.',
            role: 'Co-Executive Director',
          },
          {
            name: 'Srivatsa Yanamandra',
            img: '/images/officers/srivatsa.png',
            desc: 'Srivatsa is a senior at Dougherty Valley High School. He is an aspiring ML researcher with an interest in mechanistic interpretability and AI alignment. This is Srivatsa’s third year with SRVSO and he is currently a Co-Executive Director. In the past, he has served as an Build Officer.',
            role: 'Co-Executive Director',
          },
          {
            name: 'Aasiya Juneja',
            img: '/images/officers/aasiya.png',
            desc: 'Aasiya is a junior at Dougherty Valley High School. In the future, she hopes to combine her passion for business and data science. She wants to provide students with more opportunities to grow their skills as critical thinkers. This is her second year and she is currently an Associate Director. In the past, she has served as an IC officer.',
            role: 'Associate Director',
          },
          {
            name: 'Krishna Sreeneel',
            img: '/images/officers/krishna.png',
            desc: 'Krishna is a senior at Dougherty Valley High School. He aspires to pursue neuroscience and behavioral science research and is passionate about bringing interest in STEM to others. This is his second year at SRVSO, and he currently serves as a Co-Associate Director. In the past he has served as a Theory Officer.',
            role: 'Associate Director',
          },
        ],
      },
    ],
  },
  {
    key: 'buildeventsdivision',
    sections: [
      {
        title: 'Build Events Division',
        members: [
          {
            name: 'Arnav Kavoori',
            img: '/images/officers/arnav.png',
            desc: "Arnav is a senior at Dougherty Valley High school. He wants to pursue his passion for engineering by becoming an Electrical Engineer. This is Arnav's second year at SRVSO and he is currently the Build Events Head Officer. In the past, he has served as an intern and a build officer.",
            role: 'Build Events Head',
          },
          {
            name: 'Ishita Jain',
            img: '/images/officers/ishita.png',
            desc: 'Ishita is a junior at Dougherty Valley High School. She is exploring the STEM field and hopes to share her experiences with others in the field as well. This is her first year on the SRVSO board, and she currently serves as an Officer for the Build Events Committee. In the past, she has served as an Intern.',
            role: 'Build Events Officer',
          },
          {
            name: 'Vanshikaa Anand',
            img: '/images/officers/vanshikaa.png',
            desc: 'Vanshikaa is a junior at Dougherty Valley High School. She is passionate about healthcare and hopes to pursue a career in dentistry. She is excited to help SRVSO provide younger students with hands-on STEM opportunities. This is her first year at SRVSO, and she currently serves as a Build Events Officer.',
            role: 'Build Events Officer',
          },
        ],
      },
    ],
  },
  {
    key: 'theoryeventsdivision',
    sections: [
      {
        title: 'Theory Events Division',
        members: [
          {
            name: 'Ami Ajgaonkar',
            img: '/images/officers/ami.png',
            desc: 'Ami is a junior at Dougherty Valley High School. She is interested in pursuing a career in STEM, particularly in fields involving technology and science, and is passionate about inspiring younger students to explore science and problem solving. This is Ami’s second year with SRVSO, and she currently serves as a Theory Events Head Officer. In the past, she has served as a Theory Officer.',
            role: 'Theory Events Head',
          },
          {
            name: 'Aashika Cheruvu',
            img: '/images/officers/aashika.png',
            desc: 'Aashika is a sophomore at Dougherty Valley High School, and an aspiring physician with a passion for neuroscience and understanding the brain. She is especially passionate about expanding access to meaningful scientific opportunities for youth and collaborating to make those opportunities possible. This is Aashika’s first year with SRVSO, where she currently serves as a Theory Events Officer.',
            role: 'Theory Events Officer',
          },
          {
            name: 'Harshini Elamparithi',
            img: '/images/officers/harshini.png',
            desc: 'Harshini is a junior at Dougherty Valley High School. She aspires to be a biomedical engineer and is excited to share her passion for STEM. This is her first year at SRVSO, and she currently serves as a Theory Events Officer. In the past, she served as an intern.',
            role: 'Theory Events Officer',
          },
        ],
      },
    ],
  },
  {
    key: 'instantchallengedivision',
    sections: [
      {
        title: 'Instant Challenge Division',
        members: [
          {
            name: 'Sunny Li',
            img: '/images/officers/sunny.png',
            desc: 'Sunny is a Junior from Dougherty Valley High School. She wants to pursue a career in healthcare, and her goal is to combine creativity with STEM to promote hands-on science to younger students. Sunny has been with SRVSO for two years now and she is currently the IC Head Officer. In the past, she has served as an intern as well as an IC Officer.',
            role: 'Instant Challenge Head',
          },
          {
            name: 'Grace Sehgal',
            img: '/images/officers/grace.png',
            desc: 'Grace is a senior at Dougherty Valley High School who is interested in the intersection of computer science, engineering, and problem-solving. Through her involvement with SRVSO, she hopes to contribute to an environment where students can explore STEM in an engaging and meaningful way. This is Grace’s first year with SRVSO, and she currently serves as an IC Event Officer.',
            role: 'Instant Challenge Officer',
          },
          {
            name: 'Vihaan Choudhary',
            img: '/images/officers/vihaan.png',
            desc: 'Vihaan is a junior at Dougherty Valley High School. He aspires to work in biomedical research and is passionate about getting others involved in science. This is Vihaan’s first year with SRVSO, and he currently serves as an Instant Challenge Officer. He has served as an intern in the past.',
            role: 'Instant Challenge Officer',
          },
        ],
      },
    ],
  },
  {
    key: 'boardofdirectors',
    sections: [
      {
        title: 'Board of Directors',
        members: [
          {
            name: 'Alagu Subramanian',
            img: '/images/officers/alagu.png',
            desc: 'Alagu is a current medical student at Duke University School of Medicine, holds an MPhil research degree from the University of Cambridge as a Churchill Scholar, and an alumni of Baylor University where he concentrated in biochemistry, medical humanities, and business. He is a medical researcher and aspiring physician with a passion for increasing the accessibility to hands-on education in K-12 instruction. Alagu has been with the SRVSO since its beginning as our founder and currently serves as the Chairman of our Board of Directors.',
            role: 'Founder and Chairman of the Board of Directors, Executive Director from 2018-2020',
          },
          {
            name: 'Sundar Subramanian',
            img: '/images/officers/sundar.png',
            desc: 'Sundar is currently an undergraduate student at UC Berkeley, studying Applied Mathematics and Computer Science. He aspires to work at the intersection of technology and finance and has conducted research in stochastic processes. Sundar has been involved with SRVSO since its founding in 2018, serving in various roles—from Build Events Chair to Executive Director. He now serves as President of the Board of Directors.',
            role: 'Founding Member and President of the Board of Directors, Executive Director from 2023-2025',
          },
          {
            name: 'Arush Jain',
            img: '/images/officers/arush.jpg',
            desc: 'Arush is a current undergraduate student at UC Berkeley, studying Electrical Engineering and Computer Science. He is interested in the intersection of artificial intelligence and finance and is currently working as a software engineer intern at Visa. Arush has been involved with SRVSO since 2021, previously serving as an Executive Director and Associate Director. He is currently a member of the Board of Directors.',
            role: 'Executive Director from 2024-2025',
          },
        ],
      },
    ],
  },
];

// Icon mapping
function OfficerIcon({ type }) {
  if (type === 'lead') {
    return (
      <span className="block mt-2 mb-1 text-center">
        <span
          role="img"
          aria-label="leadership"
          className="inline-block text-xl"
        >
          🧑‍💼
        </span>
      </span>
    );
  }
  return null;
}

export default function BoardOfOfficers() {
  const [tab, setTab] = useState('all');
  const tabData = OFFICERS.find((t) => t.key === tab) || { sections: [] };
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

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? '#000' : '#fff';
    document.body.style.color = isDark ? '#e5e7eb' : '#18181b';
    return () => {
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [isDark]);

  const colors = {
    background: isDark ? '#000' : '#fff',
    text: isDark ? '#e5e7eb' : '#18181b',
    cardBg: isDark ? '#18181b' : '#f9fafb',
    cardText: isDark ? '#e5e7eb' : '#18181b',
    tabText: isDark ? '#e5e7eb' : '#374151',
    cardSubText: isDark ? '#a1a1aa' : '#374151',
    icon: isDark ? '#fff' : '#166534',
    border: '#4ade80',
    cardBorder: isDark ? '#27272a' : '#e5e7eb',
    testimonialsBg: isDark ? '#000' : '#fff',
    testimonialsText: isDark ? '#e5e7eb' : '#18181b',
    testimonialsSubText: isDark ? '#a1a1aa' : '#374151',
    testimonialsCardBg: isDark ? '#232326' : '#f3f4f6',
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed z-50 p-2 rounded-full shadow top-6 right-8 sm:absolute sm:top-5 sm:right-20 sm:p-1"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FaSun className="text-xl text-white" />
        ) : (
          <FaMoon className="text-xl text-gray-800" />
        )}
      </button>

      <Head>
        <title>Board of Officers — SRVSO</title>
        <meta
          name="description"
          content="The board that makes SRVSO possible."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <style jsx>{`
        .officers-grid {
          display: grid;
          gap: 2rem;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          max-width: 1200px;
          width: 100%;
          padding: 0 20px;
        }

        .officer-card {
          width: 320px;
          max-width: 100%;
          min-height: 400px;
          border-radius: 12px;
          padding: 2rem;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: center;
          transition: transform 150ms ease;
        }

        .officer-card:hover {
          transform: scale(1.01);
        }

        .officer-img {
          width: 144px;
          height: 144px;
          border-radius: 16px;
          overflow: hidden;
          display: inline-block;
          box-sizing: border-box;
          flex: 0 0 auto;
        }
        .officer-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Tabs row scroll behavior (mobile only) */
        .tabs-row {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        /* prevent buttons from shrinking when the row scrolls */
        .tabs-row button {
          flex: 0 0 auto;
          white-space: nowrap;
        }

        @media (max-width: 640px) {
          .officers-grid {
            grid-template-columns: 1fr;
            padding: 0 12px;
          }
          .officer-card {
            width: 320px;
            margin: 0 auto;
          }
          .officer-img {
            width: 144px;
            height: 144px;
          }

          /* Enable horizontal scrolling of the tabs row */
          .tabs-row {
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            padding: 0 12px;
            gap: 0.75rem;
            scroll-padding: 12px;
            scroll-snap-type: x mandatory;
          }
          .tabs-row button {
            scroll-snap-align: start;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }
          .tabs-row::-webkit-scrollbar {
            display: none;
          } /* hide webkit scrollbar */

          /* Reduce top padding so the title sits a bit higher on mobile */
          h1 {
            padding-top: 0.5rem !important; /* smaller than the desktop pt-8 */
            padding-bottom: 0.25rem !important;
            font-size: 1.75rem !important; /* slightly smaller than text-5xl */
            line-height: 1.1;
          }

          /* Slightly smaller section headers on mobile */
          h2 {
            font-size: 1.25rem !important; /* slightly smaller than text-3xl */
            margin-top: 12px;
            margin-bottom: 8px;
          }
        }
      `}</style>

      {/* Tabs */}
      <h1
        className="pt-8 pb-2 text-5xl font-bold text-center text--400"
        style={{ color: colors.text }}
      >
        Board of Officers
      </h1>
      <div
        className="flex justify-center w-full pt-8 pb-2 bg-black"
        style={{ backgroundColor: colors.background }}
      >
        {/* changed this inner div to use .tabs-row so mobile can scroll */}
        <div className="tabs-row">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="px-5 py-2 font-medium transition-colors rounded-t-lg"
              style={{
                borderBottom:
                  tab === t.key
                    ? `3px solid ${isDark ? '#4ade80' : '#166534'}`
                    : '3px solid transparent',
                outline: 'none',
                backgroundColor: colors.cardBg,
                color:
                  tab === t.key
                    ? isDark
                      ? '#4ade80'
                      : '#166534'
                    : colors.tabText,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Page background */}
      <div style={{ backgroundColor: colors.background }}>
        <div
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          {tabData.sections.map((section) => (
            <div key={section.title} className="mb-12">
              <em>
                <h2
                  className="mb-6 text-3xl font-bold text-center text-green-300"
                  style={{
                    marginTop: 20,
                    color: isDark ? '#4ade80' : '#166534',
                  }}
                >
                  {section.title}
                </h2>
              </em>

              <div
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <div className="officers-grid">
                  {section.members.map((member, i) => (
                    <div
                      key={member.name + i}
                      className="officer-card bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-8 transition hover:scale-[1.01]"
                      style={{
                        backgroundColor: colors.cardBg,
                        minHeight: '400px',
                        color: colors.cardText,
                        boxShadow:
                          'var(--tw-shadow, 0 10px 15px -3px rgba(0,0,0,0.1))',
                        border: `1px solid ${isDark ? '#27272a' : '#e5e7eb'}`,
                      }}
                    >
                      <div
                        className="flex items-center justify-center mb-4 overflow-hidden officer-img rounded-xl"
                        style={{
                          width: 144,
                          height: 144,
                          border: `2px solid ${isDark ? '#4ade80' : '#166534'}`,
                        }}
                      >
                        <img
                          src={member.img}
                          alt={member.name}
                          className="object-cover w-full h-full"
                          style={{
                            borderRadius: 16,
                          }}
                        />
                      </div>
                      <OfficerIcon type={member.icon} />
                      <div
                        className="mb-1 text-2xl font-medium text-center text-green-400"
                        style={{ color: isDark ? '#4ade80' : '#166534' }}
                      >
                        {member.name}
                      </div>
                      {/* Role below name */}
                      {member.role && (
                        <div
                          className="mb-2 text-sm italic text-center text-gray-400"
                          style={{ color: colors.cardSubText }}
                        >
                          {member.role}
                        </div>
                      )}
                      {member.desc && (
                        <div
                          className="mt-2 text-sm leading-relaxed text-center"
                          style={{
                            color: colors.cardSubText,
                            maxWidth: '280px',
                          }}
                        >
                          {member.desc}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
