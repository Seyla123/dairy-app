import { createRecentEntry } from "../components/recentEntry.js";
import { viewModalFunc } from "./viewModal.js";

// function for display data entry
const recentEntry = () => {
    const containerRecentEntry = document.querySelector(".recent-entries-container");
    // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    if(entries.length > 0){
      entries.reverse();
      containerRecentEntry.innerHTML = entries
        .map((item,index) => {
          // limited only 8 card
          if(index > 7){
            return;
          }
          // Create a card element for the current entry and append it to the HTML for the container of card elements.
          return createRecentEntry(item.id, item.title, item.content, item.date);
        })
        .join("");
        viewModalFunc();
    }else{
      containerRecentEntry.innerHTML=`<not-found-data></not-found-data>`;
    }
  };
  recentEntry()

  const entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  const entriesCount = document.querySelector("#total-entries");
  entriesCount.textContent = entries.length

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userCount = document.querySelector("#total-users");
  userCount.textContent = users.length