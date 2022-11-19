import { SubmitHandler } from "react-hook-form";
import useSWR from "swr";
import Network from "types/network";
import { INITIAL_NETWORK } from "./constant";

export function UpdatePost(api: string, method: string, data: Network) {
  if (method === "PUT") {
    fetch(`/api/network/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else if (method === "POST") {
    fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
    console.log("error");
  }
}

export const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useNetworkLength() {
  const { data, error } = useSWR(`/api/network/length`, fetcher);

  return {
    network_length: data,
  };
}

export function useFamilyLength() {
  const { data, error } = useSWR(`/api/family/length`, fetcher);

  return {
    family_length: data,
  };
}
