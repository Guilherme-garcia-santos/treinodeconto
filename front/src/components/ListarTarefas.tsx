import { useEffect, useState } from "react";
import { Tarefa } from "../models/tarefa";
import axios from "axios";

function ListarTarefas() {
  // 1. ESTADOS E VARIÁVEIS (DENTRO da função, mas ANTES do return)
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // 2. EFEITOS (useEffect)
  useEffect(() => {
    carregarTarefas(); // Chamada corrigida para o nome correto da função
  }, []);

  // 3. FUNÇÕES
  function carregarTarefas() {
    fetch("http://localhost:5157/tarefas/listar")
      .then((resposta) => resposta.json())
      .then((tarefas: Tarefa[]) => {
        console.table(tarefas);
        setTarefas(tarefas);
      });
  }

  function alterar(id: string) {
  console.log(`Id: ${id}`);
  axios
  
    .put<Tarefa[]>(`http://localhost:5157/tarefas/alterar/${id}`)
    .then((resposta) => {
    setTarefas(resposta.data);
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
            <th>Alterar Status</th>


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
              
              <td>
                <button onClick={() => 
                  alterar(tarefa.tarefaId!)}>
                  Alterar
                </button>
              </td> 
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTarefas;