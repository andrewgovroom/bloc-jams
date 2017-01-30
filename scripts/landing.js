var pointsArray = document.getElementsByClassName('point');
 
var revealPoint = function(point){
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(0)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";
};


var animatePoints = function(points) { 
        forEach(points, revealPoint);
    };

    
 
window.onload = function() {
      window.addEventListener('scroll', function(event) {
         if (window.innerHeight > 950) {
             console.log(pointsArray);
         animatePoints(pointsArray);
     }           
          var sellingPoints = document.getElementsByClassName('selling-points')[0];
          var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
         if (document.documentElement.scrollTop || document.body.scrollTop >= scrollDistance) {
             animatePoints(pointsArray);   
         }
     });
 }


