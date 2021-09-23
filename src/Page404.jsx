import React from "react";
import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      {console.log("Page404が再レンダリングされました")}
      <h1>Page404</h1>
      <Link to="/">Home Page</Link>
      <br />
    </div>
  );
};
