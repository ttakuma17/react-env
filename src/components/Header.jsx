import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "../router/Router";

export const Header = () => {
  return (
    <BrowserRouter>
      <header className="bg-blue-500 p-2 block align-middle flex">
        <p className="text-white mt-0 mb-0 p-1">Your Todo</p>
        <div className="flex w-25px ml-auto">
          <Link className="text-white no-underline mr-2 p-1" to="/">
            Home
          </Link>
          <br />
          <Link className="text-white no-underline mr-2 p-1" to="/todopage">
            TodoList
          </Link>
          <br />
          <Link className="text-white no-underline mr-2 p-1" to="/user">
            User
          </Link>
        </div>
      </header>
      <Router />
    </BrowserRouter>
  );
};
