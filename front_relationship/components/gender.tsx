import { AiOutlineMan, AiOutlineWoman } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";

interface Props {
  gender: string;
}

export default function Gender({ gender }: Props) {
  if (gender === "男")
    return (
      <>
        <div className="text-blue-500 text-xl">
          <AiOutlineMan />
        </div>
      </>
    );
  if (gender === "女")
    return (
      <>
        <div className="text-pink-500 text-xl">
          <AiOutlineWoman />
        </div>
      </>
    );
  if (gender === "未知")
    return (
      <>
        <div className="text-pink-500 text-xl">
          <BsFillQuestionCircleFill />
        </div>
      </>
    );
  return <></>;
}
