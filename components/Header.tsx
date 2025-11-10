import React from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void }> = ({ href, children, onClick }) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="px-3 py-2 text-gray-300 transition-colors duration-300 hover:text-accent"
    >
      {children}
    </a>
  );
};

const Header: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between border-b border-gray-900 bg-black/50 backdrop-blur-lg">
          <div 
            className="flex-shrink-0"
          >
            <a href="#" className="text-xl font-bold tracking-wider text-white">
              <span className="text-accent">E</span>SEROGHENE <span className="text-accent">O</span>KOBIAH
            </a>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink href="#home" onClick={handleNavClick}>Home</NavLink>
              <NavLink href="#about" onClick={handleNavClick}>About</NavLink>
              <NavLink href="#skills" onClick={handleNavClick}>Skills</NavLink>
              <NavLink href="#work" onClick={handleNavClick}>Projects</NavLink>
              <NavLink href="#experience" onClick={handleNavClick}>Experience</NavLink>
              <NavLink href="#contact" onClick={handleNavClick}>Contact</NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;