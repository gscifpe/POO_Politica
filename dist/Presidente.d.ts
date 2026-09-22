import { Executivo } from "./Executivo";
export declare class Presidente extends Executivo {
    private qntdMinistros;
    constructor(nome: string, partido: string, esfera: string, poder: string, localT: string, enderecoT: string, remuneracao: number, qntdMinistros: number);
    getQntdMinistros(): number;
    setQntdMinistros(qntdMinistros: number): void;
    exercerMandato(): void;
    nomearExonerarMinistros(): string;
    comandarForcasArmadas(): string;
    editarMedidasProvisorias(): void;
    representarPais(): string;
}
//# sourceMappingURL=Presidente.d.ts.map