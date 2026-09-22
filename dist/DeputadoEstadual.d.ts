import { Legislativo } from "./Legislativo";
export declare class DeputadoEstadual extends Legislativo {
    private estado;
    private listaComissoes;
    constructor(nome: string, partido: string, esfera: string, poder: string, localT: string, enderecoT: string, remuneracao: number, estado: string);
    getEstado(): string;
    setEstado(estado: string): void;
    getListaComissoes(): string[];
    setListaComissoes(listaComissoes: string[]): void;
    adicionarComissao(comissao: string): void;
    exercerMandato(): void;
    legislar(): void;
    votarPPAEstadual(): string;
    votarLDOEstadual(): string;
    proporEmendaConstituicaoEstadual(): string;
    criarPCIEstadual(): string;
}
//# sourceMappingURL=DeputadoEstadual.d.ts.map