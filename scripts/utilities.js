var pointsArray = document.getElementsByClassName('point'); 

var printTxt = function(element) {
  console.log(element);
  
}

function ptsEle(arr1, callback){
    for(var i = 0; i < arr1.length; i++) {
        callback(arr1[i]);
    }
}

ptsEle(pointsArray, printTxt); 
