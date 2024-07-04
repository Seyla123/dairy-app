// import modal component
import '../components/updateModal.js';
import '../components/deleteModal.js';
import '../components/viewModal.js';

// import script for delete , update , view modal
import './deleleModal.js'
import './updateModal.js'
import { viewModalFunc } from './viewModal.js';

//import create entry card function  
import { createEntryCard } from "../components/entryCard.js";

// import 'not found data ' section
import '../components/notFoundData.js';

// import authorize function
import { authorize } from './auth.js'

// call the authorize function
authorize();

// function for delete data entry
const deleteEntry = (id) => {
  // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  // Filter the array of entry without the specified ID.(like delete)
  const update = entries.filter((entry) => entry.id != id);
  // Update the array of entries in local storage with the filtered array.
  localStorage.setItem("diaryEntries", JSON.stringify(update));
  // Re-render the display of entries.
  displayEntry();
};

/**
 * Toggles the edit mode and updates the submit button and cancel button visibility.
 * If edit mode is true, it updates the submit button text to "Update" and adds a click event listener to the cancel button.
 * On click, it sets edit mode to false, hides the cancel button, sets the submit button text to "Add Entry", and resets the form.
 * If edit mode is false, it sets edit mode to false and hides the cancel button.
 */
let editMode = false;
const btnSubmit = document.querySelector(".form button");
const containerListCard = document.querySelector("#list-card");
const form = document.querySelector(".form");

// function for toggle update
const toggleUpdateMode = () =>{
  const updateCancel = document.querySelector("#updateCancel");
  updateCancel.style.display = "block"; // Show the cancel button
  const form = document.querySelector(".form");
  
  if(editMode){ 
    btnSubmit.innerHTML = "Update"; // Update the submit button text
    editMode = true;
    updateCancel.addEventListener("click", () => {
      editMode = false;
      updateCancel.style.display = "none"; // Hide the cancel button
      btnSubmit.textContent = "Add Entry"; // Set the submit button text to "Add Entry"
      form.reset(); // Reset the form
    });
  }else{
    editMode = false;
    btnSubmit.innerHTML = "Add Entry"; // Set the submit button text to "Add Entry"
    updateCancel.style.display = "none"; // Hide the cancel button
  }
}
// function add entry
const addEntry = (entry) => {
  // Parse the entries from local storage, or create an empty array if no entries exist.
  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  // Add the new entry to the array of entries.
  entries.push(entry);
  // Store the updated array of entries back to local storage.
  localStorage.setItem("diaryEntries", JSON.stringify(entries));
  form.reset();
};

// get data entry when form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

  // Get the value of the title, content, and date input fields.
  const title = document.querySelector("#title").value;
  const content = document.querySelector("#content").value;
  const date = document.querySelector("#date").value;

  // Get the id for the entry. If we are in edit mode,
  //use the length of the entries array as the id (since each entry should have a unique id).
  const id = editMode ? document.querySelector("#id").value : entries.length;
  const entry = { id, title, content, date };

  // add or update data entry
  editMode ? openUpdateModal(entry): addEntry(entry);
  // reset form and re-renderdisplay data entry
  displayEntry();
  
});
// function for display data entry
const displayEntry = () => {
  // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  if(entries.length > 0){
    entries.reverse();
    containerListCard.innerHTML = entries
      .map((item) => {
        // Create a card element for the current entry and append it to the HTML for the container of card elements.
        return createEntryCard(item.id, item.title, item.content, item.date);
      })
      .join("");
      viewModalFunc();
  }else{
    containerListCard.innerHTML=`<not-found-data></not-found-data>`;
  }

};
// Render Display all entries in the card list
displayEntry();
/**
 * edit an entry with the given id
 * @param {string} id - The id of the entry to update
 */
const editEntry = (id) => {
  // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
  // Set edit mode to true
  editMode = true;
  // auto scroll to top
  scrollToTop();
  // Change the submit button text to 'Update'
  toggleUpdateMode()
  // Find the index of the entry with the given id
  const index = entries.findIndex((item) => item.id == id);
  if (index !== -1) {
    // Get the entry with the given id
    const entry = entries[index];
    // Set the input value to form the entry
    document.querySelector("#id").value = entry.id;
    document.querySelector("#title").value = entry.title;
    document.querySelector("#content").value = entry.content;
    document.querySelector("#date").value = entry.date;
  }
};
// auto scroll to top 
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
/**
 * Update an entry with the given id in the local storage
 * @param {Object} entry - The entry object to update
 */
const updateEntry = (entry) => {
  const form = document.querySelector(".form");
  
  // Retrieve the array of entries from local storage, or create an empty array if no entries exist.
  let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

  // Find the index of the entry with the given id
  const index = entries.findIndex((item) => item.id == entry.id);
  if (index !== -1) {
    // Update the entry with the given id in the array
    entries[index] = entry;
    // Store the updated array of entries back to local storage
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    // Set edit mode to false
    editMode = false;
    // Change the submit button text to 'Add Entry'
    btnSubmit.innerHTML = "Add Entry";
    toggleUpdateMode()
    // Re-render the display of entries
    displayEntry();
    
    form.reset();
  }
};
// Expose the functions to the window object
window.updateEntry = editEntry;
window.confirmEdit = updateEntry;
window.deleteEntry = deleteEntry;
