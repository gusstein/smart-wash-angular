import { Veiculo } from "./veiculo";

export interface Cliente {
    id: number;
    telefone: string;
    dataNasc: Date;
    veiculos: Veiculo[];
    idade: string;
    rg: string;
    estadoCivil: string;
}
