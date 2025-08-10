import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styles from "./index.module.css";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <motion.div
      className={styles.page}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* Add Header */}
      <header className={styles.header}>
        <div className={styles.logo}>MSME AI Studio</div>
        <button
          className={styles.loginBtn}
          onClick={() => navigate("/auth")}
          whileHover={{ scale: 1.07, boxShadow: "0 0 15px #3db7cc" }}
          whileTap={{ scale: 0.95 }}
        >
          Login / Signup
        </button>
      </header>
      
      <div className={styles.animatedBg}>
        {[...Array(10)].map((_, i) => (
          <span key={i} className={styles.circle} />
        ))}
      </div>

      <motion.section className={styles.hero} variants={item}>
        <h1 className={styles.title}>MSME AI Studio</h1>
        <p className={styles.subtitle}>
          Empowering MSMEs with AI-powered graphics, marketing & ad solutions.
        </p>
        <motion.button
          className={styles.cta}
          onClick={() => navigate("/app")}
          whileHover={{ scale: 1.07, boxShadow: "0 0 15px #3db7cc" }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.section>

      <motion.section className={styles.features} variants={item}>
        <h2 className={styles.sectionTitle}>Our Key Features</h2>
        <div className={styles.featureGrid}>
          {[
            {
              icon: "🎨",
              title: "AI Graphic Generator",
              desc: "Convert text into stunning social media posters and captions instantly.",
            },
            {
              icon: "📧",
              title: "Email Marketing",
              desc: "Create personalized campaigns with AI-crafted content that converts.",
            },
            {
              icon: "🎯",
              title: "Smart Ad Targeting",
              desc: "Maximize your ad ROI using AI to target the right audience at the right time.",
            },
          ].map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              className={styles.featureCard}
              whileHover={{ scale: 1.04, boxShadow: "0 0 18px #3db7cc" }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <div className={styles.icon}>{icon}</div>
              <h3 className={styles.featureTitle}>{title}</h3>
              <p className={styles.featureDesc}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section className={styles.about} variants={item}>
        <h2 className={styles.sectionTitle}>Why MSME AI Studio?</h2>
        <p className={styles.aboutText}>
          We simplify AI-powered marketing tools to help MSMEs grow with no big
          budgets or teams. Our platform blends innovation with ease of use to
          boost your business efficiently.
        </p>
      </motion.section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} MSME AI Studio. All rights reserved.</p>
      </footer>
    </motion.div>
  );
}
