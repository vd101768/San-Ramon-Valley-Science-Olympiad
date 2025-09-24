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
            name: 'Vedanth Dala',
            img: '/images/officers/vedanth.jpg',
            desc: "Vedanth is a senior at Dougherty Valley High School. He aspires to be a physicist, and he loves spreading his passion for science to younger students. This is Vedanth's third year at SRVSO, where he is currently the Executive Director. He has previously served as Associate Director and a Build Event Officer.",
            role: "Executive Director"
          },
          {
            name: 'Neha Subramani',
            img: '/images/officers/neha.png',
            desc: "Neha is a senior at Dougherty Valley High School. She plans to work as a software engineer in the future and is excited to help SRVSO provide enriching STEM opportunities to kids. Neha is currently an Associate Director, and this is her third year with SRVSO. In the past, she has served as the Build Event Head Officer.",
            role: "Associate Director"
          },
          {
            name: 'Chhavi Bidhuri',
            img: '/images/officers/chhavi.png',
            desc: "Chhavi is a senior at Dougherty Valley High School. She is an aspiring researcher in molecular and cellular biology and her goal is to help support young, aspiring students in their exploration of STEM. Chhavi has been involved with SRVSO for four years and currently serves as a Co-Associate Director. In the past she has served as an Instant Challenge Head Officer and Instant Challenge Officer.",
            role: "Associate Director"
          },
          {
            name: 'Harshidh Ramkumar',
            img: '/images/officers/harshidh.png',
            desc: "Harshidh is a Senior at Dougherty Valley High School. He has an interest in Business and is specifically trying to go into Management. Harshidh has been a part of the SRVSO for 2 years and is currently the Build Events Head Officer. In the past, he has served as an intern and a build officer.",
            role: "Build Events Head"
          },
          {
            name: 'Srivatsa Yanamandra',
            img: '/images/officers/srivatsa.png',
            desc: "Srivatsa is a junior at Dougherty Valley High School. He is an aspiring computer scientist with a passion for bettering the community through science. This is Srivatsa’s second year with SRVSO and is currently an officer for the Build Events Committee. In the past, he has served as an intern.",
            role: "Build Events and Logistics Officer"
          },
          {
            name: 'Arnav Kavoori',
            img: '/images/officers/arnav.png',
            desc: "Arnav is a junior at Dougherty Valley High School. He wants to pursue his passion for engineering by becoming an Electrical Engineer. This is Arnav's first year at SRVSO, and he is currently an officer for the Build Events Committee. He has previously served as an intern.",
            role: "Build Events Officer"
          },
          {
            name: 'Sophia Jacob',
            img: '/images/officers/sophia.png',
            desc: "Sophia is a junior at Dougherty Valley High School. She is looking to go into the STEM field and hopes to introduce others to the field as well. This is her second year at SRVSO, and she currently serves as a Theory Head Officer. In the past, she has served as a Theory Event Officer and Intern.",
            role: "Theory Events Head"
          },
          {
            name: 'Ami Ajgaonkar',
            img: '/images/officers/ami.png',
            desc: "Ami is a sophomore at Dougherty Valley High School. She is interested in combining her passion for technology and genetics in the future, and is excited to work with SRVSO this year to inspire young minds in STEM. This is Ami's first year on the SRVSO Board, and she is currently serving as an Officer for the Theory Events Committee. In the past, she has served as an intern.",
            role: "Theory Event Officer"
          },
          {
            name: 'Krishna Sreeneel',
            img: '/images/officers/krishna.png',
            desc: "Krishna is a junior at Dougherty Valley High School. He aspires to pursue biochemical research and is passionate about bringing interest in STEM to others. This is his first year at SRVSO, and he currently serves as a Theory Officer.",
            role: "Theory Event Officer"
          },
          {
            name: 'Rishab Guntuku',
            img: '/images/officers/rishab.png',
            desc: "Rishab is a Junior at Dougherty Valley High School. He is an aspiring computer/electrical engineer passionate about giving younger STEM students more learning opportunities, especially with the emergence of AI. Rishab has been with the SRVSO for two years now and is currently the IC Head Officer. In the past, he has served as an IC Officer and Intern.",
            role: "Instant Challenge Head"
          },
          {
            name: "Aasiya Juneja",
            img: '/images/officers/aasiya.png',
            desc: "Aasiya is a sophomore at Dougherty Valley High School. She wants to go into Business and Finance. She wants to help provide students with more opportunities to grow their skills as problem solvers. This is her first year with SRVSO and she is serving as an IC officer. She has been an intern in the past.",
            role: "Instant Challenge Officer"
          },
           {
            name: "Sunny Li",
            img: '/images/officers/sunny.png',
            desc: "Sunny is a Sophomore at Dougherty Valley High School. She enjoys combining her passion for the arts with fields in STEM, hoping to promote hands-on science to younger students. Sunny served as an intern at SRVSO last year, and this is her first year serving as an Instant Challenge Officer.",
            role: "Instant Challenge Officer"
          }
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
            name: 'Vedanth Dala',
            img: '/images/officers/vedanth.jpg',
            desc: "Vedanth is a senior at Dougherty Valley High School. He aspires to be a physicist, and he loves spreading his passion for science to younger students. This is Vedanth's third year at SRVSO, where he is currently the Executive Director. He has previously served as Associate Director and a Build Event Officer.",
            role: "Executive Director"
          },
          {
            name: 'Neha Subramani',
            img: '/images/officers/neha.png',
            desc: "Neha is a senior at Dougherty Valley High School. She plans to work as a software engineer in the future and is excited to help SRVSO provide enriching STEM opportunities to kids. Neha is currently an Associate Director, and this is her third year with SRVSO. In the past, she has served as the Build Event Head Officer.",
            role: "Associate Director"
          },
          {
            name: 'Chhavi Bidhuri',
            img: '/images/officers/chhavi.png',
            desc: "Chhavi is a senior at Dougherty Valley High School. She is an aspiring researcher in molecular and cellular biology and her goal is to help support young students in their exploration of STEM. Chhavi has been involved with SRVSO for four years and currently serves as a Co-Associate Director. In the past she has served as an Instant Challenge Head Officer and Instant Challenge Officer.",
            role: "Associate Director"
          }
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
            name: 'Harshidh Ramkumar',
            img: '/images/officers/harshidh.png',
            desc: "Harshidh is a senior at Dougherty Valley High School. He has an interest in Business and is specifically trying to go into Management. Harshidh has been a part of the SRVSO for 2 years and is currently the Build Events Head Officer. In the past, he has served as an intern and a build officer.",
            role: "Build Events Head"
          },
          {
            name: 'Srivatsa Yanamandra',
            img: '/images/officers/srivatsa.png',
            desc: "Srivatsa is a junior at Dougherty Valley High School. He is an aspiring computer scientist with a passion for bettering the community through science. This is Srivatsa’s second year with SRVSO and is currently an officer for the Build Events Committee. In the past, he has served as an intern.",
            role: "Build Events and Logistics Officer"
          },
          {
            name: 'Arnav Kavoori',
            img: '/images/officers/arnav.png',
            desc: "Arnav is a junior at Dougherty Valley High School. He wants to pursue his passion for engineering by becoming an Electrical Engineer. This is Arnav's first year at SRVSO, and he is currently an officer for the Build Events Committee. He has previously served as an intern.",
            role: "Build Events Officer"
          }
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
            name: 'Sophia Jacob',
            img: '/images/officers/sophia.png',
            desc: "Sophia is a junior at Dougherty Valley High School. She is looking to go into the STEM field and hopes to introduce others to the field as well. This is her second year at SRVSO, and she currently serves as a Theory Head Officer. In the past, she has served as a Theory Event Officer and Intern.",
            role: "Theory Events Head"
          },
          {
            name: 'Ami Ajgaonkar',
            img: '/images/officers/ami.png',
            desc: "Ami is a sophomore at Dougherty Valley High School. She is interested in combining her passion for technology and genetics in the future, and is excited to work with SRVSO this year to inspire young minds in STEM. This is Ami's first year on the SRVSO Board, and she is currently serving as a Theory Events Officer.",
            role: "Theory Event Officer"
          },
          {
            name: 'Krishna Sreeneel',
            img: '/images/officers/krishna.png',
            desc: "Krishna is a junior at Dougherty Valley High School. He aspires to pursue biochemical research and is passionate about bringing interest in STEM to others. This is his first year at SRVSO, and he currently serves as a Theory Officer.",
            role: "Theory Event Officer"
          }
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
            name: 'Rishab Guntuku',
            img: '/images/officers/rishab.png',
            desc: "Rishab is a Junior at Dougherty Valley High School. He is an aspiring computer/electrical engineer passionate about giving younger STEM students more learning opportunities, especially with the emergence of AI. Rishab has been with the SRVSO for two years now and is currently the IC Head Officer. In the past, he has served as an IC Officer.",
            role: "Instant Challenge Head"
          },
          {
            name: "Aasiya Juneja",
            img: '/images/officers/aasiya.png',
            desc: "Aasiya is a sophomore at Dougherty Valley High School. She wants to go into Business and Finance. She wants to help provide students with more opportunities to grow their skills as problem solvers. This is her first year with SRVSO and she is serving as an IC officer.",
            role: "Instant Challenge Officer"
          },
          {
            name: "Sunny Li",
            img: '/images/officers/sunny.png',
            desc: "Sunny is a Sophomore at Dougherty Valley High School. She enjoys combining her passion for the arts with fields in STEM, hoping to promote hands-on science to younger students. Sunny served as an intern at SRVSO last year, and this is her first year serving as an Instant Challenge Officer.",
            role: "Instant Challenge Officer"
          }
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
            desc: "Alagu is a current medical student at Duke University School of Medicine, holds an MPhil research degree from the University of Cambridge as a Churchill Scholar, and an alumni of Baylor University where he concentrated in biochemistry, medical humanities, and business. He is a medical researcher and aspiring physician with a passion for increasing the accessibility to hands-on education in K-12 instruction. Alagu has been with the SRVSO since its beginning as our founder and currently serves as the Chairman of our Board of Directors.",
            role: "Founder and Chairman of the Board of Directors, Executive Director from 2018-2020"
          }, 
          {
            name: 'Sundar Subramanian',
            img: '/images/officers/sundar.png',
            desc: "Sundar is currently an undergraduate student at UC Berkeley, studying Applied Mathematics and Computer Science. He aspires to work at the intersection of technology and finance and has conducted research in stochastic processes. Sundar has been involved with SRVSO since its founding in 2018, serving in various roles—from Build Events Chair to Executive Director. He now serves as President of the Board of Directors.",
            role: "Founding Member, Executive Director 2024-2025 and 2023-2024"
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
        <span role="img" aria-label="leadership" className="inline-block text-xl">🧑‍💼</span>
      </span>
    );
  }
  return null;
}

export default function BoardOfOfficers() {
  const [tab, setTab] = useState('all');
  const tabData = OFFICERS.find(t => t.key === tab) || {sections: []};
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
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#e5e7eb" : "#18181b";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  const colors = {
    background: isDark ? "#000" : "#fff",
    text: isDark ? "#e5e7eb" : "#18181b",
    cardBg: isDark ? "#18181b" : "#f9fafb",
    cardText: isDark ? "#e5e7eb" : "#18181b",
    tabText: isDark ? "#e5e7eb" : "#374151",
    cardSubText: isDark ? "#a1a1aa" : "#374151",
    icon: isDark ? "#fff" : "#166534",
    border: "#4ade80",
    cardBorder: isDark ? "#27272a" : "#e5e7eb",
    testimonialsBg: isDark ? "#000" : "#fff",
    testimonialsText: isDark ? "#e5e7eb" : "#18181b",
    testimonialsSubText: isDark ? "#a1a1aa" : "#374151",
    testimonialsCardBg: isDark ? "#232326" : "#f3f4f6",
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <>
      <button
        onClick={toggleTheme}
        className="fixed z-50 p-2 rounded-full shadow top-6 right-8 "
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

        .officer-card:hover { transform: scale(1.01); }

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
          .tabs-row::-webkit-scrollbar { display: none; } /* hide webkit scrollbar */

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
      <h1 className="pt-8 pb-2 text-5xl font-bold text-center text--400" style={{color: colors.text}}>Board of Officers</h1>
      <div className="flex justify-center w-full pt-8 pb-2 bg-black" style={{backgroundColor: colors.background}}>
        {/* changed this inner div to use .tabs-row so mobile can scroll */}
        <div className="tabs-row" >
          {TABS.map(t => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-5 py-2 rounded-t-lg font-medium transition-colors`}
              style={{
                borderBottom: tab === t.key ?  `3px solid ${isDark ? "#4ade80" : "#166534"}` : '3px solid transparent',
                outline: 'none',
                backgroundColor: colors.cardBg,
                color: tab === t.key ? (isDark ? "#4ade80" : "#166534") : colors.tabText
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Page background */}
      <div style={{backgroundColor: colors.background}}>
        <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
          
          {tabData.sections.map(section => (
            <div key={section.title} className="mb-12">
              <em><h2 className="mb-6 text-3xl font-bold text-center text-green-300" style={{marginTop: 20, color: isDark ? "#4ade80" : "#166534"}} >{section.title}</h2></em>
              
              <div style={{alignItems:"center", justifyContent:"center", display:"flex"}}>
                <div className="officers-grid">
                  {section.members.map((member, i) => (
                    <div
                      key={member.name + i}
                      className="officer-card bg-gray-900 rounded-xl shadow-lg flex flex-col items-center p-8 transition hover:scale-[1.01]"
                      style={{
                        backgroundColor: colors.cardBg,
                        minHeight: '400px',
                        color: colors.cardText,
                        boxShadow: 'var(--tw-shadow, 0 10px 15px -3px rgba(0,0,0,0.1))',
                        border: `1px solid ${isDark ? '#27272a' : '#e5e7eb'}`
                      }}
                    >
                      <div className="flex items-center justify-center mb-4 overflow-hidden officer-img rounded-xl" style={{width: 144, height: 144, border: `2px solid ${isDark ? "#4ade80" : "#166534"}`}}>
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
                      <div className="mb-1 text-2xl font-medium text-center text-green-400" style={{color: isDark ? "#4ade80" : "#166534"}}>{member.name}</div>
                      {/* Role below name */}
                      {member.role && (
                        <div className="mb-2 text-sm italic text-center text-gray-400" style={{color: colors.cardSubText}}>{member.role}</div>
                      )}
                      {member.desc && (
                        <div className="mt-2 text-sm leading-relaxed text-center" style={{color: colors.cardSubText, maxWidth: '280px'}}>{member.desc}</div>
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
