export function setupProgressBars() {
  const items = document.querySelectorAll('.language__item');

  items.forEach(item => {
    const range = item.querySelector('input[type="range"]');
    const fill = item.querySelector('.language__fill');

    if (!range || !fill) return;

    range.addEventListener('input', () => {
      const val = range.value;
      fill.style.width = `${val}%`;
    });
  });
}
