function operations_SplitOnFirst(stringToSplit, delimiter) {
 // trim string
 stringToSplit = stringToSplit.trim();
 // gives back an array of two (trimmed) strings
 var results = stringToSplit.split(delimiter, 2);
  if(results.length < 2){
    console_logImportWarning('Split resulted in less than two strings', 3, null);
  }
 return results;
}

function operations_Merge() {
  
}

function operations_logDummyErrors() {
    var userProperties = PropertiesService.getUserProperties();


  // test dummy
  var warningsArray =  [{'warning' : 'More than two splits', 
                          'line': 2323,
                         'column': null},
                         {'warning' : 'More than two splits', 
                          'line': 34,
                         'column': null},
                       {'warning' : 'Wrong data type', 
                          'line': null,
                         'column': 'Address'}];
  
    userProperties.setProperty('NEW_SOURCE_WARNINGS', JSON.stringify(warningsArray));

}