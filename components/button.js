//This function creates a button element with the given title and type.

const createButton = (title, type,btnType,customClass)=>{
    return `
    <button type="${type}" class="${btnType == "primary" ? "btn-primary-100" : "btn"} ${customClass}">${title}</button>
    `
}

// This class defines a custom HTML element for a button.

class Button extends HTMLElement{
    // This method is called when the element is added to the DOM.
    connectedCallback(){
        const title = this.getAttribute('title');
        const btnType = this.getAttribute('btn-type');
        const type = this.getAttribute('type') || "";
        const customClass = this.getAttribute('custom-class') || "";
        this.innerHTML = createButton(title,type,btnType,customClass)
    }
}

// Register the custom element with the browser.
customElements.define('my-button', Button)

