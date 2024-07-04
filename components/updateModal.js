// function for create update modal
import { closeIcon } from "./closeIcon.js";
const createUpdateModal = () => {
    return `
     <div id="updateModal" class="modal-update">
          <div class="modal-content">
            <div class="modal-container">
              <span class="closeUpdate">
                ${closeIcon}
              </span>
            </div>
          <div class="modal-img-container">
            <img
            src="./assets/update.svg"
            alt="Update Icon"
            class="modal-img"
          />
          <p>Are sure you want to edit this ?</p>
          </div>
            <div class="modal-container btn-modal-container">

              <my-button 
              btn-type="primary" 
              title="No" 
              id="cancelButtonUpdate"
              ></my-button>

              <my-button onClick="confirmUpdate()" 
              title="Yes, sure"
              ></my-button>

            </div>
          </div>
      </div>
    `
}

// This class defines a custom HTML element for the update modal.
class UpdateModal extends HTMLElement {
    constructor() {
        super();
    }
  connectedCallback() {
    // Set the innerHTML of the element to the update modal HTML
    this.innerHTML = createUpdateModal();
  }
}
// Define the custom element with the name 'update-modal'
window.customElements.define('update-modal', UpdateModal)
