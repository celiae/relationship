import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Network from "types/network";
import { SubmitHandler, useForm } from "react-hook-form";

interface Props {
  network: Network;
}

export default function NetworkList({ network }: Props) {
  const router = useRouter();
  const id = router.query.id as string;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Network>();

  const onSubmit: SubmitHandler<Network> = (data) => {
    fetch(`/api/network/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  return (
    <>
      <Head>
        <title>Network | Relationship</title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={network.firstname}
          className="bg-black m-2"
          {...register("firstname")}
        />
        <input
          defaultValue={network?.lastname}
          className="bg-black m-2"
          {...register("lastname")}
        />
        <input
          defaultValue={network?.gender}
          className="bg-black m-2"
          {...register("gender")}
        />
        <input
          defaultValue={network?.education}
          className="bg-black m-2"
          {...register("education")}
        />
        <input
          defaultValue={network?.birthday}
          className="bg-black m-2"
          {...register("birthday")}
        />
        <input
          defaultValue={network?.email}
          className="bg-black m-2"
          {...register("email")}
        />
        <input
          defaultValue={network?.phone}
          className="bg-black m-2"
          {...register("phone")}
        />
        <input
          defaultValue={network?.qq}
          className="bg-black m-2"
          {...register("qq")}
        />
        <input
          defaultValue={network?.wechat}
          className="bg-black m-2"
          {...register("wechat")}
        />
        <input
          defaultValue={network?.address}
          className="bg-black m-2"
          {...register("address")}
        />
        <input
          defaultValue={network?.relation}
          className="bg-black m-2"
          {...register("relation")}
        />
        <input type="submit" />
      </form>
    </>
  );
}

export async function getStaticPaths() {
  // When this is true (in preview environments) don't
  // prerender any static pages
  // (faster builds, but slower initial page load)
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:8080/network");
  const networks: Network[] = await res.json();

  // Get the paths we want to prerender based on posts
  // In production environments, prerender all pages
  // (slower builds, but faster initial page load)
  const paths = networks.map((network) => ({
    params: { id: network.id.toString() },
  }));

  // { fallback: false } means other routes should 404
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
