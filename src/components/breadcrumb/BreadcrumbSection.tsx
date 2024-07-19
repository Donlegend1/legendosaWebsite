import Link from "next/link";
import React from "react";
type Props = {
  title: string;
  currentPage?: string;
};
const BreadcrumbSection = ({ title, currentPage }: Props) => {
  return (
    <div className="rv-breadcrumb pt-120 pb-120"  style={{
        backgroundImage: "url('/assets/img/breadcrumb-bg.jpg')", // Update this with your image path
        backgroundSize: "cover", // Ensure the image covers the entire div
        backgroundPosition: "center", // Center the image
      }}>
      <div className="container">
        <h1 className="rv-breadcrumb__title">{title}</h1>

        <ul className="rv-breadcrumb__nav d-flex justify-content-center">
          <li>
            <Link href="/">
              <i className="fa-solid fa-sharp fa-home"></i> Home
            </Link>
          </li>
          <li className="current-page">
            <span className="dvdr"> &#47;</span>
            <span>{currentPage ? currentPage : title}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
