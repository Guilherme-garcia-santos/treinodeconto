import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";

function ListarTarefasNaoConcluidas() {
  // 1. ESTADOS E VARIÁVEIS (DENTRO da função, mas ANTES do return)
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // 2. EFEITOS (useEffect)
  useEffect(() => {
    carregarTarefas(); // Chamada corrigida para o nome correto da função
  }, []);

  // 3. FUNÇÕES
  function carregarTarefas() {
    fetch("http://localhost:5157/tarefas/naoconcluidas")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  // 4. RENDERIZAÇÃO (O que aparece na tela)
  return (
    <div>
      <h1>Listar Tarefas</h1>
      <table border = {1}>
        <thead>
          <tr>
            <th>#</th>
            <th>Titulo</th>
            <th>Descrição</th>
            <th>Status</th>
            <th>Criado em</th>


          </tr>
        </thead>
        <tbody>
          {tarefas.map((tarefa) => (
            <tr key={tarefa.tarefaId}>
              <td>{tarefa.tarefaId}</td>
              <td>{tarefa.titulo}</td>
              <td>{tarefa.descricao}</td>
              <td>{tarefa.status}</td>
              <td>{tarefa.criadoEm}</td>
              
              {/* <td>
                <button onClick={() => deletarProduto(produto.id!)}>
                  Deletar
                </button>
              </td> */}
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefasNaoConcluidas;