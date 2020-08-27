
// /* 
// Your previous Plain Text content is preserved below:

// /*
// Write a function to print combinations that you can make from the alphabets associated on the numberpad.

// eg: 

// Input 2,3
// Output: ad, bd, cd, ae, be, ce, af, bf, cf  


// Input: 2, 3, 4
// Output: adg, adh, adi, bdg, bdh, bdi, cdg, cdh, cdi.....


// Estimate the time complexity of your solution.
// */


// // a*b*c (d*e*f);
// // ad ae af bd be bf

// function joinString(arrOfNum) {

//     let alphaToNumMap = {
//       "2" : "abc",
//       "3" : "def",
//       "4" : "ghi"
//     }
//     let nums = arrOfNum; [2 , 3 , 4]
//     let combinationArray = []; // ae , ad
    
//     nums.forEach((element , index) => {
//       // 2
      
//       if(index < nums.length - 1) {
      
//       let tempArray = alphaToNumMap[element].split("");  //["a" , "b" , "c"];
//       let numbersToMultiply = nums.slice(index); //[3 , 4];
//       let multiplier = alphaToNumMap[nums[index + 1]].split(""); //[d , e , f];
        
//       for(let i = 0; i < tempArray; i++ ) {
//         // let newText = tempArray[i]; //a
        
//         for(let j = 0; j < numbersToMultiply.length; j++) {
//           let alphas = alphaToNumMap[j] // 3 --> def
//           for(let k = 0; k < alphas.length; k++ ) {
            
//             newText = newText + alphas[k];
          
//           }
          
//         }
        
//       };
      
//   //     for(let i = 0; i < tempArray.length; i++) { 
//   //       // 1st iteration this is tempArray[1] = a
//   //       for(let j = 0; j < multiplier.length; j++) {
//   //         // 1st iteration this is multiplier[1] = d
//   //         combinationArray.push(tempArray[i] + multiplier[j]); // a + d
//   //       }
      
//   //     }
      
//     console.log(combinationArray);
//       }
//     })
    
    
//   return combinationArray;
//   }
  
  
//   joinString(["2" , "3" , "4"]);