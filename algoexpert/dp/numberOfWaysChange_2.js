/**
 * denoms : [2 , 5]
 * n : 7
 * 
 * O/P : 1
 * There's only one way you can make 7 i.e., 2 + 5
 */

function cal(denoms, n) {
  let register = new Array(n + 1).fill(0);
  register[0] = 1;
  console.log(register)


  for (let denom of denoms) {
    for (let index = 1; index < n + 1; index++) {
      if(index >= denom) {
        const newValue = register[index] + register[index - denom];
        register[index] = newValue;
      }
    }
  }

  return register[n];

}

cal([2, 5], 0)





