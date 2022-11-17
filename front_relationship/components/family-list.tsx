import Family from "types/family";
import { MdModeEditOutline, MdOutlineDeleteForever } from "react-icons/md";
import { useRouter } from "next/router";

interface Props {
  family: Family[];
}
export default function FamilyList({ family }: Props) {
  const router = useRouter();
  return (
    <>
      {family.map((fam) => (
        <div
          key={fam.id}
          className="flex px-3 hover:bg-zinc-700 h-10 items-center transition mb-1 rounded-lg cursor-pointer"
          onClick={() => {
            router.push(`/family/show/${fam.id}`);
          }}
        >
          <div className="flex-initial w-20">
            <span className="mr-1">{fam.lastname}</span>
            <span>{fam.firstname}</span>
          </div>
          <div className="flex-initial w-48 hidden sm:block">
            {fam.phone == "" ? "未知" : fam.phone}
          </div>
          <div className="flex-initial w-48 hidden md:block">{fam.wechat}</div>
          <div className="flex-auto hidden lg:block">
            {fam.relation == "" ? "未知" : fam.relation}
          </div>
          <div className="flex-initial flex justify-end">
            <div>
              <button
                className="rounded p-1 text-sky-500 hover:bg-gray-200"
                onClick={(e) => {
                  e.stopPropagation();
                  router.push(`/family/update/${fam.id}`);
                }}
              >
                <MdModeEditOutline />
              </button>
            </div>
            <div className="ml-3">
              <button
                className="text-gray-50 rounded p-1 hover:bg-sky-600"
                onClick={(e) => {
                  e.stopPropagation();
                  fetch(`/api/family/${fam.id}`, {
                    method: "DELETE",
                  });
                  router.push("/family");
                }}
              >
                <MdOutlineDeleteForever />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
