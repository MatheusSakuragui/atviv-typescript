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

  const optionsAcomodacao = [
    {label: 'Solteiro Simples' },
    {label: 'Solteiro Mais' },
    {label: 'Casal Simples' },
    {label: 'Familia Simples' },
    {label: 'Familia Mais' },
    {label: 'Familia Super' }
  ]

export default function Hospedagem() {
    return (
        <>
            <Navigation />
            <div className="cadastro">
                <img className="logo" src={logoAtlantis}></img>
            <h1>Realizar Hospedagem</h1>

            <Form className="form">

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Acomodação</Form.Label>
                        <Select className="select" isSearchable={true} placeholder="Titular" options={optionsAcomodacao}/>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6">
                        <Form.Label>Cliente</Form.Label>
                        <Select className="select" isSearchable={true} placeholder="Titular" options={options}/>
                    </Form.Group>
                </Row>

                <Button className="botao" type="submit">Salvar!</Button>
            </Form>

        </div>
        </>
    )
}