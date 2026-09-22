import { Legislativo } from "./Legislativo";
export declare class Senador extends Legislativo {
    private estado;
    private anoEleito;
    constructor(nome: string, partido: string, esfera: string, poder: string, localT: string, enderecoT: string, remuneracao: number, estado: string, anoEleito: number);
    getEstado(): string;
    setEstado(estado: string): void;
    getAnoEleito(): number;
    setAnoEleito(anoEleito: number): void;
    exercerMandato(): void;
    legislar(): void;
    aprovarAutoridade(): string;
    julgarCrimeResponsabilidade(): string;
    representarInteresseEstado(): string;
}
//# sourceMappingURL=Senador.d.ts.map