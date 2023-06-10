function onPhoneNumberInput(evt) {
  const maxDigit = 10
  // Only digit
  if (/\D/g.test(evt.target.value)) {
    evt.target.value = evt.target.value.replace(/\D/g, '')
  }

  if (evt.target.value.length > maxDigit) {
    evt.target.value = evt.target.value.substring(0, evt.target.value.length - 1)
  }

}

function checkLoyaltyPoint() {

  const countryCode = document.querySelector('#country-code')
  const phoneNum = document.querySelector('#phone-num')
  const resultPhone = countryCode.value + phoneNum.value
  if (resultPhone === '+60173527250') {
    document.querySelector('#error').classList.remove('show')
    localStorage.setItem('phone', resultPhone)
    window.location.href = "./register.html"
  } else {
    document.querySelector('#error').classList.add('show')
  }
}