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

// $( "p" ).on( "myCustomEvent", function( event, myName ) {
//   $( this ).text( myName + ", hi there!" );
//   $( "span" )
//     .stop()
//     .css( "opacity", 1 )
//     .text( "myName = " + myName )
//     .fadeIn( 30 )
//     .fadeOut( 1000 );
// });
// $( "button" ).click(function () {
//   $( "p" ).trigger( "myCustomEvent", [ "John" ] );
// });


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

//
	$("#x").hover( function(){
	  	$(this).css("color", "springgreen");
	  }, function() {
	  	$(this).css("color", "tomato");
	});

//
	$("#amper").on("click", function(){
	  $(this).css("transform", "rotate(180deg)");
	});

	$("#percent").on("click", function(){
	  $(this).css("transform", "rotate(90deg)");
	});


$("img").click(function(){
  alert($("#portfolio").attr("href"));
});




