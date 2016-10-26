var workflow_currentColumn = "";

function workflow_showDialog(currentColumnName) {
  workflow_currentColumn = currentColumnName;
  var html = HtmlService
      .createTemplateFromFile('ColumnWorkflowDialog')
      .evaluate()
      .setWidth(500);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Define Workflow for ' + currentColumnName);
}

function workflow_getTargetColumn() {
  var userProperties = PropertiesService.getUserProperties();
  return userProperties.getProperty(workflow_currentColumn);
}

function workflow_saveTargetProperty(value) {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty(workflow_currentColumn, value);
}