//vaiables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector("#height")

form.onsubmit = function(event) {
  event.preventDefault()

  const wight = inputWeight.value
  const height = inputHeight.value
}