class Direcciones {
  _calle
  _numero
  _piso
  _letra
  _codigoPostal
  _poblacion
  _provincia
  constructor
    (
      calle: string,
      numero: number,
      piso: string,
      letra: string,
      codigoPostal: number,
      poblacion: string,
      provincia: string
    ) {
    this._calle = calle,
      this._numero = numero,
      this._piso = piso,
      this._letra = letra,
      this._codigoPostal = codigoPostal,
      this._poblacion = poblacion,
      this._provincia = provincia
  }
}

export { Direcciones };
