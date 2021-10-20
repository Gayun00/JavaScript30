const $navBar = document.querySelector(".nav-bar");
const $navBarHeight = $navBar.getBoundingClientRect().height

const $menuHome = document.querySelector(".menu--home");
const $menuAbout = document.querySelector(".menu--about");
const $menuSkills = document.querySelector(".menu--skills");
const $menuMyWork = document.querySelector(".menu--my-work");
const $menuContact = document.querySelector(".menu--contact");

const $profileButton = document.querySelector(".profile__button");


const $skills = document.querySelector(".skills");
const $contact = document.querySelector(".contact");

document.addEventListener("scroll", () => {
  if(window.scrollY > $navBarHeight) {
    $navBar.classList.add("nav-bar-background")
  } else {
    $navBar.classList.remove("nav-bar-background")
  }
})

$menuContact.addEventListener("click",scrollToContact);
function scrollToContact(){
  $contact.scrollIntoView({behavior:"smooth"})
}

$profileButton.addEventListener("click", scrollToContact)