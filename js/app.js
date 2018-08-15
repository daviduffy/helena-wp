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

const toggleMobNav = () => {
  const elem = document.getElementById('header');
  const className = 'header--open';
  elem.classList.toggle(className);
};

const toggleBackdrop = {
  backdrop: document.getElementById('backdrop'),
  id: null,
  closeElement: null,
  focusedElement: null,
  focus: (elem) => {
    const t = toggleBackdrop;
    t.id = elem.id;
    t.focusedElement = document.getElementById(`${t.id}_lg`);
    t.closeElement = document.getElementById(`${t.id}_close`);
    t.focusedElement.classList.add('card--active');
    t.backdrop.classList.add('gallery__backdrop--active');
    t.backdrop.addEventListener('click', toggleBackdrop.blur, false);
    t.closeElement.addEventListener('click', toggleBackdrop.blur, false);
  },
  blur: (e) => {
    console.log(e);
    const t = toggleBackdrop;
    t.focusedElement.classList.remove('card--active');
    t.backdrop.classList.remove('gallery__backdrop--active');
    t.backdrop.removeEventListener('click', toggleBackdrop.blur, false);
    t.closeElement.removeEventListener('click', toggleBackdrop.blur, false);
  }
}