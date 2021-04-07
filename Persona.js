import { Telefonos } from "./Telefonos.js";
console.log(Telefonos);
class Persona {
    constructor(nombre, apellidos, edad, dni, cumpleaños, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
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
            this._notas = notas;
    }
}
export { Persona };
