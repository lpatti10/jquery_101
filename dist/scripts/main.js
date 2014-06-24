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


//Combined .on() with .hide() method via click event
  $("#gainsboro").on("click", function(){
    $(this).hide();
  });

//Combined .on() with .hide() method via dblclick event
  $("#cornflowerBlue").on("dblclick", function(){
    $(this).hide();
  });

//.hover() event
  $("#cornsilk").hover( function(){
    $( this ).fadeOut( 200 );
    $( this ).fadeIn( 200 );
  });

//.hover() event
	 $("#tomato").on("click", function() {
	 	$( this ).toggleClass( "colorshift" );
	 }); 















