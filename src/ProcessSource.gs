function processSource_showDialog() {
  var html = HtmlService
      .createTemplateFromFile('ProcessSourceDialog')
      .evaluate()
      .setWidth(800)
      .setHeight(600);
  SpreadsheetApp.getUi() // Or DocumentApp or FormApp.
      .showModalDialog(html, 'Process Source Sheet');
}

function processSource_getColumnsFromSourceSheet() {
  var id = "1q5Qz34hMYda3zhDmpk7sYxtL9T0XsCeMvCadpG9TcLg";
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('NEW_SOURCE_DOC_ID', id);
  id = userProperties.getProperty('NEW_SOURCE_DOC_ID');
  var ss = SpreadsheetApp.openById(id);
  var sheet = ss.getSheets()[0];
  var lastColumn = sheet.getLastColumn();
  var range = sheet.getRange(1, 1, 1, lastColumn).getValues();
  return range[0];
}

function processSource_import(graph) {
  var id = "1q5Qz34hMYda3zhDmpk7sYxtL9T0XsCeMvCadpG9TcLg";
  var userProperties = PropertiesService.getUserProperties();
  userProperties.setProperty('NEW_SOURCE_DOC_ID', id);
  id = userProperties.getProperty('NEW_SOURCE_DOC_ID');
  
  var source = SpreadsheetApp.openById(id);
  var sourceSheet = source.getSheets()[0];
  var lastColumn = sourceSheet.getLastColumn();
  var lastRow = sourceSheet.getLastRow();
  var main = SpreadsheetApp.getActiveSpreadsheet();
  var mainSheet = main.getActiveSheet();
  var mainLastColumn = mainSheet.getLastColumn();
  var sourceTitles = sourceSheet.getRange(1, 1, 1, lastColumn).getValues()[0];
  var mainTitles = mainSheet.getRange(1, 1, 1, mainLastColumn).getValues()[0];
  var sourceRange = sourceSheet.getRange(2, 1 , lastRow, lastColumn).getValues();
  var graph_copy = JSON.parse(JSON.stringify(graph));
  var operator_keys = Object.keys(graph_copy.operators);
  for(var i=0; i<sourceTitles.length;i++) {
    for(var k=0; k<operator_keys.length; k++) {
      if(graph_copy.operators[operator_keys[k]].type === 'source' && graph_copy.operators[operator_keys[k]].id === sourceTitles[i]) {
        var columnRange = sourceSheet.getRange(2,i+1,lastRow,i+1).getValues();
        graph_copy.operators[operator_keys[k]].output = columnRange;
      }
    }
  }
  var link_keys = Object.keys(graph_copy.links);
  for(var i=0; i<link_keys.length; i++) {
    var from = graph_copy.links[link_keys[i]].fromOperator;
    var to = graph_copy.links[link_keys[i]].toOperator;
    var toOperator = null;
    var fromOperator = null;
    for(var k=0; k<operator_keys.length; k++) {
      if(graph_copy.operators[operator_keys[k]].type === 'target' && operator_keys[k] === to) {
        toOperator = graph_copy.operators[operator_keys[k]];
      }
      if(graph_copy.operators[operator_keys[k]].type === 'source' && operator_keys[k] === from) {
        fromOperator = graph_copy.operators[operator_keys[k]];
      }
    }
    Logger.log(toOperator.id);
    Logger.log(fromOperator.id);
    toOperator.input = fromOperator.output;
  }
  
  for(var i=0; i<sourceRange[0].length;i++) {
    var newRow = [];
    for(var k=0; k<mainTitles.length;k++) {
      for(var s=0; s<operator_keys.length;s++) {
        if(mainTitles[k] === graph_copy.operators[operator_keys[s]].id && graph_copy.operators[operator_keys[s]].input!==undefined) {
          //Logger.log(JSON.stringify(graph_copy.operators[operator_keys[s]].input[i][0]));
          newRow.push(graph_copy.operators[operator_keys[s]].input[i][0])
          break;
        } else if(operator_keys.length-1 === s) {
          newRow.push("");
        }
      }
    }
    mainSheet.appendRow(newRow);
  }
  Logger.log(JSON.stringify(operator_keys));
  return "1";
}