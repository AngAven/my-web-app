

// Create a condition that targets viewports at least 600px wide
const mobile = window.matchMedia('(max-width: 600px)')

function handleTabletChange(e) {
  if (e.matches) {
    // console.log('Media Query Matched! 600px')
  }
}

mobile.addEventListener( 'change', handleTabletChange)

// Initial check
handleTabletChange(mobile)

// Modales
const portfolioCards = Array.from(document.querySelectorAll('.portfolio-article-item'))
const portfolioDescription = Array.from(document.querySelectorAll('.description'))

function handlePortFolioCard(e){
  e.stopPropagation()
  console.log('this', this)
  console.log('e.eventPhase', e.eventPhase)
  console.log('e.target', e.target)
}

const handlePortfolioDescription = (e) => {
}

portfolioCards.forEach(item => {
  item.addEventListener('click', handlePortFolioCard, true)
})

portfolioDescription.forEach(item => {
  item.addEventListener('click', handlePortfolioDescription)
})
