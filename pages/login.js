import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userMsg, setUserMsg] = useState("");

  const handleOnChangeEmail = (e) => {
    e.preventDefault();
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Sign In - Netflix / Discover Videos</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <a href="/" className={styles.logoLink}>
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix Logo"
                width="128px"
                height="24px"
              />
            </div>
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            className={styles.emailInput}
            type="text"
            placeholder="Email Address"
            onChange={handleOnChangeEmail}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </div>
      </main>
    </div>
  );
};
export default Login;
