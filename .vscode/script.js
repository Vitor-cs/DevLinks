function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains ('light')) {
  //html.classList.remove('light')
  //} else {
  // html.classList.add('light')
  //}
  html.classList.toggle("light")
  // pegar tag img
  const img = document.querySelector("#profile img")
  //substituir avatar
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
