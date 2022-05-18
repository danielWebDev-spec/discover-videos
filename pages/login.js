import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import styles from "../styles/Login.module.css";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userMsg, setUserMsg] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    const email = e.target.value;
    setEmail(email);
  };

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();

    if (email) {
      // log in a user by their email
      try {
        const didToken = await magic.auth.loginWithMagicLink({ email });
        console.log(didToken);
      } catch (error) {
        // Handle errors if required!
        console.error("Something went wrong logging in", error);
      }

      // router.push("/");
    } else {
      setUserMsg("Enter a valid email address");
    }
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
