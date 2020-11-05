

function checkAnagram(s1 , s2) {
  
    if(s1.length !== s2.length) {
      return false;
    }
    let isAnagram = true;
    let characterMap = {};
  
    for(let i= 0; i < s1.length; i++) {
      if(characterMap[s1[i]] === undefined) {
        characterMap[s1[i]] = 1;
      } else {
        characterMap.char += 1;
      }
    }
    
    for(let i = 0; i < s2.length; i++) {
      if(characterMap[s2[i]] === undefined) {
        return false;
        break;
      } else {
       characterMap[s2[i]] = characterMap[s2[i]] - 1; 
      }
    }
    
    for(let keys in characterMap) {
      if(characterMap[keys] !== 0) {
        return false;
      }
    }
    
    return isAnagram;
  }
  
  checkAnagram(123 , "123");
  checkAnagram("abcd" , "a");
  checkAnagram("$^ ", "abc");
  checkAnagram("axcf" , "cfgh");
  checkAnagram(null , null );
  // Test Boundary with large string set;
  print(checkAnagram("acb" , "abc"));