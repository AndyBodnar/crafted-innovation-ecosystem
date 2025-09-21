import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Crafted Innovation</h1>
          <p className={styles.subtitle}>
            Transforming ideas into digital reality through innovative technology solutions
          </p>
          <p className={styles.description}>
            We specialize in custom software development, cloud architecture, and digital transformation
            that drives business growth and operational excellence.
          </p>
        </div>

        <div className={styles.services}>
          <h2>Our Services</h2>
          <div className={styles.serviceGrid}>
            <div className={styles.serviceCard}>
              <h3>Custom Software Development</h3>
              <p>Tailored applications built with modern technologies to solve your unique business challenges.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Cloud Architecture</h3>
              <p>Scalable, secure cloud solutions designed for performance and cost-effectiveness.</p>
            </div>
            <div className={styles.serviceCard}>
              <h3>Digital Transformation</h3>
              <p>Strategic technology integration to modernize your business processes and workflows.</p>
            </div>
          </div>
        </div>

        <div className={styles.ecosystem}>
          <h2>Our Ecosystem</h2>
          <p>Discover our family of specialized services:</p>
          <div className={styles.ecosystemLinks}>
            <a
              href="http://localhost:3001"
              className={styles.ecosystemCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Dev Collective</h3>
              <p>Developer community and collaborative software solutions</p>
              <span className={styles.linkArrow}>→</span>
            </a>
            <a
              href="http://localhost:3002"
              className={styles.ecosystemCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Bespoke Seating Company</h3>
              <p>Premium custom furniture and seating solutions</p>
              <span className={styles.linkArrow}>→</span>
            </a>
          </div>
        </div>

        <div className={styles.ctas}>
          <Button appName="crafted-innovation" className={styles.primary}>
            Get Started
          </Button>
          <a href="#contact" className={styles.secondary}>
            Learn More
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Crafted Innovation. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
