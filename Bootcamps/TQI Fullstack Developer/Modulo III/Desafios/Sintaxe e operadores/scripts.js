function retornoComp(n1, n2) {
  fraseUm = conferirIguais(n1, n2);
  fraseDois = somaCompara(n1, n2);

  return `${fraseUm} ${fraseDois}`;
}

function conferirIguais(n1, n2) {
  (n1 === n2)
    ? console.log(`Os números ${n1} e ${n2} são iguais!.`)
    : console.log(`Os números ${n1} e ${n2} são diferentes!.`);
}

function somaCompara(n1, n2) {
  soma = n1 + n2;
  let comparaDez = 'menor';
  let comparaVinte = 'menor';
  if (soma > 10) {
    comparaDez = 'maior';
  }
  if (soma > 20) {
    comparaVinte = 'maior';
  }

  return console.log(`Sua soma é ${soma}, que é ${comparaDez} que 10 e ${comparaVinte} que 20.`);
}

retornoComp(1, 2);
