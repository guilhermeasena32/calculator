import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";
import "@testing-library/jest-dom/extend-expect";

describe("Calculadora", () => {
  it("deve renderizar o componente sem erros", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Calculator />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("deve limpar o campo de numeros", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("C"));
    expect(getByTestId("txtNumeros")).toHaveValue("0");
  });

  it("deve somar 2 + 3 e obter 5", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("5");
  });

  it("deve subtrair 5 - 3 e obter 2", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("5"));
    fireEvent.click(getByText("-"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("2");
  });

  it("deve dividir 6 / 3 e obter 2", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("/"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("2");
  });

  it("deve multiplicar 6 * 2 e obter 12", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("*"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("12");
  });

  it("deve somar 6.2 + 2 e obter 8.2", () => {
    const { getByTestId, getByText } = render(<Calculator />);
    fireEvent.click(getByText("6"));
    fireEvent.click(getByText("."));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("+"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("="));
    expect(getByTestId("txtNumeros")).toHaveValue("8.2");
  });
});
