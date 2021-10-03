import React from "react";
import { RecoilRoot } from "recoil";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <>
      <RecoilRoot>
        <Header />
      </RecoilRoot>
      <Footer />
    </>
  );
};
