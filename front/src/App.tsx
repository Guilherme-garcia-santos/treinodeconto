import React from 'react';
import ListarTarefas from './components/ListarTarefas';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ListarTarefasConcluidas from './components/ListarTarefasConcluidas';
import ListarTarefasNaoConcluidas from './components/ListarTarefasNaoConcluidas';


function App() {
  return (
    <div>
      <div>
        <BrowserRouter>
          <nav>
              <ul>
                  <li>
                    <Link to={"/"}>Home</Link>
                  </li>

                  <li>
                    <Link to={"/pages/tarefas/listar"}>
                      Listar Tarefas {" "}
                    </Link>
                  </li>
                  <li>
                    <Link to={"/pages/tarefas/listarconcluidas"}>
                      Listar Tarefas Concluidas {" "}
                    </Link>
                  </li>
                   <li>
                    <Link to={"/pages/tarefas/listarnaoconcluidas"}>
                      Listar Tarefas Não Concluidas {" "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link to={"/pages/produto/cadastrar"}>
                      Cadastrar Produtos{ " " }
                    </Link>
                  </li>
                  <li>
                    <Link to={"/pages/cep/consultar"}>
                      Consultar CEP{ " " }
                    </Link>
                  </li> */}
              </ul>
          </nav>
          <Routes>
                    <Route path="/" element={<ListarTarefas />} />
                    <Route 
                      path="/pages/tarefas/listar"
                      element={<ListarTarefas/>}
                      />
                </Routes>


           <Routes>
                    <Route path="/" element={<ListarTarefas />} />
                    <Route 
                      path="/pages/tarefas/listarconcluidas"
                      element={<ListarTarefasConcluidas/>}
                      />
                </Routes>

          <Routes>
                    <Route path="/" element={<ListarTarefas />} />
                    <Route 
                      path="/pages/tarefas/listarnaoconcluidas"
                      element={<ListarTarefasNaoConcluidas/>}
                      />
                </Routes>
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
