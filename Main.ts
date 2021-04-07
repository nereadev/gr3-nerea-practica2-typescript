import { Persona } from "./Persona.js"
import { Direcciones } from "./Direcciones.js"
import { Mails } from "./Mails.js"
import { Telefonos } from "./Telefonos.js"

const primeraPersona = new Persona
  (
    "Morgan",
    "Gutierrez",
    50,
    "89234876A",
    "15/08/1970",
    "rojo",
    "M",
    "Calle Sin Salida, 45",
    "morgangutierrez@gmail.com",
    666143543,
    "Es un excelente cocinero."
  )

console.log(primeraPersona)
