'use strict';

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
    var iframeSrc = t.focusedElement.dataset.iframeSrc;
    if (iframeSrc) {
      // console.log('loading iframe');
      var container = document.createElement('div');
      container.classList.add('embed-container');
      var iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.setAttribute('frameborder', 0);
      iframe.setAttribute('allowfullscreen', true);
      container.appendChild(iframe);
      t.focusedElement.querySelector('.card__img').appendChild(container);
      // delete t.focusedElement.dataset.iframeSrc;
    }
  },
  blur: function blur(e) {
    var t = toggleBackdrop;
    t.focusedElement.classList.remove('card--active');
    var video = t.focusedElement.querySelector('.embed-container');
    video.remove();
    t.backdrop.classList.remove('gallery__backdrop--active');
    t.backdrop.removeEventListener('click', toggleBackdrop.blur, false);
    t.closeElement.removeEventListener('click', toggleBackdrop.blur, false);
  }
};
//# sourceMappingURL=output.js.map
