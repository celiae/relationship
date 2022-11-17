import Head from "next/head";
import React from "react";
import Network from "types/network";
import NetworkForm from "components/network-form";

interface Props {
  network: Network;
}

export default function NetworkList({ network }: Props) {
  return (
    <>
      <Head>
        <title>Network | Relationship</title>
      </Head>
      <NetworkForm network={network} method="PUT" />
    </>
  );
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await fetch("http://localhost:8080/network");
  const networks: Network[] = await res.json();

  const paths = networks.map((network) => ({
    params: { id: network.id.toString() },
  }));

  return { paths, fallback: false };
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const res = await fetch(`http://localhost:8080/network/${params.id}`);
  const network: Network = await res.json();

  return {
    props: { network },
  };
}
