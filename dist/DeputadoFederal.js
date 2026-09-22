"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoFederal = void 0;
const Legislativo_1 = require("./Legislativo");
class DeputadoFederal extends Legislativo_1.Legislativo {
    bancada;
    constructor(nome, partido, esfera, poder, localT, enderecoT, remuneracao, bancada) {
        super(nome, partido, esfera, poder, localT, enderecoT, remuneracao);
        this.bancada = bancada;
    }
    getBancada() {
        return this.bancada;
    }
    setBancada(bancada) {
        this.bancada = bancada;
    }
    exercerMandato() {
        console.log("O Deputado Federal exerce seu mandato votando PEC, " +
            "criando CPI Nacional, votando o PPA Nacional e a LDO Nacional " +
            "e propondo leis complementares.");
    }
    legislar() {
        console.log("Deputado Federal está legislando.");
    }
    votarPEC() {
        return "PEC votada.";
    }
    criarCPINacional() {
        return "CPI Nacional criada.";
    }
    votarPPANacional() {
        return "PPA Nacional votado.";
    }
    votarLDONacional() {
        return "LDO Nacional votada.";
    }
    proporLeiComplementar() {
        return "Lei complementar proposta.";
    }
}
exports.DeputadoFederal = DeputadoFederal;
//# sourceMappingURL=DeputadoFederal.js.map