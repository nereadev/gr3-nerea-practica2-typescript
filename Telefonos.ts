class Telefonos {
  _tipo
  _numero
  constructor(tipo: string, numero: number) {
    this._tipo = tipo,
      this._numero = numero
  }
  hola() {
    console.log("Hola")
  }
}

export { Telefonos };
