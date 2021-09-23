import React from "react";
import { Example } from "./components/Example";

export const Home = () => {
  return (
    <div>
      {console.log("Homeがレンダリングされました")}
      <h1>Home Page</h1>
      <Example />
    </div>
  );
};
