import React, { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { jsPDF } from "jspdf";
function ReportViewModal({ isOpen, onClose }) {

  const [reportFirebase, setReportFirebase] = useState("")
  
  const handleFirestoreDownload = () => {
    const doc = new jsPDF();
    
    doc.text(reportFirebase, 10, 10);
    doc.save("ReportFirebase.pdf");
  }

  useEffect(() => {
    if(isOpen) {
      setReportFirebase("Hello")
    }
  }, [isOpen])
  if (!isOpen) return null;
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]">
          <div className="bg-white w-[90%] max-w-[50%] rounded-xl shadow-2xl p-6 relative">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-emerald-700">
                Preview Report
              </h2>

              <button
                onClick={onClose}
                className="text-gray-500 hover:text-black text-lg"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-scroll">
              {reportFirebase}
            </div>

            <div className="w-full py-3 mt-3">
              <button
                onClick={handleFirestoreDownload}
              className="relative bottom-0 left-0 p-1.5 px-4 rounded-md bg-emerald-500 text-white border-0 cursor-pointer flex gap-3 items-center">
                Dowload PDF <Download size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ReportViewModal;
