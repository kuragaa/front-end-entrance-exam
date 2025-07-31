import html2pdf from 'html2pdf.js';

export function saveAsPdf() {
  const element = document.getElementById('portfolio-layout');

  const opt = {
    margin: 0,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { 
      scale: 2,
      useCORS: true
    },
    jsPDF: { 
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait' 
    }
  };

  html2pdf().set(opt).from(element).save();
}