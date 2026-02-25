import React from "react";
import SignUp from "./SignUp";

import { Locate, Cloud, BrainCircuit, ShieldAlert } from "lucide-react";

function LandingPage() {
  return (
    <>
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold text-slate-900">RootX</div>

          <div className="hidden md:flex gap-8 text-slate-600 text-sm">
            <a href="#features" className="hover:text-emerald-600 transition">
              Features
            </a>
            <a href="#how" className="hover:text-emerald-600 transition">
              How it works
            </a>
            <a href="#problem" className="hover:text-emerald-600 transition">
              Problem
            </a>
          </div>

          <button 
          onClick={() => window.location.href = "/dashboard"}
          className="cursor-pointer bg-emerald-600 text-white px-5 py-2 rounded-4xl hover:bg-emerald-700 transition text-sm font-medium">
            SignUp
          </button>
        </div>
      </nav>


      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              AI-Powered Crop Planning
              <span className="block text-emerald-600">
                Built for Smarter Farming
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-lg">
              Generate location-based crop strategies, irrigation plans, and
              risk analysis using real-time weather and AI insights.
            </p>

            <div className="mt-8 flex gap-4">
              <button 
              onClick={() => window.location.href = "/dashboard"}
              className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-emerald-700 transition">
                Get Started
              </button>

              <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl hover:bg-slate-50 transition">
                Watch Demo
              </button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Data-driven. Location-aware. AI-generated reports.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-emerald-100 blur-3xl opacity-40 rounded-full"></div>

            <div className="relative bg-white border border-slate-200 rounded-2xl shadow-lg p-4">
              <img
                src="./public/image.png"
                alt="Dashboard Preview"
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24" id="problem">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Farming Decisions Shouldn't Be Guesswork
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
              Traditional crop planning often lacks data-driven insights,
              leading to unpredictable outcomes and financial risk.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                The Problem
              </h3>

              <ul className="space-y-4 text-slate-600">
                <li>• Uncertain weather patterns</li>
                <li>• Lack of location-specific guidance</li>
                <li>• Manual and outdated crop planning</li>
                <li>• High financial risk from poor decisions</li>
              </ul>
            </div>

            <div className="bg-white border border-slate-200 border-l-4 border-l-emerald-600 rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">
                Our Solution
              </h3>

              <ul className="space-y-4 text-slate-600">
                <li>• AI-powered crop recommendations</li>
                <li>• Real-time weather integration</li>
                <li>• Location-based farming insights</li>
                <li>• Downloadable structured reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20" id="how">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              How It Works
            </h2>
            <p className="text-slate-500 mt-3">
              Generate location-based farming insights in 3 simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Select Location
              </h3>
              <p className="text-slate-500">
                Choose your farm’s exact location directly from the map.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Enter Preferences
              </h3>
              <p className="text-slate-500">
                Add crop goals, irrigation type, and risk level.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-semibold mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Generate AI Report
              </h3>
              <p className="text-slate-500">
                Download a detailed, data-backed farming strategy instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20" id="features">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Powerful Features
            </h2>
            <p className="text-slate-500 mt-3">
              Designed to help farmers make smarter, data-driven decisions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-100 mb-5">
                <Locate size={20} className="text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Location-Based Insights
              </h3>
              <p className="text-slate-500 text-sm">
                Get crop recommendations tailored to your farm’s coordinates.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-100 mb-5">
                <Cloud size={20} className="text-sky-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Weather Integration
              </h3>
              <p className="text-slate-500 text-sm">
                Real-time and historical weather data analysis.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-emerald-100 mb-5">
                <BrainCircuit size={20} className="text-emerald-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                AI-Generated Reports
              </h3>
              <p className="text-slate-500 text-sm">
                Download structured farming strategies instantly.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-sky-100 mb-5">
                <ShieldAlert size={20} className="text-sky-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Risk-Based Planning
              </h3>
              <p className="text-slate-500 text-sm">
                Adjust crop strategy based on your risk appetite.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Start Planning Smarter Today
          </h2>

          <p className="text-emerald-100 mt-4 text-lg">
            Generate AI-powered farming strategies tailored to your land.
          </p>

          <div className="mt-8">
            <button
            onClick={() => window.location.href = "/dashboard"} 
            className="bg-white text-emerald-600 font-semibold px-8 py-3 rounded-xl hover:bg-slate-100 transition">
              Create Your First Report
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200 py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © 2026 RootX. All rights reserved.
          </p>

          {/* <div className="flex gap-6 text-slate-500 text-sm">
            <a href="#" className="hover:text-emerald-600 transition">
              Privacy
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Terms
            </a>
            <a href="#" className="hover:text-emerald-600 transition">
              Contact
            </a>
          </div> */}
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
