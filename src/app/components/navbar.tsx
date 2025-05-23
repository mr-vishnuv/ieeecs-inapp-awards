'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      {/* <div style={styles.logoContainer}>
        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div> */}
      <ul style={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/#about">About</Link></li>
        <li><Link href="/#awards">Awards</Link></li>
        <li><Link href="/#contact">Contact</Link></li>
      </ul>
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
    // backgroundColor: 'rgba(255, 255, 255, 0.3)',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '25px',
    margin: 0,
    padding: 0,
    fontWeight: '500',
  },
};
