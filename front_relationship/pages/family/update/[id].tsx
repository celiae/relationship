import Head from "next/head";
import React from "react";
import Network from "types/network";
import FamilyForm from "components/family-form";
import Family from "types/family";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "lib/utils";

interface Props {
  family: Family;
}

export default function FamilyMemberUpdate() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(`/api/family/${id}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Network | Relationship</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FamilyForm family={data} method="PUT" />
    </>
  );
}

// export async function getStaticPaths() {
//   if (process.env.SKIP_BUILD_STATIC_GENERATION) {
//     return {
//       paths: [],
//       fallback: "blocking",
//     };
//   }

//   const res = await fetch("http://localhost:8080/family");
//   const families: Network[] = await res.json();

//   const paths = families.map((family) => ({
//     params: { id: family.id.toString() },
//   }));

//   return { paths, fallback: false };
// }

// type Params = {
//   params: {
//     id: string;
//   };
// };

// export async function getStaticProps({ params }: Params) {
//   const res = await fetch(`http://localhost:8080/family/${params.id}`);
//   const family: Family = await res.json();

//   return {
//     props: { family },
//   };
// }
