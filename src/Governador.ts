import { Executivo } from "./Executivo";

export class Governador extends Executivo {
    private estado: string;
    private qntdSecretarios: number;

    constructor(
        nome: string,
        partido: string,
        esfera: string,
        poder: string,
        localT: string,
        enderecoT: string,
        remuneracao: number,
        estado: string,
        qntdSecretarios: number
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
        this.qntdSecretarios = qntdSecretarios;
    }

    public getEstado(): string {
        return this.estado;
    }

    public setEstado(estado: string): void {
        this.estado = estado;
    }

    public getQntdSecretarios(): number {
        return this.qntdSecretarios;
    }

    public setQntdSecretarios(qntdSecretarios: number): void {
        this.qntdSecretarios = qntdSecretarios;
    }

    public exercerMandato(): void {
        console.log( "O Governador exerce seu mandato gerindo a Polícia Militar, " +
        "decretando calamidade, coordenando a educação e a saúde, " +
        "administrando as rodovias e enviando PEC.");
    }

    public gerirPoliciaMilitar(): string {
        return "Polícia Militar gerenciada.";
    }

    public decretarCalamidade(): string {
        return "Estado de calamidade decretado.";
    }

    public coordenarEducacaoSaude(): string {
        return "Educação e saúde coordenadas.";
    }

    public administrarRodovias(): string {
        return "Rodovias administradas.";
    }

    public enviarPec(): string {
        return "PEC enviada.";
    }
}