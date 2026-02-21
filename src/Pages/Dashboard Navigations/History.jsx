import React from "react";
import HistoryCard from "./History Components/HistoryCard";

function History() {
  return (
    <>
      <div className="my-3 flex gap-5 flex-wrap justify-between">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </>
  );
}

export default History;
