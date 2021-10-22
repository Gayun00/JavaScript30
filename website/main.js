const $navBar = document.querySelector(".nav-bar");
const $navBarHeight = $navBar.getBoundingClientRect().height;

const $arrowButton = document.querySelector(".arrow-button");

const $profile = document.querySelector(".profile");
const $profileHeight = $profile.getBoundingClientRect().height;


const $menuHome = document.querySelector(".menu--home");
const $menuAbout = document.querySelector(".menu--about");
const $menuSkills = document.querySelector(".menu--skills");
const $menuMyWork = document.querySelector(".menu--my-work");
const $menuContact = document.querySelector(".menu--contact");
const $profileButton = document.querySelector(".profile__button");
const $skills = document.querySelector(".skills");
const $contact = document.querySelector(".contact");
const $menu = document.querySelector(".menu");
const $navButton = document.querySelector(".nav_button");
const $menuButtons = document.querySelectorAll(".menu__button");
const $contentContainers = document.querySelectorAll(".content__container");
const $myWorkContent = document.querySelector(".my-work__content");

$menuContact.addEventListener("click",scrollToContact);
$profileButton.addEventListener("click", scrollToContact);
$arrowButton.addEventListener("click", scrollToTop);
$menuButtons.forEach((menuButton)=>menuButton.addEventListener("click", filterProject))
$navButton.addEventListener("click", spreadMenu);
$menu.addEventListener("click", handleSelectedNav);
document.addEventListener("scroll", showNavBar);
document.addEventListener("scroll", transparentProfile);

function showNavBar(){
    if(window.scrollY > $navBarHeight) {
      $navBar.classList.add("nav-bar-background")
    } else {
      $navBar.classList.remove("nav-bar-background")
    }
}

function transparentProfile () {
  if(window.scrollY > $profileHeight-300) {
    $profile.classList.add("profile-hide");
    $arrowButton.classList.add("arrow-button-show")
  } else {
    $profile.classList.remove("profile-hide");
    $arrowButton.classList.remove("arrow-button-show");
  }
}

function scrollToContact(){
  $contact.scrollIntoView({behavior:"smooth"});
}

function scrollToTop () {
  $profile.scrollIntoView({behavior: "smooth"});
}

function filterProject(ev) {
  const target = ev.target.name;

  $myWorkContent.classList.add('anim-out');
  setTimeout(()=> {
    $contentContainers.forEach(($contentContainer) => {
      if(target === '*' || target === $contentContainer.dataset.key) {
        $contentContainer.classList.remove('content__container-hide');
      } else {
        $contentContainer.classList.add('content__container-hide');
      }
    })
    $myWorkContent.classList.remove('anim-out');
  }, 100)

  const $activeMenuButton = document.querySelector('.menu__button-selected');

  $activeMenuButton.classList.remove('menu__button-selected');
  ev.target.classList.add('menu__button-selected');
}

function spreadMenu() {
  $menu.classList.toggle("show")
}

function handleSelectedNav (ev) {
  const target = ev.target;
  if(target.nodeName !== 'SPAN') return;
  const $selectedNavButton = document.querySelector('.menu-selected');
  $selectedNavButton.classList.remove("menu-selected");
  target.classList.add("menu-selected");
}

// intersectionObserver...

const sectionIds = [
  '#profile',
  '#about-me',
  '#skills',
  '#my-work',
  '#contact',
]

const sections = sectionIds.map(id => document.querySelector(id));
const navItems = sectionIds.map(id =>
  document.querySelector(`[data-link="${id}"]`)
);

console.log(sections, navItems);

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      const index = sectionIds.indexOf(`#${entry.target.id}`);
      console.log(index, entry.target.id);
    }
  });
};
let observer = new IntersectionObserver(callback, options);
sections.forEach(section => observer.observe(section));
