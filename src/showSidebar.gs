function showSidebar() {
  var html = HtmlService
      .createTemplateFromFile('Sidebar')
      .evaluate()
      .setTitle('Column Properties')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function getColumnNames() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var lastColumn = sheet.getLastColumn();
  var range = sheet.getRange(1, 1, 1, lastColumn).getValues();
  return range;
}

function saveColumnProperties(values) {
  var documentProperties = PropertiesService.getDocumentProperties();
  var columnNames = getColumnNames();
  var properties = {};
  for(var i=0; i<values.length; i++){
    properties[columnNames[i]] = values[i];
  }
  documentProperties.setProperties(properties);
}