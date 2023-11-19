// to use useState hook which are dynamic we have to make the component client component
//  server component do not support useState, useEffet hooks
// "use client";
// import { useState } from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Vaibhav Shukla</Link>
        </div>
        <div className="links text-center">
          <Link href="/about">About</Link>
          <Link href="/about/team">Our Team</Link>
          <Link href="/code/repos">Code</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
