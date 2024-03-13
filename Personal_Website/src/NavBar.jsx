import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

function Navbar() {

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="social-links">
        <a className='social-link' href="www.linkedin.com/in/jakobglinz">LinkedIn</a>
        <a className='social-link' href="https://github.com/JakobGlinz">GitHub</a>
        <a className='social-link' href="https://www.instagram.com/jakobglinz_">Instagram</a>
      </div>
      <div className="nav-links">
        <Link className='links' activeClass="active" to="aboutme" spy={true} smooth={true} offset={-70} duration={500}>
            About Me
          </Link>
          <Link className='links' activeClass="active" to="techstack" spy={true} smooth={true} offset={-70} duration={500}>
            Tech Stack
          </Link>
          <Link className='links' activeClass="active" to="roadmap" spy={true} smooth={true} offset={-70} duration={500}>
            Roadmap
          </Link>
          <Link className='links' activeClass="active" to="contactMe" spy={true} smooth={true} offset={-70} duration={500}>
            Contact Me
          </Link>
      </div>
    </nav>
  );
}

export default Navbar;