import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSun, FaMoon } from 'react-icons/fa';

const Resource = ({ title, url, style }) => (
  <div className="flex flex-col w-full mt-4 overflow-hidden h-96">
    <h4 className="mb-2 ml-3 text-lg" style={{...style}}>{title}</h4>
    <iframe
      title={title}
      src={url}
      className="flex-grow"
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture"
      allowFullScreen
    />
    <a
      href={url}
      target="_blank"
      className="mt-2 text-sm text-center underline"
      rel="noopener noreferrer"
    >
      External link
    </a>
  </div>
);

const Dropdown = ({ title, isOpen, onClick, children, style}) => (
  <tr>
    <td colSpan="2" className="p-4 border border-gray-300" >
      <h3 className="text-lg font-bold cursor-pointer" onClick={onClick} style={{...style }}>
        {title} {isOpen ? '▲' : '▼'}
      </h3>
      {isOpen && <div className="flex flex-col mt-4">{children}</div>}
    </td>
  </tr>
);

const InfoNight = () => {
  const [selectedDropdown, setSelectedDropdown] = useState(null);

  const handleDropdownChange = (dropdown) => {
    setSelectedDropdown((prevDropdown) =>
      prevDropdown === dropdown ? null : dropdown
    );
  };

  const isDropdownOpen = (dropdown) => selectedDropdown === dropdown;

  const [isDark, setIsDark] = useState(false);

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
    document.body.style.backgroundColor = isDark ? "#000" : "#fff";
    document.body.style.color = isDark ? "#e5e7eb" : "#18181b";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [isDark]);

  // Theme toggle handler
  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div>
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
      <Head>
        <title> Relevant Resources — SRVSO</title>
        <meta
          name="description"
          content="Here's where you can find all the relevant resources for SRVSO 2024-25"
        />
      </Head>

      <div className="mb-12">
        <h1 className="mb-4" style={{color: isDark ? "#fff" : "#000", alignSelf: "center", justifyContent: "center", display: "flex"}}>Resources</h1>
        <p className="text-lg" style={{alignSelf: "center", justifyContent: "center", display: "flex"}}>
          Here's where you can find all the relevant resources for SRVSO 2025-26
        </p>
        <p className="mt-7 text-md" style={{textAlign: "center"}}>
          Please note that SRVSO reserves the right to make changes to these
          resources. In the event of changes, coaches will be notified.
        </p>
      </div>

      <table className="w-full mb-12 border border-collapse border-gray-300">
        <tbody>
          <Dropdown
            title="Coach Seminar Resources"
            isOpen={isDropdownOpen('coachSeminars')}
            onClick={() => handleDropdownChange('coachSeminars')}
            style={{ color: isDark ? '#fff' : '#000' }}>
            <Resource
              title="Pre-Olympiad Logistics Meeting Recording"
              url="https://www.youtube.com/watch?v=2AUfNh94DHA"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Pre-Olympiad Logistics Meeting Slideshow"
              url="https://docs.google.com/presentation/d/1bTBVHahOFCrlyrDC6aEQbnn_26N5nkg58GOX8u-rn2A/edit?usp=sharing"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="FAQ & Coach Updates Meeting Recording"
              url="https://www.youtube.com/watch?v=ltlNetiM0HM"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="FAQ & Coach Updates Meeting Slideshow"
              url="https://docs.google.com/presentation/d/17x8bMlJ0ITuIRCLMIGEZjknErmJUfs0UdBYluDEtlX0/edit?usp=sharing"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            {/* <Resource
              title="Coach Seminar Recording"
              url="https://youtu.be/VC91kNpkWfA"
            />
            <Resource
              title="Coach Seminar Slideshow"
              url="https://docs.google.com/presentation/d/1vMHRZzEu2xw9pe_a0qhr1TNiGAybyhoHaUJM7crbpFQ/edit#slide=id.p"
            /> */}
          </Dropdown>
          <Dropdown
            title="General Olympiad Resources"
            isOpen={isDropdownOpen('generalResources')}
            onClick={() => handleDropdownChange('generalResources')}
            style={{ color: isDark ? '#fff' : '#000' }}
          >
            <Resource
              title="Ongoing Revisions Document"
              url="https://docs.google.com/document/d/12X718Gz_cq1JlPig9cZaIK0j2u7zxO1e_3hoFl-sg0I/edit?usp=sharing"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Preliminary Event Overview & Master Team Schedule"
              url="https://docs.google.com/spreadsheets/d/1qdNMBuYarUpvKMX_aguzJqUfVO5J_G_44J1NGZ-tq44/edit?usp=sharing"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
          </Dropdown>
          <Dropdown
            title="Build Event Resources"
            isOpen={isDropdownOpen('build')}
            onClick={() => handleDropdownChange('build')}
            style={{ color: isDark ? '#fff' : '#000' }}
          >
            <Resource
              title="Build Event Procedures"
              url="https://docs.google.com/document/d/1s0Uae24bHKJWMPrjrvEMrV7Eecj2zAQyOo1GljKF5kY/edit?tab=t.0"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Build Event Walkthrough Steps"
              url="https://docs.google.com/document/d/18Q0kbrqp9fwWVCaF3JMzeMEwoA-5GVUb3ZhWtYex_Uc/edit?usp=sharing"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Build Binder Layout"
              url="https://docs.google.com/document/d/1E71PVyiMQ9WHKBvtvKV_0KG4rQ_j-5bBO93WSM815Nw/edit?tab=t.0"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Example Build Binder"
              url="https://docs.google.com/document/d/10kYKd-bEw8MuJ4XK4QHmtZlG248d6M1sRcNQw5wjkgs/edit?usp=sharing"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
          </Dropdown>

          <Dropdown
            title="Theory Event Resources"
            isOpen={isDropdownOpen('theoryWorkUps')}
            onClick={() => handleDropdownChange('theoryWorkUps')}
            style={{ color: isDark ? '#fff' : '#000' }}
          >
            <Resource
              title="Theory Work Ups 2024-25"
              url="https://docs.google.com/document/d/1eIpQWulA_ZYRrrUqRTUVxcaDBs_aiKndI68_6tp2fNA/edit?tab=t.0"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
          </Dropdown>

          <Dropdown
            title="Instant Challenge Resources"
            isOpen={isDropdownOpen('challenges')}
            onClick={() => handleDropdownChange('challenges')}
            style={{ color: isDark ? '#fff' : '#000' }}
          >
            <Resource
              title="Instant Challenge Walkthrough Steps"
              url="https://docs.google.com/document/d/1NtcIdsybGCIAGmxrScbx5fcs6MN_ZbqvvTklz2M-oKI/edit?tab=t.0"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Tower of Terror Practice Event"
              url="https://docs.google.com/document/d/1Q_Lsb5fLW63MvTs22X2RCS4PCN6bQNwYw5ZiPzoifyg/edit?tab=t.0"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
            <Resource
              title="Float-A-Boat Practice Event"
              url="https://docs.google.com/document/d/1DabNoRNTxIBtJioa0DIcG9x4dF1_BiK0uvx4Wl2YRBU/edit?tab=t.0"
              style={{color: isDark ? '#4ade80' : '#166534'}}
            />
          </Dropdown>
        </tbody>
      </table>
    </div>
  );
};

export default InfoNight;
