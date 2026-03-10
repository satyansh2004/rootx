import { useAuth } from "../Context/useAuth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

import { useEffect, useRef, useState } from "react";

import { Outlet, NavLink } from "react-router-dom";

import {
  Home,
  Map as MapIcon,
  LogOut,
  Sprout,
  HistoryIcon,
  ChartAreaIcon,
  Wand2,
  Menu,
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
  const [width, setWidth] = useState(window.innerWidth);

  const handleLogout = async () => {
    await signOut(auth);
  };

  const sideRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if (width >= 1024) {
      sideRef.current.style.display = "block";
    } else {
      sideRef.current.style.display = "none";
    }
  }, [width]);

  const handleGenerate = async (data) => {
    if (!selectedLocation?.lat) {
      alert("Please select a location on the map before generating.");
      return;
    }
    setIsGenerating(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/generate-report`,
        {
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
        },
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to generate report");
      }

      setGeneratedDoc(result.report);
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
      alert("AI generation failed");
    }

    setIsGenerating(false);
  };

  const handleSideMenuVisibility = () => {
    if (sideRef.current.style.display == "block") {
      sideRef.current.style.display = "none";
    } else {
      sideRef.current.style.display = "block";
    }
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (sideRef.current && !sideRef.current.contains(event.target) && width < 1024) {
        sideRef.current.style.display = "none";
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [width]);

  return (
    <>
      <div className="flex overflow-y-scroll h-auto lg:h-screen bg-stone-50 font-sans text-slate-800">
        <aside
          ref={sideRef}
          className="w-64 bg-emerald-600 text-white flex flex-col shadow-xl fixed lg:static top-0 left-0 h-screen z-[9999] justify-between"
        >
          <div>
            <div className="p-4 flex items-center gap-3 border-b border-emerald-800">
              <Sprout className="text-lime-400" size={32} />
              <span className="font-bold text-xl tracking-tight">
                AI Farming Advisor
              </span>
            </div>

            <nav className="flex-1 mt-6 px-4 space-y-2">
              {[
                { to: "/dashboard", icon: <Home size={20} />, label: "Home" },
                {
                  to: "/dashboard/history",
                  icon: <HistoryIcon size={20} />,
                  label: "History",
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
          </div>

          <div className="mt-auto space-y-4 absolute bottom-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex flex-row justify-center items-center gap-2 py-2 px-3 rounded-md border cursor-pointer mb-2 border-slate-100 text-black bg-slate-100 bottom-2 w-[90%] mx-auto transition hover:bg-slate-200"
            >
              Generate
              <Wand2 size={20} />
            </button>

            <div className="p-4 border-t border-emerald-800 truncate">
              <span>{user?.email}</span>
            </div>
          </div>
        </aside>

        <main className="flex-1 flex flex-col">
          <header className="h-16 bg-white border-b border-stone-200 flex items-center justify-between px-8 shadow-sm">
            <h2 className="text-md md:text-xl font-semibold text-emerald-900 flex flex-row gap-3 items-center">
              <span
                className="lg:hidden cursor-pointer"
                onClick={handleSideMenuVisibility}
              >
                <Menu size={30} />
              </span>
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

          <div className="flex flex-col md:flex-row flex-1 overflow-auto">
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
