function valida(array, numero) {
  
    try {
        if (!array || !numero) {
            throw new ReferenceError('Envie os parâmetros');
        }    
        return console.log(array);
    }catch(e){
        if(e instanceof ReferenceError){
            console.log('Este erro é um ReferenceError');
        }
    }
}

array = [1, 2, 3];

valida(array,3);
