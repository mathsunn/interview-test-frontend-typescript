import React from "react";
import Head from "next/head";
import Title from "../components/Title";
import Link from "next/link";

const Home: React.FC<{}> = () => (
  <div className="container">
    <Head>
      <title>Easyblue: test frontend</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Title text="Test frontend." />
    <Link href="/login">Se connecter</Link>
  </div>
);

export default Home;
