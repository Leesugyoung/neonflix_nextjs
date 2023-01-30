import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}
