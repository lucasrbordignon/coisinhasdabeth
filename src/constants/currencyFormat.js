import { Decimal } from "decimal.js";

// Função para arredondar para .00 ou .5
export function arredondarParaCasaDecimal(numero) {
  const decimal = new Decimal(numero);

  const parteInteira = decimal.floor();
  const parteDecimal = decimal.minus(parteInteira);

  let arredondado;

  if (parteDecimal.lessThan(0.25)) {
    arredondado = parteInteira;
  } else if (parteDecimal.lessThan(0.75)) {
    arredondado = parteInteira.plus(0.5);
  } else {
    arredondado = parteInteira.plus(1);
  }

  return arredondado;
}