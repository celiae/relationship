import Network from "types/network";

export async function UpdatePost(method: string, data: Network) {
  if (method === "PUT") {
    const res = await fetch(`/api/network/${data.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else if (method === "POST") {
    const res = await fetch(`/api/network`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  } else {
  }
}
