import React, { useState } from "react";

import { LucideView, Download, Trash, } from "lucide-react";
import ReportViewModal from "./ReportViewModal";

function HistoryCard() {
  const [isReportModalOpen, setReportModalOpen] = useState(false);

  const handleOnclose = () => {
    setReportModalOpen(false)
  }

  return (
    <>
      <div className="border border-1 border-[#aaa] rounded-md shadow-md bg-slate-200 h-fit w-[220px] flex flex-col gap-3">
        <div className="p-3 flex flex-col gap-2">
          <span>Region: Gorakhpur</span>
          <span>Generated: 21/02/2026</span>
        </div>
        <div className="w-full p-2 bg-slate-400 flex flex-row justify-around items-center">
          <button
          className="cursor-pointer hover:bg-slate-900 p-2 rounded-4xl hover:text-white focus:shadow-lg"
          onClick={() => {
            setReportModalOpen(true)
          }}
          >
            <LucideView />
          </button>
          <button className="cursor-pointer hover:bg-slate-900 p-2 rounded-4xl hover:text-white focus:shadow-lg">
            <Trash />
          </button>
        </div>
      </div>
      <ReportViewModal isOpen={isReportModalOpen} onClose={handleOnclose}/>
    </>
  );
}

export default HistoryCard;
