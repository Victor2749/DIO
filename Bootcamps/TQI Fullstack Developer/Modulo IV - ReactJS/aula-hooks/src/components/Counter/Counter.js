
function Counter() {

    let quant = 0;

    function aumentar(){
        quant = quant+1;
        document.getElementById('counter-box').innerHTML = quant;
    }
  return (
    <>
      <h1 id="counter-box">{quant}</h1>
      <button onClick={aumentar}>Aumentar</button>
    </>
  );
}

export default Counter;
