document.querySelectorAll('.accordion__details').forEach((details) => {
  details.addEventListener('toggle', (event) => {
    const content = event.target.querySelector('.accordion__text');
    if (content) {
      if (details.open) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    }
  });
});