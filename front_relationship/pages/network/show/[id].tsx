import Gender from "components/gender";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaBirthdayCake, FaBook, FaPhoneAlt } from "react-icons/fa";
import { SiTencentqq } from "react-icons/si";
import { RiWechatFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import Network from "types/network";
import { BiNetworkChart } from "react-icons/bi";

interface Props {
  network: Network;
}

export default function NetworkShow({ network }: Props) {
  return (
    <div className="p-4 select-none">
      <div className="flex items-center">
        <div className="p-2 text-3xl">{network.lastname}</div>
        <div className="p-2 text-3xl">{network.firstname}</div>
        <Gender gender={network.gender} />
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <FaBirthdayCake />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.birthday}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <FaBook />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.education}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <AiFillMail />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.email}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <FaPhoneAlt />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.phone}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <SiTencentqq />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.qq}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <RiWechatFill />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.wechat}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <IoLocation />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.address ? network.address : "未知"}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <BiNetworkChart />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {network.relation}
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  if (process.env.SKIP_BUILD_STATIC_GENERATION) {
    return {
      paths: [],
      fallback: "blocking",
    };
  }

  const res = await fetch("http://localhost:8080/network");
  const networks: Network[] = await res.json();

  const paths = networks.map((network) => ({
    params: { id: network.id.toString() },
  }));

  return { paths, fallback: false };
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const res = await fetch(`http://localhost:8080/network/${params.id}`);
  const network: Network = await res.json();

  return {
    props: { network },
  };
}
