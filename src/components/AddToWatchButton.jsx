import React from "react";

export default function AddToWatchButton({ movieBundle }) {
  function saveToList() {
    checkLocalStorage();
    let tempList = JSON.parse(localStorage.getItem("MovieHoundWatchList"));
    tempList.push(movieBundle);
    localStorage.setItem("MovieHoundWatchList", JSON.stringify(tempList));
  }

  function checkLocalStorage() {
    if (localStorage.getItem("MovieHoundWatchList")) {
      console.log("Loading list...");
    } else {
      localStorage.setItem("MovieHoundWatchList", [JSON.stringify([])]);
    }
  }
  return (
    <button
      className="add-to-watchlist-button"
      onClick={() => saveToList()}
    ></button>
  );
}
