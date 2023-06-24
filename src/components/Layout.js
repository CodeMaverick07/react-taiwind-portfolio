import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  const [dark, setDark] = useState(true);
  const darkHandler = () => {
    setDark((prev) => !prev);
  };

  return (
    <div>
      <Header dark={dark} darkHandler={darkHandler} />

      <div className="container font-mont">{children}</div>

      <Footer />
    </div>
  );
}

export default Layout;
