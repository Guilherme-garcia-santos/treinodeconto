import { useState } from "react";

function ListarTarefas(){
    return(
            function ListarProdutos() {
  //Estados | Variáveis
  //const [nome, setNome] = useState("Diogo Steinke Deconto");
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  //useEffect é utilizado para executar algum código no
  //momento em que o componente é carregado no navegador
  useEffect(() => {
    listarTarefas();
  }, []);
function carregarTarefas() {
  //FETCH ou AXIOS
  fetch("http://localhost:5157/tarefas/listar")
    .then((resposta) => resposta.json())
    .then((tarefas: Tarefa[]) => {
      console.table(tarefas);
      setTarefas(tarefas);
    });
}



        <div>
            <h1>
                Listar Tarefas
            </h1>
        </div>

    )

}

export default ListarTarefas;