import Head from "next/head";
import React from "react";
import Network from "types/network";
import NetworkForm from "components/network-form";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "lib/utils";

interface Props {
  network: Network;
}

export default function NetworkList() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error } = useSWR(`/api/network/${id}`, fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Network | Relationship</title>
      </Head>
      <NetworkForm network={data} method="PUT" />
    </>
  );
}
