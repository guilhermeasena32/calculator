import React, { useState } from "react";
import "./Calculator.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";
import CalculatorService from "./Calculator.service";

export default function Calculator() {
  const [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO,
  ] = CalculatorService();
  // useState retorna sempre 2 valores, o valor em si e um metodo para atualizar o valor
  // por isso a formatação abaixo
  const [txtNumeros, setTxtNumeros] = useState("0");
  const [numero1, setNumero1] = useState("0");
  const [numero2, setNumero2] = useState(null);
  const [operacao, setOperacao] = useState(null);

  function adicionarNumero(numero) {
    let result;
    if (operacao === null) {
      result = concatenarNumero(numero1, numero);
      setNumero1(result);
    } else {
      result = concatenarNumero(numero2, numero);
      setNumero2(result);
    }
    setTxtNumeros(result);
  }
  function definirOperacao(op) {
    // apenas define a operação caso ela não exista
    if (operacao === null) {
      setOperacao(op);
      return;
    }
    // caso a operação estiver definida e número 2 selecionada, realiza o cálculo da operação
    if (numero2 !== null) {
      const resultado = calcular(
        parseFloat(numero1),
        parseFloat(numero2),
        operacao
      );
      setOperacao(op);
      setNumero1(resultado.toString());
      setNumero2(null);
      setTxtNumeros(resultado.toString());
    }
  }
  function acaoCalcular() {
    if (numero2 === null) {
      return;
    }
    const result = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    setTxtNumeros(result);
  }
  function limpar(){
    setOperacao(null);
    setNumero1('0');
    setNumero2(null);
    setTxtNumeros('0');
  }
  return (
    <Jumbotron className="calc">
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger" onClick={limpar}>C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              value={txtNumeros}
              type="text"
              name="txtNumeros"
              data-testid="txtNumeros"
              className="text-right"
              readOnly="readonly"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("7")}>
              7
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("8")}>
              8
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("9")}>
              9
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(DIVISAO)}>
              /
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("4")}>
              4
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("5")}>
              5
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("6")}>
              6
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(MULTIPLICACAO)}>
              *
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("1")}>
              1
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("2")}>
              2
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("3")}>
              3
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(SUBTRACAO)}>
              -
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero("0")}>
              0
            </Button>
          </Col>
          <Col>
            <Button variant="light" onClick={() => adicionarNumero(".")}>
              .
            </Button>
          </Col>
          <Col>
            <Button variant="success" onClick={acaoCalcular}>
              =
            </Button>
          </Col>
          <Col>
            <Button variant="warning" onClick={() => definirOperacao(SOMA)}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}
