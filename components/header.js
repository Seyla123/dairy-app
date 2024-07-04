import { quotes } from "../data/quotes.js";
  //function to generate random quote
  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };
//function to create header
const createHeader = (customHeader,title,url,btnTitle,customBtn)=>{
    return `
    <!-- header section -->
    <header class="${customHeader}">
      <!-- header title -->
      <h1>${title}</h1>
      <p>"${getRandomQuote()}"</p>
      <!-- button to go to new entry index.html page -->
      <a href="${url}" >
        <my-button 
          title="${btnTitle}"
          type="button"
          custom-class="${customBtn}"
        ></my-button>
      </a>
    </header>
    `
}
//Class for custom HTML element for the header component.
class Header extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback(){
        // Set the inner HTML of the element to the header
        const customHeader = this.getAttribute('custom-header') || "";
        const title = this.getAttribute('header-title');
        const url = this.getAttribute('url-btn');
        const btnTitle = this.getAttribute('btn-title');
        const customBtn = this.getAttribute('custom-btn') || "";
    
        this.innerHTML = createHeader(customHeader,title,url,btnTitle,customBtn)
    }
}
// Define a custom HTML element for the header component
customElements.define("header-component",Header)

