import { MdOutlineDeleteForever } from "react-icons/md";

interface Props {
  fetchPath: string;
}
export default function DeleteButton({ fetchPath }: Props) {
  return (
    <button
      className="text-gray-50 rounded p-1 hover:bg-sky-600"
      onClick={(e) => {
        e.stopPropagation();
        fetch(fetchPath, {
          method: "DELETE",
        });
      }}
    >
      <MdOutlineDeleteForever />
    </button>
  );
}
