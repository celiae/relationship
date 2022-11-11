import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Network from "types/network";
import { INITIAL_NETWORK } from "app/constant";

export default function NetworkShow() {
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
  return <div>{data.firstname}</div>;
}
