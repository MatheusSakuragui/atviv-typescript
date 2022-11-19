import { Tab, Tabs } from "react-bootstrap";
import Select from 'react-select';
import { Col, Form, Row, Button } from "react-bootstrap";

import Navigation from "../../components/navbar/navbar";
import './cadastro.css'

import logoAtlantis from '../../components/navbar/Atlantis.png'

export default function Cadastro() {
    return (
        <>
            <Navigation />
            
            <div className="cadastro">
                <img className="logo" src={logoAtlantis}></img>
            <h1>Cadastro de Cliente Titular</h1>

            <Form className="form">
                 <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Nome do Cliente</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Insira o nome do cliente"
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
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Data de nascimento do cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="date"
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Rua do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="text"
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Bairro do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="text"
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Cidade do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="text"
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Estado do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="text"
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>CEP do Cliente</Form.Label>
                        <Form.Control
                            required
                            name="ofertaPreco"
                            type="Numero"
                            placeholder="Insira o nome social do cliente"
                        />
                    </Form.Group>
                </Row>

                <Button className="botao" type="submit">Salvar!</Button>

            </Form>

        </div>
        </>
    )
}