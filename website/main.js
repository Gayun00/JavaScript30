const $navBar = document.querySelector(".nav-bar");
const $navBarHeight = $navBar.getBoundingClientRect().height
// console.log($navBarHeight)
document.addEventListener("scroll", () => {
  // console.log(window.scrollY)
  if(window.scrollY > $navBarHeight) {
    // console.log("more than that")
    $navBar.classList.add("nav-bar-background")
  } else {
    $navBar.classList.remove("nav-bar-background")
  }
})