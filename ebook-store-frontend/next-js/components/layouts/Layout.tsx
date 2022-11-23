import Head from "next/head";
import React, { FC, PropsWithChildren } from "react";
import { Navbar } from "../ui";

interface Props {
  title: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        {/*Navbar */}
        <Navbar/>
      </nav>
      <main
        style={{
          margin: "80px auto",
          maxWidth: "1440px",
          padding: "0px 30px"
        }}
      >
        {children}
      </main>
    </>
  );
};
