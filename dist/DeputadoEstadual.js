"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeputadoEstadual = void 0;
const Legislativo_1 = require("./Legislativo");
class DeputadoEstadual extends Legislativo_1.Legislativo {
    estado;
    listaComissoes;
    constructor(nome, partido, esfera, poder, localT, enderecoT, remuneracao, estado) {
        super(nome, partido, esfera, poder, localT, enderecoT, remuneracao);
        this.estado = estado;
        this.listaComissoes = [];
    }
    getEstado() {
        return this.estado;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    getListaComissoes() {
        return this.listaComissoes;
    }
    setListaComissoes(listaComissoes) {
        this.listaComissoes = listaComissoes;
    }
    adicionarComissao(comissao) {
        this.listaComissoes.push(comissao);
    }
    exercerMandato() {
        console.log("O Deputado Estadual exerce seu mandato votando o PPA Estadual, " +
            "votando a LDO Estadual, propondo emendas à Constituição Estadual " +
            "e criando CPI Estadual.");
    }
    legislar() {
        console.log("Deputado Estadual está legislando.");
    }
    votarPPAEstadual() {
        return "PPA Estadual votado.";
    }
    votarLDOEstadual() {
        return "LDO Estadual votada.";
    }
    proporEmendaConstituicaoEstadual() {
        return "Emenda à Constituição Estadual proposta.";
    }
    criarPCIEstadual() {
        return "CPI Estadual criada.";
    }
}
exports.DeputadoEstadual = DeputadoEstadual;
//# sourceMappingURL=DeputadoEstadual.js.map