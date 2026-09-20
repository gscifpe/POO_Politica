import { Politico } from "./Politico";

export abstract class Executivo extends Politico {
        public sancionarLei(): void {
        console.log("Lei sancionada.");
    }

    public vetarLei(): void {
        console.log("Lei vetada.");
    }

    public elaborarEnviarPPA_LDO_LOA(): string {
        return "PPA, LDO e LOA elaborados e enviados.";
    }

    public proporLei(): void {
        console.log("Projeto de lei proposto.");
    }
}