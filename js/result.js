function populateSavedData() {
  document.querySelector('#phone').innerHTML = localStorage.getItem('phone')
  document.querySelector('#name').innerHTML = localStorage.getItem('name')
  document.querySelector('#dob').innerHTML = localStorage.getItem('dob')
  document.querySelector('#email').innerHTML = localStorage.getItem('email')
  document.querySelector('#no-email').innerHTML = localStorage.getItem('no-email')
}

populateSavedData()