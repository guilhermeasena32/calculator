import React from "react";
import ReactDOM from "react-dom";
import CalculatorService from "./Calculator.service";

describe("Testing CalculatorService", () => {
  const [
    calcular,
    concatenarNumero,
    SOMA,
    SUBTRACAO,
    DIVISAO,
    MULTIPLICACAO,
  ] = CalculatorService();

  it("deve garantir que 2 + 2 = 4", () => {
    let soma = calcular(2, 2, SOMA);
    expect(soma).toEqual(4);
  });

  it("deve garantir que 4 - 2 = 2", () => {
    let subtracao = calcular(4, 2, SUBTRACAO);
    expect(subtracao).toEqual(2);
  });

  it("deve garantir que 4 / 2 = 2", () => {
    let divisao = calcular(4, 2, DIVISAO);
    expect(divisao).toEqual(2);
  });

  it("deve garantir que 4 * 2 = 8", () => {
    let multiplicacao = calcular(4, 2, MULTIPLICACAO);
    expect(multiplicacao).toEqual(8);
  });

  it("deve retornar 0 para operação invalida", () => {
    let operacaoInvalida = calcular(4, 2, '%');
    expect(operacaoInvalida).toEqual(0);
  });
});
