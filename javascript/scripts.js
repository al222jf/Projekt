$(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
});
/*
var colors = [
     [250, 195, 56], // Gold
     [250, 0, 0],    // Red
     [0, 250, 0],    // Green
     [0, 0, 250],    // Blue
];

var height = $('body').height() - window.innerHeight;

$(document).scroll(function() {
  var steps = Math.floor(height / colors.length);
  var position = $(this).scrollTop();
  var currentStep = Math.floor(position / steps);
  if ( currentStep === colors.length ) currentStep = colors.length - 1;
  var rgb = $("body").css('background-color').replace('rgb(','').replace(')','').replace(/\s/g, '').split(',');     
  var previousColor = colors[currentStep] || colors[0];
  var nextColor = colors[currentStep+1] || colors[colors.length-1];
  var percentFromThisStep = ( position - ( currentStep * steps ) ) / steps;
  if ( percentFromThisStep > 1 ) percentFromThisStep = 1;

  var newRgb = [
     Math.floor(previousColor[0] + ( ( nextColor[0] - previousColor[0] ) * percentFromThisStep )),
     Math.floor(previousColor[1] + ( ( nextColor[1] - previousColor[1] ) * percentFromThisStep )),
     Math.floor(previousColor[2] + ( ( nextColor[2] - previousColor[2] ) * percentFromThisStep ))
  ];

  $("body").css('background-color', 'rgb('+ newRgb.join(',') +')');
});

*/