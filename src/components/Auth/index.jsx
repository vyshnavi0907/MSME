// src/components/Auth/index.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./index.module.css";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => setIsLogin(!isLogin);

  return (
    <motion.div
      className={styles.authPage}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={styles.authBox}>
        <h2 className={styles.title}>{isLogin ? "Login" : "Sign Up"}</h2>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>

          <label>
            Password
            <input type="password" placeholder="Enter your password" required />
          </label>

          {!isLogin && (
            <label>
              Confirm Password
              <input type="password" placeholder="Confirm password" required />
            </label>
          )}

          <button type="submit" className={styles.submitBtn}>
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <div className={styles.orSeparator}>-- or --</div>

        <button
          className={styles.googleBtn}
          onClick={() => alert("Google login coming soon!")}
          aria-label="Login with Google"
          type="button"
        >
          <span className={styles.googleIcon}>G</span>
        </button>

        <p className={styles.toggleText}>
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button className={styles.toggleBtn} onClick={toggleMode} type="button">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </motion.div>
  );
}
