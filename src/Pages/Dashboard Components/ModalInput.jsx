import { useState } from "react";
import { X } from "lucide-react";


export default function ModalInput({
  isOpen,
  onClose,
  onGenerate,
  isGenerating,
}) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  if (!isOpen) return null;

  return (
  <>
    {isOpen && (
      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">

        <div className="bg-white w-[90%] max-w-lg rounded-xl shadow-2xl p-6 relative">

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

            <input
              name="farmerName"
              value={formData.farmerName}
              onChange={handleChange}
              placeholder="Farmer Name"
              className="border p-2 rounded"
            />

            <input
              name="cropType"
              value={formData.cropType}
              onChange={handleChange}
              placeholder="Crop Type"
              className="border p-2 rounded"
            />

            <input
              name="soilPH"
              value={formData.soilPH}
              onChange={handleChange}
              placeholder="Soil pH"
              className="border p-2 rounded"
            />

            <input
              name="moisture"
              value={formData.moisture}
              onChange={handleChange}
              placeholder="Moisture"
              className="border p-2 rounded"
            />

            <input
              name="temperature"
              value={formData.temperature}
              onChange={handleChange}
              placeholder="Temperature"
              className="border p-2 rounded"
            />

            <button
              type="submit"
              disabled={isGenerating}
              className="bg-emerald-600 text-white py-2 rounded hover:bg-emerald-700"
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
