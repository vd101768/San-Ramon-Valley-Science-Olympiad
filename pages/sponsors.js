import React from 'react';

const Sponsors = ({ isDark }) => {
  const sponsorData = [
    {
      name: 'Roche', // Update with the name of your first sponsor
      link: 'https://www.roche.com/', // Update with the link to the first sponsor's website
      logo: '/images/sponsors/roche-logo.png', // Update with the file path to the first sponsor's logo
    },
    // Add more sponsors here by following the same structure
  ];

  return (
    <section
      className="py-8 text-white"
      style={{ backgroundColor: isDark ? '#000' : '#fff' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="mb-4 text-3xl font-semibold" style={{ fontSize: 70, marginTop: 50, color: isDark ? '#e5e7eb' : '#18181b' }}>
          Our Sponsors
        </h2>
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
              style={{ width: '70%', height: '70%', marginTop: 50 }}
              className="mx-auto"
            />
          </a>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;
