import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { magic } from "../../lib/magic-client";
import styles from "./navbar.module.css";

const Navbar = () => {
  // const { username } = props;

  const [showDropdown, setShowDropdown] = useState(false);
  const [username, setUsername] = useState("");

  const router = useRouter();

  useEffect(() => {
    // assumes a user is logged in
    const getUserMetaData = async () => {
      try {
        const { email } = await magic.user.getMetadata();

        if (email) {
          setUsername(email);
        }
      } catch (error) {
        console.error("there is an error");
      }
    };
    getUserMetaData();
  }, []);

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push("/");
  };

  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push("/browse/my-list");
  };

  const handleShowDropdown = (e) => {
    e.preventDefault();
    setShowDropdown(!showDropdown);
  };

  const handleSignout = async (e) => {
    e.preventDefault();
    try {
      await magic.user.logout();
      console.log(await magic.user.isLoggedIn());
      router.push("/login");
    } catch (error) {
      console.error("Error logging out", error);
      router.push("/login");
    }
    router.push("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <a href="/" className={styles.logoLink}>
          <div className={styles.logoWrapper}>
            <Image src="/static/netflix.svg" width="128px" height="34px" />
          </div>
        </a>

        <ul className={styles.navItems}>
          <li className={styles.navItem} onClick={handleOnClickHome}>
            Home
          </li>
          <li className={styles.navItem2} onClick={handleOnClickMyList}>
            My List
          </li>
        </ul>

        <nav className={styles.navContainer}>
          <div>
            <button className={styles.usernameBtn} onClick={handleShowDropdown}>
              <p>{username}</p>
              <Image src="/static/expand_more.svg" width="24" height="24" />
            </button>
            {showDropdown && (
              <div className={styles.navDropdown}>
                <a onClick={handleSignout} className={styles.linkName}>
                  Sign Out
                </a>

                <div className={styles.lineWrapper}></div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
