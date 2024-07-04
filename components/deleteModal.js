import { closeIcon } from "./closeIcon.js";
// function create delete modal
const createDeleteModal = () =>{
    return `
    <div id="deleteModal" class="modal">
        <div class="modal-content">
          <div class="modal-container">
            <span class="close">
              ${closeIcon}
            </span>
          </div>
         <div class="modal-img-container">
            <img
            src="./assets/delete.svg"
            alt="Delete Icon"
            class="modal-img"
            />
            <p>Do you really want to delete this ?</p>
         </div>
          <div class="modal-container btn-modal-container">
            <my-button 
            btn-type="primary" 
            title="No" 
            id="cancelButton" 
            >No</my-button>

            <my-button 
            onClick="confirmDelete()"
            title="Yes, delete"
            ></my-button>
          </div>
        </div>
    </div>
    `
}

// This class defines a custom HTML element for the Delete modal.

class DeleteModel extends HTMLElement {
    constructor() {
        super();
    }
    // When the element is added to the DOM, set its innerHTML to the delete modal HTML
    connectedCallback() {
        const id = this.getAttribute('id') || null;
        this.innerHTML = createDeleteModal(id);
    }
}
// Define the custom element with the name 'delete-modal'
window.customElements.define('delete-modal', DeleteModel)

// Export the createDeleteModal function for use in other modules
export { createDeleteModal };
