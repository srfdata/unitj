function onOpen() {
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('SRF Data Spreadsheet Tools')
      .addItem('Data Import', 'showImportSourceSheetDialog')
      .addItem('Properties', 'showSidebar')
      .addToUi();
}