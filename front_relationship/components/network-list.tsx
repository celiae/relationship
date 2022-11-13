import { useRouter } from "next/router";
import { MdModeEditOutline } from "react-icons/md";
import Network from "types/network";
import DeleteButton from "./delete-button";

interface Props {
  network: Network[];
}
export default function NetworkList({ network }: Props) {
  const router = useRouter();
  return (
    <>
      {network.map((net) => (
        <div
          key={net.id}
          className="flex flex-nowrap px-3 hover:bg-zinc-700 h-10 items-center transition mb-1 rounded-lg"
          onClick={() => {
            router.push(`/network/show/${net.id}`);
          }}
        >
          <div className="flex-initial w-20 whitespace-nowrap overflow-hidden">
            <span className="mr-1">{net.lastname}</span>
            <span>{net.firstname}</span>
          </div>
          <div className="flex-initial w-48 hidden sm:block">
            {net.phone == "" ? "未知" : net.phone}
          </div>
          <div className="flex-initial w-48 hidden md:block">{net.wechat}</div>
          <div className="flex-auto hidden lg:block">{net.relation}</div>
          <div className="flex-initial flex flex-nowrap justify-end">
            <div>
              <button
                className="rounded p-1 text-sky-500 hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/network/update/${net.id}`);
                }}
              >
                <MdModeEditOutline />
              </button>
            </div>
            <div className="ml-3">
              <DeleteButton fetchPath={`/api/network/${net.id}`} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
