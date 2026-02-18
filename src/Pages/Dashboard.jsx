import React, { useState } from "react";
import { useAuth } from "../Context/useAuth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import {
  Home,
  Map as MapIcon,
  Crown,
  LogOut,
  Sprout,
  Search,
  Wheat,
  Droplets,
  Thermometer,
} from "lucide-react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  Marker,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import GeneratedDocsPreview from "./Dashboard Components/GeneratedDocsPreview.jsx";

export default function Dashboard() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await signOut(auth);
  };

  const [activeTab, setActiveTab] = useState("map");
  return (
    <>
<div className="flex h-screen bg-stone-50 font-sans text-slate-800">
      {/* SIDEBAR */}
      <aside className="w-64 bg-emerald-600 text-white flex flex-col shadow-xl z-20">
        <div className="p-6 flex items-center gap-3 border-b border-emerald-800">
          <Sprout className="text-lime-400" size={32} />
          <span className="font-bold text-xl tracking-tight">RootX</span>
        </div>
        <nav className="flex-1 mt-6 px-4 space-y-2">
          {[
            { id: "home", icon: <Home size={20} />, label: "Home" },
            { id: "map", icon: <MapIcon size={20} />, label: "Crop Map" },
            { id: "premium", icon: <Crown size={20} />, label: "Premium" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                activeTab === item.id
                  ? "bg-lime-500 text-emerald-950 font-bold shadow-lg"
                  : "hover:bg-emerald-800 text-emerald-100"
              }`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-emerald-800 flex flex-col gap-3">
          <span className="">{user?.email}</span>
          <button className="w-full flex items-center gap-4 px-4 py-3 text-red-300 hover:bg-red-900/90 rounded-lg bg-red-900/60" 
          onClick={handleLogout}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 flex flex-col relative">
        <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8 z-10 shadow-sm">
          <h2 className="text-xl font-semibold capitalize text-emerald-900">
            {activeTab} View
          </h2>
          <div className="relative w-96">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-stone-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search farm region..."
              className="w-full pl-10 pr-4 py-2 bg-stone-100 border border-transparent rounded-full focus:bg-white focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>
        </header>

        <div className="flex-1 flex overflow-hidden">
          {/* MAP */}
          <div className="flex-1 relative">
            <MapContainer
              center={[26.7606, 83.3732]}
              zoom={11}
              zoomControl={false}
              className="h-full w-full"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <ZoomControl position="bottomright" />
              <Marker position={[26.7606, 83.3732]}>
                <Popup>
                  <b>Gorakhpur Hub</b>
                  <br />
                  Status: Optimal for Wheat
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          <GeneratedDocsPreview />
        </div>
      </main>
    </div>
    </>
  );
}
