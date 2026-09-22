"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Executivo = void 0;
const Politico_1 = require("./Politico");
class Executivo extends Politico_1.Politico {
    sancionarLei() {
        console.log("Lei sancionada.");
    }
    vetarLei() {
        console.log("Lei vetada.");
    }
    elaborarEnviarPPA_LDO_LOA() {
        return "PPA, LDO e LOA elaborados e enviados.";
    }
    proporLei() {
        console.log("Projeto de lei proposto.");
    }
}
exports.Executivo = Executivo;
//# sourceMappingURL=Executivo.js.map