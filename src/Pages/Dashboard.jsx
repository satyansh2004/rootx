import { useAuth } from "../Context/useAuth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { db } from "../firebase"; 
import { collection, addDoc, serverTimestamp } from "firebase/firestore";


import { useState } from "react";

import { Outlet, NavLink } from "react-router-dom";

import {
  Home,
  Map as MapIcon,
  LogOut,
  Sprout,
  HistoryIcon,
  ChartAreaIcon,
  Wand2
} from "lucide-react";

import GeneratedDocsPreview from "./Dashboard Components/GeneratedDocsPreview.jsx";

import ModalInput from "./Dashboard Components/ModalInput.jsx";

export default function Dashboard() {
  const { user } = useAuth();

  const [selectedLocation, setSelectedLocation] = useState({
    lat: null,
    lng: null,
    district: "",
    country: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedDoc, setGeneratedDoc] = useState(null);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const handleGenerate = async (data) => {
    if (!selectedLocation?.lat) {
      alert("Please select a location on the map before generating.");
      return;
    }
    setIsGenerating(true);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/generate-report`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        district: selectedLocation.district,
        country: selectedLocation.country,
        lat: selectedLocation.lat,
        lng: selectedLocation.lng,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Failed to generate report");
    }

//     try {
// await addDoc(collection(db, "reports"), {
//       ...data,
//       aiReport: result.report,
//       createdAt: serverTimestamp(),
//     });
//     } catch {
//       alert("Database save failed, but AI generation succeeded. Here's the report:\n\n" + result.report);
//     }
    

    // alert("AI Report Generated & Saved");

    setGeneratedDoc(result.report);
    setIsModalOpen(false);
  } catch (error) {
    console.error(error);
    alert("AI generation failed");
  }

  setIsGenerating(false);
  };

  return (
    <>
      <div className="flex h-screen bg-stone-50 font-sans text-slate-800">
        <aside className="w-64 bg-emerald-600 text-white flex flex-col shadow-xl">
          <div className="p-4 flex items-center gap-3 border-b border-emerald-800">
            <Sprout className="text-lime-400" size={32} />
            <span className="font-bold text-xl tracking-tight">AI Farming Advisor</span>
          </div>

          <nav className="flex-1 mt-6 px-4 space-y-2">
            {[
              { to: "/dashboard", icon: <Home size={20} />, label: "Home" },
              {
                to: "/dashboard/history",
                icon: <HistoryIcon size={20} />,
                label: "History",
              },
              {
                to: "/dashboard/charts",
                icon: <ChartAreaIcon size={20} />,
                label: "Charts",
              },
            ].map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/dashboard"}
                className={({ isActive }) =>
                  `w-full flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-lime-500 text-emerald-950 font-bold shadow-md"
                      : "hover:bg-emerald-800 text-emerald-100"
                  }`
                }
              >
                {item.icon}
                {item.label}
              </NavLink>
            ))}
          </nav>

          <button
            onClick={() => setIsModalOpen(true)}
            className="flex flex-row justify-center items-center gap-2 py-2 px-3 rounded-md border cursor-pointer mb-2 border-slate-100 text-black bg-slate-100 relative bottom-2 w-[90%] mx-auto"
          >
            Generate
            <Wand2 size={20}/>
          </button>

          <div className="p-4 border-t border-emerald-800 flex flex-col gap-3">
            <span>{user?.email}</span>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          
          <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8 shadow-sm">
            <h2 className="text-xl font-semibold text-emerald-900">
              AI Farming Advisor Dashboard
            </h2>

            <div className="relative w-30">
              <button
              className="w-full flex items-center gap-4 px-4 py-2 text-red-300 hover:bg-red-900/90 rounded-lg bg-red-900/60"
              onClick={handleLogout}
            >
              <LogOut size={20} /> Logout
            </button>
            </div>
          </header>

          <ModalInput
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onGenerate={handleGenerate}
            isGenerating={isGenerating}
            location={selectedLocation}
          />

          <div className="flex-1 flex overflow-hidden">
            <div className="flex-1 overflow-auto p-4">
              <Outlet context={{ selectedLocation, setSelectedLocation }} />
            </div>

            <GeneratedDocsPreview document={generatedDoc} />
          </div>
        </main>
      </div>
    </>
  );
}
