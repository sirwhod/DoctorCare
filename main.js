// Função responsável por adicionar outra function chamada onScroll
window.addEventListener('scroll', onScroll)

//Executando a função onScroll para evitar bugs
onScroll()
// Função responsável por mudar as cores do Nav
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

// Função que faz a sessões do menu serem marcadas conforme posição na página
//Lógica: Criar uma linha imaginária no meio da página segundo sua viewPort, Sempre que o topo estiver a cima da linha e o final da seção estiver abaixo da linha, a seção será marcada, quando o final da seção passar a linha, a próxima seção será marcada
function activateMenuAtCurrentSection(section) {
  // Declarando Variável, targetLine soma o valor do ScrollY com a metade da altura da tela
  // Linha alvo
  const targetLine = scrollY + innerHeight / 2

  //Verificar se a seção passou da linha
  //Quais dados vou precisar?

  //Resgatando informação do inicio da seção, primeiro argumento é o ID da seção e o segundo é o valor do inicio da seção
  // Topo da seção
  const sectionTop = section.offsetTop
  //Resgatando informação do Tamanho da seção, primeiro argumento é o ID da seção e o segundo é o valor do tamanho total da seção da seção
  // Altura da seção
  const sectionHeigth = section.offsetHeight

  // O topo da seção chegou ou ultrapassou a linha alvo
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  // Verificar se a base está acima da linha alvo

  //informações dos dados e da lógica
  const sectionEndsAt = sectionTop + sectionHeigth

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // Limites da seção passou da linha

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

// Função que faz a barra de Nav trocar de cor

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
