'use strict';

// jQuery(document).ready(function( $ ) {  // using this special notation for "no conflict" jQuery.

//     var $prebar = $( '#amy-prebar' );
//     var $prebarLogo = $( '#amy-prebar-logo' );

//     $(document).foundation();

//     // $( "#amy-widgets" ).sticky({topSpacing:0});

//     $prebar.sticky({topSpacing:0});

//     $prebar.on('sticky-start',function(){
//         $prebarLogo.toggleClass( 'show' );
//     });

//     $prebar.on('sticky-end',function(){
//         $prebarLogo.toggleClass( 'show' );
//     });

//     $( ".nav-toggle" ).click(function() {
//         $(this).toggleClass("expanded");
//         $("nav").fadeToggle(100);
//         return false;
//     });

// console.log('Howdy, stranger. This site was created by David Duffy.');

// });

console.log('test');

var toggleMobNav = function toggleMobNav() {
  var elem = document.getElementById('header');
  var className = 'header--open';
  elem.classList.toggle(className);
};
//# sourceMappingURL=output.js.map
