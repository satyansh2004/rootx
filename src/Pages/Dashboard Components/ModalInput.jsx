import React, { useState } from "react";
import { X } from "lucide-react";

export default function ModalInput({
  isOpen,
  onClose,
  onGenerate,
  isGenerating,
}) {
  const [cropMode, setCropMode] = useState("auto");
  const [risk, setRisk] = useState("lowRisk");
  const [selectedCrop, setSelectedCrop] = useState("");
  const [formData, setFormData] = useState({
    farmerName: "",
    cropType: "",
    soilPH: "",
    moisture: "",
    temperature: "",
    region: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  handleChange;

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  // Irrigation Options
  const irrigationOptions = [
    "Rain-fed",
    "Borewell",
    "Canal",
    "Drip",
    "Sprinkler",
  ];

  // Multi-select state
  const [selectedIrrigation, setSelectedIrrigation] = useState([]);

  // Toggle function
  const toggleIrrigation = (type) => {
    setSelectedIrrigation((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type],
    );
  };
  if (!isOpen) return null;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white w-[90%] max-w-[50%] rounded-xl shadow-2xl p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-emerald-700">
                Generate AI Agriculture Report
              </h2>

              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="h-[60vh] overflow-y-scroll">
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-gray-700">Location</label>
                  <div className="flex flex-row gap-3">
                    <div className="flex flex-col gap-1">
                      <label htmlFor="district">City</label>
                      <input
                        type="text"
                        name="district"
                        readOnly
                        value="Gorakhpur"
                        className="border p-2 rounded border-[#ccc]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        name="state"
                        readOnly
                        value="Uttar Pradesh"
                        className="border p-2 rounded border-[#ccc]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <label className="font-medium text-gray-700">
                    Crop Intent
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex gap-1">
                      <input
                        type="radio"
                        value="auto"
                        checked={cropMode === "auto"}
                        onChange={() => setCropMode("auto")}
                      />
                      Let AI Recommend
                    </label>

                    <span className="flex flex-row gap-3 items-center">
                      <label className="flex gap-1">
                        <input
                          type="radio"
                          value="specific"
                          checked={cropMode === "specific"}
                          onChange={() => setCropMode("specific")}
                        />
                        I Want Specific Crop
                      </label>

                      {cropMode === "specific" && (
                        <select
                          value={selectedCrop}
                          onChange={(e) => setSelectedCrop(e.target.value)}
                          className="border p-2 rounded mt-2"
                        >
                          <option value="">Select Crop</option>
                          <option value="wheat">Wheat</option>
                          <option value="rice">Rice</option>
                          <option value="maize">Maize</option>
                          <option value="sugarcane">Sugarcane</option>
                        </select>
                      )}
                    </span>
                  </div>
                </div>

                {/* Irrigation Type */}
                <div className="flex flex-col gap-2 mt-5">
                  <label className="font-medium text-gray-700">
                    Irrigation Type
                  </label>

                  <div className="flex flex-wrap gap-3">
                    {irrigationOptions.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => toggleIrrigation(type)}
                        className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                          selectedIrrigation.includes(type)
                            ? "bg-emerald-600 text-white border-emerald-600 scale-105"
                            : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <label className="font-medium text-gray-700">Land Size</label>
                  <div>
                    <input
                      type="number"
                      name="landSize"
                      placeholder="eg. 100"
                      className="border p-2 rounded border-[#ccc] mr-3"
                    />
                    <select
                      value={selectedCrop}
                      onChange={(e) => setSelectedCrop(e.target.value)}
                      className="border p-2 rounded border-[#ccc]"
                    >
                      <option value="">Select Crop</option>
                      <option value="wheat">Wheat</option>
                      <option value="rice">Rice</option>
                      <option value="maize">Maize</option>
                      <option value="sugarcane">Sugarcane</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <label className="font-medium text-gray-700">
                    Risk Appetite
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="hightRisk"
                      checked={risk === "hightRisk"}
                      onChange={() => setRisk("hightRisk")}
                    />
                    High
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="lowRisk"
                      checked={risk === "lowRisk"}
                      onChange={() => setRisk("lowRisk")}
                    />
                    Low
                  </label>
                </div>

                <div className="flex flex-col mt-5">
                  <label className="flex flex-col gap-3 font-semibold">
                    Local Practices (Optional)
                    <textarea
                      name="localPractises"
                      className="border border-[#ccc] rounded-md font-normal p-3 resize-none"
                      placeholder="Example: organic farming, mixed cropping, traditional seed saving"
                      rows={5}
                    ></textarea>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={isGenerating}
                className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700 cursor-pointer"
              >
                {isGenerating ? "Generating..." : "Generate Report"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
