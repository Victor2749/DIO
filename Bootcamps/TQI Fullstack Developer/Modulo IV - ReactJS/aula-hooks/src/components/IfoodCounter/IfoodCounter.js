import { useState, useEffect } from 'react';
import styles from '../IfoodCounter/IfoodCounter.module.css';

function IfoodCounter() {
  const [value, setValue] = useState(0);
  const [buttonStyle, setButtonStyle] = useState(
    styles.counterButtonMinusActive
  );

  useEffect(()=>{
    document.getElementById("moeda").innerHTML = 2.00 * value;
  },[value])

  function down() {
    if (value <= 1) {
      setButtonStyle(styles.counterButtonMinusDesactive);
      //mudar o css
    }

    if (value > 0) setValue(value - 1);
  }

  function up() {
    setValue(value + 1);
    setButtonStyle(styles.counterButtonMinusActive);
  }

  return (
    <div className={styles.countexWrapper}>
      <button className={buttonStyle} onClick={down}>
        -
      </button>
      <p>{value}</p>
      <button className={styles.counterButtonPlusActive} onClick={up}>
        +
      </button>
      <button id="moeda">12,00</button>
    </div>
  );
}

export default IfoodCounter;
