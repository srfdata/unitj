# Unitj

## A Google Sheets Add-On that helps journalists in compiling unified, consistent & constantly validated datasets.

With our Add-On to Google Sheets, we make Google Sheets *Journalism-compatible*. 

Features:

  * Define a master sheet with a data model (column names, types, restrictions, etc.) - *already implemented*
  * Select a source sheet on your Drive and integrate it into the master sheet - *already implemented* 
  * Warning console that helps you identify problems in your source sheets - *already implemented*
  * Split, merge, map source columns to master columns - *partially implemented*
  * **Graphical drag-and-drop** toolbox which makes the above operations easy & fun - *partially implemented, see mockup below*
  * Enforce column types & semantic consistency - will be implemented
  * Maintain uniqueness & traceability (IDs, timestamps, authors) - will be implemented
  * Save a lot of headaches & nervous breakdowns later on - *priceless*


Let's think of a **typical newsroom / data journalism workflow** where a dataset needs to be compiled from *many different sources*: 

A journalist wants to investigate payments of pharma companies to doctors (cf. "Dollars for Docs"). The journalist defines a *data model* for these payments. Each pharma company actually releases data that somehow fulfill this model, but in **very different structures** (different order of doctors' names, different column names, different address specification, etc. etc.) 

The journalist thinks it's a good idea to store all the collected source data - as it is not sensitive - in Google Sheets, so everyone in the newsroom can see the current status of the investigation and manually correct stuff. So he/she asks his/her co-workers to go and collect the source spreadsheets from pharma companies and store them on Google Drive.

With our tool, these journalists are then able to import/integrate their collected source sheets into one consistent master sheet that greatly helps them in cleaning their data and enforcing a certain data model. Why all of this? With a raw dataset that already has a consistent structure, it will be way easier later on to do further (automated) preprocessing, e.g. **deduplicating** companies' names, georeferencing adresses, and so forth. 

**Trust us**: We've been there and done that, many times. And we've lost many nerves. For example in our year-long investigation on vested interests of Swiss universities (http://srf.ch/uni) and others (http://srf.ch/data). We know that you can (theoretically) save a lot of time and when enforcing a certain structure during data collection. And that's why we build this tool.


![Mockup of the GUI toolbox](https://github.com/srfdata/unitj/blob/master/mockup.png)

### Target audience

Journalists who know Excel/Google Sheets and are familiar with collecting/editing small- to mid-size spreadsheet datasets. Not even data journalists, just "normal" journalists tasked with compiling a spreadsheet dataset. No programming skills needed! 

### Why Google Drive?

Because we all love Google? No. But we think that at this time, there's no better alternative for collaborative spreadsheet editing. 

For further explanation: see the [project pitch](https://docs.google.com/presentation/d/19EwH3JsTlw_bI91qs7AwSwCKOGAKykbNEpXrxitAwcQ/pub?start=false&loop=false&delayms=3000)

(test) master sheet: https://docs.google.com/spreadsheets/d/1rCezxcknkgLo6-19elDzhVRHMNvoR_iE4SlkgV6BVPI/edit?usp=sharing

## License

[MIT](https://opensource.org/licenses/MIT)
