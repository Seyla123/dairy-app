// create modal container , for update modal , view modal , detele modal
const addModalContainer = () =>{
    return ` 
        <!-- Container for the view modal selection -->
            <div id="viewModalSelection">
            </div>
            <!-- Container for all modals -->
            <div id="modal">
            <!-- Delete modal component -->
            <delete-modal></delete-modal>
            <!-- Update modal component -->
            <update-modal></update-modal>
            </div>
    
    `
}
export { addModalContainer }