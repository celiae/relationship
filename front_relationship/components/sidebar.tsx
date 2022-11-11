import { useAppDispatch, useAppSelector } from "app/hooks";
import { setSidebarActive } from "features/theme";
import { useRouter } from "next/router";

const links = [
  { id: 0, href: "/", msg: "Home" },
  { id: 1, href: "/network", msg: "Network" },
  { id: 2, href: "/family", msg: "Family" },
  { id: 3, href: "/search", msg: "Search" },
  { id: 4, href: "/create", msg: "Create" },
];

const nav = "hover:bg-zinc-800 flex items-center transition cursor-pointer p-3";

const navActive =
  "text-sky-400 bg-gradient-to-r from-gray-700 to-zinc-900 transition" +
  " " +
  nav;

const navDeactive = "text-cyan-50 " + " " + nav;

export default function Sidebar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const sidebarActive = useAppSelector((state) => state.theme.SidebarActive);
  return (
    <aside className="w-64">
      <div className="px-3 py-4 overflow-y-auto rounded">
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
      </div>
    </aside>
  );
}
