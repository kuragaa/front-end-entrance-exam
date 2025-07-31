import { setupProgressBars } from './progressBars.js';
import { saveChanges } from './saveChanges.js';
import { saveAsPdf } from './savePdf.js';

document.addEventListener('DOMContentLoaded', () => {
  setupProgressBars();
  saveChanges();
});

document.getElementById('savePdfBtn').addEventListener('click', saveAsPdf);