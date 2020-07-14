function reciprocalCycles(n) {
  var longestNum = 1;
  var largestCycleSize = 1;
  
  for(var currentNum = longestNum + 1; currentNum <= n; currentNum++){
      var cycleSize = getCycleSize(currentNum);
      
      if(cycleSize > largestCycleSize){
          largestCycleSize = cycleSize;
          longestNum = currentNum;
      }
  }
    
  return longestNum;
}

var getCycleSize = function(num){
    var numerator = 1;
    var numerators = [];
    var numeratorDigits = [];
    
    while(!digitsInSequence){
        if(numerator == 0){
            return 0;
        }
        
        //Check if the numerator is previously repeated
        for(var i = 0; i < numerators.length; i++){
            if(numerator == numerators[i]){
                var digitsInSequence = 0;
                
                for(var j = i; j < numerators.length; j++){
                    digitsInSequence += numeratorDigits[j];
                }
                
                return digitsInSequence;
            }
        }
        
        //Repeat not found, update the numerators and digits
        numerators[numerators.length] = numerator;
        var digits = 1;
        while(num > numerator){
            numerator *= 10;
            digits++;
        }
        numeratorDigits[numeratorDigits.length] = digits;
        
        //get the next numerator
        numerator = numerator % num;
    }
};

reciprocalCycles(1000);
