import { Button } from "@repo/ui/button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Dev Collective</h1>
          <p className={styles.subtitle}>
            Where developers unite to build the future
          </p>
          <p className={styles.description}>
            A collaborative platform for developers to share knowledge, work on projects,
            and grow together in the ever-evolving world of technology.
          </p>
          <div className={styles.comingSoon}>
            <span className={styles.badge}>Coming Soon</span>
          </div>
        </div>

        <div className={styles.features}>
          <h2>What's Coming</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <h3>🤝 Collaborative Projects</h3>
              <p>Join forces with developers worldwide on open-source and commercial projects.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>📚 Knowledge Sharing</h3>
              <p>Access tutorials, code snippets, and best practices from the community.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>🎯 Skill Matching</h3>
              <p>Find the right team members based on skills, experience, and interests.</p>
            </div>
            <div className={styles.featureCard}>
              <h3>🚀 Project Showcase</h3>
              <p>Present your work and get feedback from experienced developers.</p>
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
          <Button appName="dev-collective" className={styles.primary}>
            Join Waitlist
          </Button>
          <a href="mailto:info@devcollective.com" className={styles.secondary}>
            Get Notified
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Dev Collective. Part of Crafted Innovation.</p>
        <div className={styles.footerLinks}>
          <a href="#about">About</a>
          <a href="#community">Community</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}
