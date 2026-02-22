import React, { useState } from "react";
import { X } from "lucide-react";

export default function ModalInput({
  isOpen,
  onClose,
  onGenerate,
  isGenerating,
  location,
}) {
  const [formData, setFormData] = useState({
    cropMode: "auto",
    selectedCrop: "",
    irrigation: [],
    landSize: "",
    landSizeUnit: "",
    riskAppetite: "lowRisk",
    nutritionPreference: "Let AI Decide",
    localPractice: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate({
      ...formData,
      district: location?.district || "",
      country: location?.country || "",
    });
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
  const toggleIrrigation = (type) => {
    setFormData((prev) => ({
      ...prev,
      irrigation: prev.irrigation.includes(type)
        ? prev.irrigation.filter((item) => item !== type)
        : [...prev.irrigation, type],
    }));
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
                        value={location?.district || ""}
                        className="border p-2 rounded border-[#ccc]"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        name="country"
                        readOnly
                        value={location?.country || ""}
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
                        checked={formData.cropMode === "auto"}
                        onChange={() => setFormData({ ...formData, cropMode: "auto" })}
                      />
                      Let AI Recommend
                    </label>

                    <span className="flex flex-row gap-3 items-center">
                      <label className="flex gap-1">
                        <input
                          type="radio"
                          value="specific"
                          checked={formData.cropMode === "specific"}
                          onChange={() => setFormData({ ...formData, cropMode: "specific" })}
                        />
                        I Want Specific Crop
                      </label>

                      {formData.cropMode === "specific" && (
                        <select
                          value={formData.selectedCrop}
                          onChange={(e) => setFormData({ ...formData, selectedCrop: e.target.value })}
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
                          formData.irrigation.includes(type)
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
                      value={formData.landSize}
                      onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                      className="border p-2 rounded border-[#ccc] mr-3"
                    />
                    <select
                      value={formData.landSizeUnit}
                      onChange={(e) => setFormData({ ...formData, landSizeUnit: e.target.value })}
                      className="border p-2 rounded border-[#ccc]"
                    >
                      <option value="">Select Land Size</option>
                      <option value="acre">Acre</option>
                      <option value="hectare">Hectare</option>
                      <option value="bigha">Bigha</option>
                      <option value="gaj">Gaj</option>
                      <option value="square metre">Square Metre</option>
                      <option value="square foot">Square Foot</option>
                      <option value="katha">Katha</option>
                      <option value="decimal">Decimal</option>
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
                      checked={formData.riskAppetite === "hightRisk"}
                      onChange={() => setFormData({ ...formData, riskAppetite: "hightRisk" })}
                    />
                    High
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="lowRisk"
                      checked={formData.riskAppetite === "lowRisk"}
                      onChange={() => setFormData({ ...formData, riskAppetite: "lowRisk" })}
                    />
                    Low
                  </label>
                </div>

                <div className="flex flex-col gap-2 mt-5">
                  <label className="font-medium text-gray-700">
                    Soil Nutrition Approach
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="Organic / Natural"
                      checked={formData.nutritionPreference === "Organic / Natural"}
                      onChange={() => setFormData({ ...formData, nutritionPreference: "Organic / Natural" })}
                    />
                    Organic / Natural
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="Chemical Fertilizers"
                      checked={formData.nutritionPreference === "Chemical Fertilizers"}
                      onChange={() => setFormData({ ...formData, nutritionPreference: "Chemical Fertilizers" })}
                    />
                    Chemical Fertilizers
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="Mixed"
                      checked={formData.nutritionPreference === "Mixed"}
                      onChange={() => setFormData({ ...formData, nutritionPreference: "Mixed" })}
                    />
                    Mixed
                  </label>
                  <label className="flex gap-1">
                    <input
                      type="radio"
                      value="Let AI Decide"
                      checked={formData.nutritionPreference === "Let AI Decide"}
                      onChange={() => setFormData({ ...formData, nutritionPreference: "Let AI Decide" })}
                    />
                    Let AI Decide
                  </label>
                </div>

                <div className="flex flex-col mt-5">
                  <label className="flex flex-col gap-3 font-semibold">
                    Local Practices (Optional)
                    <textarea
                      name="localPractices"
                      className="border border-[#ccc] rounded-md font-normal p-3 resize-none"
                      placeholder="Example: organic farming, mixed cropping, traditional seed saving"
                      rows={5}
                      value={formData.localPractice}
                      onChange={(e) => setFormData({ ...formData, localPractice: e.target.value })}
                    ></textarea>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                disabled={!location?.lat}
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
