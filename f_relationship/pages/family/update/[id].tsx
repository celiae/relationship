import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Network from "types/network";
import NetworkForm from "components/network-form";
import { INITIAL_NETWORK } from "app/constant";

export default function FamilyMemberUpdate() {
  const router = useRouter();
  const [data, setData] = useState<Network>(INITIAL_NETWORK);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      fetch(`/api/network/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [router.isReady]);

  return (
    <>
      <Head>
        <title>Network | Relationship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NetworkForm method="UPDATE" />
    </>
  );
}