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

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useNetwork(id: string) {
  const { data, error } = useSWR<Network>(
    id ? `/api/network/${id}` : null,
    fetcher
  );

  return {
    network: data,
    isLoading: !error && !data,
    isError: error,
  };
}
