function calculadora() {
  const operacao = prompt(
    'Escolha uma operação:\n 1- Soma(+)\n 2- subtração (-)\n 3- multiplicação (*)\n 4- Divisão real (/)\n 5- divisão inteira (%)\n 6- potenciação(**)'
  );

  if (!operacao || operacao >= 7) {
    alert('Erro - operação inválida!');
    calculadora();
  } else {
    let n1 = Number(prompt('Insira o primeiro valor:'));
    let n2 = Number(prompt('Insira o segundo valor:'));
    let resultado = 0;

    if (!n1 || !n2) {
      alert('Erro - parãmetros inválidos!');
      calculadora();
    } else {
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
      }

      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`);
      }

      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`);
      }

      function divisaoReal() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`);
      }

      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
      }

      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
      }

      function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operacao?\n 1 - Sim\n 2 - Não');

        if (opcao == 1) {
          calculadora();
        } else if (opcao == 2) {
          alert('Até mais!');
        } else {
          alert('Digite uma opção válida!');
          novaOperacao();
        }
      }
    }

    if (operacao == 1) {
      soma();
      novaOperacao();
    } else if (operacao == 2) {
      subtracao();
      novaOperacao();
    } else if (operacao == 3) {
      multiplicacao();
      novaOperacao();
    } else if (operacao == 4) {
      divisaoReal();
      novaOperacao();
    } else if (operacao == 5) {
      divisaoInteira();
      novaOperacao();
    } else if (operacao == 6) {
      potenciacao();
      novaOperacao();
    }
  }
}
calculadora();
