import { Legislativo } from "./Legislativo";
export declare class DeputadoFederal extends Legislativo {
    private bancada;
    constructor(nome: string, partido: string, esfera: string, poder: string, localT: string, enderecoT: string, remuneracao: number, bancada: string);
    getBancada(): string;
    setBancada(bancada: string): void;
    exercerMandato(): void;
    legislar(): void;
    votarPEC(): string;
    criarCPINacional(): string;
    votarPPANacional(): string;
    votarLDONacional(): string;
    proporLeiComplementar(): string;
}
//# sourceMappingURL=DeputadoFederal.d.ts.map