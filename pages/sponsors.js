import React from 'react';

const Sponsors = ({ isDark }) => {
  const sponsorData = [
    {
      name: 'Roche',
      link: 'https://www.roche.com/',
      logo: '/images/sponsors/roche-logo.png',
    },
    // Add more sponsors here
  ];

  return (
    <section
      className="py-8 text-white"
      style={{ backgroundColor: isDark ? '#000' : '#fff' }}
    >
      <div className="max-w-5xl px-4 mx-auto text-center">
        {/* Header */}
        <h2
          className="mb-4 font-semibold text-center"
          style={{
            fontSize: 70, // desktop default
            marginTop: 50,
            color: isDark ? '#e5e7eb' : '#18181b',
            lineHeight: 1.2,
          }}
        >
          Our Sponsors
        </h2>

        {/* Mobile-only adjustments */}
        <style jsx>{`
          @media (max-width: 640px) {
            h2 {
              font-size: 36px !important; /* smaller header on mobile */
              margin-top: 30px !important; /* reduce top spacing */
            }
            .sponsor-img {
              width: 90% !important; /* make logo fit mobile */
              height: auto !important;
              margin-top: 30px !important; /* reduce spacing between logos */
            }
          }
        `}</style>

        {/* Sponsors */}
        {sponsorData.map((sponsor, index) => (
          <a
            key={index}
            href={sponsor.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={sponsor.logo}
              alt={sponsor.name}
              className="mx-auto sponsor-img"
              style={{ width: '70%', height: '70%', marginTop: 50 }} // desktop default
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
