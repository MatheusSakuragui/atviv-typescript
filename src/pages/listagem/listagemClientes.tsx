import Table from 'react-bootstrap/Table';
import Navigation from '../../components/navbar/navbar';
import {BsFillPencilFill, BsXLg} from "react-icons/bs"
 
import './listagem.css'


function ListagemCliente() {
  return (
    <>
    <Navigation />
    <h1>Listagem Clientes</h1>
    <Table className='table' bordered>

        <thead>
            <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Nome Social</th>
            <th>Data de Nascimento</th>
            <th>Editar</th>
            <th>Excluir</th>
            </tr>
        </thead>
        
        <tbody>

            <tr>
                <td>1</td>
                <td>Matheus Henrique Lemes</td>
                <td>Matheus</td>
                <td>18/08/2002</td>
                <td><BsFillPencilFill className='iconPen'/></td>
                <td><BsXLg className='iconX'/></td>
            </tr>
            
            <tr>
                <td>2</td>
                <td>Fulano de Tal da Silva</td>
                <td>Fulaninho</td>
                <td>11/07/1992</td>
                <td><BsFillPencilFill className='iconPen'/></td>
                <td><BsXLg className='iconX'/></td>
            </tr>
            
            <tr>
                <td>3</td>
                <td>Ciclano Pereira Neto</td>
                <td>Ciclaninho</td>
                <td>08/08/1996</td>
                <td><BsFillPencilFill className='iconPen'/></td>
                <td><BsXLg className='iconX'/></td>
            </tr>

        </tbody>
        </Table>
    </>
  );
}

export default ListagemCliente;