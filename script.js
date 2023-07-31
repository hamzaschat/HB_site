//set default degree (360*5)
var degree = 1800;
//number of clicks = 0
var clicks = 0;
var n = 4;
var res = 0;
$(document).ready(function () {
var wheeel = document.getElementById("inner-wheel")
var lnk = 'https://ohayojepang.kompas.com/special-content?season=summer';
	//var t = $('.wheel--summer').offset().top;
  //console.log('Transition complete!! ' + t);

	/*WHEEL SPIN FUNCTION*/
	$('#spin').click(function () {
var t = Math.floor(Math.random() * (10) + 5);
		if(clicks>0) {
			//t = t + 2.523;
		}
	var rdnm = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
	var rot = rdnm + (360*t);

	var iframe = $("iframe");
	var hide_div= $("#hide-div");
	var hide_message1=$("#hide-message1");
	var hide_message2=$("#hide-message2");
	function affichage(x){
		
		switch (x) {
			case 'yellow':
				hide_div.show();
				hide_message2.hide();
				hide_message1.hide();
				iframe.attr("src", "https://heroic-cascaron-11da8e.netlify.app/");
				break;
			case 'purple':
				hide_div.show();
				hide_message2.hide();
				hide_message1.hide();
				iframe.attr("src", "https://ubiquitous-cannoli-fb1836.netlify.app/");
				break;
			case 'blue':
				hide_div.hide();
				hide_message2.hide();
				hide_message1.show();
				break;
			case 'green':
				hide_div.hide();
				hide_message2.show();
				hide_message1.hide();
				break;
			default:
			alert('error');
		  }
	};


	console.log(rdnm+'x'+t+'='+rdnm*t+' jadi '+rot);
		if (rdnm > 0 && rdnm <= 90) {
			res = "yellow";
			
		} else if (rdnm > 90 && rdnm <= 180) {	
			res = "purple";
			
		} else if (rdnm > 180 && rdnm <= 270) {
			console.log('blue');
			res = "blue";
				
		} else if (rdnm > 270 && rdnm <= 360) {
			res = "green";
			
		}
		
		if (res != 0 ){
			setTimeout(function() {
				affichage(res);
			  }, 2000);
		}
		//add 1 every click
		clicks++;

		/*multiply the degree by number of clicks
	  generate random number between 1 - 360, 
    then add to the new degree*/
		var newDegree = degree * clicks;
		var extraDegree = Math.floor(Math.random() * (360 - 1 + 1)) + 1;
		totalDegree = newDegree + extraDegree;

		/*let's make the spin btn to tilt every
		time the edge of the section hits 
		the indicator*/
		
		
		$('#wheel .sec').each(function () {
			var t = $(this);
			var noY = 0;

			var c = 0;
			var n = 700;
			var interval = setInterval(function () {
				c++;
				if (c === n) {
					clearInterval(interval);
				}

				var aoY = t.offset().top;
				//console.log(aoY);

				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn*/
				if (aoY < 90) {
					//console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () {
						$('#spin').removeClass('spin');
					}, 100);
				}
			}, 10);

			$('#inner-wheel').css({
				
				'transform': 'rotate(' + rot + 'deg)'
			});

			noY = t.offset().top;
		});
		
	});
var transitionEvent = whichTransitionEvent();
transitionEvent && wheeel.addEventListener(transitionEvent, function() {
//parent.document.location.href = lnk;
	var t = $('.wheel--spring').offset().top;
///hnaaaaaaaaa

});

}); //DOCUMENT READY

function whichTransitionEvent(){
    var t;
    var el = document.createElement('fakeelement');
    var transitions = {
      'transition':'transitionend',
      'OTransition':'oTransitionEnd',
      'MozTransition':'transitionend',
      'WebkitTransition':'webkitTransitionEnd'
    }

    for(t in transitions){
        if( el.style[t] !== undefined ){
            return transitions[t];
			
        }
    }
}