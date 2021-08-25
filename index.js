// Create a condition that targets viewports at least 768px wide
const mobile = window.matchMedia('(max-width: 600px)')

function handleTabletChange(e) {
  if (e.matches) {
    console.log('Media Query Matched! 600px')
  }
}

// Register event listener
mobile.addEventListener( 'change', handleTabletChange)

// Initial check
handleTabletChange(mobile)
