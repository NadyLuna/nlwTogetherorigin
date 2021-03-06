/*  abre e fecha o menu quando clicar no icone: hamburguer e x */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar em um item do menu, esconder o menu */
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

function changeHeaderWhenScroll() {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
}

//* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true, /*para rodar com a bolinha do mouse */
  keyboard: true,/*para rodar com as setas do teclado */
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true // tamanho para os cards ficarem no tamanho certinho na sessão
    }
  }
})
/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = scrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)
/* Botão voltar para o topo */
const backToTopButton = document.querySelector('.back-to-top') // LEITURA: NO DOCUMENTO NO SELETOR PROCURE .back-to-top

function backToTop() {
  if (window.scrollY >= 560) { //WINDOW É A JANELA DO NAVEGADOR QUE ADICIONA UM EVENTO DE SCROLL
    backToTopButton.classList.add('show') //SE FOR MAIOR QUE 560, PEGUE MEU BOTÃO NA LISTA DE CLASSE DELE E ADICIONE SHOW
  } else {
    backToTopButton.classList.remove('show')
  }
}
/* Menu ativo conforme a seção visível na página */
const sections = document.querySelectorAll('main section[id]') // todas as tags que contenham um atributo "id" dentro dela.
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4 //calculo matemático

  for (const section of sections) {
    const sectionTop = section.offsetTop // pega a posição do topo da seção
    const sectionHeight = section.offsetHeight // pega a altura da seção
    const sectionId = section.getAttribute('id') // pega o atributo id da seção

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') 
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']') //href*= pega o atributo href da seção
        .classList.remove('active')
    }
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
  activateMenuAtCurrentSection()
})