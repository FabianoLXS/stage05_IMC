import { Modal } from './modal.js'
import { alertError } from "./alert-error.js"
import { IMC } from './utils.js'

// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')


form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlertError =
      console.log(notANumber(weight)) || console.log(notANumber(height))
  
    if(showAlertError) {
        console.log('mostrar o alerta de erro')
        return;
    }
    

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

/* Fechar a janela de erro ao digitar no campo (o nome do evento é input)*/

inputWeight.onimput = () => alertError.close()
inputHeight.onimput = () => alertError.close()
