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
    const iframeSrc = t.focusedElement.dataset.iframeSrc
    if (iframeSrc) {
      // console.log('loading iframe');
      const container = document.createElement('div');
      container.classList.add('embed-container');
      const iframe = document.createElement('iframe');
      iframe.src = iframeSrc;
      iframe.setAttribute('frameborder', 0);
      iframe.setAttribute('allowfullscreen', true);
      container.appendChild(iframe);
      t.focusedElement.querySelector('.card__img').appendChild(container);
      // delete t.focusedElement.dataset.iframeSrc;
    }
  },
  blur: (e) => {
    const t = toggleBackdrop;
    t.focusedElement.classList.remove('card--active');
    const video = t.focusedElement.querySelector('.embed-container');
    video.remove();
    console.log(t.focusedElement);
    t.backdrop.classList.remove('gallery__backdrop--active');
    t.backdrop.removeEventListener('click', toggleBackdrop.blur, false);
    t.closeElement.removeEventListener('click', toggleBackdrop.blur, false);
  }
}