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

var toggleBackdrop = {
  backdrop: document.getElementById('backdrop'),
  id: null,
  closeElement: null,
  focusedElement: null,
  focus: function focus(elem) {
    var t = toggleBackdrop;
    t.id = elem.id;
    t.focusedElement = document.getElementById(t.id + '_lg');
    t.closeElement = document.getElementById(t.id + '_close');
    t.focusedElement.classList.add('card--active');
    t.backdrop.classList.add('gallery__backdrop--active');
    t.backdrop.addEventListener('click', toggleBackdrop.blur, false);
    t.closeElement.addEventListener('click', toggleBackdrop.blur, false);
  },
  blur: function blur(e) {
    console.log(e);
    var t = toggleBackdrop;
    t.focusedElement.classList.remove('card--active');
    t.backdrop.classList.remove('gallery__backdrop--active');
    t.backdrop.removeEventListener('click', toggleBackdrop.blur, false);
    t.closeElement.removeEventListener('click', toggleBackdrop.blur, false);
  }
};
//# sourceMappingURL=output.js.map
