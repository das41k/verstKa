const burgerMenu = document.querySelector('.burger-icon')
const burgerNavLink = document.querySelectorAll('.nav__link')
const body = document.body
burgerMenu.addEventListener('click', () => {
  if (body.classList.contains('body--opened-menu')) {
      body.classList.remove('body--opened-menu')
  } else {
      body.classList.add('body--opened-menu')
  }
}) 
burgerNavLink.forEach((item) => {
  item.addEventListener('click', () => {
    if (body.classList.contains('body--opened-menu')) {
      body.classList.remove('body--opened-menu')
  }
  })
})
/////////////////////////////////////////////
const modal = document.querySelector('.modal')
const surprize = document.querySelector('.about__img-link')
const modalCancel = document.querySelector('.modal__cancel')
surprize.addEventListener('click', () => {
  if (!body.classList.contains('body--opened-modal')) {
    body.classList.add('body--opened-modal')
  }
})
// modal.addEventListener('click', (event) => {
//   const target = event.target
//   if (target.tagName !== 'modal__window' && body.classList.contains('body--opened-modal')) {
//     body.classList.remove('body--opened-modal')
//   }
// })
modalCancel.addEventListener('click', () => {
  if (body.classList.contains('body--opened-modal')) {
    body.classList.remove('body--opened-modal')
  }
})
///////////////////////////////
function toggleTab(e) {

  const tabControl = e.target.closest('.lesson__list__link')

  if (!tabControl) return
  e.preventDefault()
  if (tabControl.classList.contains('lesson__list-link--active')) return

  const tabContentID = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentID)
  const activeControl = document.querySelector('lesson__list-link--active')
  const activeContent = document.querySelector('lesson-content--show')

  if (activeControl) {
      activeControl.classList.remove('lesson__list-link--active')
  }
  if (activeContent) {
      activeContent.classList.remove('lesson-content--show')
  }

  tabControl.classList.add('lesson__list-link--active')
  tabContent.classList.add('lesson-content--show')
}