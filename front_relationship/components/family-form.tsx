import React from "react";
import { useRouter } from "next/router";
import Family from "types/family";
import { SubmitHandler, useForm } from "react-hook-form";
import { EDUCATION } from "app/constant";

const inputStyle =
  "bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm";

interface Props {
  family: Family;
  method: string;
}

export default function FamilyForm({ family, method }: Props) {
  const router = useRouter();
  const id = router.query.id as string;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Family>();

  const onSubmit: SubmitHandler<Family> = (data) => {
    if (method === "PUT") {
      fetch(`/api/family/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else if (method === "POST") {
      fetch(`/api/family`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      console.log("form error");
      return;
    }
    router.push("/family");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium">名</label>
          <input
            defaultValue={family.firstname}
            className={inputStyle}
            {...register("firstname")}
          />
        </div>
        <div className="col-span-6 sm:col-span-3">
          <label className="block text-sm font-medium">姓</label>
          <input
            defaultValue={family?.lastname}
            className={inputStyle}
            {...register("lastname")}
          />
        </div>
        <div className="col-span-2 sm:col-span-1">
          <label className="block text-sm font-medium">性别</label>
          <select
            defaultValue={family?.gender}
            {...register("gender")}
            className={inputStyle}
          >
            <option>男</option>
            <option>女</option>
            <option>未知</option>
          </select>
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label className="block text-sm font-medium">教育</label>
          <select
            defaultValue={family?.education}
            className={inputStyle}
            {...register("education")}
          >
            {EDUCATION.map((edu) => (
              <option key={edu.label}>{edu.value}</option>
            ))}
          </select>
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label className="block text-sm font-medium">日期</label>
          <input
            defaultValue={family?.birthday}
            className={inputStyle}
            {...register("birthday")}
          />
        </div>
        <div className="col-span-4 sm:col-span-2">
          <label className="block text-sm font-medium">邮件</label>
          <input
            defaultValue={family?.email}
            className={inputStyle}
            {...register("email")}
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label className="block text-sm font-medium">电话</label>
          <input
            defaultValue={family?.phone}
            className={inputStyle}
            {...register("phone")}
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label className="block text-sm font-medium">QQ</label>
          <input
            defaultValue={family?.qq}
            className={inputStyle}
            {...register("qq")}
          />
        </div>
        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
          <label className="block text-sm font-medium">微信</label>
          <input
            defaultValue={family?.wechat}
            className={inputStyle}
            {...register("wechat")}
          />
        </div>
        <div className="col-span-6 sm:col-span-4">
          <label className="block text-sm font-medium">地址</label>
          <input
            defaultValue={family?.address}
            className={inputStyle}
            {...register("address")}
          />
        </div>
        <div className="col-span-6">
          <label className="block text-sm font-medium">关系</label>
          <input
            defaultValue={family?.relation}
            className={inputStyle}
            {...register("relation")}
          />
        </div>
        <button
          className="inline-flex justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          type="submit"
        >
          Save
        </button>
      </div>
    </form>
  );
}
