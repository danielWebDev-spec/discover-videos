import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { magic } from "../lib/magic-client";
import Loading from "../components/loading/Loading";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // isLoading set to false temp for debugging purposes
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // useEffect(() => {
  //   const loggedIn = async () => {
  //     const isLoggedIn = await magic.user.isLoggedIn();
  //     if (isLoggedIn) {
  //       router.push("/");
  //     } else {
  //       router.push("/login");
  //     }
  //   };
  //   loggedIn();
  // }, []);

  useEffect(() => {
    const handleComplete = () => {
      setIsLoading(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return isLoading ? <Loading /> : <Component {...pageProps} />;
}

export default MyApp;
