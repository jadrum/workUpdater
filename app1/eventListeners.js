document.getElementById('working')
  .addEventListener('click', function() {
    store.dispatch({ type: 'WORKING' })
  })
document.getElementById('atMeeting')
  .addEventListener('click', function() {
    store.dispatch({ type: 'ATMEETING' })
  })
document.getElementById('onBreak')
  .addEventListener('click', function() {
    store.dispatch({ type: 'ONBREAK' })
  })
