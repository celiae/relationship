import Head from "next/head";
import React from "react";
import { INITIAL_NETWORK } from "app/constant";
import NetworkForm from "components/network-form";

export default function NetworkCreate() {
  return (
    <>
      <Head>
        <title>Network | Relationship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NetworkForm network={INITIAL_NETWORK} method="POST" />
    </>
  );
}
