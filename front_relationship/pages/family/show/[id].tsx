import Gender from "components/gender";
import React from "react";
import { AiFillMail } from "react-icons/ai";
import { FaBirthdayCake, FaBook, FaPhoneAlt } from "react-icons/fa";
import { SiTencentqq } from "react-icons/si";
import { RiWechatFill } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import Family from "types/family";
import { BiNetworkChart } from "react-icons/bi";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "lib/utils";

interface Props {
  family: Family;
}

export default function FamilyShow() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR(`/api/family/${id}`, fetcher);
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="p-4 select-none">
      <div className="flex items-center">
        <div className="p-2 text-3xl">{data.lastname}</div>
        <div className="p-2 text-3xl">{data.firstname}</div>
        <Gender gender={data.gender} />
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <FaBirthdayCake />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.birthday}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <FaBook />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.education}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <AiFillMail />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.email}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <FaPhoneAlt />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.phone}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <SiTencentqq />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.qq}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <RiWechatFill />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.wechat}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <IoLocation />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.address ? data.address : "未知"}
        </div>
      </div>
      <div className="flex items-center m-2">
        <div className="pr-2">
          <BiNetworkChart />
        </div>
        <div className="hover:bg-sky-400 rounded-md px-2 cursor-pointer transition-all">
          {data.relation}
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

  const res = await fetch("http://localhost:8080/family");
  const networks: Family[] = await res.json();

  const paths = networks.map((family) => ({
    params: { id: family.id.toString() },
  }));

  return { paths, fallback: false };
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const res = await fetch(`http://localhost:8080/family/${params.id}`);
  const family: Family = await res.json();

  return {
    props: { family },
  };
}
