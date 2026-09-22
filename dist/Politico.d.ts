export declare abstract class Politico {
    private nome;
    private partido;
    private esfera;
    private poder;
    private localT;
    private enderecoT;
    private remuneracao;
    private listaProjetos;
    constructor(nome: string, partido: string, esfera: string, poder: string, localT: string, enderecoT: string, remuneracao: number);
    getNome(): string;
    setNome(nome: string): void;
    getPartido(): string;
    setPartido(partido: string): void;
    getEsfera(): string;
    setEsfera(esfera: string): void;
    getPoder(): string;
    setPoder(poder: string): void;
    getLocalTrabalho(): string;
    setLocalTrabalho(local: string): void;
    getEnderecoTrabalho(): string;
    setEnderecoTrabalho(endereco: string): void;
    getRemuneracao(): number;
    setRemuneracao(remuneracao: number): void;
    getListaProjetos(): string[];
    setListaProjetos(listaProjetos: string[]): void;
    adicionarProjeto(titulo: string): void;
    abstract exercerMandato(): void;
}
//# sourceMappingURL=Politico.d.ts.map