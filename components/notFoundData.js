// create 'not found data' section
const createNotFoundData = ()=>{
    return `
    <div class="container-no-data">
          <img src="../assets/not-found.png" alt="">
            <h1>No Data Found</h1>
            <p>maybe your data is empty.</p>
    </div>
    `
}
class NotFoundData extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = createNotFoundData();
  }
}
customElements.define('not-found-data', NotFoundData)