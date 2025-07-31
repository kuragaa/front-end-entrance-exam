export function saveChanges() {
  const editableElements = document.querySelectorAll('[contenteditable="true"]');
  const savedData = JSON.parse(localStorage.getItem('portfolioData') || '{}');

  editableElements.forEach(element => {
    const key = element.dataset.key;
    if (!key) return;

    if (savedData[key]) {
      element.innerHTML = savedData[key]; 
    }

    element.addEventListener('input', () => {
      savedData[key] = element.innerHTML; 
      localStorage.setItem('portfolioData', JSON.stringify(savedData));
    });
  });
}
