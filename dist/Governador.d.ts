import { Executivo } from "./Executivo";
export declare class Governador extends Executivo {
    private estado;
    private qntdSecretarios;
    constructor(nome: string, partido: string, esfera: string, poder: string, localT: string, enderecoT: string, remuneracao: number, estado: string, qntdSecretarios: number);
    getEstado(): string;
    setEstado(estado: string): void;
    getQntdSecretarios(): number;
    setQntdSecretarios(qntdSecretarios: number): void;
    exercerMandato(): void;
    gerirPoliciaMilitar(): string;
    decretarCalamidade(): string;
    coordenarEducacaoSaude(): string;
    administrarRodovias(): string;
    enviarPec(): string;
}
//# sourceMappingURL=Governador.d.ts.map