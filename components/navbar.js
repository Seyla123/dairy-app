import { setLogoutStatus } from "../scripts/auth.js";
const createNavbar = () => {
    return `
    <!-- navbar -->
     <nav>
      <div class="container-nav border">
        <button id="logout-btn">
          <img src="../assets/logout.png" alt="">
          <span>logout</span>
        </button>
        <div class="profile-container">
          <p id="profile-username"></p>
          <button>
            <img src="../assets/pf.png" alt="profile" />
          </button>
        </div>
      </div>
     </nav>
    `
}

class Navbar extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = createNavbar();
        this.setUpEvent();
    }
    setUpEvent(){
      const logoutBtn = this.querySelector("#logout-btn");
      logoutBtn.addEventListener("click", () => {
      setLogoutStatus();
      })
            // get username login and display
      const userLogined = JSON.parse(localStorage.getItem("isLogined"));
      const profileUsername = document.querySelector("#profile-username");
      profileUsername.innerHTML = userLogined;
  }
}
window.customElements.define('navbar-component', Navbar)