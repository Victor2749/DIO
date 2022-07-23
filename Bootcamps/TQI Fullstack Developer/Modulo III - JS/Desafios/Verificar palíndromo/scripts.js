function verifica(string) {
  if (!string) return;

  return string.split('').reverse().join('') === string;
}

console.log(verifica('evo'));
