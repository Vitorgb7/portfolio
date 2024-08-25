import { saveAs } from 'file-saver';
import Pdf from '../../../../../public/Currículo Vitor Gabriel Silva de Lima.pdf'



export const downloadCurriculumVitae = () => {
  const pdfUrl = Pdf;

  fetch(pdfUrl)
    .then(response => response.blob())
    .then(blob => {
      saveAs(blob, 'CV Vitor.pdf');
    })
    .catch(error => {
      console.error('Error downloading CV:', error);
    });
};