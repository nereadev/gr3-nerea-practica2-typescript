"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direcciones = void 0;
var Direcciones = /** @class */ (function () {
    function Direcciones(calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        this._calle = calle,
            this._numero = numero,
            this._piso = piso,
            this._letra = letra,
            this._codigoPostal = codigoPostal,
            this._poblacion = poblacion,
            this._provincia = provincia;
    }
    return Direcciones;
}());
exports.Direcciones = Direcciones;
