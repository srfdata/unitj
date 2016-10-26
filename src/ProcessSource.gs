function processSource_showDialog() {
  var html = HtmlService
      .createTemplateFromFile('ProcessSourceDialog')
      .evaluate()
      .setWidth(500);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Process Source Sheet');
}

function processSource_getColumnsFromSourceSheet() {
  var id = "1q5Qz34hMYda3zhDmpk7sYxtL9T0XsCeMvCadpG9TcLg";
  /*var userProperties = PropertiesService.getUserProperties();
  userProperties.getProperty('NEW_SOURCE_DOC_ID'); */
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheets()[0];
  var lastColumn = sheet.getLastColumn();
  var range = sheet.getRange(1, 1, 1, lastColumn).getValues();
  return range[0];
}