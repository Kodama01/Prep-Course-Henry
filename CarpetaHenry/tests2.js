function stringMasLarga(strings) {
    // La función llamada 'stringMasLarga', recibe como argumento un arreglo de strings llamado 'strings'
    // y debe devolver el string más largo que hay en el arreglo (Es decir el de mayor cantidad de caracteres)
    // Ej:
    // stringMasLarga(['hi', 'hello', 'ni hao', 'guten tag']); debe retornar 'guten tag'
    // stringMasLarga(['JavaScript', 'HTML', 'CSS']); debe retornar 'JavaScript'
  
    // Tu código aca:
    let toNums = strings.map(e => e.length);
    let maxNum = Math.max(...toNums);
    return maxNum;

  }
  let strings = ['queso','pan'];
  let res = strings(stringMasLarga)
  console.log(res);
  