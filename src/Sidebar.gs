function sidebar_show() {
  var html = HtmlService
      .createTemplateFromFile('SidebarTemplate')
      .evaluate()
      .setTitle('Column Properties')
      .setWidth(300);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function sidebar_getColumnArray() {
  var columnNames = getColumnNames();
  var documentProperties = PropertiesService.getDocumentProperties();
  var columnArray = [];
  for(var i=0; i<columnNames.length; i++) {
    var property = documentProperties.getProperty(columnNames[i]) || "";
    columnArray.push({
      name: columnNames[i],
      value: property
    });
  }
  return columnArray;
}

function sidebar_getDataTypes() {
  return ["int", "float", "string", "boolean"];
}

function sidebar_saveColumnProperties(values) {
  var documentProperties = PropertiesService.getDocumentProperties();
  var columnNames = getColumnNames();
  var properties = {};
  for(var i=0; i<values.length; i++){
    properties[columnNames[i]] = values[i];
  }
  documentProperties.setProperties(properties);
}