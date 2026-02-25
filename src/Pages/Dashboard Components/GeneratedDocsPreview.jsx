import React from "react";

import { jsPDF } from "jspdf";

function GeneratedDocsPreview({ document }) {
  
  const handlePdfDownload = () => {
    const doc = new jsPDF();

    doc.text(document, 10, 10);
    doc.save("Report.pdf");
  };

  return (
    <>
      <div className="w-90 bg-white border-l border-[#ddd] p-6 overflow-auto">
        <h3 className="text-lg font-semibold mb-4">Generated Report</h3>

        {document ? (
          <pre className="whitespace-pre-wrap text-sm mb-[10vh]">{document}</pre>
        ) : (
          <p className="text-gray-400">No document generated yet.</p>
        )}
        <div className="absolute bottom-0 w-80 flex justify-center pt-7 border-t border-[#aaa] bg-white">
          <button
            onClick={handlePdfDownload}
            className="px-6 py-3 bg-emerald-600 text-white rounded-md relative bottom-3 w-[90%] hover:bg-emerald-900 cursor-pointer"
          >
            Dowload
          </button>
        </div>
      </div>
    </>
  );
}

export default GeneratedDocsPreview;
