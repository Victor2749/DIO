const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Miguel',
		nota: 3,
		turma: '2C',
	},
];

function alunosAprovado(alunos, mFinal) {
  let aprovados = [];

  for (let i = 0; i < alunos.length; i++) {
      const {nota,nome} = alunos[i];

      if(nota >=mFinal){
        aprovados.push(nome);
      }
  }
  return aprovados;
}

console.log(alunosAprovado(alunos,5));
