import Login from "@/components/Login";
import Register from "@/components/Register";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [isLogin, setIsLogin] = React.useState(false);
  const [authAdd, setAuthAdd] = React.useState("login");
  
  const [trigger, setTrigger] = React.useState(false);

  const triggerLoginState = () => {
    setTrigger(!trigger);
  };

  const changeAuth = () => {
    setAuthAdd(authAdd === "login" ? "register" : "login");
  };

  // Check if the user is logged in or not
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    if (token!=undefined && token!=null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [trigger]);

  return (
    <>
      {isLogin ? (
        <Component {...pageProps} triggerLoginState={triggerLoginState}/>
      ) : (
        <>
          {authAdd === "login" ? (
            <Login
              changeAuth={changeAuth}
              triggerLoginState={triggerLoginState}
            />
          ) : (
            <Register changeAuth={changeAuth} />
          )}
        </>
      )}
    </>
  );
}
