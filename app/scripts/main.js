/* 
.on()
Attach an event handler function for one or more events 
to the selected elements.

.on( events [, selector ] [, data ], handler )



//Display a paragraph's text in an alert when clicked:
$( "p" ).on( "click", function() {
  alert( $( this ).text() );
});

//Pass data to event handler, which is specified by name:
function myHandler( event ) {
  alert( event.data.foo );
}
$( "p" ).on( "click", { foo: "bar" }, myHandler );
*/



//Combined .on() with .hide() method via click 
  $("#gainsboro").on("click", function(){
    $(this).hide();
  });

//Combined .on() with .hide() method via dblclick 
  $("#cornflowerBlue").on("dblclick", function(){
    $(this).hide();
  });

//.hover() event
  $("#cornsilk").hover( function(){
    $(this).css("width", "50px");
    }, function() {
	  	$(this).css("width", "150px");
	});
    

//Combined .on() with .toggleClass() via click 
	$("#tomato").on("click", function() {
	 $(this).toggleClass("colorshift");
	}); 

//Combined .keyup() with .css() 
	$("input").keyup( function(){
	  $("input").css("background-color","yellowgreen");
	});

//Color changes on hover
	$("#x").hover( function(){
	  	$(this).css("color", "springgreen");
	  }, function() {
	  	$(this).css("color", "tomato");
	});

//Vertical flip on click
	$("#amper").on("click", function(){
	  $(this).css("transform", "rotate(180deg)");
	});

//Rotation on click
	$("#percent").on("click", function(){
	  $(this).css("transform", "rotate(90deg)");
	});

//Alert with URL on image click
	$("img").click(function(){
	  alert($("#herb").attr("href"));
	});

//.one() for one-time alert on click
	$( "#eight" ).one( "click", function() {
	  alert( "This is an eight and I'll only say it once." );
	});

//Background gradient appears on click
	$("#hash").on("click", function(){
	  $(this).addClass("gradient");
	});

//Background fades from yelloe to red over 5 sec on click
	$("#z").on("click", function(){
	  $(this).addClass("animation1");
	});

//
		$("#g").on("click", function(){
	  $(this).addClass("animation2");
	});


