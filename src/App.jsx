import React from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

// App.jsが再レンダリングされると、Header.jsx Footer.jsxも再レンダリングされる
export const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};
