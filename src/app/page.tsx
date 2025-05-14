export default function Home() {
  return (
    <div style={styles.container}>
      <section style={styles.hero}>
         <div style={styles.logoRow}>
            <img src="/logo.png" alt="IEEE CS Logo" style={styles.logo} />
            <img src="/inapp-logo.png" alt="InApp Logo" style={styles.logo} />
         </div>

          <img src="/heading.png" alt="Heading Text" style={styles.headingImage} />
       
        {/* <h1 style={styles.heading}>InApp - IEEE CS Student Project Awards</h1>
        <p style={styles.subheading}>Inspiring New Solutions, Propelling Innovation, Realizing Excellence</p> */}
       
        <a
          href="https://your-form-link.com"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.button}
        >
          Apply Now
        </a>
      </section>

      <section id="about" style={styles.section}>
        <h2>About</h2>

         <div style={styles.subsection}>
          <h3>IEEE CS - InApp Awards</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor placeat sapiente beatae, accusamus vitae maiores. Voluptatum veritatis corrupti iste unde sapiente cumque explicabo illum laborum reiciendis ratione, rerum maiores dolor.
          </p>
        </div>
       
       <div style={styles.subsection}>
          <h3>IEEE Computer Society Kerala Chapter</h3>
          <p>
            The IEEE Computer Society Kerala Chapter is a professional organization for computer science and engineering professionals in the Kerala. It aims to promote the advancement of computer science and engineering in the region by providing opportunities for education, networking, and professional development. The society organizes a variety of events, including technical talks, workshops, seminars, and conferences, to facilitate the exchange of knowledge and ideas among professionals in the field. The society also provides support for students pursuing computer science and engineering education through various initiatives, such as student chapters, student competitions, and scholarships. Thus,  the IEEE Computer Society Kerala Chapter plays a vital role in advancing computer science and engineering in the Kerala.
          </p>
        </div>
        
         {/* Subsection */}
        <div style={styles.subsection}>
          <h3>InApp Information Technologies</h3>
          <p>
            InApp is a commitment personified, a value upheld and a passion shared. Founded in 2000 by a group of promoters with several years of Big 5 consulting experience and a great shared dream to pursue, InApp prides itself as a technology services company. With offices in USA, India, Japan and a 200+ strong team, InApp has built a solid client base ranging from Fortune 500 companies to SMBs          </p>
        </div>
      </section>
      

      <section id="awards" style={styles.section}>
        <h2>Awards</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod sunt dolorem itaque quidem, non voluptas illum accusamus ut provident dolore dolores quia vel architecto, consequuntur id rem nemo perferendis maxime?
        </p>
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
    backgroundImage: 'url(/bg.webp)',
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
    width: '300px',
    marginBottom: '20px',
  },

  logoRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'extra-bold',
    marginBottom: '10px',
  },
  headingImage: {
    width: '100%', // adjust as needed
    maxWidth: '1000px',
    marginBottom: '10px',
  },
 subheading: {
    fontStyle: 'italic',  // Correct property for italics
    fontWeight: '300',    // '300' or 'lighter' for light font weight
    color: '#ffffff',     // White color
    fontSize: '1.2rem',   // Font size
    marginBottom: '30px', // Space at the bottom
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
};
