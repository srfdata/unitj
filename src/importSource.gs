function importSource_showImportSourceSheetDialog() {
  var html = HtmlService.createHtmlOutputFromFile('ImportSourceSheet')
      .setWidth(800)
      .setHeight(600)
      .setSandboxMode(HtmlService.SandboxMode.IFRAME);

  SpreadsheetApp.getUi().showModalDialog(html, 'Import a new source sheet');
}

function importSource_saveSourceSheetImportID(id) {
  var userProperties = PropertiesService.getUserProperties();
        userProperties.setProperty('NEW_SOURCE_DOC_ID', id);

  // flush warnings
  userProperties.deleteProperty('NEW_SOURCE_WARNINGS');
 
}
