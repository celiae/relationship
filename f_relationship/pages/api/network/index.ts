import { NextApiResponse, NextApiRequest } from "next";
import Network from "types/network";

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Promise<Response>>
) {
  const response = fetch("http://localhost:8080/network");

  return res.status(200).json(response);
}
