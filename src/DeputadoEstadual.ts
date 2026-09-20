import { Legislativo } from "./Legislativo";

export class DeputadoEstadual extends Legislativo {
    private estado: string;
    private listaComissoes: string[];

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localT: string,
        enderecoT: string,
        remuneracao: number,
        estado: string
    ) {
        super(
            nome,
            partido,
            esfera,
            poder,
            localT,
            enderecoT,
            remuneracao
        );

        this.estado = estado;
        this.listaComissoes = [];
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getListaComissoes(): string[] {
        return this.listaComissoes;
    }

    public setListaComissoes(listaComissoes: string[]): void {
        this.listaComissoes = listaComissoes;
    }

    public adicionarComissao(comissao: string): void {
        this.listaComissoes.push(comissao);
    }

    public exercerMandato(): void {
        console.log("O Deputado Estadual exerce seu mandato votando o PPA Estadual, " +
        "votando a LDO Estadual, propondo emendas à Constituição Estadual " +
        "e criando CPI Estadual.");
    }

    public legislar(): void {
        console.log("Deputado Estadual está legislando.");
    }

    public votarPPAEstadual(): string {
        return "PPA Estadual votado.";
    }

    public votarLDOEstadual(): string {
        return "LDO Estadual votada.";
    }

    public proporEmendaConstituicaoEstadual(): string {
        return "Emenda à Constituição Estadual proposta.";
    }

    public criarPCIEstadual(): string {
        return "CPI Estadual criada.";
    }
}