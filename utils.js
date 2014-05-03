//randomly returns either 0 or 1 
function flipCoin(){
   
   var randVal = Math.random();
   var side = Math.round(randVal);

   return side;
}

//returns a random number between the low and high
//values given as inputs
function returnRandNum(low, high){
   var diff = high - low,
      randVal = Math.random()*diff,
      finalVal = low+Math.round(randVal);

   return finalVal;
};

/*
Performs the exact same simple randomization operation
for all arrays passed in so that values of the elements
with indeces corresponding to eachother maintain the 
same positioning relative to the other elements of their
respective arrays. Original arrays are  modified.
*/
function parallelShuffle(arrays){

	var numItems = arrays[0].length;
	var numArrays = arrays.length;
	var doShift;
	var item;
	var doRev = FlipCoin();

	for(i=0; i<numItems; i++){
		doShift = FlipCoin();
		for(var j=0; j<numArrays; j++){
			if (i==0 && doRev) arrays[j].reverse();
			if (doShift){			
				item = arrays[j].shift();
				arrays[j].push(item);
			}
		}
	}
}

//Finds out which css gradients and prefixes
//are supported by the client runtime
var getGradientPrefix = (function(){
   var div = document.createElement('div'),
      prefixes = [
         '-ms-',
         '-o-',
         '-moz-',
         '-webkit-',
         ''],
      len = prefixes.length,
      gradStr;

   return function(gradientType){
      while(len--){
         gradStr = prefixes[len]+gradientType+'-gradient';
         div.style.backgroundImage = gradStr+'(#ffffff, #000000)';
         if(div.style.background.split('(')[0] == gradStr){
            console.log(gradStr);
            return prefixes[len];
         }
         div.style.backgroundImage = '';
      }
      console.log('this browser doesn\'t support gradients');
      return false;
   };
})();

