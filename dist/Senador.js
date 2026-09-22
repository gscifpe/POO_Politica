"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Senador = void 0;
const Legislativo_1 = require("./Legislativo");
class Senador extends Legislativo_1.Legislativo {
    estado;
    anoEleito;
    constructor(nome, partido, esfera, poder, localT, enderecoT, remuneracao, estado, anoEleito) {
        super(nome, partido, esfera, poder, localT, enderecoT, remuneracao);
        this.estado = estado;
        this.anoEleito = anoEleito;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getAnoEleito() {
        return this.anoEleito;
    }
    setAnoEleito(anoEleito) {
        this.anoEleito = anoEleito;
    }
    exercerMandato() {
        console.log("O Senador exerce seu mandato aprovando autoridades, " +
            "julgando crimes de responsabilidade e representando os interesses do estado.");
    }
    legislar() {
        console.log("Senador está legislando.");
    }
    aprovarAutoridade() {
        return "Autoridade aprovada.";
    }
    julgarCrimeResponsabilidade() {
        return "Julgamento realizado.";
    }
    representarInteresseEstado() {
        return "Interesses do estado representados.";
    }
}
exports.Senador = Senador;
//# sourceMappingURL=Senador.js.map