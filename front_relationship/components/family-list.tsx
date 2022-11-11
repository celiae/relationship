import Family from "types/family";
import { MdModeEditOutline } from "react-icons/md";
import DeleteButton from "./delete-button";
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
          className="flex px-3 hover:bg-zinc-700 h-10 items-center transition mb-1 rounded-lg"
          onClick={() => {
            router.push(`/family/show/${fam.id}`);
          }}
        >
          <div className="flex-initial w-20">
            <span className="mr-1">{fam.lastname}</span>
            <span>{fam.firstname}</span>
          </div>
          <div className="flex-1">{fam.phone == "" ? "未知" : fam.phone}</div>
          <div className="flex-flex-shrink md:flex-1 px-4">
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
              <DeleteButton fetchPath={`/api/family/${fam.id}`} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
