import { addModalContainer } from "./modelContainer.js";
import { info } from "../data/info.js";
// add modal container  function

// This function creates the footer
const createFooter = ()=>{
    return `
    ${addModalContainer()}
    <!-- Footer -->
    <footer>
        <!-- Footer container -->
        <div class="footer-container border">
            <div class="footer-content">
                <!-- Footer title -->
                <h1 class="footer-title">SEAV SEYLA</h1>
                <ul>
                    ${info.map((info)=>`<li>${info}</li>`).join('')}
                 </ul>   
            </div>
            <div class="copy-right">
                <p>&copy; 2024 Seav Seyla. All rights reserved.</p>
            </div>
        </div>
        
    </footer>
    `
}
// Class for custom HTML element for the footer component.
class Footer extends HTMLElement{
    constructor(){
        super()
    }
    /**
     * This method sets the inner HTML of the element to the footer.
     */
    connectedCallback(){
        this.innerHTML = createFooter()
    }
}
// Define a custom HTML element for the footer component
customElements.define("footer-component",Footer)


