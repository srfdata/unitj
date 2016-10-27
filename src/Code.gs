function onOpen() {

  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .createMenu('Unitj')
      .addItem('Define master sheet data model..', 'sidebar_show')
      .addItem('Import new source sheet...', 'importSource_showImportSourceSheetDialog')
      .addItem('DEVELOPMENT: Show console...', 'console_show')
      .addItem('DEVELOPMENT: Source Sheet Processing', 'processSource_showDialog')
      .addToUi();
}

/**
 * Gets the user's OAuth 2.0 access token so that it can be passed to Picker.
 * This technique keeps Picker from needing to show its own authorization
 * dialog, but is only possible if the OAuth scope that Picker needs is
 * available in Apps Script. In this case, the function includes an unused call
 * to a DriveApp method to ensure that Apps Script requests access to all files
 * in the user's Drive.
 *
 * @return {string} The user's OAuth 2.0 access token.
 */
function getOAuthToken() {
  DriveApp.getRootFolder();
  return ScriptApp.getOAuthToken();
}