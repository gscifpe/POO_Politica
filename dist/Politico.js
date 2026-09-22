"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Politico = void 0;
class Politico {
    nome;
    partido;
    esfera;
    poder;
    localT;
    enderecoT;
    remuneracao;
    listaProjetos;
    constructor(nome, partido, esfera, poder, localT, enderecoT, remuneracao) {
        this.nome = nome;
        this.partido = partido;
        this.esfera = esfera;
        this.poder = poder;
        this.localT = localT;
        this.enderecoT = enderecoT;
        this.remuneracao = remuneracao;
        this.listaProjetos = [];
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getPartido() {
        return this.partido;
    }
    setPartido(partido) {
        this.partido = partido;
    }
    getEsfera() {
        return this.esfera;
    }
    setEsfera(esfera) {
        this.esfera = esfera;
    }
    getPoder() {
        return this.poder;
    }
    setPoder(poder) {
        this.poder = poder;
    }
    getLocalTrabalho() {
        return this.localT;
    }
    setLocalTrabalho(local) {
        this.localT = local;
    }
    getEnderecoTrabalho() {
        return this.enderecoT;
    }
    setEnderecoTrabalho(endereco) {
        this.enderecoT = endereco;
    }
    getRemuneracao() {
        return this.remuneracao;
    }
    setRemuneracao(remuneracao) {
        this.remuneracao = remuneracao;
    }
    getListaProjetos() {
        return this.listaProjetos;
    }
    setListaProjetos(listaProjetos) {
        this.listaProjetos = listaProjetos;
    }
    adicionarProjeto(titulo) {
        this.listaProjetos.push(titulo);
    }
}
exports.Politico = Politico;
//# sourceMappingURL=Politico.js.map