"use client";
import React, { useState } from "react";
import Link from "next/link";
type Props = {
  style: string;
  logo?: string;
};

const NavSection = ({ style, logo }: Props) => {

  return (
    <div className={style}>
      <ul className="justify-content-center">
        <li>
          <a
            className="dropdown-btn"
           href="/"
            
          >
            Home
          </a>
        </li>

        <li>
          <Link href="/about">About</Link>
        </li>
        <li >
          <a
            className="dropdown-btn"
           href="/services"
         
          >
            Service
          </a>
         
        </li>
       
        {logo && (
          <li className="d-none d-lg-block">
            <Link href="/" className="rv-5-logo">
              <img src={logo} alt="logo" />
            </Link>
          </li>
        )}

       

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavSection;
