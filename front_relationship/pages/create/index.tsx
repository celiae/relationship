import Link from "next/link";
import { useRouter } from "next/router";

const links = [{}];

export default function Create() {
  const router = useRouter();
  return (
    <div className="p-3 grid grid-cols-1 md:grid-cols-2 place-items-center">
      <div
        className="m-3 p-4 w-64 h-32 shadow-xl rounded cursor-pointer transition hover:text-sky-400"
        onClick={() => {
          router.push("/network/create");
        }}
      >
        <div className="text-2xl">
          <div>Network</div>
          <div className="text-base">创建人际网络</div>
        </div>
      </div>
      <div
        className="m-3 p-4 w-64 h-32 shadow-xl rounded cursor-pointer transition hover:text-sky-400"
        onClick={() => {
          router.push("/family/create");
        }}
      >
        <div className="text-2xl">
          <div>Family</div>
          <div className="text-base">创建家庭成员</div>
        </div>
      </div>
    </div>
  );
}
