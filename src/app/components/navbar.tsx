'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track window width to switch between mobile/desktop
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false); // close menu on desktop
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  return (
    <nav style={styles.navbar}>
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={styles.hamburger}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      )}

      <ul
        className={
          isMobile
            ? menuOpen
              ? 'mobile-open'
              : 'mobile-closed'
            : 'desktop-menu'
        }
        style={styles.navLinks}
      >
        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link href="/#awards" onClick={() => setMenuOpen(false)}>Awards</Link></li>
        <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      <style jsx>{`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          font-weight: 500;
          gap: 25px;
          display: flex;
          align-items: center;
        }
        ul.desktop-menu {
          flex-direction: row;
          position: static;
          background: transparent;
          width: auto;
          padding: 0;
        }
        ul.mobile-closed {
          display: none;
        }
        ul.mobile-open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 60px;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.85);
          padding: 20px 0;
          gap: 20px;
          align-items: center;
          z-index: 1000;
        }
        button {
          position: absolute;
          right: 20px;
          top: 12px;
          font-size: 24px;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          z-index: 1100;
        }
      `}</style>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100%',
    padding: '10px 30px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  navLinks: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontWeight: '500',
    gap: '25px',
  },
};
