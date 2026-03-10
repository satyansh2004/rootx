import React from "react";

import { jsPDF } from "jspdf";
import ReactMarkdown from "react-markdown";
import { useRef } from "react"

function GeneratedDocsPreview({ document }) {

  const pdfRef = useRef();
  
  const handlePdfDownload = () => {
    const doc = new jsPDF();

    doc.html(pdfRef.current, {
      callback: function (doc) {
        doc.save("Report.pdf");
      },
      autoPaging: "text",
      margin: 10,
      width: 180,
      windowWidth: 800,
    });
  };

  return (
    <>
      <div className="w-auto md:w-90 bg-white min-h-[40vh] border-l border-[#ddd] md:h-[89vh] p-6 overflow-y-auto overflow-x-hidden relative">
        <h3 className="text-lg font-semibold mb-4">Generated Report</h3>

        {document ? (
          <pre className="whitespace-pre-wrap text-sm mb-[10vh] prose" ref={pdfRef}>
            <ReactMarkdown>
              {document}
              </ReactMarkdown>
            </pre>
        ) : (
          <p className="text-gray-400 mb-[10vh] md:mb-0">No generaed docs yet</p>
        )}
        <div className="absolute bottom-0 w-[100%] md:w-80 flex justify-center py-5 border-t border-[#aaa] bg-white">
          <button
            onClick={handlePdfDownload}
            className="px-6 py-3 bg-emerald-600 text-white rounded-md w-[90%] hover:bg-emerald-900 cursor-pointer"
          >
            Dowload
          </button>
        </div>
      </div>
    </>
  );
}

export default GeneratedDocsPreview;
