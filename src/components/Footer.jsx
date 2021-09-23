import React, { memo } from "react";

export const Footer = memo(() => {
  return (
    <footer className="bg-blue-500 p-2 block align-middle">
      {console.log("Footerがレンダリングされました")}
      <p className="text-white mt-0 mb-0 text-right">Try to complete todo !</p>
    </footer>
  );
});
