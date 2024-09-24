import { Injectable } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Load the fonts for pdfMake
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class ExportService {

  constructor() { }

  exportToPdf(data: any[]) {
    const documentDefinition = {
      content: [
        {
          table: {
            headerRows: 1,
            body: this.createTableBody(data)
          }
        }
      ]
    };
    pdfMake.createPdf(documentDefinition).download('export.pdf');
  }

  exportToExcel(data: any[]) {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout: XLSX.WorkBook = wb;
    const wboutArray = XLSX.write(wbout, { bookType: 'xlsx', type: 'array' });
    saveAs(new Blob([wboutArray], { type: 'application/octet-stream' }), 'export.xlsx');
  }

  /*  exportToExcel(data: any[]) {
        // Convierte los datos a formato de hoja de cálculo
        const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data, {
            //header: ['fechaCreacion'],
            //cellDates: true,
            //dateNF: 'DD-MM-YYYY',
        });

        // Crea un libro y añade la hoja
        const workbook: XLSX.WorkBook = { Sheets: { 'Sheet1': worksheet }, SheetNames: ['Sheet1'] };

        // Exporta el archivo
        XLSX.writeFile(workbook, 'export.xlsx');

  }*/

  private createTableBody(data: any[]): any[] {
    const body = [];
    if (data.length > 0) {
      // Add header
      body.push(Object.keys(data[0]));
    }
    // Add rows
    data.forEach(row => {
      body.push(Object.values(row));
    });
    return body;
  }
}
