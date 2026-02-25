import React from "react";
import HistoryCard from "./History Components/HistoryCard";

function History() {
  return (
    <>
      <div className="my-3 flex gap-5 flex-wrap justify-evenly">
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
        <HistoryCard />
      </div>
    </>
  );
}

export default History;
