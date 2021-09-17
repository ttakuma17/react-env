import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/todo">TODO List</Link>
      <br />
      <Link to="/user">User</Link>
    </div>
  );
};
