function importSource_showImportSourceSheetDialog() {
    var html = HtmlService.createHtmlOutputFromFile('ImportSourceSheet')
        .setWidth(600)
        .setHeight(425)
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
    SpreadsheetApp.getUi().showModalDialog(html, 'Import a new source sheet');
}

function importSource_saveSourceSheetImportID(id) {
    var userProperties = PropertiesService.getUserProperties();
    userProperties.setProperty('NEW_SOURCE_DOC_ID', id);
}
