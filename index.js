// 'use Strict'

// Create a condition that targets viewports at least 600px wide
const mobile = window.matchMedia('(max-width: 600px)')

function handleTabletChange(e) {
  if (e.matches) {
    // console.log('Media Query Matched! 600px')
  }
}

mobile.addEventListener( 'change', handleTabletChange)

handleTabletChange(mobile)

// Modales
const portfolioCards = Array.from(document.querySelectorAll('.portfolio-article-item'))

const handlePortFolioCard = {
  element: null,
  getElement: function (){
   this.element = () => this
  },
  getTarget: function (e){

  },
  openModal: (e) => {
    const modal = document.querySelector('.btn')
    modal.click()
  }
}


portfolioCards.forEach(item => {
  item.addEventListener('click', handlePortFolioCard.openModal)
})
