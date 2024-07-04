
document.addEventListener("DOMContentLoaded", () => {

  const deleteButton = document.getElementById("deleteButton");
  const deleteModal = document.getElementById("deleteModal");
  const closeButton = document.querySelector(".close");
  const cancelButton = document.getElementById("cancelButton");


   //Open the delete modal by displaying it and preventing the body from scrolling.
    const openDeleteModal = () => {
    deleteModal.style.display = "flex";
    document.body.style.overflow = "hidden";
  };



 //Close the delete modal by hiding it and allowing the body scroll.
  const closeDeleteModal = () => {
    deleteModal.style.display = "none";
    document.body.style.overflow = "auto";
  };


  // Add click event listeners to the delete button and its close and cancel buttons
  // and a window click event listener to close the delete modal when the modal is clicked outside
  deleteButton?.addEventListener("click", openDeleteModal);
  closeButton?.addEventListener("click", closeDeleteModal);
  cancelButton?.addEventListener("click", closeDeleteModal);
  window.addEventListener("click", (event) => {
    if (event.target == deleteModal) {
      deleteModal.style.display = "none";
    }
  });


  // The id of the entry to be deleted. Set to null initially.
  let deleteId = null; 
  
  /**
   * Sets the deleteId to the given id and opens the delete modal.
   *
   * @param {number} id - The id of the entry to be deleted.
   */
  const setDeleteId = (id) => {
    // Set the deleteId to the given id.
    deleteId = id;
    // Open the delete modal.
    openDeleteModal();
  };


  /**
   * Confirm the deletion of an entry.
   * If there is a valid deleteId, it will be used to delete the entry.
   * After the deletion, the delete modal will be hidden and the deleteId will be reset.
   */
  const confirmDelete = () => {
    if (deleteId != null) {
      deleteModal.style.display = "none";
      document.body.style.overflow = "auto";
      deleteEntry(deleteId);
      deleteId = null;
    } 
  };
  // Add function to window  
  window.setDeleteId = setDeleteId;
  window.confirmDelete = confirmDelete;
});


