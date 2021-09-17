import React from "react";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div>
      <h1>User Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/todo">Todo List</Link>
    </div>
  );
};
