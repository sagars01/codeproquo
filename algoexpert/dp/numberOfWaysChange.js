// number of ways to make change - 1st solution 
/**
 * 
 * @param {*} n target amount
 * @param {*} denoms [2, 5 ] - denominations available
 */
function numberOfWaysToMakeChange(n, denoms) {
    // Write your code here.
      let register = createArray(n);
      let numberOfWays;
      if(n === 0) {
          return 1;
      }
    numberOfWays = helper(n , denoms , 0 , register);
    return numberOfWays;
  }
  
  
  function helper(n , denoms , counter, register) {
    
    if(counter === denoms.length) {
      let v = register[n - 1];
      return v;
    }
    
    for(let i = 1; i < register.length; i++) {
      if(denoms[counter] <= n) {
        register[i] += 1;
      }
    }
    counter += 1;
    return helper(n , denoms, counter  , register);
  }
  
  function createArray(n) {
    const a = new Array(n);
    a.fill(0 , 1, n);
    a[0] = 1;
    return a;
  }
  
  
  // Do not edit the line below.
  exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;
  