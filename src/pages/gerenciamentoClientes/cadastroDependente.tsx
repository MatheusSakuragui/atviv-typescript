import { Tab, Tabs } from "react-bootstrap";
import Select from 'react-select';
import { Col, Form, Row, Button } from "react-bootstrap";

import Navigation from "../../components/navbar/navbar";
import './cadastro.css'

import logoAtlantis from '../../components/navbar/Atlantis.png'

const options = [
    { value: 'Matheus Henrique Lemes', label: 'Matheus Henrique Lemes' },
    { value: 'Fulano de Tal da Silva', label: 'Fulano de Tal da Silva' },
    { value: 'Ciclano Pereira Neto', label:    'Ciclano Pereira Neto' }
  ]

export default function CadastroDependente() {
    return (
        <>
            <Navigation />
            <div className="cadastro">
                <img className="logo" src={logoAtlantis}></img>
            <h1>Cadastro de Cliente Dependente</h1>

            <Form className="form">
                 <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Nome do Cliente</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Nome"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Nome Social do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="text"
                            placeholder="Nome social"            
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Data de nascimento do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="date"             
                        />
                    </Form.Group>
                </Row>
                
                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Titular do Cliente</Form.Label>
                        <Select className="select" isSearchable={true} placeholder="Titular" options={options}/>
                    </Form.Group>
                </Row>

                <Button className="botao" type="submit">Salvar!</Button>
            </Form>

        </div>
        </>
    )
}