import { Legislativo } from "./Legislativo";

export class Senador extends Legislativo {
    private estado: string;
    private anoEleito: number;

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localT: string,
        enderecoT: string,
        remuneracao: number,
        estado: string,
        anoEleito: number
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
        this.anoEleito = anoEleito;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getAnoEleito(): number {
        return this.anoEleito;
    }

    public setAnoEleito(anoEleito: number): void {
        this.anoEleito = anoEleito;
    }

    public exercerMandato(): void {
        console.log("O Senador exerce seu mandato aprovando autoridades, " +
        "julgando crimes de responsabilidade e representando os interesses do estado.");
    }

    public legislar(): void {
        console.log("Senador está legislando.");
    }

    public aprovarAutoridade(): string {
        return "Autoridade aprovada.";
    }

    public julgarCrimeResponsabilidade(): string {
        return "Julgamento realizado.";
    }

    public representarInteresseEstado(): string {
        return "Interesses do estado representados.";
    }
}