const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))

function highlightLink() {
  console.log('highlightLink');
  console.log(this)
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);
  highlight.style.width = `${linkCoords.width}px`;
  highlight.style.height = `${linkCoords.height}px`;
  highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`;
}

