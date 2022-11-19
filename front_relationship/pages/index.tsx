import Total from "components/total";
import { useFamilyLength, useNetworkLength } from "lib/utils";
import Head from "next/head";

interface Props {
  network_length: number;
  family_length: number;
}

export default function Home() {
  const { network_length } = useNetworkLength();
  const { family_length } = useFamilyLength();
  if (!network_length || !family_length) return <div>Loading...</div>;
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-4xl m-3 underline decoration-sky-500">
        Relationship
      </div>
      <div className="text-xl shadow-sm">人际网络</div>
      <div className="m-5 grid grid-cols-1 md:grid-cols-2 place-items-center">
        <Total msg="人际网络总计" length={network_length} href="/network" />
        <Total msg="家庭成员总计" length={family_length} href="/family" />
      </div>
    </>
  );
}
