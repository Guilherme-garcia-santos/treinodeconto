import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Categoria } from "../models/categoria";
import { Tarefa } from "../models/tarefa";

function CadastrarTarefa() {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    fetch("http://localhost:5157/categoria/listar")
      .then((resposta) => resposta.json())
      .then((categorias: Categoria[]) => {
        setCategorias(categorias);
      });
  }

  function cadastrarTarefa(e: any) {
    e.preventDefault();

    const tarefa: Tarefa = {
      titulo: titulo,
      descricao: descricao,
      categoriaId: categoriaId
    };

    fetch("http://localhost:5157/tarefas/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarefa),
    })
      .then((resposta) => resposta.json())
      .then((dados) => {
        console.log(dados);
        navigate("/pages/tarefas/listar");
      });
  }

  // O return TEM QUE estar dentro da função CadastrarTarefa
  return (
    <div>
      <h1>Cadastrar Tarefa</h1>
      <form onSubmit={cadastrarTarefa}>
        <label>Título:</label>
        <input
          type="text"
          placeholder="Digite o título"
          onChange={(e: any) => setTitulo(e.target.value)}
          required
        />
        <br />
        <label>Descrição:</label>
        <input
          type="text"
          placeholder="Digite a descrição"
          onChange={(e: any) => setDescricao(e.target.value)}
        />
        <br />
        <label>Categorias:</label>
        <select onChange={(e: any) => setCategoriaId(e.target.value)} required>
          <option value="">Selecione uma categoria</option>
          {categorias.map((categoria) => (
            <option
              value={categoria.categoriaId}
              key={categoria.categoriaId}
            >
              {categoria.nome}
            </option>
          ))}
        </select>
        <br />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
} // <--- A chave que fecha a função fica SÓ AQUI

export default CadastrarTarefa;