import { Executivo } from "./Executivo";
 export class Presidente extends Executivo {
    private qntdMinistros: number;

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localT: string,
        enderecoT: string,
        remuneracao: number,
        qntdMinistros: number
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

        this.qntdMinistros = qntdMinistros;
    }

    public getQntdMinistros(): number {
        return this.qntdMinistros;
    }

    public setQntdMinistros(qntdMinistros: number): void {
        this.qntdMinistros = qntdMinistros;
    }

    public exercerMandato(): void {
        console.log("O Presidente exerce seu mandato nomeando e exonerando ministros, " +
        "comandando as Forças Armadas, editando medidas provisórias " +
        "e representando o país.");
    }

    public nomearExonerarMinistros(): string {
        return "Ministro nomeado ou exonerado.";
    }

    public comandarForcasArmadas(): string {
        return "Forças Armadas comandadas.";
    }

    public editarMedidasProvisorias(): void {
        console.log("Medida provisória editada.");
    }

    public representarPais(): string {
        return "País representado internacionalmente.";
    }
}