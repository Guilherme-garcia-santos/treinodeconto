export interface Tarefa { 
    tarefaId?: string;
    titulo : string;
    descricao : string;
    status? : string;
    categoriaId : string;
    criadoEm?: string;
}