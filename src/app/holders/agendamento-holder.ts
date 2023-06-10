import { Funcionario } from "../model/funcionario";
import { Servico } from "../model/servico";
import { Veiculo } from "../model/veiculo";

export class AgendamentoHolder {
    public id!: number;
    veiculos: Veiculo[] = [];
    servicos: Servico[] = [];
    funcionarios: Funcionario[] = [];
    preco: number = 0;
    dataEntrada: string = "";
    dataSaida: string = "";
}
