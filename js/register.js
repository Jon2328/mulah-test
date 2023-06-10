function onBirthdayInput(evt, maxDigit) {
  // Only digit
  if (/\D/g.test(evt.target.value)) {
    evt.target.value = evt.target.value.replace(/\D/g, '')
  }

  if (evt.target.value.length > maxDigit) {
    evt.target.value = evt.target.value.substring(0, evt.target.value.length - 1)
  }
}

function onRegister() {
  const name = document.querySelector('#name').value
  const birthdayDay = document.querySelector('#day').value
  const birthdayMonth = document.querySelector('#month').value
  const birthdayYear = document.querySelector('#year').value
  const email = document.querySelector('#email').value
  const noemail = document.querySelector('#no-email').checked
  let haveError = false

  if (!name) {
    document.querySelector('#name-error').classList.add('show')
    haveError = true
  } else {
    document.querySelector('#name-error').classList.remove('show')
  }

  if (!birthdayDay.length === 0 || birthdayMonth.length === 0 || birthdayYear.length === 0) {
    document.querySelector('#birthday-error').classList.add('show')
    haveError = true
  } else {
    document.querySelector('#birthday-error').classList.remove('show')
  }

  if (!email) {
    document.querySelector('#email-error').classList.add('show')
    haveError = true
  } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
    document.querySelector('#email-error').classList.add('show')
    haveError = true
  } else {
    document.querySelector('#email-error').classList.remove('show')
  }

  if (haveError) {
    return
  }

  localStorage.setItem('name', name)
  localStorage.setItem('dob', `${birthdayYear}-${birthdayMonth}-${birthdayDay}`)
  localStorage.setItem('email', email)
  localStorage.setItem('no-email', noemail)

  window.location.href = 'result.html'
}