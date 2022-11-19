import { useAppDispatch, useAppSelector } from "lib/hooks";
import { setSidebarActive } from "features/theme";
import { useRouter } from "next/router";

const links = [
  { id: 0, href: "/", msg: "主页" },
  { id: 1, href: "/network", msg: "人际" },
  { id: 2, href: "/family", msg: "亲属" },
  { id: 3, href: "/search", msg: "搜索" },
  { id: 4, href: "/create", msg: "新建" },
];

const nav = "hover:bg-zinc-800 flex items-center transition cursor-pointer p-3";

const navActive =
  "text-sky-400 bg-gradient-to-r from-gray-700 to-zinc-900 transition" +
  " " +
  nav;

const navDeactive = "text-cyan-50 " + " " + nav;

interface Props {
  opened: boolean;
}

export default function Sidebar({ opened }: Props) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const sidebarActive = useAppSelector((state) => state.theme.SidebarActive);
  return (
    <aside
      className={
        opened
          ? "z-10 w-64 h-full fixed overflow-y-auto px-3 py-4"
          : "z-10 w-0 fixed overflow-y-auto"
      }
    >
      {links.map((link) => (
        <div
          key={link.href}
          className={link.id === sidebarActive ? navActive : navDeactive}
          onClick={() => {
            router.push(link.href);
            dispatch(setSidebarActive(link.id));
          }}
        >
          <div className="font-bold transition">{link.msg}</div>
        </div>
      ))}
    </aside>
  );
}
