import React, { useEffect, useState } from "react";
import Network from "types/network";
import { UpdatePost } from "app/utils";
import { useRouter } from "next/router";
import { INITIAL_NETWORK } from "app/constant";

interface Props {
  fetchPath: string;
  method: string;
}

export default function NetworkForm({ fetchPath, method }: Props) {
  const router = useRouter();
  const [form, setForm] = useState<Network>(INITIAL_NETWORK);

  if (method === "PUT") {
    useEffect(() => {
      fetch(fetchPath)
        .then((res) => res.json())
        .then((data) => {
          setForm(data);
        });
    }, []);
  }

  const handleChange = (e: any) => {
    const { value, name, type, checked } = e.target;

    setForm((state) => ({
      ...state,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  return (
    <div className="mt-5 md:mt-0">
      <div className="overflow-hidden shadow sm:rounded-md">
        <div className="px-4 py-5 sm:p-6 text-gray-50">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium">名</label>
              <input
                name="firstname"
                onChange={handleChange}
                value={form.firstname}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium">姓</label>
              <input
                name="lastname"
                onChange={handleChange}
                value={form.lastname}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-2 sm:col-span-1">
              <label className="block text-sm font-medium">性别</label>
              <select
                name="gender"
                onChange={handleChange}
                value={form.gender}
                className="bg-zinc-800 mt-1 block w-full rounded-md border border-zinc-500 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>男</option>
                <option>女</option>
                <option>未知</option>
              </select>
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label className="block text-sm font-medium">教育</label>
              <select
                name="education"
                onChange={handleChange}
                value={form.education}
                className="bg-zinc-800 mt-1 block w-full rounded-md border border-zinc-500 py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option>博士</option>
                <option>硕士</option>
                <option>本科</option>
                <option>大专</option>
                <option>普高</option>
                <option>职高</option>
                <option>未知</option>
              </select>
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label className="block text-sm font-medium">日期</label>
              <input
                name="birthday"
                onChange={handleChange}
                value={form.birthday}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label className="block text-sm font-medium">邮件</label>
              <input
                name="email"
                onChange={handleChange}
                value={form.email}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium">电话</label>
              <input
                name="phone"
                onChange={handleChange}
                value={form.phone}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium">QQ</label>
              <input
                name="qq"
                onChange={handleChange}
                value={form.qq}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium">微信</label>
              <input
                name="wechat"
                onChange={handleChange}
                value={form.wechat}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label className="block text-sm font-medium">地址</label>
              <input
                name="address"
                onChange={handleChange}
                value={form.address}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium">关系</label>
              <input
                name="relation"
                onChange={handleChange}
                value={form.relation}
                className="bg-zinc-800 mt-1 block w-full rounded-md border p-2 border-zinc-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
        <div className="bg-zinc-600 px-4 py-3 text-right sm:px-6">
          <button
            onClick={() => {
              UpdatePost(method, form);
            }}
            className="inline-flex justify-center rounded-md border border-transparent bg-sky-400 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
