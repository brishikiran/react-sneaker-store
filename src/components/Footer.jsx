import React from 'react';

const Footer = ({ FooterAPI: { titles, links } }) => {
  return (
    <footer className="bg-gray-900 pt-7 pb-5 text-gray-200">
      <div className="nike-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {titles.map((val, i) => (
            <div key={i} className="text-lg md:text-base">
              <h1 className="uppercase font-semibold">{val.title}</h1>
              <ul className="mt-2">
                {links[i].map((link, j) => (
                  <li key={j} className="text-sm">
                    <a href={link.url} className="hover:text-gray-300">{link.text}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-5 text-center">
          <p className="text-sm">Copyright <span className="font-bold">&copy;</span> All Rights Reserved 2024 <span className="font-semibold">Rishi Kiran</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
