import { BiDetail } from "react-icons/bi";
import { BsPeopleFill } from "react-icons/bs";
import { useRouter } from "next/router";

interface Props {
  msg: string;
  length: number;
  href: string;
}

export default function Total({ msg, length, href }: Props) {
  const router = useRouter();

  return (
    <>
      <div className="p-2 w-64 m-3 rounded shadow-2xl">
        <div className="text-2xl">{msg}</div>
        <div className="flex">
          <div className="text-4xl text-sky-400">{length}</div>
          <div className="text-2xl p-4">
            <BsPeopleFill />
          </div>
        </div>
        <div className="mt-7">
          <button
            onClick={() => {
              router.push(href);
            }}
            className="border bg-sky-400 border-gray-50 px-4 py-1.5 rounded hover:bg-sky-600 transition"
          >
            <BiDetail />
          </button>
        </div>
      </div>
    </>
  );
}
