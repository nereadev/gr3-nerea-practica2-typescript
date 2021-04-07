import { Direcciones } from "./Direcciones.js"
import { Mails } from "./Mails.js"
import { Telefonos } from "./Telefonos.js"

class Persona {
  public _nombre
  public _apellidos
  public _edad
  public _dni
  public _cumpleaños
  public _colorFavorito
  public _sexo
  public _direcciones
  public _mails
  public _telefonos
  public _notas
  constructor
    (
      nombre: string,
      apellidos: string,
      edad: number,
      dni: string,
      cumpleaños: string,
      colorFavorito: string,
      sexo: string,
      direcciones: string,
      mails: string,
      telefonos: number,
      notas: string
    ) {
    this._nombre = nombre,
      this._apellidos = apellidos,
      this._edad = edad,
      this._dni = dni,
      this._cumpleaños = cumpleaños,
      this._colorFavorito = colorFavorito,
      this._sexo = sexo,
      this._direcciones = direcciones,
      this._mails = mails,
      this._telefonos = telefonos,
      this._notas = notas
  }
}

export { Persona };
