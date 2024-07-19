import React from "react";
import HeaderSection6 from "@/components/header/HeaderSection6";
import FooterSection7 from "@/components/footer/FooterSection7";
type Props = {
  children: React.ReactNode;
};
const InnerLayout = ({ children }: Props) => {
  return (
    <>
      <HeaderSection6  />
      {children}
      <FooterSection7 />
    </>
  );
};

export default InnerLayout;
