import { Legislativo } from "./Legislativo";

export class DeputadoFederal extends Legislativo {
    private bancada: string;

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localT: string,
        enderecoT: string,
        remuneracao: number,
        bancada: string
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

        this.bancada = bancada;
    }

    public getBancada(): string {
        return this.bancada;
    }

    public setBancada(bancada: string): void {
        this.bancada = bancada;
    }

    public exercerMandato(): void {
        console.log("O Deputado Federal exerce seu mandato votando PEC, " +
        "criando CPI Nacional, votando o PPA Nacional e a LDO Nacional " +
        "e propondo leis complementares.");
    }

    public legislar(): void {
        console.log("Deputado Federal está legislando.");
    }

    public votarPEC(): string {
        return "PEC votada.";
    }

    public criarCPINacional(): string {
        return "CPI Nacional criada.";
    }

    public votarPPANacional(): string {
        return "PPA Nacional votado.";
    }

    public votarLDONacional(): string {
        return "LDO Nacional votada.";
    }

    public proporLeiComplementar(): string {
        return "Lei complementar proposta.";
    }
}