"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presidente = void 0;
const Executivo_1 = require("./Executivo");
class Presidente extends Executivo_1.Executivo {
    qntdMinistros;
    constructor(nome, partido, esfera, poder, localT, enderecoT, remuneracao, qntdMinistros) {
        super(nome, partido, esfera, poder, localT, enderecoT, remuneracao);
        this.qntdMinistros = qntdMinistros;
    }
    getQntdMinistros() {
        return this.qntdMinistros;
    }
    setQntdMinistros(qntdMinistros) {
        this.qntdMinistros = qntdMinistros;
    }
    exercerMandato() {
        console.log("O Presidente exerce seu mandato nomeando e exonerando ministros, " +
            "comandando as Forças Armadas, editando medidas provisórias " +
            "e representando o país.");
    }
    nomearExonerarMinistros() {
        return "Ministro nomeado ou exonerado.";
    }
    comandarForcasArmadas() {
        return "Forças Armadas comandadas.";
    }
    editarMedidasProvisorias() {
        console.log("Medida provisória editada.");
    }
    representarPais() {
        return "País representado internacionalmente.";
    }
}
exports.Presidente = Presidente;
//# sourceMappingURL=Presidente.js.map