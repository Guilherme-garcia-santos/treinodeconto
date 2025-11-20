import React from 'react';
import ListarTarefas from './components/ListarTarefas';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


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
        </BrowserRouter>

      </div>
    </div>
  );
}

export default App;
