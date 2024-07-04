import { createViewModal } from "../components/viewModal.js";
function viewModalFunc(){
        // Get all the card elements
    const cards = document.querySelectorAll(".card-view-modal");

    // Function to open the view modal
    const openViewModal = () => {
       document.body.style.overflow = "hidden";
    };

    // Function to close the view modal
    const closeViewModal = () => {
        document.querySelector('#viewModalSelection').innerHTML = '';
        document.body.style.overflow = "auto";
    };

    // Add event listeners to each card element
    cards.forEach((card) => {
        card.addEventListener("click", (e) => {
            e.preventDefault();
            // Get the id of the clicked card
            const id = card.getAttribute("id")
            // Get the array of entries from local storage
            let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
            // Find the entry with the matching id
            const entry = entries.filter((item) => item.id == id)[0];
            // Create the view modal using the createViewModal function
            document.querySelector('#viewModalSelection').innerHTML = createViewModal(entry.title,entry.content,entry.date);
            // Open the view modal
            openViewModal();
        });
    });
    // Add a window.test function to close the view modal
    window.close = closeViewModal;
}
export { viewModalFunc }