import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Bespoke Seating Company</h1>
          <p className={styles.subtitle}>
            Crafting exceptional furniture, one piece at a time
          </p>
          <p className={styles.description}>
            Premium custom furniture and seating solutions designed for discerning clients
            who appreciate quality, craftsmanship, and timeless design.
          </p>
          <div className={styles.comingSoon}>
            <span className={styles.badge}>Launching Soon</span>
          </div>
        </div>

        <div className={styles.offerings}>
          <h2>Our Offerings</h2>
          <div className={styles.offeringGrid}>
            <div className={styles.offeringCard}>
              <h3>🪑 Custom Seating</h3>
              <p>Chairs, sofas, and benches tailored to your exact specifications and style preferences.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3>🏢 Office Furniture</h3>
              <p>Professional workspace solutions that blend comfort with sophisticated design.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3>🏠 Home Collections</h3>
              <p>Dining sets, living room furniture, and bedroom pieces for the modern home.</p>
            </div>
            <div className={styles.offeringCard}>
              <h3>✨ Luxury Upholstery</h3>
              <p>Premium fabrics and leather goods with expert craftsmanship and attention to detail.</p>
            </div>
          </div>
        </div>

        <div className={styles.process}>
          <h2>Our Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.step}>
              <span className={styles.stepNumber}>1</span>
              <h3>Consultation</h3>
              <p>We discuss your vision, space, and requirements</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>2</span>
              <h3>Design</h3>
              <p>Custom designs and material selection</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>3</span>
              <h3>Crafting</h3>
              <p>Expert artisans bring your furniture to life</p>
            </div>
            <div className={styles.step}>
              <span className={styles.stepNumber}>4</span>
              <h3>Delivery</h3>
              <p>White-glove delivery and installation service</p>
            </div>
          </div>
        </div>

        <div className={styles.ecosystem}>
          <h2>Part of the Crafted Innovation Ecosystem</h2>
          <div className={styles.ecosystemLinks}>
            <a
              href="http://localhost:3000"
              className={styles.ecosystemCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Crafted Innovation</h3>
              <p>Main tech consultancy and innovation hub</p>
              <span className={styles.linkArrow}>→</span>
            </a>
            <a
              href="http://localhost:3001"
              className={styles.ecosystemCard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Dev Collective</h3>
              <p>Developer community and collaborative solutions</p>
              <span className={styles.linkArrow}>→</span>
            </a>
          </div>
        </div>

        <div className={styles.ctas}>
          <Button appName="bespoke-seating" className={styles.primary}>
            Request Consultation
          </Button>
          <a href="mailto:info@bespokeseating.com" className={styles.secondary}>
            View Portfolio
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Bespoke Seating Company. Part of Crafted Innovation.</p>
        <div className={styles.footerLinks}>
          <a href="#portfolio">Portfolio</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
