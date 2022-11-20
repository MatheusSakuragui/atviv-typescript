import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";  
import Cadastro from "../pages/gerenciamentoClientes/cadastro";
import CadastroDependente from "../pages/gerenciamentoClientes/cadastroDependente";
import Hospedagem from "../pages/gerenciamentoClientes/hospedagem";
import Home from "../pages/home";
import ListagemCliente from "../pages/listagem/listagemClientes";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Home/>} />
                <Route path="/cadastro" element={<Cadastro/>} />
                <Route path="/cadastroDependente" element={<CadastroDependente />} />
                <Route path="/listagem" element={<ListagemCliente />} />
                <Route path="/hospedagem" element={<Hospedagem />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes