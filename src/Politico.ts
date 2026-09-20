export abstract class Politico {
    private nome:string
    private partido:string
    private esfera:string
    private poder:string
    private localT:string
    private enderecoT:string
    private remuneracao: number
    private listaProjetos: string[]

    constructor(nome:string, partido:string, esfera:string, poder:string, localT:string, enderecoT:string, remuneracao:number){
        this.nome = nome
        this.partido = partido
        this.esfera = esfera
        this.poder = poder
        this.localT = localT
        this.enderecoT = enderecoT
        this.remuneracao = remuneracao
        this.listaProjetos = []
    }

        public getNome(): string {
        return this.nome;
    }

    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getPartido(): string {
        return this.partido;
    }

    public setPartido(partido: string): void {
        this.partido = partido;
    }

    public getEsfera(): string {
        return this.esfera;
    }

    public setEsfera(esfera: string): void {
        this.esfera = esfera;
    }

    public getPoder(): string {
        return this.poder;
    }

    public setPoder(poder: string): void {
        this.poder = poder;
    }

    public getLocalTrabalho(): string {
        return this.localT;
    }

    public setLocalTrabalho(local: string): void {
        this.localT = local;
    }

    public getEnderecoTrabalho(): string {
        return this.enderecoT;
    }

    public setEnderecoTrabalho(endereco: string): void {
        this.enderecoT = endereco;
    }

    public getRemuneracao(): number {
        return this.remuneracao;
    }

    public setRemuneracao(remuneracao: number): void {
        this.remuneracao = remuneracao;
    }

    public getListaProjetos(): string[] {
        return this.listaProjetos;
    }

    public setListaProjetos(listaProjetos: string[]): void {
        this.listaProjetos = listaProjetos;
    }

    public adicionarProjeto(titulo: string): void {
        this.listaProjetos.push(titulo);
    }

    public abstract exercerMandato(): void;
}
