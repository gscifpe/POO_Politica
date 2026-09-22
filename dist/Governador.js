"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Governador = void 0;
const Executivo_1 = require("./Executivo");
class Governador extends Executivo_1.Executivo {
    estado;
    qntdSecretarios;
    constructor(nome, partido, esfera, poder, localT, enderecoT, remuneracao, estado, qntdSecretarios) {
        super(nome, partido, esfera, poder, localT, enderecoT, remuneracao);
        this.estado = estado;
        this.qntdSecretarios = qntdSecretarios;
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getQntdSecretarios() {
        return this.qntdSecretarios;
    }
    setQntdSecretarios(qntdSecretarios) {
        this.qntdSecretarios = qntdSecretarios;
    }
    exercerMandato() {
        console.log("O Governador exerce seu mandato gerindo a Polícia Militar, " +
            "decretando calamidade, coordenando a educação e a saúde, " +
            "administrando as rodovias e enviando PEC.");
    }
    gerirPoliciaMilitar() {
        return "Polícia Militar gerenciada.";
    }
    decretarCalamidade() {
        return "Estado de calamidade decretado.";
    }
    coordenarEducacaoSaude() {
        return "Educação e saúde coordenadas.";
    }
    administrarRodovias() {
        return "Rodovias administradas.";
    }
    enviarPec() {
        return "PEC enviada.";
    }
}
exports.Governador = Governador;
//# sourceMappingURL=Governador.js.map