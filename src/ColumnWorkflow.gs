function workflow_showDialog(currentColumnName) {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty("CURRENT_COLUMN_NAME", currentColumnName);
  var html = HtmlService
      .createTemplateFromFile('ColumnWorkflowDialog')
      .evaluate()
      .setWidth(500);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Define Workflow for ' + currentColumnName);
}

function workflow_getTargetColumn() {
  var userProperties = PropertiesService.getUserProperties();
  var currentColumn = userProperties.getProperty("CURRENT_COLUMN_NAME");
  var props = JSON.parse(userProperties.getProperty("MAPPING"));
  if(props === null) {
    return null; 
  }
  return props[currentColumn];
}

function workflow_saveTargetProperty(value) {
  var userProperties = PropertiesService.getUserProperties();
  var currentColumn = userProperties.getProperty("CURRENT_COLUMN_NAME");
  var props = JSON.parse(userProperties.getProperty("MAPPING"));
  if (props === null) {
    props = {};
  }
  props[currentColumn] = value;
  userProperties.setProperty("MAPPING", JSON.stringify(props));
  processSource_showDialog();
}

function addProduct() {
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow(['Cotton Sweatshirt XL', 'css004']);
}