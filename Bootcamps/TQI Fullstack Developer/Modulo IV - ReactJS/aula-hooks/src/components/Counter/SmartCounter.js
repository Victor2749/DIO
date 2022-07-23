import { useState } from 'react';

function SmartCounter() {
    //retorn um veto
    //1.variavel stateful
    //2. funcao amarrada a essa variavel que atualiza esse valor
  const [quant, upQuant] = useState(1);
  return (
    <>
      <h1>{quant}</h1>
      <button onClick={() => upQuant(quant + 1)}>Aumentar</button>
    </>
  );
}

export default SmartCounter;
