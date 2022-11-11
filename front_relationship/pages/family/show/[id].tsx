import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Family from "types/family";
import { INITIAL_FAMILY } from "app/constant";

export default function FamilyShow() {
  const router = useRouter();
  const [data, setData] = useState<Family>(INITIAL_FAMILY);

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      fetch(`/api/family/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setData(data);
        });
    }
  }, [router.isReady]);
  return <>{data.firstname}</>;
}
