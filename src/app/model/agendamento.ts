import { Funcionario } from "./funcionario";
import { Servico } from "./servico";
import { Veiculo } from "./veiculo";

export interface Agendamento {
    id: number;
    veiculos: Veiculo[];
    servicos: Servico[];
    funcionarios: Funcionario[];
    preco: number;
    dataEntrada: Date;
    dataSaida: Date;

}
