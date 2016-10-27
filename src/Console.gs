function console_show() {
//  // TEST STUFF 
//    var userProperties = PropertiesService.getUserProperties();
//
//  // flush warnings
//  userProperties.deleteProperty('NEW_SOURCE_WARNINGS');
//  userProperties.deleteProperty('LOG');

  
  var html = HtmlService
      .createTemplateFromFile('ConsoleTemplate')
      .evaluate()
      .setTitle('Warnings')
      .setWidth(500);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showSidebar(html);
}

function console_getAllWarningsArray() {
  var documentProperties = PropertiesService.getDocumentProperties();
  var userProperties = PropertiesService.getUserProperties();
  

  if(userProperties.getProperty('NEW_SOURCE_WARNINGS') != undefined){
    var warningsArray = [];

    var importWarnings = JSON.parse(userProperties.getProperty('NEW_SOURCE_WARNINGS'));

    importWarnings.forEach(function(warningObject) {
      warningsArray.push('Import warning: ' + warningObject.warning + ' on line ' + warningObject.line + ' and/or column ' + warningObject.column);
    });
    return warningsArray;
  } else {
    return [];
  }
}
  

function console_logImportWarning(warning, line, column) {
  var newWarning = { 'warning': warning, 'line': line, 'column': column };
  var userProperties = PropertiesService.getUserProperties();
  

  var existingWarnings = [];
  if(userProperties.getProperty('NEW_SOURCE_WARNINGS') != undefined){
    existingWarnings =  JSON.parse(userProperties.getProperty('NEW_SOURCE_WARNINGS'));
   }
    
  existingWarnings.push(newWarning);
  
  userProperties.setProperty('NEW_SOURCE_WARNINGS', JSON.stringify(existingWarnings));

}

function console_getAllUserProperties() {
  var userProperties = PropertiesService.getUserProperties();
  
  return userProperties.getProperties();
}
 
function console_getAllDocumentProperties() {
  var documentProperties = PropertiesService.getDocumentProperties();
  
  return documentProperties.getProperties();
}

