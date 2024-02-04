const showBtn = document.querySelector(".showBtn");
const sideBar = document.querySelector(".sideBar");

showBtn.onclick = function (e) {
  sideBar.classList.add("showSideBar");
  setTimeout(() => {
    document.querySelector(".no-overlay").classList.add("overlay");
  },1);
  const addCloseBtn = `<button class="closeBtn"><img src="./close.svg"/></button>
   <h1>welcome</h1>
  <p>This is the side bar</p>`;
sideBar.innerHTML = addCloseBtn;
  removeSideBar();
};


function removeSideBar() {
  const closeBtn = document.querySelector(".closeBtn");

  closeBtn.onclick = function (e) {
    sideBar.classList.remove("showSideBar");
    sideBar.classList.add("removeSideBar");
    setTimeout(() => {
      document.querySelector(".no-overlay").classList.remove("overlay");
    }, 3000);
    removeTags();
  };
  sideBar.classList.remove("removeSideBar");
}

function removeTags() {
  const sideBarTags = document.querySelectorAll(".sideBar *");
  for (let i = 0; i < sideBarTags.length; i++) {
    setTimeout(() => {
      sideBarTags[i].remove();
    }, 2500);
  }
}
