document.addEventListener("DOMContentLoaded", () => {
    const updateButton = document.getElementById("updateButton");
    const updateModal = document.getElementById("updateModal");
    const closeUpdate = document.querySelector(".closeUpdate");
    const cancelButtonUpdate = document.getElementById("cancelButtonUpdate");
    let entryUpdate = null;

    /**
     * Open the update modal by displaying it and preventing the body from scrolling.
     * @param {Object} entry - The entry object to be updated.
     */
    const openUpdateModal = (entry) => {
        // Store the entry object to be updated in a variable
        entryUpdate  = entry;
        updateModal.style.display = "flex";
        document.body.style.overflow = "hidden";
    };

    /**
     * Close the update modal by hiding it and allowing the body scroll.
     */
    const closeUpdateModal = () => {
        updateModal.style.display = "none";
        document.body.style.overflow = "auto";
    };

    // Add click event listeners to the update button, close button, and cancel button,
    updateButton?.addEventListener("click", openUpdateModal);
    closeUpdate?.addEventListener("click", closeUpdateModal);
    cancelButtonUpdate?.addEventListener("click", closeUpdateModal);
    // Add a window click event listener to close the update modal when the modal is clicked outside
    window.addEventListener("click", (event) => {
        if (event.target === updateModal) {
            updateModal.style.display = "none";
        }
    });
    /**
     * Confirm the update of an entry.
     * If there is a valid entryUpdate, it will be used to update the entry.
     * After the update, the update modal will be hidden and the entryUpdate will be reset.
     */
    const confirmUpdate = () => {
        if (entryUpdate) {
            updateModal.style.display = "none";
            document.body.style.overflow = "auto";
            confirmEdit(entryUpdate);
        }
    };


    // Expose the functions to the window object
    window.openUpdateModal = openUpdateModal;
    window.confirmUpdate = confirmUpdate;
});
