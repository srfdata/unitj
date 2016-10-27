function getColumnNames() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  var lastColumn = sheet.getLastColumn();
  var range = sheet.getRange(1, 1, 1, lastColumn).getValues();
  return range[0];
}

function flushAllUserProperties() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteAllProperties();
}