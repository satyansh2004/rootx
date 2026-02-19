import { useAuth } from "../Context/useAuth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { Outlet, NavLink } from "react-router-dom";

import {
  Home,
  Map as MapIcon,
  LogOut,
  Sprout,
  Search,
  Wheat,
  Droplets,
  Thermometer,
  HistoryIcon
} from "lucide-react";

import GeneratedDocsPreview from "./Dashboard Components/GeneratedDocsPreview.jsx";
import MapsDashboard from "./Dashboard Components/MapsDashboard.jsx";
import History from "./Dashboard Navigations/History.jsx";

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <>
      <div className="flex h-screen bg-stone-50 font-sans text-slate-800">

      {/* SIDEBAR (Always Visible) */}
      <aside className="w-64 bg-emerald-600 text-white flex flex-col shadow-xl">

        <div className="p-6 flex items-center gap-3 border-b border-emerald-800">
          <Sprout className="text-lime-400" size={32} />
          <span className="font-bold text-xl tracking-tight">RootX</span>
        </div>

        <nav className="flex-1 mt-6 px-4 space-y-2">
          {[
            { to: "/dashboard", icon: <Home size={20} />, label: "Home" },
            { to: "/dashboard/history", icon: <HistoryIcon size={20} />, label: "History" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/dashboard"}
              className={({ isActive }) =>
                `w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-lime-500 text-emerald-950 font-bold shadow-lg"
                    : "hover:bg-emerald-800 text-emerald-100"
                }`
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="p-4 border-t border-emerald-800 flex flex-col gap-3">
          <span>{user?.email}</span>
          <button
            className="w-full flex items-center gap-4 px-4 py-3 text-red-300 hover:bg-red-900/90 rounded-lg bg-red-900/60"
            onClick={handleLogout}
          >
            <LogOut size={20} /> Logout
          </button>
        </div>

      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 flex flex-col">

        {/* HEADER */}
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-xl font-semibold text-emerald-900">
            RootX Dashboard
          </h2>

          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search farm region..."
              className="w-full pl-10 pr-4 py-2 bg-stone-100 rounded-full focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </header>

        {/* CONTENT AREA */}
        <div className="flex-1 flex overflow-hidden">

          {/* CENTER CONTENT (Changes With Route) */}
          <div className="flex-1 overflow-auto p-6">
            <Outlet />
          </div>

          {/* GENERATED DOCS (Always Visible) */}
          <GeneratedDocsPreview />

        </div>

      </main>

    </div>
    </>
  );
}
