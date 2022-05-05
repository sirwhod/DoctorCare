// Função responsável por adicionar outra function chamada onScroll
window.addEventListener('scroll', onScroll )

//Executando a função onScroll para evitar bugs
onScroll()
// Função responsável por mudar as cores do Nav
function onScroll() {
  showNavOnScroll(),
  showBackToTopButtonOnScroll()
}

function showNavOnScroll() {
  navigation.classList.add('scroll')

  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  backToTopButton.classList.add('show')

  if (scrollY < 500) {
    backToTopButton.classList.remove('show')
  }
}


// Função responsável por abrir o Menu
function openMenu() {
  document.body.classList.add('menu-expanded')
}

// Função responsável por fechar o Menu
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home,
   #home img, 
   #home .stats, 
   #services,
   #services header,
   #services .card,
   #about,
   #about header,
   #about .content,
   #contact,
   #contact  header,
   #contact .content,
   #footer
  `)
