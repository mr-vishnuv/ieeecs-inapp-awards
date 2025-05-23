export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
         <div style={styles.logoRow}>
            <div style={styles.logoContainer}>
              <img src="/logo.png" alt="IEEE CS Logo" style={styles.logo} />
            </div>
            <div style={styles.logoContainer}>
              <img src="/inapp-logo1.png" alt="InApp Logo" style={styles.logo2} />
            </div>
         </div>

          {/* <img src="/heading.png" alt="Heading Text" style={styles.headingImage} /> */}
       
        <h1 style={styles.heading}>InApp - IEEE CS Student Project Awards</h1>
        <p style={styles.subheading}>Inspiring New Solutions, Propelling Innovation, Realizing Excellence</p>
       
        <a
          href="https://your-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Apply Now
        </a>
      </section>
      

<section style={styles.awardsSection} id="about">
  <div style={styles.sectionHeader}>
    <h2 style={styles.sectionHeaderTitle}>About</h2>
  </div>

  <div style={styles.cardsGrid}>
    {/* Awards Card */}
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.iconTitle}>
          <div style={styles.iconCircle}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4B5563" style={styles.svgIcon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 1 0-7.18 0L6 21l6-3 6 3-2.41-6.63z" />
            </svg>
        </div>
          <h3>IEEE CS - InApp Awards</h3>
        </div>
      </div>
      <div>
        <p style={styles.cardContentP}>
          The objective behind the establishment of CSI-InApp Awards is to provide a challenging and creative ground for students to showcase their skills in software development.
        </p>
        <p style={styles.cardContentP}>
          For the 14th edition, we're partnering with Kerala Technological University to invite students internationally to submit their projects for evaluation by industry pioneers.
        </p>
      </div>
    </div>

    {/* IEEE Computer Society Kerala Chapter */}
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.iconTitle}>
          <div style={styles.iconCircle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4B5563" style={styles.svgIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.25a8.25 8.25 0 0115.001 0" />
        </svg>
      </div>
          <h3>IEEE Computer Society</h3>
        </div>
      </div>
      <div>
        <p style={styles.cardContentP}>
          The IEEE Computer Society Kerala Chapter is a professional organization promoting the advancement of computer science and engineering in Kerala.
        </p>
        <p style={styles.cardContentP}>
          We organize technical talks, workshops, seminars, and conferences while supporting students through chapters, competitions, and scholarships.
        </p>
      </div>
    </div>

    {/* InApp Technologies */}
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <div style={styles.iconTitle}>
           <div style={styles.iconCircle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#4B5563" style={styles.svgIcon}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 20.25h18M4.5 3.75h15a.75.75 0 01.75.75v15.75H3.75V4.5a.75.75 0 01.75-.75zM8.25 9h.008v.008H8.25V9zM8.25 12h.008v.008H8.25V12zM8.25 15h.008v.008H8.25V15zM11.25 9h.008v.008H11.25V9zM11.25 12h.008v.008H11.25V12zM11.25 15h.008v.008H11.25V15zM14.25 9h.008v.008H14.25V9zM14.25 12h.008v.008H14.25V12zM14.25 15h.008v.008H14.25V15z" />
        </svg>
      </div>
          <h3>InApp Technologies</h3>
        </div>
      </div>
      <div>
        <p style={styles.cardContentP}>
          Founded in 2000, InApp is a technology services company committed to excellence with a passionate team focused on delivering value.
        </p>
        <p style={styles.cardContentP}>
          With offices in USA, India, Japan and a 200+ strong team, InApp serves clients ranging from Fortune 500 companies to SMBs.
        </p>
      </div>
    </div>
  </div>
</section>


<section id="awards" style={styles.awardsSection}>
  <div style={styles.sectionHeader}>
    <h2 style={styles.sectionHeaderTitle}>Awards</h2>
  </div>

  {/* Award Rules */}
  <div style={styles.textBlock}>
    <h3 style={styles.subHeader}>Award Rules:</h3>
    <ol style={styles.orderedList}>
      <li>There is no fee for participation.</li>
      <li>The contest is open to all students studying B.E/B.Tech from affiliated colleges/Universities worldwide.</li>
      <li>Participation is open to teams which can have up to five members. Team members can be from any semester, but from the same Institution. There should be a faculty member for each team as the Team Guide.</li>
      <li>Teams must submit a two page abstract of their project in a specified format.</li>
      <li>The project must be an original work.</li>
      <li>The copy of the certified abstract should be submitted online.</li>
      <li>The winners are decided based on a two-stage expert evaluation. The first stage evaluation of the abstract is based on the project idea and its implementation prospects.</li>
      <li>The winners selected for second round presentation will be intimated via email.</li>
      <li>The second round evaluation will be through video conferencing.</li>
      <li>The final stage of evaluation is the demonstration of the software project before the judging panel which will also be conducted through video conferencing.</li>
      <li>Project entries will be evaluated based on factors such as Innovativeness, Feasibility, and Relevance.</li>
      <li>The decisions of the award evaluation committee shall be final.</li>
    </ol>
  </div>

  {/* Prizes */}
  <div style={styles.textBlock}>
    <h3 style={styles.subHeader}>Prizes:</h3>
    <ul style={styles.unorderedList}>
      <li><strong>First Prize:</strong> Award Instrument and Rs 50,000</li>
      <li><strong>Consolation Prize:</strong> Award Instrument and Rs 25,000</li>
      <li>Placement opportunities and cash prize for all finalists</li>
    </ul>
  </div>

  {/* Scheduled Dates Table */}
  <div style={styles.textBlock}>
    <h3 style={styles.subHeader}>Scheduled Dates:</h3>
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.tableHeader}>Event</th>
          <th style={styles.tableHeader}>Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={styles.tableCell}>Call for Abstracts</td>
          <td style={styles.tableCell}>20th June 2025</td>
        </tr>
        <tr>
          <td style={styles.tableCell}>Submission of Abstracts</td>
          <td style={styles.tableCell}>30th June 202</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>


      <section id="contact" style={styles.contactSection}>
  <h2 style={styles.contactHeading}>Contact</h2>
  <p style={styles.contactText}>Feel free to reach out to our coordinators:</p>

  <div style={styles.contactGrid}>
    <div style={styles.contactCard}>
      <h3 style={styles.name}>Name</h3>
      <p style={styles.role}>Position</p>
      <p style={styles.detail}>📞 +91 99999999999</p>
      <p style={styles.detail}>
        📧 <a href="mailto:alice@example.com" style={styles.email}>mail@mail.com</a>
      </p>
    </div>

    <div style={styles.contactCard}>
      <h3 style={styles.name}>Name</h3>
      <p style={styles.role}>Position</p>
      <p style={styles.detail}>📞 +91 9999999999999</p>
      <p style={styles.detail}>
        📧 <a href="mailto:bob@example.com" style={styles.email}>mail@mail.com</a>
      </p>
    </div>
  </div>
</section>
      <footer style={styles.footer}>
        <p>&copy; 2025 IEEE CS Kerala Chapter. All rights reserved.</p>
      </footer> 
    </div>
  );
}

const styles = {
  container: {
    paddingTop: '0px',
  },
  hero: {
    height: '100vh',
    backgroundImage: 'url(/bg1.webp)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center' as const,
    padding: '0 20px',
  },
  logo: {
    maxWidth: '90%',
    maxHeight: '100%',
    objectFit: 'contain',
    
  
  },
  logo2: {
    maxWidth: '160%',
    maxHeight: '100%',
    objectFit: 'contain',
    marginLeft: '70px',
  },
  logoContainer: {
  width: '200px',
  height: '100px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 10px',
},
  logoRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '-30px',
  },
  // heading: {
  //   fontSize: '3rem',
  //   fontWeight: 'extra-bold',
  //   marginBottom: '10px',
  // },
  // subheading: {
  //   fontStyle: 'italic',  // Correct property for italics
  //   fontWeight: '300',    // '300' or 'lighter' for light font weight
  //   color: '#ffffff',     // White color
  //   fontSize: '1.2rem',   // Font size
  //   marginBottom: '30px', // Space at the bottom
  // },
  heading: {
    fontFamily: 'Nexa', // Primary and fallback fonts
    fontSize: '3rem',
    fontWeight: '800', // Extra bold
    marginBottom: '0px',
    color: '#ffffff',
    textTransform: 'uppercase',
    
  },
  subheading: {
    fontFamily: 'Rothek',
    fontStyle: 'italic',
    fontWeight: '300',
    color: '#ffffff',
    fontSize: '1.2rem',
    // marginBottom: '0px',
  },
    headingImage: {
    width: '100%', // adjust as needed
    maxWidth: '1000px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: '#ffffff',
    color: '#000000',
    padding: '12px 30px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'all 0.3s ease',
  },
  section: {
    padding: '60px 20px',
    maxWidth: '900px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },
  subsection: {
    marginTop: '30px',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(119, 91, 91, 0.1)',
  },

  contactSection: {
  backgroundColor: '#f9f9f9',
  padding: '80px 20px',
  textAlign: 'center' as const,
},

contactHeading: {
  fontSize: '2.5rem',
  marginBottom: '10px',
  color: '#222',
},

contactText: {
  fontSize: '1.2rem',
  marginBottom: '30px',
  color: '#555',
},

contactGrid: {
  display: 'flex',
  justifyContent: 'center',
  gap: '40px',
  flexWrap: 'wrap' as const,
},

contactCard: {
  backgroundColor: '#ffffff',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  width: '280px',
  textAlign: 'left' as const,
},

name: {
  fontSize: '1.3rem',
  fontWeight: 'bold',
  color: '#000',
  marginBottom: '5px',
},

role: {
  fontSize: '1rem',
  color: '#666',
  marginBottom: '10px',
},

detail: {
  fontSize: '1rem',
  color: '#333',
  marginBottom: '5px',
},

email: {
  color: '#0070f3',
  textDecoration: 'none',
},
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '20px 0',
    position: 'relative' as const,
    bottom: 0,
    width: '100%',
  },
  footerText: {
    margin: 0,
    fontSize: '1rem',
    color: '#fff',      
  },
  
  awardsSection: {
    padding: '2rem 1rem',
    maxWidth: '1100px',
    margin: '0 auto',
  },
  sectionHeader: {
    textAlign: 'left',
    marginBottom: '2rem',
    color: '#111827',
  },
  sectionHeaderTitle: {
    fontSize: '2.25rem',
    fontWeight: 'bold',
  },
  cardsGrid: {
    display: 'grid',
    gap: '1.5rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  },
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '1rem',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
  backgroundColor: '#fff',
  cursor: 'pointer',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
  ':hover': {
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-4px)',
  },
    backgroundColor: '#fff',
  },
  cardHeader: {
    marginBottom: '0.75rem',
  },
  iconTitle: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  icon: {
    backgroundColor: '#f3f4f6',
    padding: '0.5rem',
    borderRadius: '50%',
    fontSize: '1.2rem',
  },
  cardContentP: {
    fontSize: '0.95rem',
    color: '#374151',
    marginTop: '0.5rem',
  },
  badges: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  badge: {
    padding: '0.3rem 0.6rem',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: '500',
  },
  badgeSecondary: {
    backgroundColor: '#e0e7ff',
    color: '#3730a3',
  },
  badgeOutline: {
    border: '1px solid #ccc',
    backgroundColor: 'transparent',
    color: '#333',
  },
  iconCircle: {
  backgroundColor: '#F3F4F6', // Matches image background
  borderRadius: '9999px', // Fully rounded
  padding: '0.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
},
svgIcon: {
  width: '20px',
  height: '20px',
  stroke: '#4B5563', // Icon stroke color (dark gray)
},
textBlock: {
  marginBottom: '2rem',
},

subHeader: {
  fontSize: '1.25rem',
  fontWeight: '600',
  marginBottom: '0.75rem',
  color: '#1f2937',
},

orderedList: {
  paddingLeft: '1.5rem',
  lineHeight: '1.75',
  fontSize: '0.95rem',
  color: '#374151',
},

unorderedList: {
  paddingLeft: '1.5rem',
  fontSize: '0.95rem',
  color: '#374151',
  lineHeight: '1.75',
},

table: {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '0.95rem',
  color: '#374151',
  marginTop: '1rem',
},

tableHeader: {
  textAlign: 'left',
  padding: '0.5rem',
  backgroundColor: '#f3f4f6',
  border: '1px solid #ddd',
  fontWeight: '600',
},

tableCell: {
  padding: '0.5rem',
  border: '1px solid #ddd',
},

};
