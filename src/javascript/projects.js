const projects = document.querySelectorAll('.project')


projects.forEach(element => {
  element.addEventListener('mousemove', function(e) {
    element.style.backgroundPositionX = -e.offsetX * 2 + "px";
    element.style.backgroundPositionY = -e.offsetY * 0.2 + "px";
  })
})