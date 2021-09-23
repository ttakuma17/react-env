import React from "react";
import { Link } from "react-router-dom";

export const User = () => {
  return (
    <div>
      {console.log("Userがレンダリングされました")}
      <h1>User Page</h1>
      <Link to="/user/detail">User Detail</Link>
    </div>
  );
};
